import { Card, Group, Progress} from "@mantine/core";
import { IconBookmark, IconBrandLinkedinFilled, IconCheck, IconExclamationCircleFilled, IconFileInvoice, IconFlag2Filled, IconHeadset, IconInfoTriangleFilled, IconMailFilled, IconMessageChatbot, IconShip, IconUserPlus, IconWorld } from "@tabler/icons-react";

const BuyersListCards = () => {
    
        "Domain is very new"
        "No online presence"
        "Gmail domain"
  
    return (
        <div className="flex gap-7 items-center justify-center">
            <div className="shadow-2xl shadow-slate-400 backdrop-blur-3xl text-slate-950 rounded-2xl w-fit my-10 flex-col flex justify-center  hover:bg-slate-100 hover:translate-y-3 duration-300 transition ease-in-out p-10 bg-slate-50">
                <div className="flex justify-between items-start p-2">
                    <div className="flex items-center gap-2 text-lg font-medium">
                        <IconCheck className="text-green-600 rounded-2xl p-0.5 bg-slate-300" size={30} />
                        Buyer Verified</div>
                    <div className="rounded-2xl px-3 text-sm font-extralight bg-slate-200">Company Name</div>
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-20 mt-4 items-center p-2">
                    <div className="p-2 flex gap-2 items-start">
                        <IconWorld size={22} className="text-slate-600" />
                        <div className="">
                            <div className="text-sm">Domain Age</div>
                            <div className="text-sm">Registered 2017 (7 years old) ✅</div>
                        </div>
                    </div>
                    <div className="p-2 flex gap-2 items-start">
                        <IconBrandLinkedinFilled size={22} className="text-slate-600" />
                        <div className="">
                            <div className="text-sm">LinkedIn Presence</div>
                            <div className="text-sm">Found – 52 employees ✅</div>
                        </div>
                    </div><div className="p-2 flex gap-2 items-start">
                        <IconMailFilled size={22} className="text-slate-600" />
                        <div className="">
                            <div className="text-sm">Email Check</div>
                            <div className="text-sm">Domain matches company ✅</div>
                        </div>
                    </div><div className="p-2 flex gap-2 items-start">
                        <IconShip size={22} className="text-slate-600" />
                        <div className="">
                            <div className="text-sm">Import History</div>
                            <div className="text-sm">Found (UAE imports mangoes) ✅</div>
                        </div>
                    </div>
                </div>


                <div className="flex grid-cols-2 items-center">
                    <div className="flex-col items-center gap-3 p-2 mr-20">
                        <div className="px-2">Risk Score</div>
                        <div className="flex items-center gap-2 p-2">
                            <Progress color="black" value={12} className="w-40" />
                            <div>
                                12% Risk (Safe)
                            </div>
                        </div>
                    </div>
                    <div className="ml-20">
                        <div>Confidence Level</div>
                        <div>Safe Buyer – Verified</div>
                    </div>
                </div>

                <div>
                    <Group grow mt="lg" className="[&>button]:flex 
                    [&>button]:gap-x-2 
                    [&>button]:items-center 
                    [&>button]:rounded 
                    [&>button]:border 
                    [&>button]:border-slate-500 
                    [&>button]:px-3 
                    [&>button]:py-1 
                    [&>button]:shadow-sm 
                    [&>button]:shadow-slate-400 
                    [&>button]:backdrop-blur-sm
                 [&>button]:hover:bg-slate-200">
                        <button className=" "><IconUserPlus size={20} />
                            Save to Contacts
                        </button>
                        <button className=" "><IconFileInvoice size={20} />
                            Generate Invoice
                        </button>
                        <button className=" "><IconMessageChatbot size={20} />
                            Ask Mentor Opinion
                        </button>
                    </Group>
                </div>
            </div>


            <div className="shadow-2xl shadow-slate-400 backdrop-blur-3xl text-slate-950 rounded-2xl w-fit my-10 flex-col flex justify-center hover:bg-slate-100 hover:translate-y-3 duration-300 transition ease-in-out p-10 bg-slate-50">
                <div className="flex justify-between items-start p-2">
                    <div className="flex items-center gap-2 text-lg font-medium">
                        <IconInfoTriangleFilled className="text-red-600 rounded-2xl p-1 bg-slate-300" size={30} />
                        Buyer May Be Risky</div>
                    <div className="rounded-2xl px-3 text-sm font-extralight bg-slate-200">Company Name</div>
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-20 mt-4 items-center p-2">
                    <div className="p-2 flex gap-2 items-start">
                        <IconWorld size={22} className="text-slate-600" />
                        <div className="">
                            <div className="text-sm">Domain Age</div>
                            <div className="text-sm">Registered 2017 (7 years old) ✅</div>
                        </div>
                    </div>
                    <div className="p-2 flex gap-2 items-start">
                        <IconBrandLinkedinFilled size={22} className="text-slate-600" />
                        <div className="">
                            <div className="text-sm">LinkedIn Presence</div>
                            <div className="text-sm">Found – 52 employees ⛔</div>
                        </div>
                    </div><div className="p-2 flex gap-2 items-start">
                        <IconMailFilled size={22} className="text-slate-600" />
                        <div className="">
                            <div className="text-sm">Email Check</div>
                            <div className="text-sm">Domain matches company ⛔</div>
                        </div>
                    </div><div className="p-2 flex gap-2 items-start">
                        <IconShip size={22} className="text-slate-600" />
                        <div className="">
                            <div className="text-sm">Import History</div>
                            <div className="text-sm">Found (UAE imports mangoes) ⛔</div>
                        </div>
                    </div>
                </div>

                <div className="flex grid-cols-2 items-center">
                    <div className="flex-col items-center gap-3 p-2 mr-20">
                        <div className="px-2">Risk Score</div>
                        <div className="flex items-center gap-2 p-2">
                            <Progress color="black" value={75} className="w-40" />
                            <div>
                                75% Risk (High)
                            </div>
                        </div>
                    </div>
                    <div className="ml-20">
                        <div>Confidence Level</div>
                        <div>Red Flags Found – Use Caution</div>
                    </div>
                </div>


                <div className="">
                    <Card
                        className="overflow-y-auto items-baseline gap-0.5"
                    ><div className="bg-slate-100 p-2 w-full">
                        <text className="font-medium flex items-center p-1"><IconFlag2Filled/> Red Flag Panel</text>
                        <p className="pl-5 items-center flex"><IconExclamationCircleFilled size={20}/><div>"Domain is very new"</div></p>
                        <p className="pl-5 items-center flex"><IconExclamationCircleFilled size={20}/><div>"No online presence"</div></p>
                        <p className="pl-5 items-center flex"><IconExclamationCircleFilled size={20}/><div>"Gmail domain"</div></p>
                    </div>
                    </Card>
                </div>


                <div>
                    <Group grow mt="lg" className="[&>button]:flex 
                    [&>button]:gap-x-2 
                    [&>button]:items-center 
                    [&>button]:rounded 
                    [&>button]:border 
                    [&>button]:border-slate-500 
                    [&>button]:px-1
                    [&>button]:py-1 
                    [&>button]:shadow-sm 
                    [&>button]:shadow-slate-400 
                    [&>button]:backdrop-blur-sm
                 [&>button]:hover:bg-slate-200">
                        <button className=" "><IconHeadset size={20} />
                            Request Help
                        </button>
                        <button className=" "><IconBookmark size={20} />
                            Save for Review
                        </button>
                        <button className=" "><IconExclamationCircleFilled size={20} />
                            Report Suspicious Buyer
                        </button>
                    </Group>
                </div>
            </div>


        </div>

    );
}
export default BuyersListCards;