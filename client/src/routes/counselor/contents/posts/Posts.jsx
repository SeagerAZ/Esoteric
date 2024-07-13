import './counselorPosts.scss'
import { useContext, useState } from 'react'
import PostPopup from '../../../../components/post/postPopup'

export default function Posts() {
    const [showPopup, setShowPopup] = useState(false);

    const handleSave = (formData) => {
        console.log("Post data: ", formData);
        setShowPopup(false);
        // 这里可以调用 API 发送 formData 到服务器
    };

    return (
        <div>
            <div className="counselorPostContent">
                <div className="counselorCreatePost">
                    <div className="createCard">
                        <img src="/icons8-add-64.png" alt="" onClick={() => setShowPopup(true)}/>
                        <span>Add New Post</span>
                    </div>
                </div>
                {/* <PostPopup /> */}
                {showPopup && <PostPopup onClose={() => setShowPopup(false)} onSave={handleSave} />}
                <div className="counselorPostContainer">
                    这里放posts list，估计是得重新写个组件？
                </div>
            </div>
        </div>
    )
}

