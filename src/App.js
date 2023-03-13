import React from "react";
import Map from "./components/Map";
import PictureCard from "./components/PictureCard";
import Bakkis from "./pictures/baggis.jpg"
import Brian from "./pictures/brian.jpg"
import Gad from "./pictures/gad.jpg"
import PictureSection from "./components/PictureSection";


function App() {
  return (
    <div className="container">
        <h1 className={"headlineText"}>HEI ESSETRYNE!!!</h1>
        <PictureSection />
        <Map />
    </div>
  );
}

export default App;
