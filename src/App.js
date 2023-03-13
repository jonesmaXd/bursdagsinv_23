import React from "react";
import Map from "./components/Map";
import PictureCard from "./components/PictureCard";
import Bakkis from "./pictures/baggis.jpg"
import Brian from "./pictures/brian.jpg"
import Gad from "./pictures/gad.jpg"

import PictureSection2 from "./components/PictureSection2";


function App() {
  return (
    <div className="container">
        <h1 className={"headlineText"}>HEI ESSETRYNE!!!</h1>
        <PictureSection2 />
        <Map />
    </div>
  );
}

export default App;
