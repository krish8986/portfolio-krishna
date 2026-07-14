import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from([h11.current, h12.current, h13.current], {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    }).from(
      myimageref.current,
      { opacity: 0, duration: 0.8, ease: "power2.out" },
      "<0.2"
    );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
        <div className="flex flex-wrap gap-4 pt-8">
          <NavLink
            to="/projects"
            className="bg-gradient text-white font-medium px-6 py-3 rounded-full shadow hover:opacity-90 transition"
          >
            View Projects
          </NavLink>
          <a
            href="krishna_kr_developer.pdf"
            download="krishna_kr_developer.pdf"
            className="border-2 border-dark-heading dark:border-light-heading text-dark-heading dark:text-light-heading font-medium px-6 py-3 rounded-full hover:bg-dark-heading hover:text-white dark:hover:bg-light-heading dark:hover:text-dark-mode transition"
          >
            Download Resume
          </a>
          <NavLink
            to="/contact"
            className="text-dark-heading dark:text-light-heading font-medium px-6 py-3 rounded-full underline underline-offset-4"
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="KRISHNA" />
      </div>
    </main>
  );
}

export default Home;
