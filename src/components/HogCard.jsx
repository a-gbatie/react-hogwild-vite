import { useState } from "react";

function HogCard({ hog, hideHog }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="ui card" aria-label="hog card">
      <div className="image" onClick={() => setIsFlipped(!isFlipped)}>
        <img src={hog.name} alt={`Photo of ${hog.name}`} />
      </div>

      {isFlipped ? (
        <div className="content">
          <h3>{hog.name}</h3>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight} lbs</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
      ) : (
        <div className="content">
          <h3>{hog.name}</h3>
        </div>
      )}

      <button className="ui button" onClick={() => hideHog(hog.name)}> Hide Me </button>
    </div>
  );
}

export default HogCard;
