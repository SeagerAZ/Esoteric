import React, { useState, useEffect } from 'react';
import './counselorOrders.scss'

// 模拟的订单数据
const mockOrders = [
    {
        id: 1,
        clientName: "John Doe",
        service: "Tarot Reading",
        status: "Pending",
        date: "2024-07-10"
    },
    {
        id: 2,
        clientName: "Jane Smith",
        service: "Astrology Consultation",
        status: "Completed",
        date: "2024-07-08"
    },
    {
        id: 3,
        clientName: "Alice Johnson",
        service: "Feng Shui Advice",
        status: "InProgress",
        date: "2024-07-09"
    }
];

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // 在这里调用后端API获取订单数据
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        // 模拟API调用
        setOrders(mockOrders);
        // 以下是调用真实API的示例代码
        // try {
        //     const response = await fetch('/api/orders');
        //     const data = await response.json();
        //     setOrders(data);
        // } catch (error) {
        //     console.error('Failed to fetch orders:', error);
        // }
    };

    return (
        <div className="orders-container">
            <h1>Client Orders</h1>
            {orders.map(order => (
                <div key={order.id} className="order">
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Client Name:</strong> {order.clientName}</p>
                    <p><strong>Service:</strong> {order.service}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Date:</strong> {order.date}</p>
                </div>
            ))}
        </div>
    );
}

export default Orders;
