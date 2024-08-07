import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Header from './component/Header'
import Footer from './component/Footer'
import PrivateRoute from './component/PrivateRoute'
import OnlyAdminPrivateRoute from './component/OnlyAdminPrivateRoute'
import CreatePost from "../src/pages/CreatePost"
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './component/ScrollToTop'
import Search from './pages/Search'
export default function App() {
  return (
     <BrowserRouter>
     <ScrollToTop/>
     <Header />
        <Routes>
          <Route path='/' element ={<Home />}></Route>
          <Route path='/about' element ={<About />}></Route>
          <Route path='/sign-in' element ={<SignIn />}></Route>
          <Route path='/sign-Up' element ={<SignUp />}></Route>
          <Route path='/search' element ={<Search/>}></Route>
          <Route element = {<PrivateRoute/>}>
          <Route path='/dashboard' element ={<Dashboard />}></Route>
          </Route>
          <Route element = {<OnlyAdminPrivateRoute/>}>
          <Route path='/create-post' element ={<CreatePost/>}/>
          <Route path='/update-post/:postId' element ={<UpdatePost/>}/>
          </Route>
          <Route path='/project' element ={<Project />}></Route>
          <Route path='/post/:postSlug' element ={<PostPage />}></Route>
        </Routes>
        <Footer/>
     </BrowserRouter>
  )
}
