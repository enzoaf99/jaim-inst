import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className={"container text-center pt-5"}>
                <div className={"row align-items-center justify-content-center"}>
                    <div className={"col-12"}>
                        <Image src={"/images/icon.png"} alt={"Instituto Jaim"} width="500" height="500"
                               style={{width: '110px', height: '110px'}}></Image>
                    </div>
                    <div className={"col-8"}>
                        <p className={"text-white fw-bold pt-4"}>@instituto_jaim</p>
                        <p className={"text-white fw-bold"}> 📍 NYC, LA, HTX, CHI, S. Florida</p>
                        <p className={"text-white fw-bold"}>Best Scalp Micropigmentation company w/ over 10,000
                            clients</p>
                    </div>
                    <div className={"col-8"}>
                        <div className={"row align-items-center justify-content-center"}>
                            <div className={"col-3 col-md-2 col-lg-1 col-xxl-1"}><a href={"https://www.instagram.com/instituto_jaim/"}><Image
                                src={"/images/Instagram.png"} alt={"Instagram"} width={40} height={40}/></a></div>

                            <div className={"col-3 col-md-2 col-lg-1 col-xxl-1"}><a href={"https://www.instagram.com/instituto_jaim/"}><Image
                                src={"/images/Web.png"} alt={"Web"} width={40} height={40}/></a></div>

                            <div className={"col-3 col-md-2 col-lg-1 col-xxl-1"}><a href={"https://www.instagram.com/instituto_jaim/"}><Image
                                src={"/images/Tiktok.png"} alt={"Tiktok"} width={40} height={40}/></a></div>

                            <div className={"col-3 col-md-2 col-lg-1 col-xxl-1"}><a href={"https://www.instagram.com/instituto_jaim/"}><Image
                                src={"/images/wpp.png"} alt={"Whatsapp"} width={40} height={40}/></a></div>
                        </div>
                    </div>
                </div>


                <div className={"row justify-content-center align-items-center"}>
                    <div className="col-sm-10 pt-4">
                        <video tabIndex="-1" className="video-stream html5-main-video" webkit-playsinline=""
                               playsInline="" controlsList="nodownload"
                               style={{width: "560px", height: "315px", left: "0px", top: "0px",}}
                               src="blob:https://www.youtube.com/Kutz0UJExSU"></video>
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/Kutz0UJExSU?rel=0&controls=0"
                                    title="YouTube video"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}