import { useLocation } from "react-router-dom";
import LogIn from "../Components/SignUpLogIn/LogIn";
import SignUp from "../Components/SignUpLogIn/SignUp";

const SignUpPage = () => {
  const location = useLocation()
    return(
        <div className="min-h-[90vh] bg-slate-100 font-['poppins'] overflow-hidden">
            <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 ${location.pathname == '/signup'?'-translate-x-1/2':'translate-x-0'} transition-all duration-1000 ease-in-out`}>
                <LogIn/>
                <div className={`w-1/2 h-full transition-all duration-3000 ease-in-out ${location.pathname== '/signup'?'rounded-r-[200px]':'rounded-l-[200px]'} bg-slate-950 flex items-center gap-3 justify-center flex-col`}>
                    <div className={`${location.pathname == '/signup'?'rotate-0':'-rotate-180'} transition-all duration-3000 ease-in-out items-center justify-center`}>
                        <img src="/Wheelimage.png" alt="Export Ai Mentor Logo" className="w-48 h-48 mb-4"/>
                    </div>
                    <div className="text-4xl text-slate-50 font-semibold">Welcome to Export Ai Mentor</div>
                </div>
            <SignUp />
            </div>
        </div>
    )
}
export default SignUpPage;