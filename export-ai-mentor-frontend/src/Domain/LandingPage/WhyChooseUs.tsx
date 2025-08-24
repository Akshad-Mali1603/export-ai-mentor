import { IconCertificate, IconChartHistogram, IconInputAi, IconUsersGroup } from "@tabler/icons-react";

const WhyChooseUs = () => {
    return (
        <div className="flex-col pt-20 pb-10">
            <div className="text-4xl font-bold items-center place-self-center pb-8">
                Why Choose US
            </div>
            <div className="flex flex-col px-[7%] pt-5 pb-10">
                <div className="flex gap-20 pb-10">
                    <div className="leading-tight">
                        <div className="text-slate-950 text-lg font-semibold flex items-center relative ">
                            <div className="justify-center w-14 h-14 text-slate-50 rounded-full bg-slate-950 p-1.5"><IconInputAi width={40} height={40}/></div>
                            <div className="pl-2">Combines AI + real data</div>
                        </div>
                        <div className="text-slate-600 pl-14">Leverage the power of AI with real-time market data for accurate insights</div>
                    </div>
                    <div>
                        <div className="text-slate-950 text-lg font-semibold flex items-center relative">
                            <div className="justify-center w-14 h-14 text-slate-50 rounded-full bg-slate-950 p-1.5"><IconCertificate  width={40} height={40}/></div>
                            <div className="pl-2">Auto-check compliance & documents</div></div>
                        <div className="text-slate-600 pl-14">Automatically verify compliance requirements and generate necessary documents</div>
                    </div>
                </div>

                <div className="flex gap-20">
                    <div>
                        <div className="text-slate-950 text-lg font-semibold flex items-center relative">
                            <div className="justify-center w-14 h-14 text-slate-50 rounded-full bg-slate-950 p-1.5"><IconChartHistogram  width={40} height={40}/></div>
                            <div className="pl-2">Predictive market intelligence</div></div>
                        <div className="text-slate-600 pl-14">Forecast market trends and identify opportunities with predictive analytics</div>
                    </div>
                    <div>
                        <div className="text-slate-950 text-lg font-semibold flex items-center relative">
                            <div className="justify-center w-14 h-14 text-slate-50 rounded-full bg-slate-950 p-1.5"><IconUsersGroup  width={40} height={40}/></div>
                            <div className="pl-2">Works for MSMEs & first-time exporters</div></div>
                        <div className="text-slate-600 pl-14">Designed to be accessible and effective for businesses of all sizes</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default WhyChooseUs;