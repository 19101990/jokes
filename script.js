const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
  const cfg = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', cfg)
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
}
