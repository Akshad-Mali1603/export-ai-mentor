import { Menu, Avatar, Switch } from '@mantine/core';
import {
    IconMessageCircle,
    IconUserCircle,
    IconMessageUser,
    IconMoonStars,
    IconSun,
    IconLogout2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
    const [checked, setChecked] = useState(false);
     const [opened, setOpened] = useState(false);
    return (
        <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div className="gap-3 cursor-pointer flex items-center">
                    <div>Akshad Mali</div>
                    <Avatar src="avatar.png" />
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={()=>setOpened(true)}>
                <Link to="/profile"/>
                <Menu.Item leftSection={<IconUserCircle size={14} />}>
                    Profile
                </Menu.Item>
                <Menu.Item leftSection={<IconMessageCircle size={14} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<IconMessageUser size={14} />}>
                    Save Buyers
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconSun size={14} />}
                    rightSection={
                        <Switch
                            checked={checked}
                            onChange={(event) => setChecked(event.currentTarget.checked)}
                            size="md"
                            color="dark.4"
                            onLabel={<IconSun size={16} stroke={2.5} color="Yellow" />}
                            offLabel={<IconMoonStars size={16} stroke={2.5} color="#3866D4" />}
                        />
                    }
                >
                    Light Mode
                </Menu.Item>

                <Menu.Divider />
            
                <Menu.Item
                    color="red"
                    leftSection={<IconLogout2 size={14} />}
                >
                    Log Out
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
export default ProfileMenu;