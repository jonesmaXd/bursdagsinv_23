import robAndJon from "../pictures/røbOgJønStryn.jpg";

export default function Headline() {
    return (
        <div className={"headlineContainer"}>
            <h1 className={"headlineText"} id={"fadeInFromLeft"}>HEI ESSETRYNE!!!</h1>
            <img src={robAndJon} className={"robAndJonPic"} id={"fadeInFromTop"}/>
            <h3 className={"headlineText"} id={"fadeInFromRight"}>Jøn og Røb inviterer til tidenes<br/> bursdagsfeiring på <strong>REKDAL</strong>! <br/>
                Datoen er <em>17.03.23 - 18.03.23</em><br/><br/>
            </h3>
            <h3 className={"headlineText"} id={"fadeInFromLeft"}>
                Ta med sovepose eller laken, <br/> din favoritt saft, flammenwerfer, en keeg fit, pocketpussy, tannbørste, ren bokser og hagle🍆 🍑 💦
            </h3>
        </div>
    )
}