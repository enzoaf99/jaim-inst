import Image from "next/image";
function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className={"container-fluid bg-transparent pt-3 pb-3"}>
                <div className={"d-flex justify-content-around align-items-center text-center"}>
                        <a href={"https://institutojaim.com/"}><Image src={"/images/LogoInstJaim.png"} alt={"Instituto Jaim"} width="30" height="15"></Image></a>
                        <p className={"text-secondary-emphasis m-0"} style={{fontSize:"12px"}}>Derechos reservados©{currentYear}</p>
                        <a className={"text-secondary-emphasis m-0"} href={"https://thing.com.ar/"} style={{fontSize:"12px"}}>ThingDev</a>
                </div>
            </footer>
        </>
    )
}

export default Footer