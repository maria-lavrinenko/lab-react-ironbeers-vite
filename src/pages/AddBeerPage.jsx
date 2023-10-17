import "./../App.css";
import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewers_tips = (e) => setBrewers_tips(e.target.value);
  const handleAttenuation = (e) => setAttenuation_level(e.target.value);
  const handleContributor = (e) => setContributed_by(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </div>

        <div>
          <label htmlFor="Tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={handleTagline}
          />
        </div>

        <div>
          <label htmlFor="Description">Description</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
        </div>

        <div>
          <label htmlFor="First Brewed">First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={firstBrewed}
            onChange={handleFirstBrewed}
          />
        </div>

        <div>
          <label htmlFor="Brewer's Tips">Brewer's Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={handleBrewers_tips}
          />
        </div>

        <div>
          <label htmlFor="Attenuation Level">Attenuation Level</label>
          <input
            type="number"
            name="brewers_tips"
            value={attenuation_level}
            onChange={handleAttenuation}
          />
        </div>

        <div>
          <label htmlFor="Contributed By">Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={handleContributor}
          />
        </div>

        <button>Add beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
