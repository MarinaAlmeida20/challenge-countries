import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState(null);
  const [toggle, setToggle] = useState("all");

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCountry(data);
      });
  }, []);

  return (
    <>
      <header className="App-header">
        <h2 className="title-header">Where in the world?</h2>
        <h5>Dark Mode</h5>
      </header>
      <div className="main-content">
        <section className="searchAndFilter">
          <input
            className="form-control"
            type="text"
            placeholder="Search for a country"
          />
          <div class="dropdown">
            <button
              className="btn btn-lg btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => setToggle("")}
            >
              Filter by Region
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setToggle("africa")}
              >
                Africa
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setToggle("america")}
              >
                America
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setToggle("asia")}
              >
                Asia
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setToggle("europe")}
              >
                Europe
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setToggle("oceania")}
              >
                Oceania
              </button>
            </div>
          </div>
        </section>
        <ul className="list">
          {country &&
            country.map((card, index) => {
              const { flag, name, population, region, capital } = card;

              const populationNumber = population
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

              return (
                <li
                  key={index}
                  className="card"
                  style={{ width: "18rem", margin: "10px 0 " }}
                >
                  <img className="card-img-top" src={flag} alt={name} />
                  <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">
                      <b>Population:</b> {populationNumber}
                    </p>
                    <p className="card-text">
                      <b>Region:</b> {region}
                    </p>
                    <p className="card-text">
                      <b>Capital:</b> {capital}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
        <footer>
          <h3 className="made_by">Made with ♡ by Marina Almeida 2022</h3>
        </footer>
      </div>
    </>
  );
}

export default App;
