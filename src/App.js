import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCountry(data);
      });
  }, []);

  return (
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
  );
}

//  <footer>
//    <h3 className="made_by">Made with ♡ by Marina Almeida 2022</h3>
//  </footer>;

export default App;
