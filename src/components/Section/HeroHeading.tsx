'use client';
import { PlayfairDisplay, raleway, ubuntu } from "../../app/layout"
import { motion } from "framer-motion";

export const HeroHeading = () =>{
    return(
        <h1 className={`${ubuntu.className} text-[65px] leading-[85px] mt-[20px] mb-[25px] font-[500] text-[$051f20] text-center`}>You think we develop? <span className={`text-[#235347]`}>We build growth</span>.</h1>
    )
}