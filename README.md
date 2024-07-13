# Esoteric
Full-stack project with Vite (React), SCSS, Node.js, Express.js and MongoDB

# Installation

## Front-end 在名为client的文件夹下打开终端：
npm create vite@latest
——————————————————————————
Need to install the following packages:
  create-vite@5.2.3
Ok to proceed? (y) y
✔ Project name: … esoretic_frontend
✔ Select a framework: › React
✔ Select a variant: › JavaScript


cd esoretic_frontend
npm install
npm install react-router-dom 先安装route再开启网站
npm run dev
npm i scss
npm i axios


## Back-end 在名为server的文件夹下打开终端：
npm init -y  创建json文件
在json文件中加上"type": "module",
// 用于指定入口文件的类型，使用import而不是require

npm i express
npm i nodemon 持续监听
或者使用第三方插件 console-ninja node --watch app.js

npm i bcrypt 密码hash加密
npm i prisma
npx prisma init --datasource-provider mongodb
npm i @prisma/client
npm mongo db
npm i dotenv // 在app.js导入

如果prisma的model有更新
需要在terminal中更新，npx prisma db push

npm i cookie-parser
npm i jsonwebtoken 

生成随机密钥
openssl rand -base64 32

npm i cors

# Functions

## 
