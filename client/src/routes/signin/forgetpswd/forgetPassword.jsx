import './forgetpswd.scss'

import React, { useState } from 'react';

function ForgetPswd() {
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendEmail = () => {
        // 这里添加发送邮件的代码
        // sendEmailToBackend(email);
        setEmailSent(true);
    };

    return (
        <div className="forgetpswd">
            <div className="bgImg_forget">
                <img src="https://images.unsplash.com/photo-1548276332-76fd45e25952?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

            <div className="forgetpswd-container">
                <h1>Forget Password</h1>
                <p>Enter your email address to receive a password reset link.</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button onClick={handleSendEmail}>Send Email</button>
                {emailSent && <p>Email sent. Please check your inbox.</p>}
            </div>
        </div>
        
    );
}

export default ForgetPswd;