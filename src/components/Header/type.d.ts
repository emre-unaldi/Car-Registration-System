import React from "react";

export interface HeaderProps {
    collapsed: boolean,
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
    colorBgContainer: string
}