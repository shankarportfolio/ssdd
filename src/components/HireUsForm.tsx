"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ubuntu } from "@/app/layout";

interface UserInput {
  name: string;
  email: string;
  phonenumber: string;
  message: string;
}

function HireUsForm() {
    const [userInput, setUserInput] = useState<UserInput>({
        name: "",
        email: "",
        phonenumber: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserInput((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

        try {
        const emailParams = {
            name: userInput.name,
            email: userInput.email,
            phonenumber: userInput.phonenumber,
            message: userInput.message,
        };

        const res = await emailjs.send(serviceID, templateID, emailParams, userID);

        if (res.status === 200) {
            toast.success("Message sent successfully!");
            setUserInput({ name: "", email: "", message: "", phonenumber: "" });
        }
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`w-[100%] md:w-[80%] m-auto grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[20px] mt-[45px] md:mt-[55px]`}>
            <div className={`w-[100%]`}>
                <label className={`${ubuntu.className} text-sm text-[#1a3d63] block mb-[5px]`}>Full Name <span className={`text-[#ff0000]`}>*</span></label>
                <input
                type="text"
                name="name"
                className={`${ubuntu.className} w-full text-sm text-[#0a1931] border-[2px] border-solid border-[#0a1931] px-[15px] py-[10px] rounded-[10px] outline-none shadow-none hover:outline-none hover:shadow-none focus:outline-none focus:shadow-none`}
                value={userInput.name}
                onChange={handleChange}
                required
                />
            </div>
            <div className={`w-[100%]`}>
                <label className={`${ubuntu.className} text-sm text-[#1a3d63] block mb-[5px]`}>Email ID <span className={`text-[#ff0000]`}>*</span></label>
                <input
                type="email"
                name="email"
                className={`${ubuntu.className} w-full text-sm text-[#0a1931] border-[2px] border-solid border-[#0a1931] px-[15px] py-[10px] rounded-[10px] outline-none shadow-none hover:outline-none hover:shadow-none focus:outline-none focus:shadow-none`}
                value={userInput.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className={`w-[100%]`}>
                <label className={`${ubuntu.className} text-sm text-[#1a3d63] block mb-[5px]`}>Phone Number <span className={`text-[#ff0000]`}>*</span></label>
                <input
                    type="tel"
                    name="phonenumber"
                    className={`${ubuntu.className} w-full text-sm text-[#0a1931] border-[2px] border-solid border-[#0a1931] px-[15px] py-[10px] rounded-[10px] outline-none shadow-none hover:outline-none hover:shadow-none focus:outline-none focus:shadow-none`}
                    value={userInput.phonenumber}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    required
                />
            </div>
            <div className={`w-[100%] col-span-1 md:col-span-3`}>
                <label className={`${ubuntu.className} text-sm text-[#1a3d63] block mb-[5px]`}>Message <span className={`text-[#ff0000]`}>*</span></label>
                <textarea
                    name="message"
                    className={`${ubuntu.className} w-full text-sm text-[#0a1931] border-[2px] border-solid border-[#0a1931] px-[15px] py-[10px] rounded-[10px] outline-none shadow-none hover:outline-none hover:shadow-none focus:outline-none focus:shadow-none resize-none h-[110px]`}
                    value={userInput.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={`w-[100%] col-span-1 md:col-span-3`}>
                <button type="submit" className={`${ubuntu.className} w-[200px] block text-sm text-center py-[11px] px-[20px] bg-[#0a1931] rounded-[10px] text-[#fff] m-auto outline-none shadow-none hover:outline-none hover:shadow-none focus:outline-none focus:shadow-none resize-none cursor-pointer hover:shadow-lg transition-all duration-150 ease-in-out border-[2px] border-solid border-[#0a1931] hover:bg-transparent hover:text-[#0a1931]`}>Send Message</button>
            </div>
        </form>
    );
}

export default HireUsForm;
