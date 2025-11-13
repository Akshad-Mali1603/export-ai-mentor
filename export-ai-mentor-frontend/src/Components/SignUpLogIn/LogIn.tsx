import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconArrowLeft, IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
import loginValidation from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";


const form = {
    email: "",
    password: "",
}

const LogIn = () => {
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();
    const [data, setData] = useState<{ [key: string]: string }>(form);

    const handleChange = (event: any) => {
        setFormError({ ...formError, [event.target.name]: ""});
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            if (key !== "confirmPassword") newFormError[key] = loginValidation.loginValidation(key, data[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if (valid) {
            loginUser(data).then((res) => {
                console.log(res);
                 setData(form);
                notifications.show({
                        title: <span className="text-white font-semibold">LogIn Successful</span>,
                        message: <span className="text-gray-300">Redirecting to Home page...</span>,
                        withCloseButton: true,
                        icon: <IconCheck className="text-slate-50" style={{ width: '90%', height: '90%' }} />,
                        color: 'teal',
                        withBorder: true,
                        className: "!border-green-500 !bg-slate-900 !border-2 !shadow-lg !shadow-green-800/30",
                        autoClose: 4000,
                        radius: "md",
                        style: { transition: 'all 0.3s ease-in-out' },
                    });
                    setTimeout(() => {
                       navigate('/');
                    }, 4000);

            }).catch((err) => {
                    console.log(err);
                    const errorMessage =
                        err.response?.data?.errorMessage ||
                        "Network Error. Please try again later.";

                    notifications.show({
                        title: <span className="text-white font-semibold">LogIn Failed</span>,
                        message: <span className="text-gray-300">{errorMessage}</span>,
                        withCloseButton: true,
                        icon: <IconX className="text-slate-50" style={{ width: '90%', height: '90%' }} />,
                        color: 'red',
                        withBorder: true,
                        className: "!border-red-500 !bg-slate-900 !border-2 !shadow-lg !shadow-red-800/30",
                        autoClose: 5000,
                        radius: "md",
                    });
                });
        }
    }

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
               <div className="absolute left-5 top-10  z-10">
                <span onClick={() => navigate("/")} className="cursor-pointer">
                    <Button
                        leftSection={<IconArrowLeft size={20} />}
                        variant="light"
                        className="!bg-slate-300 hover:!bg-slate-400 !text-slate-800"
                    >
                        Back
                    </Button>
                </span>
            </div>
            <div className="text-2xl font-semibold">Log In</div>
            <TextInput
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Your email"
                withAsterisk
                name="email"
                value={data.email}
                onChange={handleChange}
                error={formError.email}
            />
            <PasswordInput
                leftSection={<IconLock size={18} stroke={1.5} />}
                label="Password"
                placeholder="Password"
                withAsterisk
                error={formError.password}
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <Button onClick={handleSubmit} autoContrast variant="filled" className="!bg-slate-950 hover:!bg-slate-700 !shadow-2xl !shadow-slate-950 hover:translate-y-2 transition duration-300 ease-in-out">Log In</Button>
            <div className="mx-auto font-semibold text-slate-700">Don't have an Account ?<span onClick={()=>{navigate("/signup"); setData(form),setFormError(form)}} className="text-slate-700 font-bold cursor-pointer">Sign Up</span></div>
        </div>
    )
}
export default LogIn;