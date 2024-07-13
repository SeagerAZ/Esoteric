import { Outlet} from "react-router-dom" 
import Navbar from '../../components/navbar/Navbar.jsx'


function profileLayout() {
    return (
        <div className="wellayout">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

export default profileLayout