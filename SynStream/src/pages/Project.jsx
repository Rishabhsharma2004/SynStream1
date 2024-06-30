import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20220917223405/5BestMERNProjectsToAddInResume.gif",
      description: "This is a brief description of Project One. It involves React.js and Firebase integration."
    },
    {
      id: 2,
      title: "Project Two",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbuehtyDcl9nN93abLTPIC0jNTLQZfzy7iA&s",
      description: "This is a brief description of Project Two. It focuses on building a RESTful API with Node.js."
    },
    {
      id: 3,
      title: "Project Three",
      image: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fe895b1b4ut7axzo20njc.png",
      description: "This is a brief description of Project Three. It covers advanced JavaScript techniques and patterns."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600">Explore some of our latest projects</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={`/projects/${project.id}`} className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
