import "./style.css";
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

// show loading first
document.querySelector("#app").innerHTML = "<p>Loading...</p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    let media;

    // check image or video
    if (data.media_type === "image") {
      media = `<img src="${data.url}" />`;
    } else if (data.url.includes("youtube")) {
      media = `<iframe width="560" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
    } else {
      media = `<video src="${data.url}" controls></video>`;
    }

    // display everything
    document.querySelector("#app").innerHTML = `
      <h1>${data.title}</h1>
      ${media}
      <p>${data.explanation}</p>
    `;
  })
  .catch(err => {
    document.querySelector("#app").innerHTML = `<p>Error: ${err.message}</p>`;
  });