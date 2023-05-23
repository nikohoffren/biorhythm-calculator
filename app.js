fetch("/.netlify/functions/server")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        const style = document.createElement("style");
        style.innerHTML = `
      .min { color: red; }
      .max { color: green; }
    `;
        document.head.appendChild(style);

        const contentDiv = document.getElementById("content");

        for (let team in data) {
            let minValues = { fyysinen: 100, tunne: 100, aly: 100 };
            let maxValues = { fyysinen: 0, tunne: 0, aly: 0 };
            let fyysinenSum = 0;
            let tunneSum = 0;
            let alySum = 0;
            let playerCount = 0;

            for (let player in data[team]) {
                playerCount++;
                const playerData = data[team][player];

                //* parse percentages to numbers as soon as we get them
                playerData.fyysinen = playerData.fyysinen
                    ? parseFloat(playerData.fyysinen.replace("%", ""))
                    : 0;
                playerData.tunne = playerData.tunne
                    ? parseFloat(playerData.tunne.replace("%", ""))
                    : 0;
                playerData.aly = playerData.aly
                    ? parseFloat(playerData.aly.replace("%", ""))
                    : 0;

                fyysinenSum += playerData.fyysinen;
                tunneSum += playerData.tunne;
                alySum += playerData.aly;

                //* update min/max values
                minValues.fyysinen = Math.min(
                    minValues.fyysinen,
                    playerData.fyysinen
                );
                minValues.tunne = Math.min(minValues.tunne, playerData.tunne);
                minValues.aly = Math.min(minValues.aly, playerData.aly);

                maxValues.fyysinen = Math.max(
                    maxValues.fyysinen,
                    playerData.fyysinen
                );
                maxValues.tunne = Math.max(maxValues.tunne, playerData.tunne);
                maxValues.aly = Math.max(maxValues.aly, playerData.aly);
            }

            //* calculate averages
            const fyysinenAverage = (fyysinenSum / playerCount).toFixed(2);
            const tunneAverage = (tunneSum / playerCount).toFixed(2);
            const alyAverage = (alySum / playerCount).toFixed(2);

            contentDiv.innerHTML += `<h2>${team} (Fyysinen avg: ${fyysinenAverage}%, Tunne avg: ${tunneAverage}%, Aly avg: ${alyAverage}%)</h2><br />`;

            for (let player in data[team]) {
                const playerData = data[team][player];

                contentDiv.innerHTML += `<h3>${player}</h3>`;
                contentDiv.innerHTML += `<p>Fyysinen: <span class="${
                    playerData.fyysinen === minValues.fyysinen ? "min" : ""
                } ${playerData.fyysinen === maxValues.fyysinen ? "max" : ""}">${
                    playerData.fyysinen
                }%</span></p>`;
                contentDiv.innerHTML += `<p>Tunne: <span class="${
                    playerData.tunne === minValues.tunne ? "min" : ""
                } ${playerData.tunne === maxValues.tunne ? "max" : ""}">${
                    playerData.tunne
                }%</span></p>`;
                contentDiv.innerHTML += `<p>Aly: <span class="${
                    playerData.aly === minValues.aly ? "min" : ""
                } ${playerData.aly === maxValues.aly ? "max" : ""}">${
                    playerData.aly
                }%</span></p><br />`;
            }
        }
    })
    .catch((error) => {
        console.error(
            "There has been a problem with your fetch operation:",
            error
        );
    });
