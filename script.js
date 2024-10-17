function getJoke() {
        try {
            // Fetch the joke from the JokeAPI
            const response = fetch('https://v2.jokeapi.dev/joke/?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single');
            const data = response.json();

            let jokeText = data.joke;
            // Update the p tag with the joke
            document.getElementById('joke').innerText = jokeText;

        } catch (error) {
            console.error('Error fetching joke:', error);
            document.getElementById('joke').innerText = 'Failed to fetch a joke. Try again later!';
        }
    }

// Add event listener to the button
document.getElementById('getJokeBtn').addEventListener('click', () => {
        getJoke();
    });
