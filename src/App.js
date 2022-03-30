import "./App.css";
import React, { useState } from "react";
import GiphyList from "./components/GiphyList";
import NewButtonSearch from "./components/NewButtonSearch";
import ButtonSearch from "./components/ButtonSearch";

let animals = [
  "dog",
  "cat",
  "rabbit",
  "hamster",
  "skunk",
  "goldfish",
  "bird",
  "ferret",
  "turtle",
  "sugar glider",
  "chinchilla",
  "hedgehog",
  "hermit crab",
  "gerbil",
  "pygmy goat",
  "chicken",
  "capybara",
  "teacup pig",
  "salamander",
  "frog",
];


function App() {

  const [imageData, setImageData] = useState([]);
  const [buttonList, setNewButtonList] = useState(animals);

  const loadDataHandler = async (result) => {
    setImageData(result.data);
  };

  const addNewButton = (element) => {
    setNewButtonList((prevButtons) => {
      return [...prevButtons, element];
    });
    console.log(animals);
  };

  return (
    <div>
   {buttonList.map((animalName) => {
    return <ButtonSearch key={animalName} name={animalName} apiResult={loadDataHandler} />;
  })}
      <NewButtonSearch newButton={addNewButton} />
      <GiphyList imageData={imageData} />
    </div>
  );
}

export default App;
