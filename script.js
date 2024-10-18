async function getJoke() {
  try {
    // Fetch the joke from the JokeAPI
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );
    const data = await response.json();

    let jokeText = data.joke;
    // Update the p tag with the joke
    document.getElementById("joke").innerText = jokeText;
  } catch (error) {
    console.error("Error fetching joke:", error);
    document.getElementById("joke").innerText =
      "Failed to fetch a joke. Try again later!";
  }

  // Replace button text after first button click
  document.getElementById("getJokeBtn").textContent = "Get another Joke";

  // Remove mascot image after first button click
  if (document.getElementById("paupoint")) {
    document.getElementById("paupoint").remove();
  }

  // Generate a number from 1 to 5 and set that image as the background
  let background = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  document.body.style.backgroundImage =
    "url('resources/" + background + ".jpg')";

  // Add 'active' class to section element if it has no such class
  const section = document.querySelector("section")
  if (!section.classList.contains("active")) {
      section.classList.add("active")
  }
}

// Add event listener to the button
document.getElementById("getJokeBtn").addEventListener("click", () => {
  getJoke();
});
