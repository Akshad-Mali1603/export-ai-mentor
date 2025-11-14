import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePass, sendOtp, verifyOtp } from "../../Services/UserService";
import { errorNotification, SuccessNotification } from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";


const ResetPassword = (props:any) => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpSending, setOtpSending] = useState(false);
    const [verified, setVerified] = useState(false);
    const [password, setPassword] = useState("");
    const [passErr, setPassErr] = useState("");
    const [resendLoader, setResendLoader] = useState(false);
    const [seconds, setSeconds] = useState(30);
  const interval = useInterval(() => setSeconds((s) => s - 1), 1000);

  if (seconds === 0) {
      setResendLoader(false);
      setSeconds(30);
    interval.stop();
  }

    const resendOtp = () => {
        if (resendLoader) return;
        handleSendOtp();

    }
    const changeEmail = () => {
        setResendLoader(false);
        setOtpSent(false);
        setSeconds(30);
        setVerified(false);
        interval.stop();
    }

    const handleResetPassword = () => {
        changePass(email, password).then((res)=>{
            console.log(res);
            SuccessNotification("Password Changed Successfully", "You can now log in with your new password");
            props.close();
        }).catch((err)=>{
            console.log(err);
            errorNotification("Password Change Failed", "Please try again");
        });
    }
    const handleverifyOTP = (otp:any) => {
        verifyOtp(email, otp).then((res)=>{
            console.log(res);
            SuccessNotification("OTP Sent Successfully", "Enter OTP to reset");
            setVerified(true);
        }).catch((err)=>{
            console.log(err);
            errorNotification("OTP Verification Failed", "Please try again");
        });
    
    }
    const handleSendOtp = () => {
        setOtpSending(true);
        sendOtp(email).then((res)=>{
            console.log(res);
            SuccessNotification("OTP Sent Successfully", "Please check your email for the OTP");
            setResendLoader(true);
            setOtpSent(true);
            interval.start();
        }).catch((err)=>{
            console.log(err);
        });
    }
    function signupValidation(arg0: string, value: string): import("react").SetStateAction<string> {
        // Basic validation for password field
        if (arg0 === "password") {
            if (!value || value.trim() === "") return "Password is required";
            if (value.length < 8) return "Password must be at least 8 characters";
            if (!/[A-Z]/.test(value)) return "Password must include an uppercase letter";
            if (!/[a-z]/.test(value)) return "Password must include a lowercase letter";
            if (!/[0-9]/.test(value)) return "Password must include a number";
            if (!/[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?`~]/.test(value)) return "Password must include a special character";
            return "";
        }

        // default: no error for unknown fields
        return "";
    }

    return(
       <>
        <Modal opened={props.opened} onClose={props.close} title="Reset Password">
      
      <div className="flex gap-6 flex-col">
         <TextInput
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Your email"
                withAsterisk
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                rightSection={ <Button loading={otpSending && !otpSent} disabled={email===""|| otpSent} size="xs" onClick={handleSendOtp} autoContrast variant="filled" className="!bg-slate-950 mr-1 hover:!bg-slate-700 ">Log In</Button>}
                rightSectionWidth="xl" 
            />
            {otpSent && <PinInput type="number" length={6} className="mx-auto" gap="lg" onComplete={handleverifyOTP}/>}
            {otpSent && !verified && <div className="flex gap-2">
                <Button size="xs" fullWidth onClick={resendOtp} autoContrast variant="filled" className="!bg-slate-950 mr-1 hover:!bg-slate-700 ">{resendLoader?seconds:"Resend"}</Button>
                <Button size="xs" fullWidth onClick={changeEmail} autoContrast variant="filled" className="!bg-slate-950 mr-1 hover:!bg-slate-700 ">Change Email</Button>
                </div>
                }
                {verified &&   <PasswordInput
                leftSection={<IconLock size={18} stroke={1.5} />}
                label="Password"
                placeholder="Password"
                withAsterisk
                error={password}
                name="password"
                onChange={(e)=>{setPassword(e.target.value); setPassErr(signupValidation("password", e.target.value))}}
            />}
            {verified && <Button onClick={handleResetPassword} autoContrast variant="filled">Change Password</Button>}
      </div>

      </Modal>
       
       </>
    )
}
export default ResetPassword;