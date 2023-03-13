import {RAKKERS} from "../constants/rakkers";
import PictureCard from "./PictureCard";
import Bakkis from "../pictures/baggis.jpg"
import {useEffect, useState} from "react";

export default function PictureSection() {

    const rakkerList = RAKKERS;

    const [count, setCount] = useState(0);

    function handleCount() {
        if(count === rakkerList.length - 1) {
            console.log(count)
        } else {
            setCount(count => count + 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleCount()
            console.log(count)
        }, 5000);

        return () => clearInterval(interval);
    }, [count]);

    let rakkerOnDisplay = rakkerList[count]

    function displayRakkers() {

        return (
            <div>
                <PictureCard
                    name={rakkerOnDisplay.name}
                    img={rakkerOnDisplay.img}
                    description={rakkerOnDisplay.description}
                    key={rakkerOnDisplay.id}
                />
            </div>
        )
    }



    return (
        <div>
            {displayRakkers()}
        </div>
    )
}