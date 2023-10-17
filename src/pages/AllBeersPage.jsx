import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../App.css";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

  const fetchBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      const beers = response.data;
      console.log(response.data);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  if (!beers) {
    return "Beer is serving ...";
  }

  return (
    <>
      <div id="container">
        {beers.map((beer) => {
          const beercreator = beer.contributed_by;

          return (
            <div id="beerCard">
              <img style={{ width: "4%" }} src={beer.image_url} />

              <div id="beer-info">
                <h1>
                  <Link to={`/beers/${beer._id}`}> {beer.name}</Link>
                </h1>
                <h2>{beer.tagline}</h2>
                <article>
                  {/* Created by: {beercreator.substr(0, beercreator.indexOf("<"))} */}
                  Created by: {beercreator}
                </article>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllBeersPage;
