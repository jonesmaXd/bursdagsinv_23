// eslint-disable-next-line import/no-anonymous-default-export
export default function Map() {

    return (
        <section className={"center"}>
            <div className="destBox">
                <iframe id="map"
                        src="https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJMcKrRaLFFkYRGe56dyFsAgs&destination=place_id:ChIJqfx6Iri0FkYRLG-1Oi5Bt6I&key=AIzaSyDAxdfgRH_ZOFuCfjaFKECJWESiC0sdUPI"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    )

}