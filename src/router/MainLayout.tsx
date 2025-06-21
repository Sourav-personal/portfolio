import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components"

const MainLayout: React.FC = () => {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default MainLayout