// usecontext hook is used to access the context value quickly and easily

import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    
    );

    // 用户改变后更新用户信息到localStorage
    const updatetUser = (data) => {
        setCurrentUser(data);
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);


    return (
        <AuthContext.Provider value={{currentUser, updatetUser}}>
            {children}
        </AuthContext.Provider>
    )

}
