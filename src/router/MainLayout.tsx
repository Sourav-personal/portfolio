import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../layouts"

const MainLayout: React.FC = () => {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default MainLayout