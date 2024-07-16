import './App.css'
// import './layout.scss'
import HomePage from './routes/homepage/HomePage.jsx' 
import WelcomePage from './routes/welcomepage/WelcomePage.jsx'
import SinglePostPage from './routes/singlepostpage/SinglePostPage.jsx'
import SignUp from './routes/signup/SignUp.jsx'
import SignIn from './routes/signin/SignIn.jsx'
import ForgetPswd from './routes/signin/forgetpswd/forgetPassword.jsx'
import {Layout, RequireAuth} from './routes/layout/Layout.jsx'
import WelLayout from './routes/welcome_layout/welLayout.jsx'
import ProfileLayout from './routes/profile_layout/profileLayout.jsx'
import FavoritePage from './routes/favorite/Favorite.jsx'
import FengShuiPage from './routes/catogories/fengshui/FengShui.jsx'
import AstrologyPage from './routes/catogories/astrology/Astrology.jsx'
import TarotPage from './routes/catogories/tarot/Tarot.jsx'
import ZiweiPage from './routes/catogories/ziwei/Ziwei.jsx'
import BaziPage from './routes/catogories/bazi/Bazi.jsx'
import PsycPage from './routes/catogories/psyc/Psyc.jsx'
import CounselorProfilePage from './routes/counselor/counselor-profile/CounselorProfile.jsx'
import CounselorPostContent from './routes/counselor/counselor-post/counselorPost.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        
        {
          path: "/home",
          element: <HomePage />
        },
        {
          path: "/:id",
          element: <SinglePostPage />
        },
        {
          path: "/favorite",
          element: <FavoritePage />
        },
        {
          path: "/catogories/fengshui",
          element: <FengShuiPage />
        },
        {
          path: "/catogories/astrology",
          element: <AstrologyPage />
        },
        {
          path: "/catogories/tarot",
          element: <TarotPage />
        },
        {
          path: "/catogories/ziwei",
          element: <ZiweiPage />
        },
        {
          path: "/catogories/bazi",
          element: <BaziPage />
        },
        {
          path: "/catogories/psyc",
          element: <PsycPage />
        }

      ]
    },
    { 
      path: "/welcome",
      element: <WelLayout />,
      children: [
        {
          index: true,
          element: <WelcomePage />
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "forgetPassword",
          element: <ForgetPswd />,
        }
      ] 
    },
    {
      path:"/",
      element: <RequireAuth />, 
      // 保护性路由，需要登录才能访问,但我在navbar已经做了重定向，所以这里不会用到
      // 如果删掉navbar的重定向，这里就会用到
      children: [
        {
          path: "/",
          element: <Layout />
        }
      ]

    },
    {
      path: "/profile",
      element: <ProfileLayout />,
      children: [
        {
          path: "counselor/*", // 记得使用相对路径,*表示后面的路径都会被匹配给更多的子路径
          element: <CounselorProfilePage />
          // 其实好像只需要再写三个路径就行？默认为有？ 其实可以换用useState来控制显示的组件
        },
        {
          path: "counselor/post",
          element: <CounselorPostContent />
        },
      ]
    }
  ]);
  
  return (

    <RouterProvider router={router}/>
      
  )
}

export default App
