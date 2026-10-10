function HogCard({ hog }) {
    const imageName = hog.name.toLowerCase().replaceAll(" ", "_");
  return (
    <div className="ui card" aria-label="hog card">
      <div className="image">
        <img
          src={`/images/${imageName}.jpg`}
          alt={hog.name}
        />
      </div>

      <div className="content">
        <h3>{hog.name}</h3>
      </div>
    </div>
  );
}

export default HogCard;