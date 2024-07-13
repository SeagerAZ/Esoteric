import './counselor-profile.scss'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Drafts from '../contents/drafts/Drafts';
import Orders from '../contents/orders/Orders';
import Posts from '../contents/posts/Posts';
import Availability from '../contents/availability/Availability';
import TagInput from '../../../components/tag/Tag';
// import PersonalIntro from '../../../components/introbox/selfIntro';
import BioEditor from '../../../components/bio/bioEditor';

// 处理日期格式化 -- 显示账户已经建立的天数
function formatDate(dateString) {
    let createdDate = new Date(dateString.slice(0, 10));
    let today = new Date();
    let differenceInMilliseconds = today - createdDate;
    let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays < 1 ? "Today" : differenceInDays < 2 ? "Yesterday" : `${Math.floor(differenceInDays)} days ago`;
}

function CounselorProfile() {
    // 从AuthContext中获取当前用户信息
    const { currentUser } = useContext(AuthContext)
    // console.log(currentUser);
    // 动态管理右边显示的内容， 默认显示post, 如果后面需要考虑加载性能，可以考虑懒加载react.lazy和suspense
    const [view, setView] = useState("post"); 

    const renderContent = () => {
        switch (view) {
            case "post":
                return <Posts />
            case "draft":
                return <Drafts />
            case "order":
                return <Orders />
            case "availability":
                return <Availability />
            default:
                return <Posts />
        }
    };

    return (
        <div className="counselor-profile">
            {/* 左边排版 */}
            <div className="counselor-profile-left">
                
                <div className="counselor-info">
                    <div className="counselor-avatar">
                        <img src={currentUser.avatar || "/icons8-avatar-64.png"} alt="" />
                    </div>
                    <div className="counselor-info-details">

                        <div className="counselor-nickname">{currentUser.nickname || currentUser.username}</div>
                        <div className="counselor-name">Username: {currentUser.username}</div>
                        <div className="counselor-createdDate">Created {formatDate(currentUser.createdAt)}</div>
                    </div>
                    <div className="counselor-info-edit">
                        <img src="/icons8-edit-64.png" alt="" />
                    </div>
                </div>

                <div className="counselor-personalised-tags">
                    <p>Personal Tags</p>
                    {/* <span>
                    诚信，可靠，专业，负责，耐心，细心，有爱心，有责任心，有同理心
                    </span> */}
                    <TagInput />
                </div>

                <div className="counselor-self-intro">
                    {/* <span>
                        {currentUser.bio || "这里是您的个人简介，可以介绍您的专业背景，工作经验，擅长领域等等,点击右上角编辑按钮进行编辑，最多200字。"}
                    </span> */}
                    {/* <PersonalIntro/> */}
                    <BioEditor/>
                </div>
            </div>

            {/* 右边排版 */}
            <div className="counselor-profile-right">
                {/* 第一种, 直接更新page */}
                {/* <div className="counselor-profile-navbar">
                    <a href="/profile/counselor">Post</a>
                    <a href="/profile/counselor/draft">Draft</a>
                    <a href="/profile/counselor/order">Order</a>
                    <a href="/profile/counselor/availability">Availability</a>
                </div>

    
                <div className="counselor-profile-content">
                    写成四个组件,分别是Posts, Drafts, Order, Availability,放在一个layout里面。
                    然后根据点击的不同导航栏，显示不同的组件。
                </div> */}
                {/* <Router> */}
                {/* 第二种，利用router更新page */}
                    {/* <div className="counselor-profile-navbar">
                        <Link to="/profile/counselor/post">Post</Link>
                        <Link to="/profile/counselor/draft">Draft</Link>
                        <Link to="/profile/counselor/order">Order</Link>
                        <Link to="/profile/counselor/availability">Availability</Link>
                    </div>
                    <div className="counselor-profile-content">
                        <Routes>
                            <Route path="/profile/counselor/post" element={<Posts />} />
                            <Route path="/profile/counselor/draft" element={<Drafts />} />
                            <Route path="/profile/counselor/order" element={<Orders />} />
                            <Route path="/profile/counselor/availability" element={<Availability />} />
                        </Routes>
                    </div> */}
                {/* </Router> */}
                {/* 第三种， 不另外写页面，*/}
                <div className="counselor-profile-navbar">
                    {/* 给button添加了content转换停留颜色 */}
                    <button 
                    className={`button ${view === 'post' ? 'button-active' : ''}`}
                    onClick={() => setView('post')}>Post</button>
                    <button 
                    className={`button ${view === 'draft' ? 'button-active' : ''}`}
                    onClick={() => setView('draft')}>Draft</button>
                    <button 
                    className={`button ${view === 'order' ? 'button-active' : ''}`}
                    onClick={() => setView('order')}>Order</button>
                    <button 
                    className={`button ${view === 'availability' ? 'button-active' : ''}`}
                    onClick={() => setView('availability')}>Availability</button>
                </div>
                <div className="counselor-profile-content">
                    {renderContent()}
                </div>
            </div>

        </div>
    )
}

export default CounselorProfile