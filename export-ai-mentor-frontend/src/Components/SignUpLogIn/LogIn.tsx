import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Services/UserService";

const form={
    email:"",
    password:"",
}

const LogIn = () => {

    const [data, setData] = useState(form);
    
        const handleChange=(event:any)=>{
            setData({...data,[event.target.name]:event.target.value}); 
        }
    
        const handleSubmit=()=>{
           loginUser(data).then((res)=>{
            console.log(res);
           }).catch((err)=>{
            console.log(err);
           });
        }
    
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Log In</div>
            <TextInput
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Your email"
                withAsterisk
                name="email"
                value={data.email}
                onChange={handleChange}
            />
             <PasswordInput
                leftSection={<IconLock size={18} stroke={1.5}/>} 
                label="Password" 
                placeholder="Password" 
                withAsterisk
                name="password"
                value={data.password}
                onChange={handleChange}
                />
                <Button onClick={handleSubmit} autoContrast variant="filled" className="!bg-slate-950 hover:!bg-slate-700 !shadow-2xl !shadow-slate-950 hover:translate-y-2 transition duration-300 ease-in-out">Log In</Button>
                <div className="mx-auto font-semibold text-slate-700">Don't have an Account ? <Link to="/signup" className="text-slate-700 font-bold">SignUp</Link></div>
        </div>
    )
}
export default LogIn;