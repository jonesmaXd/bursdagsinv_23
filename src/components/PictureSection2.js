import React, { useState, useEffect } from 'react';
import {RAKKERS} from "../constants/rakkers";
import PictureSection from "./PictureSection";
import PictureCard from "./PictureCard";

export default function PictureSection2() {
    const [rakkers, setRakkers] = useState(RAKKERS);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % rakkers.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [rakkers.length]);

    const currentRakker = rakkers[currentIndex];

    return (
        <div>
            <PictureCard
                name={currentRakker.name}
                img={currentRakker.img}
                description={currentRakker.description}
                key={currentRakker.id}
            />
        </div>
    );
}