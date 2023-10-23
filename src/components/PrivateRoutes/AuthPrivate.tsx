import React from "react";
import {Navigate} from "react-router-dom";
import {AuthPrivateProps} from "./type";

const AuthPrivate: React.FC<AuthPrivateProps> = ({children}) => {
    const data: string | null = localStorage.getItem("isAuth")
    const parseData = data !== null ? JSON.parse(data) : null

    if (parseData === null && parseData?.isActive !== 'true') {
        return (
            <Navigate
                to={"/"}
            />
        )
    }

    return children
}

export default AuthPrivate