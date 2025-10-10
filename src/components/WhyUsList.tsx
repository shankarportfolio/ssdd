import { BarChart3, Code2, LifeBuoy, Zap } from "lucide-react"
import { WhyUsGrid } from "./WhyUsGrid"

export const WhyUsList = () =>{
    return(
        <div className={`w-full grid grid-cols-1 md:grid-cols-4 gap-[15px] md:gap-[20px] mt-[45px] md:mt-[55px]`}>
            <WhyUsGrid whyHeading="Fast, Optimized Websites" whySubHeading="We build mobile-first, lightning-fast websites with clean code, Core Web Vitals optimization, and SEO-ready structure to maximize conversions.">
                <Zap width={55} height={55} className={`text-[#0a1931]`} />
            </WhyUsGrid>
            <WhyUsGrid whyHeading="Custom Apps & Backends" whySubHeading="From PHP to Python (Flask/Django), we design and develop secure, scalable applications, APIs, and integrations tailored to your business.">
                <Code2 width={55} height={55} className={`text-[#0a1931]`} />
            </WhyUsGrid>
            <WhyUsGrid whyHeading="Data & Insights with Power BI" whySubHeading="Turn raw data into actionable insights with interactive dashboards, automated refresh, and custom KPIs for smarter decision-making.">
                <BarChart3 width={55} height={55} className={`text-[#0a1931]`} />
            </WhyUsGrid>
            <WhyUsGrid whyHeading="End-to-End Support" whySubHeading="From design to deployment, and maintenance to scaling, we provide reliable, ongoing support to keep your digital assets future-proof.">
                <LifeBuoy width={55} height={55} className={`text-[#0a1931]`} />
            </WhyUsGrid>
        </div>
    )
}