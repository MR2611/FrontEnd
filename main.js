const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Dummy user data for demonstration (Replace with database)
const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: 'password123',
  },
  {
    id: 2,
    email: 'anotheruser@example.com',
    password: 'letmein',
  },
];

app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the user with the provided email exists
  const user = users.find((user) => user.email === email);

  if (!user) {
    // User not found
    return res.status(404).json({ message: 'User not found' });
  }

  // Check if the password matches
  if (user.password !== password) {
    // Incorrect password
    return res.status(401).json({ message: 'User not authorized' });
  }

  // Password matches, login successful
  return res.json({ message: 'User login successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
