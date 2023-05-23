const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");

const teams = {
    Suomi: {
        "Christian Heljanko": { pva: "2", kk: "4", vuosi: "1997" },
        "Emil Larmi": { pva: "28", kk: "9", vuosi: "1996" },
        "Jussi Olkinuora": { pva: "4", kk: "11", vuosi: "1990" },
        "Ville Pokka": { pva: "3", kk: "6", vuosi: "1994" },
        "Olli Määttä": { pva: "22", kk: "8", vuosi: "1994" },
        "Mikko Lehtonen": { pva: "16", kk: "1", vuosi: "1994" },
        "Niklas Friman": { pva: "30", kk: "8", vuosi: "1993" },
        "Nikolas Matinpalo": { pva: "5", kk: "10", vuosi: "1998" },
        "Miika Koivisto": { pva: "20", kk: "7", vuosi: "1990" },
        "Mikael Seppälä": { pva: "8", kk: "3", vuosi: "1994" },
        "Atte Ohtamaa": { pva: "6", kk: "11", vuosi: "1987" },
        "Joel Armia": { pva: "31", kk: "5", vuosi: "1993" },
        "Marko Anttila": { pva: "27", kk: "5", vuosi: "1985" },
        "Waltteri Merelä": { pva: "6", kk: "7", vuosi: "1998" },
        "Hannes Björninen": { pva: "19", kk: "10", vuosi: "1995" },
        "Ahti Oksanen": { pva: "10", kk: "3", vuosi: "1993" },
        "Kasperi Kapanen": { pva: "23", kk: "7", vuosi: "1996" },
        "Sakari Manninen": { pva: "10", kk: "2", vuosi: "1992" },
        "Teemu Hartikainen": { pva: "3", kk: "5", vuosi: "1990" },
        "Antti Suomela": { pva: "17", kk: "3", vuosi: "1994" },
        "Jere Sallinen": { pva: "26", kk: "10", vuosi: "1990" },
        "Harri Pesonen": { pva: "6", kk: "8", vuosi: "1988" },
        "Kaapo Kakko": { pva: "13", kk: "2", vuosi: "2001" },
        "Juho Lammikko": { pva: "29", kk: "1", vuosi: "1996" },
        "Mikko Rantanen": { pva: "29", kk: "10", vuosi: "1996" },
    },
    Ruotsi: {
        "Jesper Wallstedt": { pva: "14", kk: "11", vuosi: "2002" },
        "Lars Johansson": { pva: "11", kk: "7", vuosi: "1987" },
        "Jacob Johansson": { pva: "10", kk: "9", vuosi: "1993" },
        "Henrik Tömmernes": { pva: "28", kk: "8", vuosi: "1990" },
        "Patrik Nemeth": { pva: "8", kk: "2", vuosi: "1992" },
        "Lukas Bengtsson": { pva: "14", kk: "4", vuosi: "1994" },
        "Rasmus Sandin": { pva: "7", kk: "3", vuosi: "2000" },
        "Anton Lindholm": { pva: "29", kk: "11", vuosi: "1994" },
        "Jonathan Pudas": { pva: "26", kk: "4", vuosi: "1993" },
        "Timothy Liljegren": { pva: "30", kk: "4", vuosi: "1999" },
        "Pär Lindholm": { pva: "5", kk: "10", vuosi: "1991" },
        "Dennis Everberg": { pva: "31", kk: "12", vuosi: "1991" },
        "Marcus Sörensen": { pva: "7", kk: "4", vuosi: "1992" },
        "André Petersson": { pva: "11", kk: "9", vuosi: "1990" },
        "Leo Carlsson": { pva: "26", kk: "12", vuosi: "2004" },
        "Lucas Raymond": { pva: "28", kk: "3", vuosi: "2002" },
        "Oscar Lindberg": { pva: "29", kk: "10", vuosi: "1991" },
        "Jakob Silfverberg": { pva: "13", kk: "10", vuosi: "1990" },
        "Jonatan Berggren": { pva: "16", kk: "7", vuosi: "2000" },
        "Fabian Zetterlund": { pva: "25", kk: "8", vuosi: "1999" },
        "Linus Johansson": { pva: "30", kk: "11", vuosi: "1992" },
        "Carl Grundström": { pva: "1", kk: "12", vuosi: "1997" },
        "Jacob de la Rose": { pva: "20", kk: "5", vuosi: "1995" },
        "Alexander Nylander": { pva: "2", kk: "3", vuosi: "1998" },
    },
};

const app = express();
app.use(cors());

app.get('/.netlify/functions/server', async (req, res) => {
    const result = {};
    const promises = [];

    for (let team in teams) {
        result[team] = {};

        for (let player in teams[team]) {
            const { pva, kk, vuosi } = teams[team][player];
            const url = `https://www.astro.fi/future/biorhythms?pva=${pva}&kk=${kk}&vuosi=${vuosi}`;

            //* create a promise for each player and push it to our promises array
            promises.push(
                axios.get(url).then(response => {
                    const $ = cheerio.load(response.data);

                    const fyysinen = $(".biorytmit-teksti table tr:nth-child(1) td:nth-child(2)").text();
                    const tunne = $(".biorytmit-teksti table tr:nth-child(2) td:nth-child(2)").text();
                    const aly = $(".biorytmit-teksti table tr:nth-child(3) td:nth-child(2)").text();

                    //* directly assign the result for each player
                    result[team][player] = { fyysinen, tunne, aly };
                })
            );
        }
    }

    await Promise.all(promises);

    res.json(result);
});


module.exports.handler = serverless(app);

