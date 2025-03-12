import React, { useState } from 'react';
import { Breadcrumb, Button, Flex } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import onTitleChange from "@/mod/TitleChange"

export interface Props {
    collapsed: boolean
    setCollapsed: (e: React.SetStateAction<boolean>) => void
}
const App: React.FC<Props> = ({ collapsed, setCollapsed }) => {
    const [PagTitle, setPagTitle] = useState("")
    //同步全局标题
    onTitleChange((title) => {
        const newTitle = title.split('-')[1]?.trim() || ''
        setPagTitle(newTitle)
    })
    return (
        <Flex align='center' data-tauri-drag-region>
            <Button
                type="text"
                shape="circle"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
            />
            <Breadcrumb
                items={[
                    {
                        title: PagTitle,
                    }
                ]}
            />
        </Flex>
    );
}

export default App;