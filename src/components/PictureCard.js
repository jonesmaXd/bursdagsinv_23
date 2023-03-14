import React from "react";
import Mag from "../pictures/epicmag.jpg"
import laughingemoji from "../pictures/laughingEmoji.png";

/**
 * A contact card on the frontpage, representing a person working for Røde kors.
 * @param props from the ContactSection component.
 * @returns {JSX.Element}
 * @constructor
 */

export default function PictureCard(props) {

    const showImage = () => {
        const image = document.getElementById('onClickImage');
        image.style.display = 'block';
    }

    return(
        <>
            <div className={"rakkerContainer"}>
                <div className={"center"} >
                    <section className={"elementToFadeInAndOut"}>
                        <h2 className={"rakkerheadline"}>{props.name}</h2>
                        <img src={props.img} onClick={showImage} className="rakkerpic"  alt={"picture of rakker"}/>
                        <h2 className={"rakkerText"}>{props.description}</h2>
                    </section>
                    {props.name === "Seb" && <img id={"laughingemoji"} className={"elementToFadeInAndOut"} src={laughingemoji}/>}
                    <img src={Mag} id="onClickImage" className={"moveToTopAndRotate"} alt={"MAG"} style={{ display: 'none' }}/>
                </div>
            </div>
        </>
    )
}