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