import React, { useState, useEffect } from 'react';
import './waterfall.scss';

function Waterfall({ items }) {
    const [columnCount, setColumnCount] = useState(5);
    // 不同屏幕宽度下的列数
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setColumnCount(5);
            } else if (window.innerWidth >= 958) {
                setColumnCount(4);
            } else if (window.innerWidth >= 758) {
                setColumnCount(3);
            } else if (window.innerWidth >= 458) {
                setColumnCount(2);
            } else {
                setColumnCount(1);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 初始化调用

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 根据列数创建一个数组，每个元素是一个空数组，用来存储每列的内容
    const columns = Array.from({ length: columnCount }, () => []);
    // 将传入的项按顺序分配到不同的列中
    items.forEach((item, index) => {
        columns[index % columnCount].push(item);
    });

    return (
        <div className="waterfallContainer">
            {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="waterfallColumn" style={{ width: `${100 / columnCount}%` }}>
                    {column}
                </div>
            ))}
        </div>
    );
}

export default Waterfall;
