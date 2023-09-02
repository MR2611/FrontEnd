// Define constants for DOM elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const signupButton = document.getElementById('signup-button');

// Event listener for form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect user input
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Create an object with user data
    const userData = {
        username,
        password,
    };

    // Make an API request (you will need to replace this URL with your actual backend API URL)
    fetch('https://your-backend-api-url/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the API response here (e.g., display a message to the user)
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Event listener for the signup button
signupButton.addEventListener('click', () => {
    // Redirect or show a signup form/modal for new users (implement this as needed)
});
