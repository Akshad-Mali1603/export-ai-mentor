import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const SuccessNotification = (title:string, message:string) =>{
     notifications.show({
                        title: <span className="text-white font-semibold">{title}</span>,
                        message: <span className="text-gray-300">{message}</span>,
                        withCloseButton: true,
                        icon: <IconCheck className="text-slate-50" style={{ width: '90%', height: '90%' }} />,
                        color: 'teal',
                        withBorder: true,
                        className: "!border-green-500 !bg-slate-900 !border-2 !shadow-lg !shadow-green-800/30",
                    });
} 
const errorNotification = (title:string, message:string) =>{
      notifications.show({
                        title: <span className="text-white font-semibold">{title}</span>,
                        message: <span className="text-gray-300">{message}</span>,
                        withCloseButton: true,
                        icon: <IconX className="text-slate-50" style={{ width: '90%', height: '90%' }} />,
                        color: 'red',
                        withBorder: true,
                        className: "!border-red-500 !bg-slate-900 !border-2 !shadow-lg !shadow-red-800/30",
                    });
}
export { SuccessNotification, errorNotification };