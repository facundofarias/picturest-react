import { useEffect, useState } from "react";
import "./PinsList.css";
import PinCard from "../pinCard/PinCard";

const PinsList = () => {
  const [pins, setPins] = useState([]);

  const [formData, setFormData] = useState({
    title: undefined,
    author: undefined,
    description: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/pins")
      .then((response) => response.json())
      .then((json) => setPins(json));
  }, []);

  console.log(formData);

  return (
    <div>
      <span className="pinsList__title">Pins TEST 08/03!</span>
      <input
        name="title"
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
      />
      <input
        name="description"
        onChange={(event) => {
          setFormData({ ...formData, description: event.target.value });
        }}
      />
      <div className="pinsList__container">
        {pins.map((pin) => (
          <PinCard pin={pin} key={pin.id} />
        ))}
      </div>
    </div>
  );
};

export default PinsList;
