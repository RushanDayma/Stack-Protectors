let score = 0;

// DOM elements
const scoreDisplay = document.getElementById("score");
const locationButtons = document.querySelectorAll(".location");
const locationInfo = document.getElementById("locationInfo");
const resetButton = document.getElementById("resetGame");

// Location challenges and rewards
const challenges = {
    library: {
        description: "Find the hidden book to unlock bonus points!",
        points: 10
    },
    gym: {
        description: "Complete 5 push-ups to earn points!",
        points: 15
    },
    cafeteria: {
        description: "Identify the healthiest meal to get points.",
        points: 12
    },
    lab: {
        description: "Solve the science puzzle to advance!",
        points: 20
    }
};

// Update score display
function updateScore(points) {
    score += points;
    scoreDisplay.textContent = score;
}

// Handle location click
function handleLocationClick(event) {
    const location = event.target.getAttribute("data-location");
    const challenge = challenges[location];

    // Display challenge info
    locationInfo.innerHTML = `<h3>${challenge.description}</h3>
                              <button onclick="completeChallenge(${challenge.points})">Complete Challenge</button>`;
}

// Complete the challenge
function completeChallenge(points) {
    updateScore(points);
    locationInfo.innerHTML = "<p>Challenge completed! Points added to your score.</p>";
}

// Reset game
resetButton.addEventListener("click", () => {
    score = 0;
    updateScore(0);
    locationInfo.innerHTML = "<p>Game reset. Start a new adventure!</p>";
});

// Add event listeners to location buttons
locationButtons.forEach(button => {
    button.addEventListener("click", handleLocationClick);
});
