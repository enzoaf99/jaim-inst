"use client"
import PreLoader from "../../component/botox/PreLoader";
import Hero from "../../component/botox/Hero";
import JaimInfo from "../../component/botox/JaimInfo";
import Service1 from "../../component/botox/Service1";
import Who from "../../component/botox/Who";
import Offer from "../../component/botox/Offer";
import Footer from "../../component/botox/Footer";
import '../globals.css'

export default function botox(){
    return(
        <>
            <PreLoader/>
            <Hero/>
            <JaimInfo/>
            <Service1/>
            <Who/>
            <Offer/>
            <Footer/>
        </>
    )
}