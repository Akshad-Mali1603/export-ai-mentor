import { Indicator } from "@mantine/core";
import { IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";


const Header = () => {
    return (
        <div className="w-full bg-slate-950 h-28 p-6 text-cyan-50 flex justify-between items-center">
            <div className="flex bg-transparent rounded-full shadow-2xl">
                <img src="Export_Ai_logo.png" alt="Logo" className="w-22 h-auto" />
            </div>
            <div className="">
                <NavLinks/>
            </div>

            <div className="flex gap-3 items-center">
                <ProfileMenu/>
                <div className="bg-slate-800 p-1.5 rounded-full">
                    <IconSettings stroke={1.5} />
                </div>
                <div className="bg-slate-800 p-1.5 rounded-full">
                    <Indicator color="blue" offset={6} size={8} processing>
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>
            </div>
        </div>
    );
}
export default Header; 