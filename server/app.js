import detenv from 'dotenv'
detenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import postRoutes from './routes/post.route.js';
import authRoutes from './routes/auth.route.js';
import testRoutes from './routes/test.route.js';

const app = express();

app.use(express.json()); // this is a middleware that allows us to parse incoming requests with JSON payloads
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true // 允许把cookie发送到客户端
}));

app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');

});