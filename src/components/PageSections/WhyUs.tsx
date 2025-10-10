import { PageSection } from "../Section/PageSection"
import { SectionHeading } from "../SectionHeading"
import { SectionSubHeading } from "../SectionSubHeading"
import { WhyUsList } from "../WhyUsList"

export const WhyUs = () =>{
    return(
        <PageSection sectionClasses={`py-[60px] md:py-[100px] relative`} inDivClasses={`px-[15px]`}>
            <div className={`w-full`}>
                <SectionHeading>Why Choose Us?</SectionHeading>
                <SectionSubHeading>We don't just build websites or apps — we engineer digital solutions that are fast, reliable, and built for growth. Whether it's a lightning-quick landing page, a custom backend, or a Power BI dashboard, we focus on performance, scalability, and long-term support.</SectionSubHeading>
                <WhyUsList />
            </div>
        </PageSection>
    )
}