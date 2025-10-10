import { ubuntu } from "@/app/layout"
import Link from "next/link"

export const HeroCta = () =>{
    return(
        <Link href="tel:+919876543210" className={`${ubuntu.className} text-sm inline-block rounded-[10px] text-[#b3cfe3] py-[11px] px-[30px] mt-[35px] bg-[#0a1931] shadow-lg transition-all duration-500 ease-in-out hover:text-[#0a1931] hover:bg-[#b3cfe3]`}>
            Let’s Talk
        </Link>
    )
}