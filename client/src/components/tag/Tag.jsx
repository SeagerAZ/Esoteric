// 自定义标签输入框
import React, { useState } from 'react';
import './tag.scss'; 

function TagInput() {
    const [tags, setTags] = useState([]); // 标签数组
    const [input, setInput] = useState(''); // 当前输入内容

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && input && tags.length < 5) { // 最多5个标签
            if (input.length <= 10 && !tags.includes(input)) { // 标签不超过10个字符
                setTags([...tags, input]);
                setInput('');
            }
        }
    };

    const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    return (
        <div className="tag-input-container">
            {tags.length < 5 && (
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Click to add a tag here"
                    maxLength={10}
                />
            )}
            <ul>
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        {tag}
                        <button onClick={() => removeTag(index)}>
                            <img src="/icons8-close-96.png" alt="" />
                        </button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default TagInput;
