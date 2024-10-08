import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Project from './pages/Project';
import Dashboard from './pages/Dashboard';
import Header from './component/Header';
import Footer from './component/Footer';
import PrivateRoute from './component/PrivateRoute';
import OnlyAdminPrivateRoute from './component/OnlyAdminPrivateRoute';
import CreatePost from "./pages/CreatePost";
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './component/ScrollToTop';
import Search from './pages/Search';
import Preloader from './component/Preloader';
import Contact from './pages/Contact';
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simulate a delay (e.g., for loading data) or use your actual data fetching logic
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000); // Adjust the duration as needed

      return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/search' element={<Search />} />
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route element={<OnlyAdminPrivateRoute />}>
              <Route path='/create-post' element={<CreatePost />} />
              <Route path='/update-post/:postId' element={<UpdatePost />} />
            </Route>
            <Route path='/project' element={<Project />} />
            <Route path='/post/:postSlug' element={<PostPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}
