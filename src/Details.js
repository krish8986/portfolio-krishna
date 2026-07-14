// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import redisIcon from "./assets/techstack/redis.svg";
import socketio from "./assets/techstack/socketio.svg";
import docker from "./assets/techstack/docker.svg";
import razorpay from "./assets/techstack/razorpay.svg";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
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
  about: `Backend and full-stack developer building production-grade MERN applications with secure authentication, Redis caching, real-time systems, and cloud deployment. Final-year B.Tech ECE student at MAIT, GGSIPU (minor in AI/ML, graduating May 2026, CGPA 8.68). Shipped Aranya, a live e-commerce platform with 30+ REST APIs, JWT refresh-token auth, Redis-based cache invalidation, Socket.io real-time order tracking, and Docker-based deployment. Completed a full-stack internship at Diginique Tech Labs (with iHUB DivyaSampark, IIT Roorkee) and built an ML-based credit underwriting pipeline. Looking for a Software Engineering role — backend, full-stack, or AI-adjacent — where I can keep shipping systems that work end-to-end.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/krishna-kumar-7558a1229/",
  github: "https://github.com/krish8986",
  leetcode: "https://leetcode.com/u/krishna8986/",
};

export const workDetails = [
  {
    Position: "Full Stack Web Development Intern",
    Company: "Diginique Tech Labs (in collab. with iHUB DivyaSampark, IIT Roorkee)",
    Location: "New Delhi",
    Type: "Internship",
    Duration: "Jul 2024 - Aug 2024",
  },
];


// Enter your Education Details here
export const eduDetails = [
  {
    Position: "10th",
    Company: `DAV Public School`,
    Sgpa: "8.82",
    Location: "Gaya, Bihar",
    Type: "Full Time",
    Duration: "2019 - 2020",
  },
  {
    Position: "Senior Secondary",
    Company: `Gyan Bharti Global school`,
    Sgpa: "9.64",
    Location: "Gaya, Bihar",
    Type: "Full Time",
    Duration: "2021 - 2022",
  },
  {
    Position: "B.Tech in Electronics & Communication Engineering (Minor: AI/ML)",
    Company: `Maharaja Agrasen Institute of Technology (GGSIPU)`,
    Sgpa: "8.68",
    Location: "New Delhi",
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
  redisIcon: redisIcon,
  socketio: socketio,
  docker: docker,
  razorpay: razorpay,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Aranya — Eco-Friendly E-Commerce Platform",
    highlight: "30+ REST APIs · Redis cached · Live in production",
    image: projectImage1,
    featured: true,
    description: `Production-grade MERN e-commerce platform with 30+ RESTful APIs covering auth, products, payments, reviews, orders, and admin workflows. JWT access + refresh-token rotation with httpOnly cookies, role-based authorization, OTP verification, and password recovery. Redis server-side caching with cache invalidation for faster product-listing responses. Real-time order tracking via Socket.io syncing admin and user dashboards instantly. Razorpay payments, Cloudinary storage, Zod validation, Winston logging, Dockerized with Docker Compose, deployed on Railway/Vercel with MongoDB Atlas + Redis Cloud.`,
    techstack: "React, Node.js, Express, MongoDB, Redis, Socket.io, Razorpay, Cloudinary, Docker",
    previewLink: "https://aranya-ecommerce-self.vercel.app",
    githubLink: "https://github.com/krish8986/Aranya-Ecommerce",
  },
  {
    title: "AI Credit Underwriting System",
    highlight: "End-to-end ML pipeline · Hugging Face chatbot",
    image: projectImage2,
    featured: true,
    description: `End-to-end ML pipeline for credit underwriting — data preprocessing, feature engineering, model training and evaluation using scikit-learn classification models to predict loan approval probability. Integrated a Hugging Face-powered conversational assistant to explain predictions and answer loan-related questions, wrapped in an interactive Streamlit UI.`,
    techstack: "Python, Scikit-learn, Streamlit, Hugging Face, Machine Learning",
    githubLink: "https://github.com/krish8986/AI-Predictive-Methods-for-Credit-underwriting",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "krishnagaya234@gmail.com",
  phone: "+91 8986286812",
};
