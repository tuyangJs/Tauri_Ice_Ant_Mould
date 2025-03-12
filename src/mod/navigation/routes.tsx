import { HomeOutlined } from "@ant-design/icons"
import { ItemType, MenuItemType } from "antd/es/menu/interface";

export type MenuItem = ItemType<MenuItemType>[]
const menuItems: MenuItem = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: 'home',
    },
    {
        key: '/demo',
        icon: <HomeOutlined />,
        label: 'demo',
    },
    {
        key: '/so',
        icon: <HomeOutlined />,
        label: '404',
    },
];

export default menuItems;
