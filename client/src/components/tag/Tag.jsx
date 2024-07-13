// 自定义标签输入框
import React, { useState } from 'react';
import './tag.scss'; 

function TagInput() {
    const [tags, setTags] = useState([]); // 标签数组
    const [input, setInput] = useState(''); // 当前输入内容
    const [error, setError] = useState(''); // 错误提示

    const handleInputChange = (e) => {
        setInput(e.target.value);
        if (input.length > 10) {
            setError('Tag should not exceed 10 characters');
        } else {
            setError(''); // 清空错误提示
        }
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && input && tags.length < 5) { // 最多5个标签
            if (input.length <= 10 && !tags.some(tag => tag.text.toLowerCase() === input.toLowerCase())) { // 标签不超过10个字符
                const newTag = {
                    text: input,
                    color: randomColor()
                };
                setTags([...tags, newTag]);
                setInput('');
            } else {
                setError('Tag must be unique!');
                // 错误信息3秒后消失
                // setTimeout(() => {
                //     setError('');
                // }
                // , 2000);

            }
        }
    };

    // 删除标签
    const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    // 预定义颜色数组
    const colors = [
        '#e4cbbb', '#b3c0cf', '#bcbddd', '#a38a63', '#cdd4b7', 
        '#d9c2ce', '#8d657a', '#636698', '#d9c6a9', '#89D377'
    ]; 
    // 生成标签随机颜色
    const randomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

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
            {error && <p className="errorPop">{error}</p>} {/* 显示错误信息 */}
            <ul>
                {tags.map((tag, index) => (
                    <li key={index} className="tag" style={{ backgroundColor: tag.color }}>
                        <span className='tagInput'>
                            {tag.text}
                        </span>
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
