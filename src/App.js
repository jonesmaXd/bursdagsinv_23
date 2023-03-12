import React from "react";
import Map from "./components/map";
import PictureCard from "./components/pictureCard";
import Bakkis from "./pictures/baggis.jpg"
import Brian from "./pictures/brian.jpg"
import Gad from "./pictures/gad.jpg"

function App() {
  return (
    <div className="">
        <h1 className={"headlineText"}>HEI ESSETRYNE!!!</h1>
        <PictureCard name={"Bakis"} img={Bakkis} description={"Også kjent som Gayis"}  />
        <Map />
    </div>
  );
}

export default App;
