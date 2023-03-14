import React from "react";
import Map from "./components/Map";
import PictureCard from "./components/PictureCard";
import Bakkis from "./pictures/baggis.jpg"
import Brian from "./pictures/brian.jpg"
import Gad from "./pictures/gad.jpg"
import PictureSection2 from "./components/PictureSection2";
import Mag from "./pictures/epicmag.jpg";
import robAndJon from "./pictures/røbOgJønStryn.jpg"
import Headline from "./components/Headline";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container">
        <Headline />
        <PictureSection2 />
        <h1 className={"centerText"}>Du lurer kanske på: <br/><br/>
            <strong>Hvor faen er rekdal?</strong>
            <br/><br/>
            <strong>↓Her er et kart↓</strong>
        </h1>
        <Map />
        <Footer/>
    </div>
  );
}

export default App;
