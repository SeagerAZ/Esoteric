import React, { useState, useEffect } from 'react';
import './waterfall.scss';

function Waterfall({ items }) {
    const [columnCount, setColumnCount] = useState(5);

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

    const columns = Array.from({ length: columnCount }, () => []);
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
