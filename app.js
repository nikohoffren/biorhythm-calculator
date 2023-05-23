fetch("/.netlify/functions/server")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const contentDiv = document.getElementById('content');

    //* iterate over the data and append it to the contentDiv
    for (let team in data) {
        let fyysinenSum = 0;
        let tunneSum = 0;
        let alySum = 0;
        let playerCount = 0;
        for (let player in data[team]) {
            playerCount++;
            const playerData = data[team][player];

            //* check if the property exists and if so, remove the percentage sign and parse it to a number
            fyysinenSum += playerData.fyysinen ? parseFloat(playerData.fyysinen.replace('%', '')) : 0;
            tunneSum += playerData.tunne ? parseFloat(playerData.tunne.replace('%', '')) : 0;
            alySum += playerData.aly ? parseFloat(playerData.aly.replace('%', '')) : 0;

            contentDiv.innerHTML += `<h3>${player}</h3>`;
            contentDiv.innerHTML += `<p>Fyysinen: ${playerData.fyysinen}</p>`;
            contentDiv.innerHTML += `<p>Tunne: ${playerData.tunne}</p>`;
            contentDiv.innerHTML += `<p>Aly: ${playerData.aly}</p>`;
        }

        const fyysinenAverage = (fyysinenSum / playerCount).toFixed(2);
        const tunneAverage = (tunneSum / playerCount).toFixed(2);
        const alyAverage = (alySum / playerCount).toFixed(2);

        contentDiv.innerHTML = `<h2>${team} (Fyysinen keskiarvo: ${fyysinenAverage}%, Tunne keskiarvo: ${tunneAverage}%, Aly keskiarvo: ${alyAverage}%)</h2>` + contentDiv.innerHTML;
    }
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
