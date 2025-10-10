import { ubuntu } from "@/app/layout"

type ServicesGridType = {
    children?: React.ReactNode,
    serviceLabel? : string
}

export const ServicesGrid = ({children, serviceLabel} : ServicesGridType) =>{
    return(
        <div className={`w-full px-[15px] py-[15px] rounded-[10px] bg-[#b3cfe3] shadow-lg flex items-center justify-center md:justify-start flex-wrap`}>
            <div className={`w-[100%] md:w-[15%] flex items-center justify-center mb-[15px] md:mb-[0]`}>
                {children}
            </div>
            <div className={`w-[100%] md:w-[85%] pl-[10px]`}>
                <h4 className={`${ubuntu.className} text-[14px] leading-[20px] md:text-[15px] md:leading-[25px] text-[#0a1931] m-[0] font-[400] text-center md:text-left`}>
                    {serviceLabel}
                </h4>
            </div>
        </div>
    )
}