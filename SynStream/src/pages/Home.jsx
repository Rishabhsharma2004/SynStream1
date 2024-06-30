import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      category: "React.js",
      image: "https://www.etatvasoft.com/blog/wp-content/uploads/2020/06/reactjs-for-web-development-why-where-to-use.jpg",
      excerpt: "Learn the basics of React.js and start building dynamic web applications.",
    },
    {
      id: 2,
      title: "Mastering JavaScript",
      category: "JavaScript",
      image: "https://res.cloudinary.com/boardinfinity/image/upload/t_blog_img/bi-websites/blog/11/missing-blog-creatives--2-.png",
      excerpt: "Enhance your JavaScript skills with advanced concepts and techniques.",
    },
    {
      id: 3,
      title: "Next.js for Beginners",
      category: "Next.js",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwQjjfSMIHxEnvC3wxEw3FcfpzxvATuwrfw&s",
      excerpt: "Get started with Next.js and learn how to create server-rendered React applications.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-xl text-gray-600">Stay updated with the latest articles and tutorials</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.category}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
