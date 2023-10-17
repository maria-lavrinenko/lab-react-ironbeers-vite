import { Link } from "react-router-dom";
import newBeerImg from "./../assets/new-beer.png";
import beersImg from "./../assets/beers.png";
import randomBeerImg from "./../assets/random-beer.png";
import "./../App.css";

function HomePage() {
  return (
    <>
      <div className="homepage-div">
        <img src={randomBeerImg} alt="beers" />
        <h1>
          {" "}
          <Link to={"/beers"}>All Beers</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis
          accusamus impedit sint eveniet dolore maiores, quasi dolorem
          dignissimos in possimus deleniti perspiciatis excepturi fuga ex, non
          aut explicabo expedita?
        </p>
      </div>

      <div className="homepage-div">
        <img src={beersImg} alt="a beer" />
        <h1>
          <Link to={"/random-beer"}>Random Beer</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis
          accusamus impedit sint eveniet dolore maiores, quasi dolorem
          dignissimos in possimus deleniti perspiciatis excepturi fuga ex, non
          aut explicabo expedita?
        </p>
      </div>

      <div className="homepage-div">
        <img src={newBeerImg} alt="a new beer" />
        <h1>
          <Link to={"/new-beer"}>New Beer</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis
          accusamus impedit sint eveniet dolore maiores, quasi dolorem
          dignissimos in possimus deleniti perspiciatis excepturi fuga ex, non
          aut explicabo expedita?
        </p>
      </div>
    </>
  );
}

export default HomePage;
