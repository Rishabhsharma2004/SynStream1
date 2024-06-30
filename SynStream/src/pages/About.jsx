import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600">Learn more about our mission and the team behind the blog</p>
      </header>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-loose">
          Our mission is to provide high-quality content that helps developers of all skill levels improve their knowledge and skills in various areas of web development. We believe in the power of education and aim to create a community where learning is accessible, engaging, and enjoyable.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoq89YWKgHnNzY3SK0-4dGLHchIpqKdGbgw&s"
              alt="Team Member 1"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
            <p className="text-gray-700 mt-2">
              John is a passionate developer with over 10 years of experience in the industry. He founded this blog to share his knowledge and help others succeed in their coding journey.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://img.lovepik.com/free-png/20211111/lovepik-a-competent-professional-woman-png-image_400850568_wh1200.png"
              alt="Team Member 2"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-500">Content Manager</p>
            <p className="text-gray-700 mt-2">
              Jane oversees all content published on the blog. With a background in web development and content creation, she ensures that every article is informative and engaging.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/025/474/309/large_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"
              alt="Team Member 3"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
            <p className="text-gray-500">Lead Developer</p>
            <p className="text-gray-700 mt-2">
              Alex is our lead developer, specializing in React and Node.js. He is responsible for the technical aspects of the blog and ensures that everything runs smoothly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
