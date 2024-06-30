# Rishabh Blog - README

## Overview

Welcome to Rishabh Blog! This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The blog site allows users to create, read, update, and delete blog posts and allows user to create, read, update, delete user. This README provides instructions on how to set up, run, and contribute to the project.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)


## Features

- User authentication and authorization (sign up, log in, log out)
- User dashboard
- Create, read, update, and delete blog posts
- Create, read, update, and delete User
- Blog management
- Theme switcher
- Responsive design for mobile and desktop views
- State management with React-Redux
- Error handling

## Technology Stack

- **MongoDB**: NoSQL database for storing blog posts and user data
- **Express.js**: Web framework for Node.js
- **React**: Front-end library for building user interfaces
- **Node.js**: JavaScript runtime for the back-end server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React-Redux**: State management for React applications

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Rishabhsharma2004/SynStream1.git
    cd SynStream
    ```

2. **Install server dependencies:**

    ```sh
    cd StreamYard
    npm install
    ```

3. **Install client dependencies:**

    ```sh
    cd ../SynStream
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `server` directory and add the following variables:

    ```sh
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```
## Running the Application

## Steps

To get a local copy of the project up and running, follow these steps:


1. Clone the Repository:

bash
  git clone https://github.com/Rishabhsharma2004/SynStream1.git

2. Open the StreamYard file in Visual Studio.
3. Build the project to restore dependencies.

4. Run the application.

## Home Page
![App Screenshot](https://i.ibb.co/yhWBGsw/Screenshot-262.png)


## Submit Details

1. Create User Accont
2. Click on the "Signin" button.
3. Fill in the required fields: Name, Email, password.
4. Click on the "Sigin" button to save the submission.


![App Screenshot](https://i.ibb.co/KK84qmD/Screenshot-263.png)


## Create , Update, Delete Post

1. Create, Update, Delete Post
2. Click on the "Publish" button.
3. Fill in the required fields: title, image, data.
4. Click on the "Publish" button to save the submission.


![App Screenshot](https://i.ibb.co/j3KptFr/Screenshot-264.png)

## View Blog

![App Screenshot](https://i.ibb.co/MPHN184/Screenshot-265.png)


1. **Start the MongoDB server:**

    Make sure MongoDB is running on your machine. You can start it using the following command:

    ```sh
    mongod
    ```

2. **Start the back-end server:**

    ```sh
    cd StreamYard
    npm run dev
    ```

    The server will start on `http://localhost:5000`.

3. **Start the front-end server:**

    Open a new terminal and run:

    ```sh
    cd client
    npm run dev
    ```

    The client will start on `http://localhost:3000`.

## Project Structure

```text
StreamYard/
│
├── api/                 # Back-end code
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── .env                # Environment variables
│   └── server.js           # Entry point for the server
│
├── SynStream/                 # Front-end code
│   ├── public/             # Public assets
│   ├── src/                # React components and files
│   │   ├── assets/         # Static assets (images, fonts, etc.)
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Application pages
│   │   ├── redux/          # Redux setup and slices
│   │   ├── app.jsx         # Main React component
│   │   ├── firebase.js     # Firebase configuration
│   │   ├── index.css       # Global CSS
│   │   ├── input.css       # Tailwind CSS input file
│   │   └── main.jsx        # Entry point for React
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── postcss.config.js   # PostCSS configuration for Tailwind CSS
│
├── README.md               # Project documentation
└── package.json            # Project metadata and dependencies