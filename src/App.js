import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  }, []);

  return (
    <>
      <div>
        {country &&
          country.map((card, index) => {
            const { flag, name, population, region, capital } = card;

            let populationNumber = population
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

            return (
              <div className="main">
                <div className="cards" key={index}>
                  <div className="cards_item">
                    <div className="card">
                      <img src={flag} alt="flag" />
                      <div className="card_container">
                        <h4>{name}</h4>
                        <p>
                          <b>Population:</b> {populationNumber}
                        </p>
                        <p>
                          <b>Region:</b> {region}
                        </p>
                        <p>
                          <b>Capital:</b> {capital}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <footer>
        <h3 className="made_by">Made with ♡ by Marina Almeida 2022</h3>
      </footer>
    </>
  );
}

export default App;
