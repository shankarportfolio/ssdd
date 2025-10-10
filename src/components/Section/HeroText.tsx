import { ubuntu } from "@/app/layout"

export const HeroText = ()=>{
    return(
        <div className={`w-[100%] xl:w-[100%] m-[auto]`}>
            <h6 className={`${ubuntu.className} text-[16px] md:leading-[26px] md:text-[18px] md:leading-[28px] font-[400] text-[#0a1931]`}>Welcome to SSDD</h6>
            <h1 className={`${ubuntu.className} text-[35px] md:text-[45px] leading-[45px] md:leading-[55px] mt-[20px] mb-[0] font-[500] text-[#1a3d63]`}>You think we develop? <span className={`text-[#0a1931]`}>We build growth</span>.</h1>
        </div>
    )
}