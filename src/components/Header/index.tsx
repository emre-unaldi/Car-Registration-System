import React from "react";
import {Button, Layout} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {HeaderProps} from "./type";

const Header: React.FC<HeaderProps> = ({collapsed, setCollapsed, colorBgContainer}) => {
    const {Header} = Layout

    return (
        <Header style={{padding: 0, background: colorBgContainer}}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    )
}

export default Header