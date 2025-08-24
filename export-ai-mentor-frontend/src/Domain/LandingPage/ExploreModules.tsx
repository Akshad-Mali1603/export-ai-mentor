import { Group } from "@mantine/core";
import { IconBrandGithubCopilot, IconCalculator, IconChartRadar, IconClipboardCheck, IconFileCertificate, IconFileLike, IconUserCheck } from "@tabler/icons-react";

const ExploreModules = () => (
    <div className="flex-row w- 50 items-center gap-3 px-20">
        <div className="">
            <div className="text-4xl font-bold items-center place-self-center pb-8">Explore Our Core Modules</div>
        </div>

        <div className="items-center justify-center p-4">
            <Group className="flex gap-8 pb-5 ">
                <button className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md text-slate-950 h-45 w-120 rounded-2xl px-8 pt-5 hover:bg-slate-200 transition">
                    <div className="flex w-16 h-16 rounded-full justify-center bg-slate-300 mb-3">
                        <IconClipboardCheck width={50} height={50} />
                    </div>
                    <div className="font-semibold flex">Compliance Coach</div>
                    <div className="flex">Check all regulations based on product</div>
                </button>

                <button className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md text-slate-950 h-45 w-120 rounded-2xl px-8 pt-5 hover:bg-slate-200 transition">
                    <div className="flex w-16 h-16 rounded-full justify-center bg-slate-300 mb-3">
                        <IconUserCheck width={50} height={50} />
                    </div>
                    <div className="font-semibold flex">Buyer Verification</div>
                    <div className="flex">Verify and validate potential buyers</div>
                </button>
                <button className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md text-slate-950 h-45 w-120 rounded-2xl px-8 pt-5 hover:bg-slate-200 transition">
                    <div className="flex w-16 h-16 rounded-full justify-center bg-slate-300 mb-3">
                        <IconFileCertificate width={50} height={50} />
                    </div>
                    <div className="font-semibold flex">SmartDocs</div>
                    <div className="flex">Generate and manage export documents</div>
                </button>
            </Group>
        

            <Group className="flex gap-8 pt-5">
                <button className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md text-slate-950 h-45 w-120 rounded-2xl px-8 pt-5 hover:bg-slate-200 transition">
                    <div className="flex w-16 h-16 rounded-full justify-center bg-slate-300 mb-3">
                        <IconCalculator width={50} height={50} />
                    </div>
                    <div className="font-semibold flex">Pricing Calculator</div>
                    <div className="flex">Calculate optimal pricing for exports</div>
                </button>

                <button className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md text-slate-950 h-45 w-120 rounded-2xl px-8 pt-5 hover:bg-slate-200 transition">
                    <div className="flex w-16 h-16 rounded-full justify-center bg-slate-300 mb-3">
                        <IconChartRadar stroke={1.2} width={50} height={50} />
                    </div>
                    <div className="font-semibold flex">Market Radar</div>
                    <div className="flex">Track global market trends and demands</div>
                </button>
                <button className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md text-slate-950 h-45 w-120 rounded-2xl px-8 pt-5 hover:bg-slate-200 transition">
                    <div className="flex w-16 h-16 rounded-full justify-center bg-slate-300 mb-3">
                        <IconBrandGithubCopilot width={50} height={50} />
                    </div>
                    <div className="font-semibold flex">AI Export Assistant</div>
                    <div className="flex">Get AI-powered export guidance</div>
                </button>
            </Group>
        </div>
    </div>
)
export default ExploreModules;