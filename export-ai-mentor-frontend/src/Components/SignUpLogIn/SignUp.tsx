import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput
                label="Full Name"
                placeholder="Your Name"
                withAsterisk
            />
            <TextInput
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Your email"
                withAsterisk
            />
             <PasswordInput
                leftSection={<IconLock size={18} stroke={1.5}/>} 
                label="Password" 
                placeholder="Password" 
                withAsterisk
                />
                 <PasswordInput
                leftSection={<IconLock size={18} stroke={1.5}/>} 
                label="Confirm Password" 
                placeholder="Confirm Password" 
                withAsterisk
                />
                <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>}/>
                <Button autoContrast variant="filled" className="!bg-slate-950 hover:!bg-slate-700 !shadow-2xl !shadow-slate-950 hover:translate-y-2 transition duration-300 ease-in-out">Sign Up</Button>
                <div className="mx-auto font-semibold text-slate-700">Have an Account ? <Link to="/login" className="text-slate-700 font-bold">LogIn</Link></div>
        </div>
    )
}
export default SignUp;