import { ThemeConfig, theme } from 'antd';
import { useEffect, useState } from 'react';
import { Window } from '@tauri-apps/api/window'; 
const appWindow = new Window('main');
const useTheme = () => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: light)');
    const [isDarkTheme, setIsDarkTheme] = useState(!matchMedia.matches);

    useEffect(() => {
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkTheme(!e.matches);
        };

        matchMedia.addEventListener('change', handleChange);
        return () => matchMedia.removeEventListener('change', handleChange);
    }, []);

    // 生成主题配置
    const generateThemeConfig = () => {
        let background = 'transparent';

        const themeConfig: ThemeConfig = {
            algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
            components: {
                Divider: { colorSplit: isDarkTheme ? '#83838329' : '#85858529' },
                Segmented: {
                    trackBg: isDarkTheme ? '#87878745' : '#bfbfbf45',
                    itemSelectedBg: isDarkTheme ? '#23232391' : '#ffffff91',
                },
                Layout: {
                    headerBg: background,
                    siderBg: background,
                    headerHeight: 'auto',
                    headerPadding: "4px"
                },
                Menu: {
                    itemBg: 'transparent',
                    activeBarBorderWidth: 0

                },
            },
            token: {
                colorPrimary: '#ff8c00',
            },
        };
        const antdToken = theme.getDesignToken(themeConfig);
        return { themeConfig, antdToken }

    };



    return { generateThemeConfig, isDarkTheme, setIsDarkTheme };
};

export { useTheme };
export type setThemeProps = 'light' | 'dark' | 'auto';
export const setTheme = (type: setThemeProps) => {
    appWindow.setTheme(type === 'auto' ? null :type)
}