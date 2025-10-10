type PageSectionTypes = {
    children?: React.ReactNode,
    sectionClasses?: string,
    inDivClasses?: string,
    id?: string
}

export const PageSection = ({children, sectionClasses, inDivClasses, id} : PageSectionTypes)=>{
    return(
        <section className={`w-full ${sectionClasses}`} id={id}>
            <div className={`w-[100%] xl:w-[1140px] m-[auto] ${inDivClasses}`}>
                {children}
            </div>
        </section>
    )
}