import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { Form, Input, Button, Row, Divider, Typography, Flex } from "antd";

const blockContent = `AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;
const { Title, Paragraph, Text, Link } = Typography;
function App() {
  const [greetMsg, setGreetMsg] = useState("");
  async function greet(name: string) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    console.log(name);

    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <Flex gap={16}>
        <a href="https://ant.design/" target="_blank">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" className="logo ant.design" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://v3.ice.work" target="_blank">
          <img src="https://v3.ice.work/img/logo.png" className="logo react" alt="ice logo" />
        </a>
      </Flex>
      <p>Click on the Tauri, Rust, and React logos to learn more.</p>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        onFinish={e => {
          greet(e.greet)
        }}
        layout="inline"
        style={{
          maxWidth: 600
        }}
      >

        <Form.Item
          name="greet"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Enter a name..." />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Greet
          </Button>
        </Form.Item>
      </Form>
      <p>{greetMsg}</p>

      <Typography>
        <Title level={2}>介绍</Title>
        <Paragraph>
          为了方便引入本地模块和资源文件，我们将<Text code>@/</Text>
          重定向到了项目目录<Text code>src</Text>
          目录下。
          <br />
          现在你只需使用<Text code>@/
          </Text>既可快速定位本地资源
        </Paragraph>
        <Paragraph>
          本模板内置了主题生成器 <Text code>@/mod/ThemeConfig</Text>，具体使用方法参考<Text code>layout.tsx</Text>
          文件。
        </Paragraph>


        <Title level={3}>全局标题同步系统</Title>

        <Paragraph>
          我们内置了标题全局同步系统，模块文件为<Text code>@/mod/TitleChange</Text>
          <br />
          通过设置 <Text code>document.title</Text>属性即可修改全局标题
          <br />
          它可以让窗口标题同步更新。
          <br />
          当前窗口标题生成由 <Text code>src\mod\Layout\Logo.tsx</Text>
          提供。
        </Paragraph>
        <Title level={3}>全局主题同步系统</Title>
        <Paragraph>
          我们内置了主题全局同步系统，模块文件为<Text code>@/mod/ThemeConfig</Text>
          <br />
          通过 <Text code>ThemeConfig</Text>导出的<Text code>setTheme</Text>函数可以设置三种主题模式。
          <br />
          它们分别是：  <Text code>light</Text>、<Text code>dark</Text>、<Text code>auto</Text>
 <br />
          <Text code>useTheme</Text>可以获取主题配置，可以通过直接修改 <Text code>ThemeConfig</Text>文件来修改主题。
          <br />
          <Text code>useTheme</Text>使用案例参考<Text code>src\pages\layout.tsx</Text>
          文件。
        </Paragraph>
        <Paragraph>
          <Title level={3}>Mod 目录下</Title>
          <ul>
            <li>
              <Text code>Layout</Text>布局组件
              <ul>
                <li>
                  <Text code>breadcrumb.tsx</Text>面包屑、页面标题组件
                </li>
                <li>
                  <Text code>Logo.tsx</Text>Logo渲染模块
                </li>
                <li>
                  <Text code>TitleBar.tsx</Text> 标题栏组件
                </li>
              </ul>
            </li>
            <li>
              <Text code>navigation</Text>导航栏组件
              <ul>
                <li>
                  <Text code>index.tsx</Text>菜单渲染
                </li>
                <li>
                  <Text code>routes.tsx</Text>菜单数据
                </li>
              </ul>
            </li>
            <li>
              <Text code>svg</Text>svg HTML
            </li>
            <li>
              <Text code>ThemeConfig.ts</Text>主题生成模块
            </li>
            <li>
              <Text code>TitleChange.ts</Text>全局标题同步系统
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <Title level={4}>联系作者</Title>
          <Link href="https://qm.qq.com/q/9CDFgSJn2M" target="_blank">QQ群：703623743</Link>
        </Paragraph>

      </Typography>

    </main >
  );
}

export default App;
