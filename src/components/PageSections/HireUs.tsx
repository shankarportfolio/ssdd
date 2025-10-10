"use client";
import HireUsForm from "../HireUsForm"
import { PageSection } from "../Section/PageSection"
import { SectionHeading } from "../SectionHeading"
import { SectionSubHeading } from "../SectionSubHeading"

export const HireUs = () =>{
    return(
        <PageSection sectionClasses={`px-[15px] xl:p-[0] relative mb-[65px]`} inDivClasses={`py-[75px] px-[15px] md:pt-[80px] md:pb-[90px] md:px-[30px] rounded-[20px] bg-[#e6f0f7]`}>
            <div className={`w-full`}>
                <SectionHeading>Enlist Your Dream Team Today!</SectionHeading>
                <SectionSubHeading>Your perfect team is just a few clicks away. Submit your details now.</SectionSubHeading>
                <HireUsForm />
            </div>
        </PageSection>
    )
}