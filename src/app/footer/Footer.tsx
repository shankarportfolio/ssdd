"use client";
import { useEffect, useState } from "react"
import { ubuntu } from "../layout"

export const Footer = () =>{

    const [copyYear, setCopyYear] = useState<number | null>(null);

    useEffect(() => {
    const date = new Date();
    const yearprint: number = date.getFullYear(); // returns a number
    setCopyYear(yearprint);
    }, []);

    return(
        <footer className={`w-full p-[20px] xl:pb-[20px] xl:pt-[0]`}>
            <div className={`w-[100%] xl:w-[1140px] m-[auto] bg-[#0a1931] rounded-[10px] py-[20px] px-[15px]`}>
                <p className={`${ubuntu.className} text-[10px] md:text-sm text-center text-white`}>Copyright © {copyYear} SSDD. All Rights Reserved.</p>
            </div>
        </footer>
    )
}