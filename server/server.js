// server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user data
const users = [];

// Secret key for JWT
const JWT_SECRET = "your_jwt_secret";


app.post('/signup', async (req, res) => {
  const { email, password, homeCity } = req.body;

  // Check if user already exists
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add user to the mock database
  const user = { email, password: hashedPassword, homeCity };
  users.push(user);

  // Create JWT token
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

  res.status(201).json({ message: "User created", token });
});

// User Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ error: "Invalid email or password" });
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: "Invalid email or password" });
  }

  // Create JWT token
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ message: "Login successful", token });
});

// Protected Route
app.get('/profile', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    res.status(200).json({ message: `Hello, ${decoded.email}` });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
