import Image from "next/image";
function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className={"container-fluid bg-black pt-1"}>
                <div className={"d-flex justify-content-around text-center"}>
                    <div>
                        <a href={"https://institutojaim.com/"}><Image src={"/images/LogoInstJaim.png"} alt={"Instituto Jaim"} width="60" height="30"></Image></a>
                    </div>
                    <div>
                        <p className={"text-light-emphasis"}>Derechos reservados©{currentYear}</p>
                    </div>
                    <div>
                        <a className={"text-light-emphasis"} href={"https://thing.com.ar/"}>ThingDev</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer