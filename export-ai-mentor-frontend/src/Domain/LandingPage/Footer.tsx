import { IconBrandInstagram, IconBrandLinkedinFilled, IconBrandTwitterFilled, IconBrandYoutubeFilled } from "@tabler/icons-react";
import NavLinks from "./Header/NavLinks";

const Footer = () => {
    return (
        <div>
            <div className="flex bg-slate-800 text-slate-50">
                <div className="flex-col items-center justify-center p-15 font-semibold text-3xl w-[80%]">Join 10,000+ new exporters already simplifying their global trade journey.<br />
                    <div className="font-light text-2xl pt-3 text-slate-500">Get started today and transform your export business</div>
                </div>
                <div className="w-[30%] items-center justify-center pt-10">
                    <button className="bg-slate-50 shadow-2xl shadow-slate-950 backdrop-blur-md text-slate-950 h-15 w-50 rounded-lg p-2 hover:bg-slate-200">Start Now - It's Free</button>
                </div>
            </div>
            <div className=" bg-slate-950 text-slate-50 flex">
                <div className="w-[40%] p-15 flex-col pr-30">
                    <div className="text-2xl ">ExportMentor.AI</div>
                    <div className="pt-5 text-slate-400 hover:text-slate-50">Empowering businesses to succeed in global trade with AI-powered solutions.</div>
                    <div className="pt-5 text-slate-400 hover:text-slate-50">© 2025 ExportMentor.AI. All rights reserved.</div>
                </div>
                <div className="w-[35%] pt-15 pb-15 flex-col">
                    <div className="mx-40 pb-6">Quick Links</div>
                    <div className="flex-col mx-40 border-gray-300">
                     <NavLinks direction="vertical" />
                     </div>
                </div>
                <div className="w-[35%]">
                        <div className="mx-50 pt-15">Connect With Us</div>
                        <div className="flex gap-2 mx-50 pt-3 text-slate-400 [&>*]:cursor-pointer transition [&>*]:hover:text-slate-50"><IconBrandLinkedinFilled/><IconBrandInstagram/><IconBrandYoutubeFilled/><IconBrandTwitterFilled/></div>
                </div>
            </div>
        </div>
    );
}
export default Footer;