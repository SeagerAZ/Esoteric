import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    // db operations
    const { username, email, password } = req.body;
    try {
        // hash password 对密码加密
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        // create a new user in the database
        const newUser = await prisma.user.create ({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log(newUser);

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to create user! Try Another Email' });
    }
}

export const login = async (req, res) => {
    // db operations
    const { email, password } = req.body;

    try {
         // find the user in the database, check if the user exists
        const user = await prisma.user.findUnique({
            where: {email}
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid Credentials!' });
        }
        // if the user exists, compare the password is correct or not
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid Credentials (Wrong pswd)!' });
        }
        // if the password is correct, create a cookie for the user
        // res.setHeader('Set-Cookie', "test="+"myValue").json({ message: 'Login successful!' })
        
        // create a token for the user
        const age = 1000 * 60 * 60 * 24 * 7; // 7 days
        const token = jwt.sign(
            { 
                id: user.id,
                isAdmin: false,}, 
            process.env.JWT_SECRET_KEY, 
            { expiresIn: age }
        );

        // remove the password from the user object, so that it is not sent to the client
        const { password: userPassword, ...userInfo } = user;
        // 使用cookie-parser
        
        res.cookie("token", token, { 
            httpOnly: true,
            // secure: true, 本地测试时不需要
            maxAge: age,
        }).status(200).json(userInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to login' });
    }

}

export const logout = (req, res) => {
    // db operations
    res.clearCookie("token").status(200).json({ message: 'Logout successful!' });
}

