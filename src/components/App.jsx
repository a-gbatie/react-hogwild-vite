import { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import HogForm from "./HogForm";

import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  function addHog(newHog) {
	setHogs((previousHogs) => [...previousHogs, newHog]);
  }

  function hideHog(hogName) {
    const updatedHogs = hogs.filter((hog) => hog.name !== hogName);
    setHogs(updatedHogs);
  }

  const displayedHogs = hogs
    .filter((hog) => (greasedOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "weight") {
        return a.weight - b.weight;
      }
      return 0;
    });

  return (
    <div className="App">
      <Nav />
	  <HogForm addHog={addHog} />
      <div className="ui form">
        <div className="field">
          <label htmlFor="greased-filter">Greased Pigs Only?</label>

          <input
            id="greased-filter"
            type="checkbox"
            checked={greasedOnly}
            onChange={(event) => setGreasedOnly(event.target.checked)}
          />
        </div>

        <div className="field">
          <label htmlFor="sort-by">Sort by:</label>

          <select
            id="sort-by"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="">Default</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
      <div className="ui grid container">
        {displayedHogs.map((hog) => (
          <div className="ui eight wide column" key={hog.name}>
            <HogCard hog={hog} hideHog={hideHog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
