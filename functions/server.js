// const axios = require("axios");
// const cheerio = require("cheerio");
// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());

// const teams = {
//     Suomi: [
//         "Christian Heljanko",
//         "Emil Larmi",
//         "Jussi Olkinuora",
//         "Ville Pokka",
//         "Olli Määttä",
//         "Mikko Lehtonen",
//         "Niklas Friman",
//         "Nikolas Matinpalo",
//         "Miika Koivisto",
//         "Mikael Seppälä",
//         "Atte Ohtamaa",
//         "Joel Armia",
//         "Marko Anttila",
//         "Waltteri Merelä",
//         "Hannes Björninen",
//         "Ahti Oksanen",
//         "Kasperi Kapanen",
//         "Sakari Manninen",
//         "Teemu Hartikainen",
//         "Antti Suomela",
//         "Jere Sallinen",
//         "Harri Pesonen",
//         "Kaapo Kakko",
//         "Juho Lammikko",
//         "Mikko Rantanen",
//     ],
//     Ruotsi: [
//         "Christian Heljanko",
//         "Emil Larmi",
//         "Jussi Olkinuora",
//         "Ville Pokka",
//         "Olli Määttä",
//         "Mikko Lehtonen",
//         "Niklas Friman",
//         "Nikolas Matinpalo",
//         "Miika Koivisto",
//         "Mikael Seppälä",
//         "Atte Ohtamaa",
//         "Joel Armia",
//         "Marko Anttila",
//         "Waltteri Merelä",
//         "Hannes Björninen",
//         "Ahti Oksanen",
//         "Kasperi Kapanen",
//         "Sakari Manninen",
//         "Teemu Hartikainen",
//         "Antti Suomela",
//         "Jere Sallinen",
//         "Harri Pesonen",
//         "Kaapo Kakko",
//         "Juho Lammikko",
//         "Mikko Rantanen",
//     ],
//     Kanada: [
//         "Christian Heljanko",
//         "Emil Larmi",
//         "Jussi Olkinuora",
//         "Ville Pokka",
//         "Olli Määttä",
//         "Mikko Lehtonen",
//         "Niklas Friman",
//         "Nikolas Matinpalo",
//         "Miika Koivisto",
//         "Mikael Seppälä",
//         "Atte Ohtamaa",
//         "Joel Armia",
//         "Marko Anttila",
//         "Waltteri Merelä",
//         "Hannes Björninen",
//         "Ahti Oksanen",
//         "Kasperi Kapanen",
//         "Sakari Manninen",
//         "Teemu Hartikainen",
//         "Antti Suomela",
//         "Jere Sallinen",
//         "Harri Pesonen",
//         "Kaapo Kakko",
//         "Juho Lammikko",
//         "Mikko Rantanen",
//     ],
//     Tsekki: [
//         "Christian Heljanko",
//         "Emil Larmi",
//         "Jussi Olkinuora",
//         "Ville Pokka",
//         "Olli Määttä",
//         "Mikko Lehtonen",
//         "Niklas Friman",
//         "Nikolas Matinpalo",
//         "Miika Koivisto",
//         "Mikael Seppälä",
//         "Atte Ohtamaa",
//         "Joel Armia",
//         "Marko Anttila",
//         "Waltteri Merelä",
//         "Hannes Björninen",
//         "Ahti Oksanen",
//         "Kasperi Kapanen",
//         "Sakari Manninen",
//         "Teemu Hartikainen",
//         "Antti Suomela",
//         "Jere Sallinen",
//         "Harri Pesonen",
//         "Kaapo Kakko",
//         "Juho Lammikko",
//         "Mikko Rantanen",
//     ],
//     Sveitsi: [
//         "Christian Heljanko",
//         "Emil Larmi",
//         "Jussi Olkinuora",
//         "Ville Pokka",
//         "Olli Määttä",
//         "Mikko Lehtonen",
//         "Niklas Friman",
//         "Nikolas Matinpalo",
//         "Miika Koivisto",
//         "Mikael Seppälä",
//         "Atte Ohtamaa",
//         "Joel Armia",
//         "Marko Anttila",
//         "Waltteri Merelä",
//         "Hannes Björninen",
//         "Ahti Oksanen",
//         "Kasperi Kapanen",
//         "Sakari Manninen",
//         "Teemu Hartikainen",
//         "Antti Suomela",
//         "Jere Sallinen",
//         "Harri Pesonen",
//         "Kaapo Kakko",
//         "Juho Lammikko",
//         "Mikko Rantanen",
//     ],
//     USA: [
//         "Christian Heljanko",
//         "Emil Larmi",
//         "Jussi Olkinuora",
//         "Ville Pokka",
//         "Olli Määttä",
//         "Mikko Lehtonen",
//         "Niklas Friman",
//         "Nikolas Matinpalo",
//         "Miika Koivisto",
//         "Mikael Seppälä",
//         "Atte Ohtamaa",
//         "Joel Armia",
//         "Marko Anttila",
//         "Waltteri Merelä",
//         "Hannes Björninen",
//         "Ahti Oksanen",
//         "Kasperi Kapanen",
//         "Sakari Manninen",
//         "Teemu Hartikainen",
//         "Antti Suomela",
//         "Jere Sallinen",
//         "Harri Pesonen",
//         "Kaapo Kakko",
//         "Juho Lammikko",
//         "Mikko Rantanen",
//     ],
// };

// function convertMonthToNumber(month) {
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     return months.indexOf(month);
// }

// app.get("/birthdate/:player", async (req, res) => {
//     const player = req.params.player;
//     const url = `https://www.eliteprospects.com/player/25321/${player}`;

//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);

//     const dateOfBirth = $(
//         ".ep-list__item--col-2 .col-xs-12.col-17.text-right.p-0.ep-text-color--black a"
//     ).text();
//     const [day, month, year] = dateOfBirth.split("/"); // split the date into parts

//     res.json({ day, month, year });
// });

// app.get("/biorhythms/:player", async (req, res) => {
//     const player = req.params.player;

//     // get the birth date first
//     const { day, month, year } = await axios
//         .get(`http://localhost:3000/birthdate/${player}`)
//         .then((response) => response.data);

//     // then use it to get biorhythms
//     const url = `https://www.astro.fi/future/biorhythms?pva=${day}&kk=${month}&vuosi=${year}`;

//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);

//     const fyysinen = $(
//         ".biorytmit-teksti table tr:nth-child(1) td:nth-child(2)"
//     ).text();
//     const tunne = $(
//         ".biorytmit-teksti table tr:nth-child(2) td:nth-child(2)"
//     ).text();
//     const aly = $(
//         ".biorytmit-teksti table tr:nth-child(3) td:nth-child(2)"
//     ).text();

//     res.json({ player, fyysinen, tunne, aly });
// });

// app.get('/biorhythms/:team', async (req, res) => {
//     const teamName = req.params.team;
//     const team = teams[teamName];
//     if (!team) {
//         res.status(404).send('Team not found');
//         return;
//     }

//     const result = {};

//     for (let player of team) {
//         try {
//             // get the birth date first
//             const birthdateResponse = await axios.get(`http://localhost:3000/birthdate/${player}`);
//             const { day, month, year } = birthdateResponse.data;

//             // then use it to get biorhythms
//             const url = `https://www.astro.fi/future/biorhythms?pva=${day}&kk=${month}&vuosi=${year}`;

//             const biorhythmsResponse = await axios.get(url);
//             const $ = cheerio.load(biorhythmsResponse.data);

//             const fyysinen = $('.biorytmit-teksti table tr:nth-child(1) td:nth-child(2)').text();
//             const tunne = $('.biorytmit-teksti table tr:nth-child(2) td:nth-child(2)').text();
//             const aly = $('.biorytmit-teksti table tr:nth-child(3) td:nth-child(2)').text();

//             result[player] = { fyysinen, tunne, aly };

//             // wait for a bit before the next request to avoid rate limits
//             await new Promise(resolve => setTimeout(resolve, 1000));
//         } catch (error) {
//             console.error(`Error fetching data for player ${player}: ${error.message}`);
//             result[player] = { error: error.message };
//         }
//     }

//     res.json(result);
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000.");
// });

// const axios = require("axios");
// const cheerio = require("cheerio");
// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());

// const teams = {
//     Suomi: {
//         "Christian Heljanko": { pva: "2", kk: "4", vuosi: "1997" },
//         "Emil Larmi": { pva: "28", kk: "9", vuosi: "1996" },
//         "Jussi Olkinuora": { pva: "4", kk: "11", vuosi: "1990" },
//         "Ville Pokka": { pva: "3", kk: "6", vuosi: "1994" },
//         "Olli Määttä": { pva: "22", kk: "8", vuosi: "1994" },
//         "Mikko Lehtonen": { pva: "16", kk: "1", vuosi: "1994" },
//         "Niklas Friman": { pva: "30", kk: "8", vuosi: "1993" },
//         "Nikolas Matinpalo": { pva: "5", kk: "10", vuosi: "1998" },
//         "Miika Koivisto": { pva: "20", kk: "7", vuosi: "1990" },
//         "Mikael Seppälä": { pva: "8", kk: "3", vuosi: "1994" },
//         "Atte Ohtamaa": { pva: "6", kk: "11", vuosi: "1987" },
//         "Joel Armia": { pva: "31", kk: "5", vuosi: "1993" },
//         "Marko Anttila": { pva: "27", kk: "5", vuosi: "1985" },
//         "Waltteri Merelä": { pva: "6", kk: "7", vuosi: "1998" },
//         "Hannes Björninen": { pva: "19", kk: "10", vuosi: "1995" },
//         "Ahti Oksanen": { pva: "10", kk: "3", vuosi: "1993" },
//         "Kasperi Kapanen": { pva: "23", kk: "7", vuosi: "1996" },
//         "Sakari Manninen": { pva: "10", kk: "2", vuosi: "1992" },
//         "Teemu Hartikainen": { pva: "3", kk: "5", vuosi: "1990" },
//         "Antti Suomela": { pva: "17", kk: "3", vuosi: "1994" },
//         "Jere Sallinen": { pva: "26", kk: "10", vuosi: "1990" },
//         "Harri Pesonen": { pva: "6", kk: "8", vuosi: "1988" },
//         "Kaapo Kakko": { pva: "13", kk: "2", vuosi: "2001" },
//         "Juho Lammikko": { pva: "29", kk: "1", vuosi: "1996" },
//         "Mikko Rantanen": { pva: "29", kk: "10", vuosi: "1996" },
//     },
//     Ruotsi: {
//         "Jesper Wallstedt": { pva: "14", kk: "11", vuosi: "2002" },
//         "Lars Johansson": { pva: "11", kk: "7", vuosi: "1987" },
//         "Jacob Johansson": { pva: "10", kk: "9", vuosi: "1993" },
//         "Henrik Tömmernes": { pva: "28", kk: "8", vuosi: "1990" },
//         "Patrik Nemeth": { pva: "8", kk: "2", vuosi: "1992" },
//         "Lukas Bengtsson": { pva: "14", kk: "4", vuosi: "1994" },
//         "Rasmus Sandin": { pva: "7", kk: "3", vuosi: "2000" },
//         "Anton Lindholm": { pva: "29", kk: "11", vuosi: "1994" },
//         "Jonathan Pudas": { pva: "26", kk: "4", vuosi: "1993" },
//         "Timothy Liljegren": { pva: "30", kk: "4", vuosi: "1999" },
//         "Pär Lindholm": { pva: "5", kk: "10", vuosi: "1991" },
//         "Dennis Everberg": { pva: "31", kk: "12", vuosi: "1991" },
//         "Marcus Sörensen": { pva: "7", kk: "4", vuosi: "1992" },
//         "André Petersson": { pva: "11", kk: "9", vuosi: "1990" },
//         "Leo Carlsson": { pva: "26", kk: "12", vuosi: "2004" },
//         "Lucas Raymond": { pva: "28", kk: "3", vuosi: "2002" },
//         "Oscar Lindberg": { pva: "29", kk: "10", vuosi: "1991" },
//         "Jakob Silfverberg": { pva: "13", kk: "10", vuosi: "1990" },
//         "Jonatan Berggren": { pva: "16", kk: "7", vuosi: "2000" },
//         "Fabian Zetterlund": { pva: "25", kk: "8", vuosi: "1999" },
//         "Linus Johansson": { pva: "30", kk: "11", vuosi: "1992" },
//         "Carl Grundström": { pva: "1", kk: "12", vuosi: "1997" },
//         "Jacob de la Rose": { pva: "20", kk: "5", vuosi: "1995" },
//         "Alexander Nylander": { pva: "2", kk: "3", vuosi: "1998" },
//     },
//     Kanada: {
//         "Christian Heljanko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Emil Larmi": { pva: "25", kk: "3", vuosi: "2018" },
//         "Jussi Olkinuora": { pva: "25", kk: "3", vuosi: "2018" },
//         "Ville Pokka": { pva: "25", kk: "3", vuosi: "2018" },
//         "Olli Määttä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikko Lehtonen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Niklas Friman": { pva: "25", kk: "3", vuosi: "2018" },
//         "Nikolas Matinpalo": { pva: "25", kk: "3", vuosi: "2018" },
//         "Miika Koivisto": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikael Seppälä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Atte Ohtamaa": { pva: "25", kk: "3", vuosi: "2018" },
//         "Joel Armia": { pva: "25", kk: "3", vuosi: "2018" },
//         "Marko Anttila": { pva: "25", kk: "3", vuosi: "2018" },
//         "Waltteri Merelä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Hannes Björninen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Ahti Oksanen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Kasperi Kapanen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Sakari Manninen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Teemu Hartikainen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Antti Suomela": { pva: "25", kk: "3", vuosi: "2018" },
//         "Jere Sallinen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Harri Pesonen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Kaapo Kakko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Juho Lammikko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikko Rantanen": { pva: "25", kk: "3", vuosi: "2018" },
//     },
//     Tsekki: {
//         "Christian Heljanko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Emil Larmi": { pva: "25", kk: "3", vuosi: "2018" },
//         "Jussi Olkinuora": { pva: "25", kk: "3", vuosi: "2018" },
//         "Ville Pokka": { pva: "25", kk: "3", vuosi: "2018" },
//         "Olli Määttä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikko Lehtonen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Niklas Friman": { pva: "25", kk: "3", vuosi: "2018" },
//         "Nikolas Matinpalo": { pva: "25", kk: "3", vuosi: "2018" },
//         "Miika Koivisto": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikael Seppälä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Atte Ohtamaa": { pva: "25", kk: "3", vuosi: "2018" },
//         "Joel Armia": { pva: "25", kk: "3", vuosi: "2018" },
//         "Marko Anttila": { pva: "25", kk: "3", vuosi: "2018" },
//         "Waltteri Merelä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Hannes Björninen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Ahti Oksanen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Kasperi Kapanen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Sakari Manninen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Teemu Hartikainen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Antti Suomela": { pva: "25", kk: "3", vuosi: "2018" },
//         "Jere Sallinen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Harri Pesonen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Kaapo Kakko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Juho Lammikko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikko Rantanen": { pva: "25", kk: "3", vuosi: "2018" },
//     },
//     Sveitsi: {
//         "Christian Heljanko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Emil Larmi": { pva: "25", kk: "3", vuosi: "2018" },
//         "Jussi Olkinuora": { pva: "25", kk: "3", vuosi: "2018" },
//         "Ville Pokka": { pva: "25", kk: "3", vuosi: "2018" },
//         "Olli Määttä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikko Lehtonen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Niklas Friman": { pva: "25", kk: "3", vuosi: "2018" },
//         "Nikolas Matinpalo": { pva: "25", kk: "3", vuosi: "2018" },
//         "Miika Koivisto": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikael Seppälä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Atte Ohtamaa": { pva: "25", kk: "3", vuosi: "2018" },
//         "Joel Armia": { pva: "25", kk: "3", vuosi: "2018" },
//         "Marko Anttila": { pva: "25", kk: "3", vuosi: "2018" },
//         "Waltteri Merelä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Hannes Björninen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Ahti Oksanen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Kasperi Kapanen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Sakari Manninen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Teemu Hartikainen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Antti Suomela": { pva: "25", kk: "3", vuosi: "2018" },
//         "Jere Sallinen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Harri Pesonen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Kaapo Kakko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Juho Lammikko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikko Rantanen": { pva: "25", kk: "3", vuosi: "2018" },
//     },
//     USA: {
//         "Christian Heljanko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Emil Larmi": { pva: "25", kk: "3", vuosi: "2018" },
//         "Jussi Olkinuora": { pva: "25", kk: "3", vuosi: "2018" },
//         "Ville Pokka": { pva: "25", kk: "3", vuosi: "2018" },
//         "Olli Määttä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikko Lehtonen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Niklas Friman": { pva: "25", kk: "3", vuosi: "2018" },
//         "Nikolas Matinpalo": { pva: "25", kk: "3", vuosi: "2018" },
//         "Miika Koivisto": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikael Seppälä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Atte Ohtamaa": { pva: "25", kk: "3", vuosi: "2018" },
//         "Joel Armia": { pva: "25", kk: "3", vuosi: "2018" },
//         "Marko Anttila": { pva: "25", kk: "3", vuosi: "2018" },
//         "Waltteri Merelä": { pva: "25", kk: "3", vuosi: "2018" },
//         "Hannes Björninen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Ahti Oksanen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Kasperi Kapanen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Sakari Manninen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Teemu Hartikainen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Antti Suomela": { pva: "25", kk: "3", vuosi: "2018" },
//         "Jere Sallinen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Harri Pesonen": { pva: "25", kk: "3", vuosi: "2018" },
//         "Kaapo Kakko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Juho Lammikko": { pva: "25", kk: "3", vuosi: "2018" },
//         "Mikko Rantanen": { pva: "25", kk: "3", vuosi: "2018" },
//     },
// };

// app.get("/biorhythms", async (req, res) => {
//     const result = {};

//     for (let team in teams) {
//         result[team] = {};

//         for (let player in teams[team]) {
//             const { pva, kk, vuosi } = teams[team][player];
//             const url = `https://www.astro.fi/future/biorhythms?pva=${pva}&kk=${kk}&vuosi=${vuosi}`;

//             const response = await axios.get(url);
//             const $ = cheerio.load(response.data);

//             const fyysinen = $(
//                 ".biorytmit-teksti table tr:nth-child(1) td:nth-child(2)"
//             ).text();
//             const tunne = $(
//                 ".biorytmit-teksti table tr:nth-child(2) td:nth-child(2)"
//             ).text();
//             const aly = $(
//                 ".biorytmit-teksti table tr:nth-child(3) td:nth-child(2)"
//             ).text();

//             result[team][player] = { fyysinen, tunne, aly };
//         }
//     }

//     res.json(result);
// });

// const port = 3000;
// app.listen(port, () =>
//     console.log(`Server running on http://localhost:${port}`)
// );



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
    Kanada: {
        "Christian Heljanko": { pva: "25", kk: "3", vuosi: "2018" },
        "Emil Larmi": { pva: "25", kk: "3", vuosi: "2018" },
        "Jussi Olkinuora": { pva: "25", kk: "3", vuosi: "2018" },
        "Ville Pokka": { pva: "25", kk: "3", vuosi: "2018" },
        "Olli Määttä": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikko Lehtonen": { pva: "25", kk: "3", vuosi: "2018" },
        "Niklas Friman": { pva: "25", kk: "3", vuosi: "2018" },
        "Nikolas Matinpalo": { pva: "25", kk: "3", vuosi: "2018" },
        "Miika Koivisto": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikael Seppälä": { pva: "25", kk: "3", vuosi: "2018" },
        "Atte Ohtamaa": { pva: "25", kk: "3", vuosi: "2018" },
        "Joel Armia": { pva: "25", kk: "3", vuosi: "2018" },
        "Marko Anttila": { pva: "25", kk: "3", vuosi: "2018" },
        "Waltteri Merelä": { pva: "25", kk: "3", vuosi: "2018" },
        "Hannes Björninen": { pva: "25", kk: "3", vuosi: "2018" },
        "Ahti Oksanen": { pva: "25", kk: "3", vuosi: "2018" },
        "Kasperi Kapanen": { pva: "25", kk: "3", vuosi: "2018" },
        "Sakari Manninen": { pva: "25", kk: "3", vuosi: "2018" },
        "Teemu Hartikainen": { pva: "25", kk: "3", vuosi: "2018" },
        "Antti Suomela": { pva: "25", kk: "3", vuosi: "2018" },
        "Jere Sallinen": { pva: "25", kk: "3", vuosi: "2018" },
        "Harri Pesonen": { pva: "25", kk: "3", vuosi: "2018" },
        "Kaapo Kakko": { pva: "25", kk: "3", vuosi: "2018" },
        "Juho Lammikko": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikko Rantanen": { pva: "25", kk: "3", vuosi: "2018" },
    },
    Tsekki: {
        "Christian Heljanko": { pva: "25", kk: "3", vuosi: "2018" },
        "Emil Larmi": { pva: "25", kk: "3", vuosi: "2018" },
        "Jussi Olkinuora": { pva: "25", kk: "3", vuosi: "2018" },
        "Ville Pokka": { pva: "25", kk: "3", vuosi: "2018" },
        "Olli Määttä": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikko Lehtonen": { pva: "25", kk: "3", vuosi: "2018" },
        "Niklas Friman": { pva: "25", kk: "3", vuosi: "2018" },
        "Nikolas Matinpalo": { pva: "25", kk: "3", vuosi: "2018" },
        "Miika Koivisto": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikael Seppälä": { pva: "25", kk: "3", vuosi: "2018" },
        "Atte Ohtamaa": { pva: "25", kk: "3", vuosi: "2018" },
        "Joel Armia": { pva: "25", kk: "3", vuosi: "2018" },
        "Marko Anttila": { pva: "25", kk: "3", vuosi: "2018" },
        "Waltteri Merelä": { pva: "25", kk: "3", vuosi: "2018" },
        "Hannes Björninen": { pva: "25", kk: "3", vuosi: "2018" },
        "Ahti Oksanen": { pva: "25", kk: "3", vuosi: "2018" },
        "Kasperi Kapanen": { pva: "25", kk: "3", vuosi: "2018" },
        "Sakari Manninen": { pva: "25", kk: "3", vuosi: "2018" },
        "Teemu Hartikainen": { pva: "25", kk: "3", vuosi: "2018" },
        "Antti Suomela": { pva: "25", kk: "3", vuosi: "2018" },
        "Jere Sallinen": { pva: "25", kk: "3", vuosi: "2018" },
        "Harri Pesonen": { pva: "25", kk: "3", vuosi: "2018" },
        "Kaapo Kakko": { pva: "25", kk: "3", vuosi: "2018" },
        "Juho Lammikko": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikko Rantanen": { pva: "25", kk: "3", vuosi: "2018" },
    },
    Sveitsi: {
        "Christian Heljanko": { pva: "25", kk: "3", vuosi: "2018" },
        "Emil Larmi": { pva: "25", kk: "3", vuosi: "2018" },
        "Jussi Olkinuora": { pva: "25", kk: "3", vuosi: "2018" },
        "Ville Pokka": { pva: "25", kk: "3", vuosi: "2018" },
        "Olli Määttä": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikko Lehtonen": { pva: "25", kk: "3", vuosi: "2018" },
        "Niklas Friman": { pva: "25", kk: "3", vuosi: "2018" },
        "Nikolas Matinpalo": { pva: "25", kk: "3", vuosi: "2018" },
        "Miika Koivisto": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikael Seppälä": { pva: "25", kk: "3", vuosi: "2018" },
        "Atte Ohtamaa": { pva: "25", kk: "3", vuosi: "2018" },
        "Joel Armia": { pva: "25", kk: "3", vuosi: "2018" },
        "Marko Anttila": { pva: "25", kk: "3", vuosi: "2018" },
        "Waltteri Merelä": { pva: "25", kk: "3", vuosi: "2018" },
        "Hannes Björninen": { pva: "25", kk: "3", vuosi: "2018" },
        "Ahti Oksanen": { pva: "25", kk: "3", vuosi: "2018" },
        "Kasperi Kapanen": { pva: "25", kk: "3", vuosi: "2018" },
        "Sakari Manninen": { pva: "25", kk: "3", vuosi: "2018" },
        "Teemu Hartikainen": { pva: "25", kk: "3", vuosi: "2018" },
        "Antti Suomela": { pva: "25", kk: "3", vuosi: "2018" },
        "Jere Sallinen": { pva: "25", kk: "3", vuosi: "2018" },
        "Harri Pesonen": { pva: "25", kk: "3", vuosi: "2018" },
        "Kaapo Kakko": { pva: "25", kk: "3", vuosi: "2018" },
        "Juho Lammikko": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikko Rantanen": { pva: "25", kk: "3", vuosi: "2018" },
    },
    USA: {
        "Christian Heljanko": { pva: "25", kk: "3", vuosi: "2018" },
        "Emil Larmi": { pva: "25", kk: "3", vuosi: "2018" },
        "Jussi Olkinuora": { pva: "25", kk: "3", vuosi: "2018" },
        "Ville Pokka": { pva: "25", kk: "3", vuosi: "2018" },
        "Olli Määttä": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikko Lehtonen": { pva: "25", kk: "3", vuosi: "2018" },
        "Niklas Friman": { pva: "25", kk: "3", vuosi: "2018" },
        "Nikolas Matinpalo": { pva: "25", kk: "3", vuosi: "2018" },
        "Miika Koivisto": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikael Seppälä": { pva: "25", kk: "3", vuosi: "2018" },
        "Atte Ohtamaa": { pva: "25", kk: "3", vuosi: "2018" },
        "Joel Armia": { pva: "25", kk: "3", vuosi: "2018" },
        "Marko Anttila": { pva: "25", kk: "3", vuosi: "2018" },
        "Waltteri Merelä": { pva: "25", kk: "3", vuosi: "2018" },
        "Hannes Björninen": { pva: "25", kk: "3", vuosi: "2018" },
        "Ahti Oksanen": { pva: "25", kk: "3", vuosi: "2018" },
        "Kasperi Kapanen": { pva: "25", kk: "3", vuosi: "2018" },
        "Sakari Manninen": { pva: "25", kk: "3", vuosi: "2018" },
        "Teemu Hartikainen": { pva: "25", kk: "3", vuosi: "2018" },
        "Antti Suomela": { pva: "25", kk: "3", vuosi: "2018" },
        "Jere Sallinen": { pva: "25", kk: "3", vuosi: "2018" },
        "Harri Pesonen": { pva: "25", kk: "3", vuosi: "2018" },
        "Kaapo Kakko": { pva: "25", kk: "3", vuosi: "2018" },
        "Juho Lammikko": { pva: "25", kk: "3", vuosi: "2018" },
        "Mikko Rantanen": { pva: "25", kk: "3", vuosi: "2018" },
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

