# 项目介绍

## 介绍
 <img src="[https://github.com/user-attachments/assets/d5b06548-9aed-4219-832c-8f3c80ddcedd](https://github.com/user-attachments/assets/d5b06548-9aed-4219-832c-8f3c80ddcedd)" alt="Screenshot 2" width="45%">
 
本项目旨在提供一个高效、简洁的Tauri模板，并集成了主题系统和全局标题管理。
它由 `Tauri2` + `ice` + `Ant Design` + `React`搭建而成。

为了方便引入本地模块和资源文件，我们将 `@/` 重定向到了项目目录 `src` 目录下。

现在你只需使用 `@/` 既可快速定位本地资源。

本模板内置了主题生成器 `@/mod/ThemeConfig`，具体使用方法参考 `layout.tsx` 文件。

## 主要功能

### 全局标题同步系统

我们内置了标题全局同步系统，模块文件为 `@/mod/TitleChange`

- 通过设置 `document.title` 属性即可修改全局标题。
- 让窗口标题能够与页面标题同步更新。
- 当前页面标题由 `src/mod/Layout/Logo.tsx` 负责生成。

### 全局主题同步系统

我们内置了全局主题同步系统，模块文件为 `@/mod/ThemeConfig`

- 通过 `ThemeConfig` 导出的 `setTheme` 函数可以设置三种主题模式：
  - `light` - 亮色模式
  - `dark` - 暗色模式
  - `auto` - 跟随系统主题
- `useTheme` 可用于获取当前主题配置。
- 主题配置可通过直接修改 `ThemeConfig` 文件进行自定义。
- `useTheme` 使用案例参考 `src/pages/layout.tsx` 文件。

## 目录结构

### Layout 布局组件

- `breadcrumb.tsx` - 面包屑、页面标题组件
- `Logo.tsx` - Logo 渲染模块
- `TitleBar.tsx` - 标题栏组件

### Navigation 导航栏组件

- `index.tsx` - 菜单渲染
- `routes.tsx` - 菜单数据

### 其他模块

- `svg` - svg 相关处理
- `ThemeConfig.ts` - 主题生成模块
- `TitleChange.ts` - 全局标题同步系统

## 适用场景

- 需要快速搭建Tauri项目的开发者
- 需要统一管理全局主题和标题的应用

## 📦 Install
```bash
pnpm install
pnpm dev
```

## 联系作者

[QQ群：703623743](https://qm.qq.com/q/9CDFgSJn2M)
