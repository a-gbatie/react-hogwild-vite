import { useState } from "react";

function HogCard({ hog, hideHog }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="ui card" aria-label="hog card">
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ cursor: "pointer" }}
      >
        <div className="image">
          <img src={hog.image} alt={`Photo of ${hog.name}`} />
        </div>

        <div className="content">
          <h3>{hog.name}</h3>
        </div>
      </div>

      {isFlipped && (
        <div className="extra content">
          <p>Specialty: {hog.specialty}</p>
          <p>{hog.weight}</p>
          <p>{hog.greased ? "Greased" : "Not Greased"}</p>
          <p>{hog["highest medal achieved"]}</p>
        </div>
      )}

      <button
        className="ui button"
        onClick={() => hideHog(hog.name)}
      >
        Hide Me
      </button>
    </div>
  );
}

export default HogCard;