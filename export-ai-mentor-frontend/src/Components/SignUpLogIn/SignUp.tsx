import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../Services/UserService";

const form={
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    accountType:"APPLICANT"
}

const SignUp = () => {

    const [data, setData] = useState(form);

    const handleChange=(event:any)=>{
       if(typeof (event) == "string"){
        setData({...data,accountType:event});
       }else{
        setData({...data,[event.target.name]:event.target.value})
       }
    }

    const handleSubmit=()=>{
       registerUser(data).then((res)=>{
        console.log(res);
       }).catch((err)=>{
        console.log(err);
       });
    }

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput
                name="name"
                value={data.name}
                label="Full Name"
                placeholder="Your Name"
                withAsterisk
                onChange={handleChange}
            />
            <TextInput
                leftSection={<IconAt size={16} />}
                name="email"
                value={data.email}
                onChange={handleChange}
                label="Email"
                placeholder="Your email"
                withAsterisk
            />
            <PasswordInput
                name="password"
                leftSection={<IconLock size={18} stroke={1.5} />}
                label="Password"
                placeholder="Password"
                withAsterisk
                value={data.password}
                 onChange={handleChange}
            />
            <PasswordInput
                name="confirmPassword"
                leftSection={<IconLock size={18} stroke={1.5} />}
                label="Confirm Password"
                placeholder="Confirm Password"
                withAsterisk
                value={data.confirmPassword}
                 onChange={handleChange}
            />
            <Radio.Group
                name="accountType"
                value={data.accountType}
                onChange={handleChange}
                label="You are ?"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio className="py-4 px-6 border-slate-200 rounded-lg border has-[:checked]:border-slate-800 has-[:checked]:bg-slate-500/5 hover:bg-slate-200" autoContrast value="APPLICANT" label="Applicant" />
                    <Radio className="py-4 px-6 border-slate-200 rounded-lg border has-[:checked]:border-slate-800 has-[:checked]:bg-slate-500/5 hover:bg-slate-200" autoContrast value="ADMIN" label="Admin" />
                </Group>
            </Radio.Group>
            <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />
            <Button onClick={handleSubmit} autoContrast variant="filled" className="!bg-slate-950 hover:!bg-slate-700 !shadow-2xl !shadow-slate-950 hover:translate-y-2 transition duration-300 ease-in-out">Sign Up</Button>
            <div className="mx-auto font-semibold text-slate-700">Have an Account ? <Link to="/login" className="text-slate-700 font-bold">LogIn</Link></div>
        </div>
    )
}
export default SignUp;