import React, {useState} from 'react'
import {Layout, theme} from 'antd'
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import {LayoutThemeProps} from "./type";

const LayoutTheme: React.FC<LayoutThemeProps> = ({children}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const {token: { colorBgContainer }} = theme.useToken()

    return (
        <Layout style={{width: "100vw", height: "100vh"}}>
            <Sidebar
                collapsed={collapsed}
            />
            <Layout>
                <Header
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    colorBgContainer={colorBgContainer}
                />
                {children}
            </Layout>
        </Layout>
    )
}

export default LayoutTheme