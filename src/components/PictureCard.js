import React from "react";

/**
 * A contact card on the frontpage, representing a person working for Røde kors.
 * @param props from the ContactSection component.
 * @returns {JSX.Element}
 * @constructor
 */
export default function PictureCard(props) {
    return(
        <article className={"center"} >
            <section className={"rakkersection"}>
                <h2 className={"rakkerText"}>{props.name}</h2>
                <img src={props.img} className="rakkerpic"  alt={"picture of rakker"}/>
                <h2 className={"rakkerText"}>{props.description}</h2>
            </section>
        </article>
    )
}