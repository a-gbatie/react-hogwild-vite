import { useState } from "react";
import Nav from "./Nav";

import hogsData from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(hogsData);
	return (
		<div className="App">
			<Nav />
		</div>
	);
}

export default App;
