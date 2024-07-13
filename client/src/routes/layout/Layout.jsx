// 管理页面的样式
import './layout.scss'
import Navbar from '../../components/navbar/Navbar.jsx'
import CatogoryNavbar from '../../components/classifynavbar/CatogoryNavbar.jsx'
import { Navigate, Outlet} from "react-router-dom" 
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect } from 'react'

function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="catogory">
                <CatogoryNavbar/>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

// function profileLayout() {
//     return (
//         <div className="layout">
//             <div className="navbar">
//                 <Navbar/>
//             </div>
//             <div className="content">
//                 <Outlet/>
//             </div>
//         </div>
//     )
// }

// 保护性路由
function RequireAuth() {
    const {currentUser} = useContext(AuthContext);
    
    useEffect(() => {
        if (!currentUser) {
            <Navigate to="/welcome/login"/>
        }
    }
    , [currentUser]);

    return (
        <div className="layout">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="catogory">
                <CatogoryNavbar/>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

export {Layout, RequireAuth}