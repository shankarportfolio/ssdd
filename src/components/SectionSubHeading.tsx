import { ubuntu } from "@/app/layout"

export const SectionSubHeading = ({children} : {children?: React.ReactNode}) =>{
    return(
        <p className={`${ubuntu.className} text-[16px] leading-[26px] text-center text-[#1a3d63] font-[400] md:px-[60px]`}>{children}</p>
    )
}