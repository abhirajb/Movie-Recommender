import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const moviesDB = {
    Anime: [
      { name: "Naruto", rating: "4/5" },
      { name: "One-Piece", rating: "4.6/5" }
    ],

    Horror: [
      {
        name: "The Conjuring",
        rating: "4/5"
      },
      {
        name: "Annabelle",
        rating: "4.5/5"
      }
    ],
    Romance: [
      {
        name: "Titanic",
        rating: "4.5/5"
      },
      {
        name: "The Notebook",
        rating: "5/5"
      }
    ]
  };
  //console.log(bookDB.javascript[].rating);

  const [selectedGenre, setGenre] = useState("Anime");
  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "cyan" }}>🎥 Movies</h1>
      <p>{"Checkout my movie ratings.Click on the genre to get started"}</p>
      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {moviesDB[selectedGenre].map((movieName) => (
            <li
              key={movieName.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{movieName.name}</div>
              <div style={{ fontSize: "smaller" }}>{movieName.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
