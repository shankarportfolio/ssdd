import { PageSection } from "../Section/PageSection"
import { ServicesList } from "../ServicesList"
import { SectionHeading } from "../SectionHeading"
import { SectionSubHeading } from "../SectionSubHeading"

export const AboutSection = () =>{
    return(
        <PageSection sectionClasses={`px-[15px] xl:p-[0] relative`} inDivClasses={`py-[75px] px-[15px] md:pt-[80px] md:pb-[90px] md:px-[30px] rounded-[20px] bg-[#e6f0f7]`} id="services">
            <div className={`w-full`}>
                <SectionHeading>We Build What You Imagine</SectionHeading>
                <SectionSubHeading>We build fast, secure, search-friendly websites and web apps for small businesses and startups — from one-page HTML sites to full WooCommerce stores, PHP apps, Python backends, and Power BI dashboards.</SectionSubHeading>
                <ServicesList />
            </div>
        </PageSection>
    )
}