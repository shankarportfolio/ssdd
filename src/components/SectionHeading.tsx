import { ubuntu } from "@/app/layout"

export const SectionHeading = ({children} : {children?: React.ReactNode}) =>{
    return(
        <h2 className={`${ubuntu.className} text-[30px] leading-[40px] md:text-[35px] md:leading-[45px] text-center text-[#0a1931] font-[500] mb-[20px]`}>{children}</h2>
    )
}