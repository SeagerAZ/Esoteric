// home page 的欢迎框组件
import './welcomebox.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function WelcomeBox() {
    // 用来获取当前用户信息
    const {currentUser} = useContext(AuthContext);
    return (
        <div className="welcomeBox">
            <div className="left">
                Welcome Back, {currentUser.username} 🙋
            </div>
            <div className="right">
                <a href="/user-guide.pdf" target="_blank" rel="noopener noreferrer">
                {/* target="_blank"：在新标签页中打开链接 */}
                {/* rel="noopener noreferrer"：安全属性，防止新打开的页面获得对原始页面的访问权 */}
                    Here is an User Guide for you!  📖
                </a>
            </div>

        
        </div>
    )
}

export default WelcomeBox