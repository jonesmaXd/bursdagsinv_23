import {RAKKERS} from "../constants/rakkers";
import PictureCard from "./PictureCard";
import Bakkis from "../pictures/baggis.jpg"
import {useEffect, useState} from "react";

export default function PictureSection() {

    const rakkerList = [RAKKERS];

    let currentRakkerCount = 0;

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    function displayRakkers() {
        currentRakkerCount = count;
        let rakkerOnDisplay = rakkerList[currentRakkerCount]

        if (count === rakkerList.length) {
            currentRakkerCount = 0;
        }

        console.log(currentRakkerCount)
        console.log(rakkerOnDisplay[currentRakkerCount])
        console.log()


        return (
            <div>
                <PictureCard
                    name={rakkerOnDisplay[currentRakkerCount].name}
                    img={rakkerOnDisplay[currentRakkerCount].img}
                    description={rakkerOnDisplay[currentRakkerCount].description}
                    key={rakkerOnDisplay[currentRakkerCount].id}
                />
            </div>
        )
    }

    const rakkers = RAKKERS.map(rakker => (
        <PictureCard
            name={rakker.name}
            img={rakker.img}
            description={rakker.description}
            key={rakker.id}
        />
    ))


    return (
        <div>
            {displayRakkers()}
        </div>
    )
}