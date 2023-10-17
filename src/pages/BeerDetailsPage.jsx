import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./../App.css";

function BeerDetailsPage() {
  const { beerId } = useParams();

  const [oneBeer, setOneBeer] = useState(null);

  const fetchOneBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );

      console.log(response.data);
      setOneBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOneBeer();
  }, [beerId]);

  if (!oneBeer) {
    return "Beer is being served...";
  }

  return (
    <>
      <div id="beer-card">
        <img
          style={{ width: "15%" }}
          src={oneBeer.image_url}
          alt="beer picture"
        />
        <div id="header">
          <div>
            <h1>{oneBeer.name}</h1>
            <h2>{oneBeer.tagline}</h2>
          </div>

          <div id="oneBeer-dates">
            <pre>{oneBeer.attenuation_level}</pre>
            <pre>{oneBeer.first_brewed}</pre>
          </div>
        </div>
        <div id="beer-description">
          <p>{oneBeer.description}</p>
          <p>{oneBeer.contributed_by}</p>
        </div>
      </div>
    </>
  );
}

export default BeerDetailsPage;
