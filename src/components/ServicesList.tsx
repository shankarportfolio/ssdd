import { ServicesGrid } from "./ServicesGrid"
import { Activity, AppWindowMac, ChartColumnStacked, Code, FolderCode, Paintbrush, ShoppingCart, Wallpaper } from "lucide-react"

export const ServicesList = () =>{
    return(
        <div className={`w-full grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-[25px] mt-[40px] md:mt-[55px]`}>
            <ServicesGrid serviceLabel="New Site Development">
                <AppWindowMac className={`h-auto text-[#0a1931]`} width={25} height={25}/>
            </ServicesGrid>
            <ServicesGrid serviceLabel="Website Redesign">
                <Paintbrush className={`h-auto text-[#0a1931]`} width={25} height={25}/>
            </ServicesGrid>
            <ServicesGrid serviceLabel="WordPress CMS Websites">
                <Wallpaper className={`h-auto text-[#0a1931]`} width={25} height={25}/>
            </ServicesGrid>
            <ServicesGrid serviceLabel="WooCommerce Stores">
                <ShoppingCart className={`h-auto text-[#0a1931]`} width={25} height={25}/>
            </ServicesGrid>
            <ServicesGrid serviceLabel="Website Optimization">
                <Activity className={`h-auto text-[#0a1931]`} width={25} height={25}/>
            </ServicesGrid>
            <ServicesGrid serviceLabel="PHP Development">
                <FolderCode className={`h-auto text-[#0a1931]`} width={25} height={25}/>
            </ServicesGrid>
            <ServicesGrid serviceLabel="Python">
                <Code className={`h-auto text-[#0a1931]`} width={25} height={25}/>
            </ServicesGrid>
            <ServicesGrid serviceLabel="Power BI Dashboards">
                <ChartColumnStacked className={`h-auto text-[#0a1931]`} width={25} height={25}/>
            </ServicesGrid>
        </div>
    )
}