import { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";

import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);

  function hideHog(hogName) {
    const updatedHogs = hogs.filter((hog) => hog.name !== hogName);
    setHogs(updatedHogs);
  }

  return (
    <div className="App">
      <Nav />
      <div className="ui grid container">
        {hogs.map((hog) => (
          <div className="ui eight wide column" key={hog.name}>
            <HogCard hog={hog} hideHog={hideHog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
