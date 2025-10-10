"use client";
import { AboutSection } from "../PageSections/AboutSection"
import { HeroSection } from "../PageSections/HeroSection"
import { HireUs } from "../PageSections/HireUs"
import { WhyUs } from "../PageSections/WhyUs"

export const LandingPage = () =>{
    return(
        <>
            <HeroSection />
            <AboutSection />
            <WhyUs />
            <HireUs />
        </>
    )
}