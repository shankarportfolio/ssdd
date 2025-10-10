import Link from "next/link"
import { FiraSans, ubuntu } from "../layout"

export const Header = () =>{
    return (
        <header className={`w-full px-[15px] py-[20px] fixed top-[0] left-[0] z-[999]`}>
            <div className={`w-[100%] xl:w-[1140px] m-[auto] bg-[#0a1931] rounded-[10px] py-[10px] px-[15px] xl:px-[15px]`}>
                <div className="flex items-center justify-between flex-wrap">
                    <Link href="/" className={`${FiraSans.className} w-[33.33%] text-[35px] text-white font-[800] italic`}>
                        SSDD
                    </Link>
                    <div className={`w-[33.33%]`}>

                    </div>
                    <div className={`w-[33.33%] flex items-center justify-end`}>
                        <Link href="tel:919876543210" className={`${ubuntu.className} text-[14px] leading-[24px] text-[#0a1931] py-[8px] px-[20px] md:px-[30px] text-center rounded-[10px] bg-[#b3cfe3] border border-solid border-[#b3cfe3] hover:bg-transparent hover:text-[#b3cfe3] transition-all duration-150 ease-in-out`}>Call Now</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
