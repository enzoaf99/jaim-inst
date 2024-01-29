import { useEffect } from "react";
import Image from "next/image";
import {preLoaderAnim} from "../../component/Animations";

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader">
            <div className="texts-container pt-5">
                <Image src={"/images/LogoDorado.png"} alt={"Metodos de pago"} width="100" height="45"></Image>
            </div>
        </div>
    );
};

export default PreLoader;