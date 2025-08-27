
const DisplayPage = () => {
  return (
    <div className="flex items-center p-20">
      <div className="flex flex-col w-[45%] gap-5">
        <div className="flex text-5xl font-bold leading-tight ">Your Smart Assistant for Global Export Success</div>
        <div className="text-lg text-slate-800 font-bold">AI-powered export platform for new traders</div>
        <div className="flex items-center">
          <div className="flex items-center h-18 w-45">
            <button className="hover:translate-y-2 transition duration-300 ease-in-out bg-slate-950 shadow-2xl shadow-slate-950 text-slate-50 h-15 w-35 rounded-2xl p-2 hover:bg-slate-700">Get Started</button>
          </div>
          <div className="flex items-center h-18 w-50">
            <button className="hover:translate-y-2 transition duration-300 ease-in-out bg-slate-50 shadow-2xl shadow-slate-950 backdrop-blur-md text-slate-950 h-15 w-35 rounded-2xl p-2 hover:bg-slate-200">View Demo</button>
          </div>
        </div>
      </div>

      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[50rem] backdrop-blur-md shadow-xl shadow-slate-400 rounded-es-full">
          <img src="shipImage.png" alt="shipImage" />
        </div>
      </div>

    </div>
  );
}
export default DisplayPage;