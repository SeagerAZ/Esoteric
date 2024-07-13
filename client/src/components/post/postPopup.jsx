import './postpopup.scss';
import { useState } from 'react';

function PostPopup({ onClose, onSave }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [price, setPrice] = useState("");
    // const [image, setImage] = useState(null);
    const [images, setImages] = useState([]); // 存储上传图片的 state
    const [isDirty, setIsDirty] = useState(false); // 追踪表单是否修改
    const [error, setError] = useState(""); // 用于显示错误消息

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
        setIsDirty(true); // 标记表单为已修改
    };

    // const handleImageChange = (event) => {
    //     if (event.target.files.length > 0) {
    //         setImage(event.target.files[0]);
    //         setIsDirty(true); // 图片已更改
    //     }
    // };

    const handleImageChange = (event) => {
        const fileList = Array.from(event.target.files); // 将文件列表转换为数组
        const imageUrls = fileList.map(file => URL.createObjectURL(file)); // 生成每个文件的 URL
        setImages(imageUrls); // 更新 images state
        setIsDirty(true); // 设置表单为已修改状态
    };

    const handleClose = () => {
        if (isDirty && window.confirm('You have unsaved changes. Would you like to save them to drafts?')) {
            handleSaveDraft();
        }
        onClose();
    };

    const handleSaveDraft = () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("content", content);
        formData.append("price", price);
        formData.append("image", images);
        console.log('Draft saved'); // 这里应调用一个API保存草稿
        setIsDirty(false); // 重置修改状态
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 检查所有字段是否已填写
        if (!title || !category || !content || !price || images.length === 0) {
            setError("All fields must be filled and an image must be uploaded!"); // 设置错误消息
            return; // 阻止表单提交
        }
        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("content", content);
        formData.append("price", price);
        formData.append("image", images);

        onSave(formData);  // 假设 onSave 处理数据上传逻辑
        setError(""); // 清除错误消息
        setIsDirty(false); // 提交后重置表单修改状态

        // 测试数据是否上传成功
        // for (let [key, value] of formData.entries()) {
        //     console.log(${key}: ${value});
        // }
    };

    return (
        <div className="postPopup">
            <div className="postContainer">
                <div className="postHeader">
                    <h2>Create New Post</h2>
                    <div className="closeBtn" onClick={handleClose}>
                        <img src="/icons8-close-window-50.png" alt="Close" />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    
                    <div className="postTitle">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" placeholder="Title" value={title} onChange={handleInputChange(setTitle)}/>
                    </div>
                    <div className="postCategory">
                        <label htmlFor="category-select">Choose a category:</label>
                        <select id="category-select" value={category} onChange={handleInputChange(setCategory)}>
                            <option value="">--Please choose an option--</option>
                            <option value="fengshui">Feng Shui</option>
                            <option value="astrology">Astrology</option>
                            <option value="tarot">Tarot</option>
                            <option value="ziwei">Zi Wei Ba Dou</option>
                            <option value="bazi">Ba Zi</option>
                            <option value="psyc">Psychology</option>
                        </select>
                    </div>
                    <div className="postContent">
                        <label htmlFor="content">Content:</label>
                        <textarea id="content" cols="30" rows="10" placeholder="Post Content" value={content} onChange={handleInputChange(setContent)}></textarea>
                    </div>
                    <div className="postPrice">
                        <label htmlFor="price">Price:</label>
                        <input type="text" id="price" placeholder="Price" value={price} onChange={handleInputChange(setPrice)}/>
                    </div>
                    <div className="postImg">
                        <label htmlFor="file">Upload Image:</label>
                        <input type="file" id="file" name="file" multiple onChange={handleImageChange}/>
                        <div className="image-preview-container">
                            {images.map((image, index) => (
                                <img key={index} src={image} alt="Preview" className="image-preview" />
                            ))}
                        </div>
                    </div>
                    {error && <div className="errorMessage">{error}</div>} {/* 显示错误消息 */}
                    <div className="postSubmit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PostPopup;
