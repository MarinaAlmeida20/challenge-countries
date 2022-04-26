import React, { useState, useEffect } from "react";

import countriesData from "./data/countries.json";
import "./App.css";

function App() {
  const regions = [...new Set(countriesData.map((country) => country.region))];
  const [countries, setCountries] = useState(countriesData);
  const [countriesFilter, setCountriesFilter] = useState("");
  const [regionsFilter, setRegionsFilter] = useState("Filter by Region");

  // console.log(countriesData);

  useEffect(() => {
    // console.log(countriesFilter);
    setCountries(
      countriesData.filter(
        (country) =>
          (regionsFilter === "Filter by Region" ||
            country.region
              .toLocaleLowerCase()
              .includes(regionsFilter.toLocaleLowerCase())) &&
          (countriesFilter === "" ||
            country.name
              .toLocaleLowerCase()
              .includes(countriesFilter.toLocaleLowerCase()))
      )
    );
  }, [regionsFilter, countriesFilter]);

  return (
    <>
      <header className="App-header">
        <h2 className="title-header">Where in the world?</h2>
      </header>
      <div className="main-content">
        <section className="searchAndFilter">
          <input
            className="form-control"
            type="search"
            placeholder="Search for a country"
            onChange={(e) => setCountriesFilter(e.target.value)}
          />

          <select onChange={(e) => setRegionsFilter(e.target.value)}>
            <option>Filter by Region</option>
            {regions.map((region) => (
              <option>{region}</option>
            ))}
          </select>
        </section>
        <Content content={countries} />
        <footer>
          <h3 className="made_by">Made with ♡ by Marina Almeida 2022</h3>
        </footer>
      </div>
    </>
  );
}

const Content = ({ content }) => {
  return (
    <ul className="list">
      {content &&
        content.map((card, index) => {
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
};

export default App;
