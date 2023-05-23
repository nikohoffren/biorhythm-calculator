fetch("/.netlify/functions/server")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Here you can do something with the data returned from your function
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
