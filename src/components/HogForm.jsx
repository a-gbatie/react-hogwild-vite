import { useState } from "react";

function HogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newHog = {
      ...formData,
      weight: Number(formData.weight),
      image: "/images/porco.png",
      "highest medal achieved": "",
    };

    addHog(newHog);

    setFormData({
      name: "",
      weight: "",
      specialty: "",
      greased: false,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Hog</h2>

      <label htmlFor="hog-name">Name:</label>
      <input
        id="hog-name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="hog-weight">Weight:</label>
      <input
        id="hog-weight"
        name="weight"
        type="number"
        value={formData.weight}
        onChange={handleChange}
        required
      />

      <label htmlFor="hog-specialty">Specialty:</label>
      <input
        id="hog-specialty"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
        required
      />

      <label htmlFor="hog-greased">Greased?</label>
      <input
        id="hog-greased"
        name="greased"
        type="checkbox"
        checked={formData.greased}
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
