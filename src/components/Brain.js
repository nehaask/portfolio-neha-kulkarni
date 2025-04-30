import React from "react";
import "/Users/nehask/Desktop/portfolio_react/my-portfolio/my-portfolio/src/App.css";

const data = {
  design: {
    total: 50,
    tools: {
      Photoshop: 30,
      Illustrator: 25,
      InDesign: 20,
      Flash: 10,
      Fireworks: 5,
      "Premiere Pro": 5,
      "After Effects": 5,
    },
  },
  coding: {
    total: 25,
    tools: {
      "(X)HTML": 30,
      CSS: 30,
      JavaScript: 20,
      PHP: 15,
      ActionScript: 5,
    },
  },
  games: {
    total: 25,
    tools: {
      SNES: 25,
      Wii: 25,
      "Nintendo DS": 20,
      PS2: 20,
      Other: 10,
    },
  },
};

const Brain = () => {
  return (
    <div className="container">
      <h1>What's in my head</h1>

      <div className="content">
        {/* Sidebar */}
        <div className="sidebar">
          {Object.entries(data).map(([category, info]) => (
            <div key={category} className="section">
              <strong>{category.toUpperCase()} {info.total}%</strong>
              <ul>
                {Object.entries(info.tools).map(([tool, percent]) => (
                  <li key={tool}>
                    {tool} <span>{percent}%</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brain image */}
        <div className="brain-container">
          <img src="/brain.png" alt="brain" className="brain-image" />
          <div className="brain-label" style={{ top: "30%", left: "30%" }}>
            (X)HTML
          </div>
        </div>
      </div>

      <p className="disclaimer">
        * The above shown graphic does not claim correctness in any kind of way.
      </p>
    </div>
  );
};

export default Brain;
