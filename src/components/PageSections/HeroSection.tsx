import { DownArrow } from "../DownArrow"
import { HeroText } from "../Section/HeroText"
import { PageSection } from "../Section/PageSection"
import HeroImage from '../../../public/assets/images/hero-image.png'
import Image from "next/image"
import { HeroCta } from "../HeroCta"

export const HeroSection = () =>{
    return(
        <PageSection sectionClasses={`relative`} inDivClasses={`pt-[130px] pb-[100px] md:pt-[210px] md:pb-[220px] px-[15px]`}>
            <div className={`w-full flex items-center justify-center flex-wrap flex-col-reverse md:flex-row`}>
                <div className={`w-[100%] md:w-[50%] md:pr-[35px]`}>
                    <HeroText />
                    <HeroCta />
                </div>
                <div className={`w-[100%] md:w-[50%] text-center mb-[40px] md:mb-[0]`}>
                    <Image src={HeroImage} alt="hero" className="m-auto h-auto"/>
                </div>
            </div>
            {/* <DownArrow /> */}
        </ PageSection>
    )
}