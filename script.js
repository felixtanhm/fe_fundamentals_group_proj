function getJoke() {
        try {
            // Fetch the joke from the JokeAPI
            const response = fetch('https://v2.jokeapi.dev/joke/Any');
            const data = response.json();

            let jokeText = '';

            // Check if it's a single or two-part joke
            if (data.type === 'single') {
                jokeText = data.joke; // For single jokes
            } else {
                jokeText = `${data.setup} - ${data.delivery}`; // For two-part jokes
            }

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
