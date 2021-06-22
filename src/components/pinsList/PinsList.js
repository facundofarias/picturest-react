import { useEffect, useState } from "react";
import "./PinsList.css";
import PinCard from "../pinCard/PinCard";

const PinsList = () => {

  const [pins, setPins] = useState([]);
  const [refresh, setRefresh] = useState(1);
  const [pinName, setPinName] = useState();
  
  useEffect(() => {
    fetch("http://localhost:5001/api/pins")
      .then((response) => response.json())
      .then((json) => setPins(json))
      .catch((err) => console.log(err));
  }, [refresh]);

  const body = {
    name: pinName,
  }

  const createPin = () => {
    fetch("http://localhost:5001/api/pins", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((json) => setRefresh())
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <span className="pinsList__title">Pins</span>
      <div className="pinsList__container">
        {pins.map((pin) => (
          <PinCard pin={pin} key={pin.id} />
        ))}
      </div>
      <form>
        <input onChange={(event) => setPinName(event.target.value)}></input>
      <button onClick={() => createPin()}>Create</button>
      </form>
    </div>
  );
};

export default PinsList;
