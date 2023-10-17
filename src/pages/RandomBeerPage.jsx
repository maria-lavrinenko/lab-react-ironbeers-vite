import "./../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  const fetchRandomBeer = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(response.data);
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  if (!randomBeer) {
    return "Service in progress...";
  }
  return (
    <>
      <div id="beer-card">
        <img
          style={{ width: "15%" }}
          src={randomBeer.image_url}
          alt="beer picture"
        />
        <div id="header">
          <div>
            <h1>{randomBeer.name}</h1>
            <h2>{randomBeer.tagline}</h2>
          </div>

          <div id="oneBeer-dates">
            <pre>{randomBeer.attenuation_level}</pre>
            <pre>{randomBeer.first_brewed}</pre>
          </div>
        </div>
        <div id="beer-description">
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </div>
    </>
  );
}

export default RandomBeersPage;
