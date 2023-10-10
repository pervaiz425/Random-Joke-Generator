const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then(data => data.json())
    .then(item => {
      console.log(item);
      console.log(item.setup);
      jokeContainer.textContent = `${item.setup} ${item.delivery}`;
      jokeContainer.classList.add("fade");
    })
    .catch(err => console.log(err));
}

btn.addEventListener("click", getJoke);

getJoke();