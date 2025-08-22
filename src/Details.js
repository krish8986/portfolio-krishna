// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
// import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "KRISHNA KUMAR",
  tagline: "MERN Stack Developer | ECE Student",
  img: profile,
  about: `I am a final-year Electronics & Communication Engineering student with strong skills in full-stack web development (MERN). I love building scalable web apps, solving problems, and learning new technologies like cloud and IoT.`,
  
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/krishna-kumar-7558a1229/",
  github: "https://github.com/krish8986",
  twitter: "https://leetcode.com/u/krishna8986/",
  instagram: "https://www.instagram.com/krishna_kumar74/",
};

export const workDetails = [];

// Enter your Work Experience here
// export const workDetails = [
  // {
    // Position: "Frontend Web Developer",
    // Company: `Company Name here`,
    // Location: "Bengaluru",
    // Type: "Full Time",
    // Duration: "Sep 2021 - Dec 2021",
  // },
  // {
    // Position: "Internship",
    // Company: `Company Name here`,
    // Location: "Bengaluru",
    // Type: "Internship",
    // Duration: "Sep 2021 - Dec 2021",
  // },
  // {
    // Position: "Internship",
    // Company: `Company Name here`,
    // Location: "Bengaluru",
    // Type: "Internship",
    // Duration: "Sep 2021 - Dec 2021",
  // },
// ];

// Enter your Education Details here
export const eduDetails = [
  {
  Position: "Senior Secondary",
  Company: `Gyan Bharti Global school`,
  Sgpa: "9.6",
  Location: "Gaya, Bihar",
  Type: "Full Time",
  Duration: "Nov 2021 - 2022",
},
  {
    Position: "Bachelor in Electronics & Communication",
    Company: `Maharaja Agresen Institute of Technology `,
    Sgpa:"8.4",
    Location: "New Delhi",
    Type: "Full Time",
    Duration: "Nov 2022 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  // sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Aranya E-commerce",
    image: projectImage1,
    description: `Full-stack MERN e-commerce platform with JWT authentication, Razorpay payments, product catalog, and admin dashboard.`,
    techstack: "React, Node.js, Express, MongoDB, Razorpay API",
    previewLink: "https://aranya-client.onrender.com/",
    githubLink: "https://github.com/krish8986/Aranya",
  },
  {
    title: "Tic Tac Toe",
    image: projectImage2,
    description: `This is a simple Tic Tac Toe game built using HTML, CSS, and JavaScript. The game allows two players to take turns placing their marks (X or O) on a 3x3 grid, with the goal of forming a line horizontally, vertically, or diagonally. It features a clean user interface, responsive design, and real-time winner detection. Once a player wins or the game ends in a draw, the board can be reset to play again.`,
    techstack: " HTML5, CSS, Javascript",
    githubLink: "https://github.com/krish8986/Tic_Tac_Toe",
  },
  {
    title: "Blog Platform",
    image: projectImage3,
    description: `This is a Blog Platform built using the MERN stack, designed to allow users to create, read, update, and delete blog posts. The platform aims to provide features like user authentication, blog management, and an interactive interface for sharing thoughts and ideas.
Currently, the project is under development and new features (such as likes, comments, categories, and deployment) are planned to be added in upcoming versions.`,
    techstack: "React, Node.js, Express, MongoDB, JWT & bcrypt, CSS(Bootstrap)",
    githubLink: "https://github.com/krish8986/Blog-platform",
  },
  {
    title: "Amazon-clone",
    image: projectImage4,
    description: `This is an Amazon-inspired e-commerce web application built to replicate core front/Home slide of the Amazon platform. LATER PART (Although still under development, later the project aims to offer users a seamless shopping experience—featuring product browsing, a shopping cart, user authentication, and secure payments. The intent is to eventually enable features like product search, order management, and a responsive UI that works across devices.)`,
    techstack: "HTML5, CSS, JavaScript",
    githubLink: "https://github.com/krish8986/amazon-clone",
  },
  {
    title: "Portfolio-krishna",
    image: projectImage5,
    description: `This personal portfolio website built using React.js to showcase my projects, skills, and resume.`,
    techstack: "React.js, CSS, Bootstrap",
    previewLink: "https://krishna-portfolio.vercel.app", // after deploy
    githubLink: "https://github.com/krish8986/portfolio-krishna",
  },
  // {
    // title: "Project title 6",
    // image: projectImage6,
    // description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
    // techstack: "HTML/CSS, JavaScript",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  // },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "krishnagaya234@gmail.com",
  phone: "+91 8986286812",
};
