import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Welcome to my website!");

  // Fetch data from the backend when the app loads
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message)) // Use the backend response
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>My Website</h1>
        <nav>
          <ul>
            <li><a href="#JOHN LUIS CARMEN">JOHN LUIS CARMEN</a></li>
            <li><a href="#BSCS 601">BSCS 601</a></li>
            <li><a href="#Programming Languages">Programming Languages</a></li>
            <li><a href="#Task Performance">Task Performance</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h2>{message}</h2>
        <button onClick={() => setMessage("Have a great day!")}>Click Me</button>
        <button onClick={() => setMessage("Welcome to my website!")}>Reset</button>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;