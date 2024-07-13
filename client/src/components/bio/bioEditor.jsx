import React, { useState } from 'react';
import './bioeditor.scss'; 

function BioEditor() {
    const [bio, setBio] = useState("这里是您的个人简介，点击编辑按钮进行编辑，最多300字。");
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState(bio);

    const handleInputChange = (e) => {
        if (e.target.value.length <= 300) {
            setInput(e.target.value);
        }
    };

    const handleSave = () => {
        setBio(input);
        setIsEditing(false);
        // 这里添加存储到后端的代码
        // saveBioToBackend(input);
    };

    return (
        <div className="bio-editor-container">
            {isEditing ? (
                <div className="bio-editor">
                    <textarea
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Write your bio..."
                    />
                    <div className="bio-editor-actions">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="bio-display">
                    <p>{bio}</p>
                    <button onClick={() => setIsEditing(true)}>
                        <img src="/icons8-edit-64.png" alt="" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default BioEditor;
