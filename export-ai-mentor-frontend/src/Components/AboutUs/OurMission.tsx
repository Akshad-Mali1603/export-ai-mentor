const OurMission = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center p-8">About US</h1>
            <div className="flex items-center p-20">

                <div className="flex flex-col w-[45%] gap-5">
                    <div className="flex text-3xl font-normal leading-tight ">Our Mission</div>
                    <div className="text-lg text-slate-700 font-normal">At ExportMentor.AI, we're on a mission to democratize global trade by making export processes accessible, understandable, and manageable for businesses of all sizes, especially MSMEs and first-time exporters.</div>
                    <div className="text-lg text-slate-700 font-normal">We combine cutting-edge AI technology with real-world trade data to provide comprehensive solutions that simplify compliance, verify buyers, generate documentation, calculate pricing, and deliver market intelligence—all in one platform.</div>

                </div>

                <div className="w-[55%] flex items-center justify-center">
                    <div className="w-[50rem] backdrop-blur-md shadow-xl shadow-slate-400 rounded">
                        <img src="ourMissionRightImage.png" alt="shipImage" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurMission;