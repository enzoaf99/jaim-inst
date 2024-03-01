import { useEffect } from "react";
import {preLoaderAnim} from "../../component/Animations";

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader">
            <div className="texts-container pt-5">
                <img src="/images/LogoDorado.png" alt="Logo Dorado" width="100" height="45"/>
            </div>
        </div>
    );
};

export default PreLoader;