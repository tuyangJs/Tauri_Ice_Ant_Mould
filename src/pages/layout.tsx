
import { Outlet } from 'ice';
import React, { useState } from 'react';
import { ConfigProvider, Flex, Layout } from 'antd';
import Navigation from '@/mod/navigation'
import "./style.less"
import { useTheme } from '@/mod/ThemeConfig';
import TitleBar from '@/mod/Layout/TitleBar'
import Logo from '@/mod/Layout/Logo';
import Hamburg from "@/mod/Layout/breadcrumb"
const { Header, Content, Sider } = Layout;
const AppInit = {
  name: 'Tauri Ice Ant',
  logo: <img className='logo' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
}
const App: React.FC = () => {
  const { generateThemeConfig, isDarkTheme } = useTheme()
  const { antdToken, themeConfig } = generateThemeConfig()
  const { lineWidth, lineType, colorBgContainer, colorBorder } = antdToken
  const [collapsed, setCollapsed] = useState(true);
  return (
    <ConfigProvider
      theme={themeConfig}
    >
      <Layout
        className="drag-region"
      >
        <Sider
          className='selector'
          breakpoint="md"
          collapsedWidth={56}
          collapsed={collapsed}
          onBreakpoint={setCollapsed}
          style={{
            borderInlineEnd: `${lineWidth}px ${lineType} ${colorBorder}`
          }}
        >
          <Logo {...AppInit} />
          <Navigation />
        </Sider>
        <Layout>
          <Content>
            <div
              style={{
                overflow: "auto",
                height: "100vh",
                background: colorBgContainer,
                transform: 'scale(1)',
              }}
            >
              <Header
                className='HeaderAx'
                data-tauri-drag-region
              >
                <Flex justify='space-between' data-tauri-drag-region>
                  <Hamburg collapsed={collapsed} setCollapsed={setCollapsed} />
                  <TitleBar themeDark={isDarkTheme} />
                </Flex>
              </Header>
              <div
                style={{
                  padding: 16
                }}
              >

                <Outlet />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;