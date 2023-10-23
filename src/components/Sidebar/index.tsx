import React, {useEffect, useState} from "react";
import {Divider, Flex, Layout, Menu, Typography} from "antd";
import {CarFilled, HomeFilled, LockFilled} from "@ant-design/icons";
import {SidebarProps} from "./type";
import {Link, useLocation} from "react-router-dom"

const {Sider} = Layout
const {Text} = Typography
const Sidebar: React.FC<SidebarProps> = ({collapsed}) => {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([location.pathname]);

    useEffect(() => {
        setSelectedKeys([location.pathname])
    }, [location])

    return (
        <Sider theme={"light"} trigger={null} collapsible collapsed={collapsed}>
            <Flex vertical align={"center"} justify={"center"} style={{ height: "10%", width: "100%"}}>
                <CarFilled />
                <Text strong={true}>
                    UNALDİ
                </Text>
            </Flex>
            <Divider
                style={{
                    marginBottom: 10,
                    marginTop: 0
                }}
            />
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={selectedKeys}
                >
                <Menu.Item key="/home" icon={<HomeFilled />}>
                    <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="/changePassword" icon={<LockFilled />}>
                    <Link to="/changePassword">Change Password</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar