import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from "@mantine/core";
import { IconArrowLeft, IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import signupValidation from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT"
}

const SignUp = () => {

    const [data, setData] = useState<{ [key: string]: string }>(form);

    const [formError, setFormError] = useState<{ [key: string]: string }>(form);

    const navigate= useNavigate();

    const handleChange = (event: any) => {
        if (typeof (event) == "string") {
            setData({ ...data, accountType: event });
            return;
        }
        let name = event.target.name, value = event.target.value;
        setData({ ...data, [name]: value });
        setFormError({ ...formError, [name]: signupValidation.signupValidation(name, value) });

        if (name === "password" && data.confirmPassword !== "") {
            let err = "";
            if (data.confirmPassword !== value) {
                err = "Passwords do not match"
                setFormError({ ...formError, [name]: signupValidation.signupValidation(name, value), confirmPassword: err });
            } else {
                setFormError({ ...formError, [name]: signupValidation.signupValidation(name, value), confirmPassword: "" });
            }
        }

        if (name === "confirmPassword") {
            if (data.password !== value) {
                setFormError({ ...formError, [name]: "Passwords do not match" });
            } else {
                setFormError({ ...formError, confirmPassword: "" });
            }
        }
    }

    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") newFormError[key] = signupValidation.signupValidation(key, data[key]);
            else if (data[key] !== data["password"]) newFormError[key] = "Passwords do not match";
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);

        if (valid === true) {
            registerUser(data)
                .then((res) => {
                    console.log(res);
                    setData(form);
                    notifications.show({
                        title: <span className="text-white font-semibold">Registration Successful</span>,
                        message: <span className="text-gray-300">Redirecting to login page...</span>,
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
                       navigate('/login');
                    }, 4000);
                })
                .catch((err) => {
                    console.log(err);
                    const errorMessage =
                        err.response?.data?.errorMessage ||
                        "Network Error. Please try again later.";

                    notifications.show({
                        title: <span className="text-white font-semibold">Registration Failed</span>,
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
               <div className=" left-5 top-10  z-10">
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
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput
                name="name"
                value={data.name}
                label="Full Name"
                placeholder="Your Name"
                withAsterisk
                error={formError.name}
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
                error={formError.email}
            />
            <PasswordInput
                name="password"
                leftSection={<IconLock size={18} stroke={1.5} />}
                label="Password"
                placeholder="Password"
                withAsterisk
                value={data.password}
                onChange={handleChange}
                error={formError.password}
            />
            <PasswordInput
                name="confirmPassword"
                leftSection={<IconLock size={18} stroke={1.5} />}
                label="Confirm Password"
                placeholder="Confirm Password"
                withAsterisk
                value={data.confirmPassword}
                onChange={handleChange}
                error={formError.confirmPassword}
            />
            <Radio.Group
                name="accountType"
                value={data.accountType}
                onChange={handleChange}
                label="You are ?"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio className="py-4 px-6 border-slate-300 rounded-lg border has-[:checked]:border-slate-800 has-[:checked]:bg-slate-500/5 hover:bg-slate-200" autoContrast value="APPLICANT" label="Applicant" />
                    <Radio className="py-4 px-6 border-slate-300 rounded-lg border has-[:checked]:border-slate-800 has-[:checked]:bg-slate-500/5 hover:bg-slate-200" autoContrast value="ADMIN" label="Admin" />
                </Group>
            </Radio.Group>
            <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />
            <Button onClick={handleSubmit} autoContrast variant="filled" className="!bg-slate-950 hover:!bg-slate-700 !shadow-2xl !shadow-slate-950 hover:translate-y-2 transition duration-300 ease-in-out">Sign Up</Button>
            <div className="mx-auto font-semibold text-slate-700">Have an Account ? <span onClick={()=>{navigate("/login"); setData(form),setFormError(form)}} className="text-slate-700 font-bold cursor-pointer">LogIn</span></div>
        </div>
    )
}
export default SignUp;