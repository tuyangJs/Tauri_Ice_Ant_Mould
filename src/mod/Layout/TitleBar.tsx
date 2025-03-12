import React, { useEffect, useState } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined, MoonOutlined, SunOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, ButtonProps, Divider, Flex, Segmented } from 'antd';
import { Window } from '@tauri-apps/api/window'; // 引入 appWindow
//import { motion } from 'framer-motion'; // 引入 framer-motion
import { CloseIcon, ShrinkIcon } from "@/mod/svg";
import { setTheme, setThemeProps } from '@/mod/ThemeConfig';

interface Props {
    themeDark: boolean
    locale?: string
}
const appWindow = new Window('main');
const isMax = await appWindow.isMaximized();
const App: React.FC<Props> = ({ themeDark }) => {
    const [isMaximized, setIsMaximized] = useState(isMax);
    const TitleButton: ButtonProps[] = [
        {
            icon: <ShrinkIcon />,
            size: 'small',
            shape: "round",
            type: "text",
            onClick: e => {
                // @ts-ignore
                e.target?.blur()
                appWindow.minimize()
            }
        },
        {
            icon: isMaximized ? <FullscreenExitOutlined /> : <FullscreenOutlined />,
            size: 'small',
            shape: "round",
            type: "text",
            onClick: e => {
                // @ts-ignore
                e.target?.blur()
                appWindow.isMaximized().then((result) => {
                    if (result) {
                        appWindow.unmaximize()
                    } else {
                        appWindow.maximize()

                    }
                })
            }
        },
        {
            size: 'small',
            color: "danger",
            shape: "round",
            variant: "text",
            icon: <CloseIcon />,
            onClick: e => {
                // @ts-ignore
                e.target?.blur()
                appWindow.close()
            }
        }
    ]
    useEffect(() => {
        // 监听窗口大小变化
        appWindow.onResized(async () => {
            setIsMaximized(await appWindow.isMaximized())
        });
    }, [])
    async function changeTheme(e:setThemeProps) {
        setTheme(e)
    }

    return (
        <Flex
            gap="small"
            justify='space-between'
            align='center'
            data-tauri-drag-region
        >
            <div></div>

            <Flex align='center' gap={'small'}>
                <Segmented
                    className='theme-switch'
                    shape="round"
                    block
                    value={themeDark ? 'dark' : 'light'}
                    options={[
                        { value: 'auto', icon: <SyncOutlined /> },
                        { value: 'dark', icon: <MoonOutlined /> },
                        { value: 'light', icon: <SunOutlined /> },
                    ]}
                    onChange={async (e) => {
                        await changeTheme(e as setThemeProps);
                    }
                    }
                />
                <Flex
                    className='ant-segmented ant-segmented-shape-round '
                    style={{
                        minWidth: 110
                    }}
                >
                    {TitleButton.map((item, index) => (
                        <React.Fragment key={`fragment-${index}`}>
                            {index > 0 ?
                                <Divider
                                    style={{ marginInline: 2, marginBlock: 0 }}
                                    type='vertical' />
                                : null}
                            <Button
                                className='TitleBn'
                                {...item}
                            />
                        </React.Fragment>

                    ))}
                </Flex>

            </Flex>
        </Flex>
    );
}

export default App;
