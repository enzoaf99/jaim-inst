"use client"
import Footer from "@/src/component/oro/Footer";
import PreLoader from "@/src/component/botox/PreLoader";
import "../oro/style.css"
import Hero from "@/src/component/oro/Hero";
export default function Oro () {
    return(
        <>
            <PreLoader/>
            <Hero/>
            <Footer/>
        </>

    )
}