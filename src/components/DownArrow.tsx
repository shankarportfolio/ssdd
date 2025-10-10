import { ubuntu } from "@/app/layout";
import { MoveDown } from "lucide-react";

export const DownArrow = () => {
    const handleScroll = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
      
        const targetId = (e.currentTarget.getAttribute("data-target") || "").replace("#", "");
        const targetElement = document.getElementById(targetId);
      
        if (targetElement) {
          const headerOffset = 70; // 👈 adjust this value (e.g., your navbar height)
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      };

    return (
        <div className="inline-block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[215px]">
        <h5 className={`${ubuntu.className} text-[14px] leading-[24px] text-[#0a1931] m-[0] mb-[25px] text-center`}>
            Let&apos;s get to know each other
        </h5>
        <div
            data-target="#services"
            className="w-[35px] h-[35px] block rounded-full border-2 border-[#0a1931] m-auto relative z-[999] cursor-pointer"
            onClick={handleScroll}
        >
            <MoveDown className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-90%] animate-bounce" />
        </div>
        </div>
    );
};
