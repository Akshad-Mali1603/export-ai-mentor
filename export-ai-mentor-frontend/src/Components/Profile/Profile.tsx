import { ActionIcon, Button, Divider, FileInput, Select, Textarea, TextInput, PasswordInput } from "@mantine/core";
import { IconArrowLeft, IconAt, IconBrandCodesandbox, IconBriefcase, IconBuilding, IconBuildingSkyscraper, IconCheck, IconDeviceFloppy, IconFileCertificate, IconFileDescription, IconFileTypePdf, IconKey, IconLock, IconMail, IconMapPin, IconPencil, IconPhone, IconSettings, IconShip, IconShoppingCart, IconUser, IconWorld } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
        console.log(edit);
    }
    return (
        <div className="min-h-[90vh] bg-slate-200 font-['Poppins'] p-4 md:p-10 flex flex-col items-center">
            {/* Divider */}
            <Divider size="xs" className="w-full max-w-8xl" />

            {/* Back Button */}
            <div className="w-full max-w-8xl mt-4 mb-6">
                <Link to="/home">
                    <Button
                        leftSection={<IconArrowLeft size={20} />}
                        variant="light"
                        className="!bg-slate-300 hover:!bg-slate-400 !text-slate-800"
                    >
                        Back
                    </Button>
                </Link>
            </div>

            {/* Profile Header */}
            <div className="relative w-full max-w-7xl rounded-t-2xl overflow-hidden shadow-lg">
                <img
                    src="/background_profile.png"
                    alt="Profile Background"
                    className="w-full h-[30vh] md:h-[30vh] lg:h-[50vh] object-cover rounded-t-2xl"
                />

                {/* Avatar */}
                <div className="absolute top-50 left-15">
                    <img
                        src="/avatar.png"
                        alt="Photograph"
                        className="w-32 h-32 md:w-60 md:h-60 rounded-full border-8 border-slate-100 shadow-md object-cover"
                    />
                </div>
            </div>

            {/* Profile Info */}
            <div className="bg-slate-50 w-full max-w-7xl rounded-b-2xl p-10 pl-15 pr-30 pt-5 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                    <div>
                        <div className="flex gap-3">
                            <IconUser size={35} className="rounded-full bg-sky-400" />
                            <div>
                                <div>Basic Information</div>
                                <div className="text-slate-500">Your personal and contact details</div>
                            </div>
                        </div>
                    </div>
                    <ActionIcon variant="subtle" size="lg" color="black" onClick={() => handleEdit(0)}>
                        {edit[0] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>

                {
                    edit[0] ?
                        <>
                            <div className="pl-10">
                                <div className="flex gap-10 mb-3">
                                    <TextInput
                                        label="Full Name"
                                        placeholder="Your Name"
                                        leftSection={<IconUser size={16} />}
                                        withAsterisk
                                        w={400}
                                    />
                                    <TextInput
                                        leftSection={<IconAt size={16} />}
                                        label="Email"
                                        placeholder="Your email"
                                        withAsterisk
                                        w={400}
                                    />

                                </div>
                                <TextInput
                                    label="Mobile Number"
                                    placeholder="+91 (555) 000-0000"
                                    leftSection={<IconPhone size={16} />}
                                    withAsterisk
                                    w={400}
                                />
                            </div>
                        </> : <>
                            <div className="pl-10">
                                <div className="text-2xl font-semibold text-slate-900">Akshad Mali</div>
                                <div className="mt-2 text-lg text-slate-700 flex gap-2"><IconMail />akshadmali@gmail.com</div>
                                <div className="text-md text-slate-600 mt-1 flex gap-2"><IconPhone />+91 9158338449</div>
                            </div>
                        </>
                }

            </div>

            <Divider size="xs" my="md" />

            {/*Bussiness details section*/}
            <div className="bg-slate-50 w-full max-w-7xl rounded-2xl p-10 pl-15 pr-30 pt-5 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                    <div>
                        <div className="flex gap-3">
                            <IconUser size={35} className="rounded-full bg-emerald-400" />
                            <div>
                                <div>Basic Information</div>
                                <div className="text-slate-500">Your personal and contact details</div>
                            </div>
                        </div>
                    </div>
                    <ActionIcon variant="subtle" size="lg" color="black" onClick={() => handleEdit(1)}>
                        {edit[1] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>

                {
                    edit[1] ?
                        <>
                            <div className="pl-10">
                                <div className="flex gap-10 mb-3">
                                    <TextInput
                                        label="Company Name"
                                        placeholder="Your Company Pvt. Ltd."
                                        leftSection={<IconBriefcase size={16} />}
                                        withAsterisk
                                        w={400}
                                    />
                                    <TextInput
                                        leftSection={<IconBrandCodesandbox size={16} />}
                                        label="ICE Code"
                                        placeholder="IEC0123456789"
                                        withAsterisk
                                        w={400}
                                    />

                                </div>

                                <div className="flex gap-10 mb-3">
                                    <Select
                                        label="Business Type"
                                        placeholder="Select your business type"
                                        leftSection={<IconBuildingSkyscraper size={16} />}
                                        withAsterisk
                                        data={[
                                            { value: "manufacturer", label: "Manufacturer" },
                                            { value: "agent", label: "Agent" },
                                            { value: "trader", label: "Trader" },
                                        ]}
                                        w={400}
                                    />
                                    <TextInput
                                        label="Primary Export Products"
                                        placeholder="e.g., Textiles, Electronics, Agricultural Products"
                                        leftSection={<IconShoppingCart size={16} />}
                                        withAsterisk
                                        w={400}
                                    />
                                </div>
                                <TextInput
                                    label="Target Export Markets"
                                    placeholder="e.g., USA, Europe, Middle East, Southeast Asia"
                                    leftSection={<IconShip size={16} />}
                                    withAsterisk
                                    w={400}
                                />
                            </div>
                        </> : <>
                            <div className="pl-6 md:pl-10 flex flex-col gap-4">

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex items-center gap-2 text-lg text-slate-700">
                                        <IconBriefcase /> Google Pvt Ltd
                                    </div>
                                    <div className="flex items-center gap-2 text-lg text-slate-700">
                                        <IconBrandCodesandbox /> IEC0123456789
                                    </div>
                                    <div className="flex items-center gap-2 text-lg text-slate-700">
                                        <IconBuildingSkyscraper /> Manufacturer
                                    </div>
                                </div>

                                <div className="gap-3 flex flex-col">
                                    <div className="flex items-center gap-2 text-lg text-slate-700">
                                        <IconShoppingCart /> Agricultural Products
                                    </div>
                                    <div className="flex items-center gap-2 text-lg text-slate-700">
                                        <IconShip /> Southeast Asia, USA, Europe, Middle East
                                    </div>
                                </div>
                            </div>
                        </>
                }

            </div>

            <Divider size="xs" my="md" />

            {/*Location Details*/}
            <div className="bg-slate-50 w-full max-w-7xl rounded-2xl p-10 pl-15 pr-30 pt-5 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                    <div>
                        <div className="flex gap-3">
                            <IconMapPin size={35} className="rounded-full bg-yellow-300" />
                            <div>
                                <div>Location</div>
                                <div className="text-slate-500">Your business location details</div>
                            </div>
                        </div>
                    </div>
                    <ActionIcon variant="subtle" size="lg" color="black" onClick={() => handleEdit(2)}>
                        {edit[2] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>

                {
                    edit[2] ?
                        <>
                            <div className="pl-10">
                                <div className="flex gap-10 mb-3">
                                    <TextInput
                                        label="Country"
                                        placeholder="India"
                                        leftSection={<IconWorld size={16} />}
                                        withAsterisk
                                        w={400}
                                    />
                                    <TextInput
                                        leftSection={<IconBuilding size={16} />}
                                        label="City"
                                        placeholder="Pune"
                                        withAsterisk
                                        w={400}
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        label="Address"
                                        placeholder="Enter your full business address"
                                        leftSection={<IconMapPin size={16} />}
                                        withAsterisk
                                        autosize
                                        minRows={2}
                                        maxRows={4}
                                        w={400}
                                    />
                                </div>

                            </div>
                        </> : <>
                            <div className="pl-6 md:pl-10 flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex items-center gap-2 text-lg text-slate-700">
                                        <IconWorld /> India
                                    </div>
                                    <div className="flex items-center gap-2 text-lg text-slate-700">
                                        <IconBuilding /> Pune
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-lg text-slate-700">
                                    <IconMapPin /> Indira Park, Chafekar chowk, chichwad, Pune, Maharashtra – 411033
                                </div>
                            </div>
                        </>
                }

            </div>
            <Divider size="xs" my="md" />
            <div className="bg-slate-50 w-full max-w-7xl rounded-2xl p-10 pl-15 pr-30 pt-5 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                    <div>
                        <div className="flex gap-3">
                            <IconFileDescription size={35} className="rounded-full bg-red-400" />
                            <div>
                                <div>Documents</div>
                                <div className="text-slate-500">Upload required business documents</div>
                            </div>
                        </div>
                    </div>
                    <ActionIcon variant="subtle" size="lg" color="black" onClick={() => handleEdit(3)}>
                        {edit[3] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
                {
                    edit[3] ? <>

                        <div className="flex gap-10 pl-10">
                            <FileInput
                                label="IEC Certificate"
                                placeholder="Click to upload IEC Certificate"
                                leftSection={<IconFileCertificate size={16} />}
                                accept=".pdf,.jpg,.jpeg,.png"
                                withAsterisk
                                w={400}
                            />
                            <FileInput
                                label="Company Profile PDF"
                                placeholder="Click to upload IEC Certificate"
                                leftSection={<IconFileCertificate size={16} />}
                                accept=".pdf,.jpg,.jpeg,.png"
                                withAsterisk
                                w={400}
                            />
                        </div>
                    </> : <>
                        <div className="flex gap-30 pl-10">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-slate-900">IEC Code Certificate PDF</label>
                                <div className="flex text-slate-800 gap-2"><IconFileTypePdf />Document Uploaded<IconCheck color="green" /></div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-slate-900">Company Documents</label>
                                <div className="flex text-slate-800 gap-2"><IconFileTypePdf />Document Uploaded<IconCheck color="green" /></div>
                            </div>
                        </div>
                    </>
                }
            </div>
            <Divider size="xs" my="md" />
            <div className="bg-slate-50 w-full max-w-7xl rounded-2xl p-10 pl-15 pr-30 pt-5 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                    <div>
                        <div className="flex gap-3">
                            <IconSettings size={35} className="rounded-full bg-fuchsia-300" />
                            <div>
                                <div>Account Setting</div>
                                <div className="text-slate-500">Manage your account preferences and security</div>
                            </div>
                        </div>
                    </div>
                    <ActionIcon variant="subtle" size="lg" color="black" onClick={() => handleEdit(4)}>
                        {edit[4] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
                {
                    edit[4] ? <>
                        <div className="flex gap-5 pl-10">
                            <PasswordInput
                                leftSection={<IconLock size={18} stroke={1.5} />}
                                label="Current Password"
                                placeholder="Current Password"
                                withAsterisk
                                w={400}
                            />
                            <PasswordInput
                                leftSection={<IconLock size={18} stroke={1.5} />}
                                label="New Password"
                                placeholder="New Password"
                                withAsterisk
                                w={400}
                            />
                        </div>

                    </> : <>
                        <div className="flex flex-col gap-1 pl-10">
                            <label className="font-semibold text-slate-900">Change Password</label>
                            <div className="flex gap-1"><IconKey stroke={2} />Current Password : ************</div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Profile;
