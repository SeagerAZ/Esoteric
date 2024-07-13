import './navbar.scss'
import SearchBar from '../searchbar/SearchBar';
import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
    // 用来获取当前用户信息
    const {currentUser, updatetUser} = useContext(AuthContext);
    // menu 用来控制菜单的显示与隐藏（小屏幕）
    const [menu, setMenu] = useState(false);
    // 用于控制下拉菜单的显示与隐藏
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null); // 用于获取下拉菜单的DOM元素
    // 用于路由跳转
    const navigate = useNavigate();
    // switch to selling/switch to buying
    const [isSelling, setIsSelling] = useState(true);
    // 退出登陆
    // const handleLogout = () => {
    //     localStorage.removeItem('user');
    //     window.location.href = '/welcome/signin';
    // }

    // 点击下拉菜单外部隐藏下拉菜单
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // ref.current 指向的是下拉菜单的DOM元素 domRef.current.contains(event.target) 判断点击的元素是否在下拉菜单内部
            if (dropdown && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(false); // 点击下拉菜单外部隐藏下拉菜单
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [dropdown]);

    useEffect(() => {
        if (!currentUser) {
            navigate('/welcome/signin');
        }
    }, [currentUser], navigate);

    const toggleDropdown = () => {
        setDropdown(prevDropdown => !prevDropdown);
    };

    const handleLogout = async () => {
        try {
            await apiRequest.post('/auth/logout');
            // console.log(res.data);
            // localStorage.removeItem('user'); // 清除本地存储的用户信息
            updatetUser(null); // 更新全局用户信息
            navigate('/welcome/signin');
        }
        catch (error) {
            console.log(error);
        }
    };
    
    const toggleSwitchMode = () => {
        setIsSelling(prev => !prev);
    };


    
    return (
        currentUser && (
        <nav>
            <div className="menuIcon" onClick={()=>setMenu((prev)=>!prev)}>
                    <img src="/icons8-menu-64.png" alt="menu" />
            </div>
            <div className={menu ? "menu active" : "menu"}>
                <a href='/home'>Home</a>
                <a href='/'>Notification</a>
                <a href='/'>Mail Box</a>
                <a href='/favorite'>Liked</a>
                <button className="menuLogout" onClick={handleLogout}>Log Out</button>

            </div>
            <div className="left">
                
                <div className="logo">
                    <Link to='/home'>
                        {/* <img src="/logo_transparent.png" alt="logo" /> */}
                        <span>Esoteric</span>
                    </Link>

                </div>
                <div className="searchbar">
                    <SearchBar />
                </div>
            </div>


            <div className="icons">
                <Link to="/">
                    <img src="/icons8-notification-64.png" alt="heart" />
                </Link>

                <Link to="/favorite">
                    <img src="/icons8-mail-64.png" alt="heart" />
                </Link>
                
                <Link to="/favorite">
                    <img src="/icons8-heart-64.png" alt="heart" />
                </Link>
            </div>
            <div className="order">
                {/* <span>
                    Order
                    profile/counselor

                </span> */}
                <Link to="/profile/counselor">
                    Order
                </Link>
            </div>
            <div className="switch">
                
                <Link to={isSelling ? '/profile/counselor' : '/profile/client'}>
                    <span onClick={toggleSwitchMode}>
                        {isSelling ? 'Switch to Buying' : 'Switch to Selling'}
                    </span>
                </Link>
            </div>
            <div className="avatar" ref={dropdownRef} onClick={toggleDropdown}>
                <span>{currentUser.username}</span>
                {/* <img src="/icons8-user-96.png" alt="avatar" /> */}
                <img  src={currentUser.avatar || "/icons8-avatar-64.png"} alt="avatar" />
                {dropdown && (
                    <div className="dropdownMenu">
                        <Link to="/profile/counselor"><span>Profile</span></Link>
                        <button onClick={handleLogout} >Logout</button>
                    </div>
                )}
            </div>
            
        </nav>
        )
    )
}

export default Navbar;