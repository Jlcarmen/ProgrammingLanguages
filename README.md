# ProgrammingLanguages

# Video presentation canva 
https://drive.google.com/drive/folders/1jaYbDAervOVUxcFyJmmwHQlTTeooOs1V

https://www.canva.com/design/DAGfzeKOqbA/xxW-1M6CReJSS43jLgWO9A/view?utm_content=DAGfzeKOqbA&utm_campaign=designshare&utm_medium=link&utm_source=recording_view


Code Snippets

# Backend - server.js
This sets up an Express server with GET and POST routes.


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error(err));

// Define Routes
app.get("/api", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

// POST Route
app.post("/api/message", (req, res) => {
    const { text } = req.body;
    res.json({ received: text });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




# Frontend - App.jsx
A simple React app that fetches data from the backend and sends a POST request.

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Welcome to my website!");
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message));
  }, []);

  const sendMessage = async () => {
    const response = await fetch("http://localhost:5000/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "Hello from frontend!" })
    });
    const data = await response.json();
    setMessage(data.received);
  };

  return (
    <div>
      <header className="header">
        <h1>My Website</h1>
        <nav>
          <ul>
            <li><a href="#John">John Luis Carmen</a></li>
            <li><a href="#BSCS">BSCS 601</a></li>
            <li><a href="#Programming">Programming Languages</a></li>
            <li><a href="#Task">Task Performance</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <h2>{message}</h2>
        <h3>Backend Response: {backendMessage}</h3>
        <button onClick={sendMessage}>Send Message to Backend</button>
        <button onClick={() => setMessage("Welcome to my website!")}>Reset</button>
      </main>

      <footer className="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;




# Running the Project
Start Backend:
cd backend
npm run dev

Start Frontend:
cd frontend
npm run dev

This ensures my React app communicates properly with my Node.js backend.





