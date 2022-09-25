import React, { useState } from "react";
import "./styles.css";

const professionDictionary = {
  "👨🏼‍✈️": "Pilot",
  "👨🏼‍🔬": "Scientist",
  "👨🏻‍⚖️": "Judge",
  "👩🏻‍🍳": "Chef",
  "🕵🏼": "Detective",
  "👩🏻‍⚕️": "Doctor",
  "👨🏻‍🎨": "Painter",
  "👨🏻‍🚀": "Astronout",
  "👨🏻‍💻": "Computer-Engineer",
};

const professions = Object.keys(professionDictionary);

export default function App() {
  const [profession, setProfession] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputProfession = event.target.value;
    setProfession(inputProfession);

    if (inputProfession in professionDictionary) {
      setMeaning(professionDictionary[inputProfession]);
    } else {
      setMeaning("Professions not found!!");
    }
  }

  function onProfessionClick(inputProfession) {
    setMeaning(professionDictionary[inputProfession]);
  }

  return (
    <div className="App">
      <h1> Professions </h1>
      <h2>inside outttt </h2>
      <input
        onChange={changeHandler}
        value={profession}
        placeholder={"Search Your Profession "}
        style={{
          padding: "1em",
          minWidth: "80%",
        }}
      />
      <h2> {profession} </h2>
      <h3> {meaning} </h3>
      {professions.map((profession) => (
        <span
          onClick={() => onProfessionClick(profession)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {profession}{" "}
        </span>
      ))}
    </div>
  );
}
