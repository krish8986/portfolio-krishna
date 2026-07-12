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
import sass from "./assets/techstack/sass.png";
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

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "KRISHNA KUMAR",
  tagline: "Full Stack Developer (MERN)",
  img: profile,
  about: `Final-year ECE with minor in AI/ML student at MAIT, GGSIPU (graduating 2026, CGPA 8.68) who builds production-grade full-stack applications. I recently shipped Aranya, a MERN e-commerce platform with Redis caching, real-time order tracking via Socket.io, JWT refresh-token auth, and an admin analytics dashboard — deployed and live. I also build AI/ML-powered tools, including a credit underwriting system using Streamlit and Hugging Face. I'm looking for a Software Engineering role (backend, full-stack, or AI-adjacent) where I can keep shipping things that work end-to-end, not just in a demo.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/krishna-kumar-7558a1229/",
  github: "https://github.com/krish8986",
  leetcode: "https://leetcode.com/u/krishna8986/",
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
    Position: "B.Tech in Electronics & Communication Engineering",
    Company: `Maharaja Agrasen Institute of Technology (GGSIPU)`,
    Sgpa: "8.68",
    Location: "Delhi NCR",
    Type: "Full Time",
    Duration: "Nov 2022 - May 2026",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
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
    title: "Aranya — Eco-Friendly E-Commerce Platform",
    image: projectImage1,
    featured: true,
    description: `Production-grade full-stack MERN e-commerce platform. Redis caching for ~20x faster product listing responses, Socket.io for real-time order tracking, JWT refresh-token auth with httpOnly cookies, Razorpay payments with idempotency checks, Cloudinary image storage, OTP email verification, an admin analytics dashboard built on MongoDB aggregation pipelines, Zod validation, Winston logging, and per-route rate limiting. Containerized with Docker and deployed with MongoDB Atlas + Redis on Railway.`,
    techstack: "React, Node.js, Express, MongoDB, Redis, Socket.io, Razorpay, Cloudinary, Docker",
    previewLink: "https://aranya-ecommerce-self.vercel.app",
    githubLink: "https://github.com/krish8986/Aranya-Ecommerce",
  },
  {
    title: "AI Credit Underwriting System",
    image: projectImage2,
    featured: true,
    description: `An AI-powered credit underwriting tool that predicts loan risk from applicant financial data. Combines a trained ML model with a Hugging Face chatbot for natural-language Q&A on the decision, wrapped in an interactive Streamlit UI so non-technical users can run and understand the assessment.`,
    techstack: "Python, Machine Learning, Streamlit, Hugging Face",
    githubLink: "https://github.com/krish8986/AI-Predictive-Methods-for-Credit-underwriting",
  },
  // {
  // title: "Blog Platform",
  // image: projectImage3,
  // description: `Full CRUD blogging platform built on the MERN stack with JWT + bcrypt-based authentication, letting users create, edit, and manage posts through an interactive interface.`,
  // techstack: "React, Node.js, Express, MongoDB, JWT, Bootstrap",
  // githubLink: "https://github.com/krish8986/Blog-platform",
  // },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "krishnagaya234@gmail.com",
  phone: "+91 8986286812",
};
