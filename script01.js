// import chalk from "../node_modules/chalk/source/index.js";
// import ansiStyles from "../node_modules/chalk/source/vendor/ansi-styles/index.js";
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
// const url = "http://localhost:8888/joke";
const url = "https://randomjokegenerator-byumar.netlify.app/joke"

let jsonData; // Variable to store the loaded JSON data

// Function to load JSON data from a file
const loadJsonData = async () => {
  try {
    const response = await fetch("jokes.json");
    console.log(response);
    jsonData = await response.json();
    // console.log(jsonData);
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
};

// Function to get a joke
let getJoke = () => {
  jokeContainer.classList.remove("fade");

  if (!jsonData) {
    console.error("JSON data not loaded");
    //The proccess will not proceed further if the JSON data is not loaded
    return;
  }
  //The fetch() returns a promise. Thatswhy I am using then to resolve it first and then use the data
  fetch(url)
    .then(data => {
      //The data.json() returns a promise so we cannot use it directly
      // console.log(data.json());
      // console.log(data);
      //we cannot directly use the data.json() because it returns a promise
      const dataJson = data.json();
      console.log(dataJson);
      return dataJson;
    }
    )
    .then(item => {
      if (item.setup === undefined || item.delivery === undefined) {
        let random = Math.floor(Math.random() * jsonData.jokes.length);
        item.setup = jsonData.jokes[random][random + 1];
        item.delivery = "";
        console.log("%cUsing JSON data","color: pink; font-size: 16px");
      }
      jokeContainer.textContent = `${item.setup} ${item.delivery}`;
      console.log(`%c${item.setup} ${item.delivery}`, "color: pink; font-size: 16px");
``
      jokeContainer.classList.add("fade");
    })
    .catch(err => {
      console.error(`Error Code: ${err}`);
    });
};

// Event listener for the button click
btn.addEventListener("click", getJoke);

// Load JSON data and get an initial joke
loadJsonData().then(getJoke);
