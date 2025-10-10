import { ubuntu } from "@/app/layout"
import { Zap } from "lucide-react"

type WhyUsGridType = {
    children?: React.ReactNode,
    whyHeading?: string,
    whySubHeading?: string,
}

export const WhyUsGrid = ({children, whyHeading, whySubHeading} : WhyUsGridType) =>{
    return(
        <div className={`w-full py-[25px] md:py-[35px] px-[15px] rounded-[10px] shadow-lg bg-[#b3cfe3]`}>
            {children}
            <h4 className={`${ubuntu.className} text-[15px] leading-[24px] md:text-[16px] md:leading-[26px] mt-[20px] mb-[10px] text-[#0a1931] font-[500]`}>{whyHeading}</h4>
            <p className={`${ubuntu.className} text-[14px] leading-[24px] m-[0] text-[#1a3d63] font-[400]`}>{whySubHeading}</p>
        </div>
    )
}