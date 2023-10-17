import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../App.css";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);
  const [newquery, setNewquery] = useState("");
  const [search, setSearch] = useState(null);
  const [searchOn, setSearchOn] = useState(false);

  const handleSearch = (e) => setNewquery(e.target.value);
  const fetchSearchResult = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${newquery}`
      );
      setSearch(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchActive = () => setSearchOn(true);

  useEffect(() => {
    fetchSearchResult();
    searchActive();
  }, [newquery]);

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
    return "Beer is being served ...";
  }

  if (!search) {
    return "";
  }

  return (
    <>
      <form>
        <fieldset>
          <legend>Search</legend>

          <input
            type="text"
            id="search"
            value={newquery}
            onChange={handleSearch}
          />
        </fieldset>
      </form>

      {searchOn
        ? search.map((beer) => {
            const beercreator = beer.contributed_by;
            console.log(beercreator);

            return (
              <div id="beerCard">
                <img style={{ width: "4%" }} src={beer.image_url} />

                <div id="beer-info">
                  <h1>
                    <Link to={`/beers/${beer._id}`}> {beer.name}</Link>
                  </h1>
                  <h2>{beer.tagline}</h2>
                  <article>
                    Created by:{" "}
                    {/* code for the cases in the inital lab iteration, where the string contains caracters <
                  
                  
                  {beercreator.includes("<")
                    ? beercreator.substr(0, beercreator.indexOf("<"))
                    : beercreator} */}
                    {beercreator}
                  </article>
                  <hr />
                </div>
              </div>
            );
          })
        : beers.map((beer) => {
            const beercreator = beer.contributed_by;
            console.log(beercreator);

            return (
              <div id="beerCard">
                <img style={{ width: "4%" }} src={beer.image_url} />

                <div id="beer-info">
                  <h1>
                    <Link to={`/beers/${beer._id}`}> {beer.name}</Link>
                  </h1>
                  <h2>{beer.tagline}</h2>
                  <article>
                    Created by:{" "}
                    {/* code for the cases in the inital lab iteration, where the string contains caracters <
                  
                  
                  {beercreator.includes("<")
                    ? beercreator.substr(0, beercreator.indexOf("<"))
                    : beercreator} */}
                    {beercreator}
                  </article>
                  <hr />
                </div>
              </div>
            );
          })}
    </>
  );
}

export default AllBeersPage;
