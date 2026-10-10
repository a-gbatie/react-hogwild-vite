import { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";

import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);

  <div className="ui grid container">
    {hogs.map((hog) => (
      <div className="ui eight wide column" key={hog.name}>
        <HogCard hog={hog} />
      </div>
    ))}
  </div>;

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
