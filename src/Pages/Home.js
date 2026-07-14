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
    <main className="container mx-auto max-width flex flex-col-reverse md:flex-row items-center justify-between min-h-[calc(100vh-96px)] gap-12">
      <div className="md:w-1/2 text-center md:text-left">
        <h1
          ref={h11}
          className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-dark-heading dark:text-light-heading"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-dark-heading dark:text-light-heading"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-dark-heading dark:text-light-heading"
        >
          {tagline}
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-8">
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
            className="text-dark-heading dark:text-light-heading font-medium px-6 py-3 rounded-xl underline underline-offset-4"
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end items-center">
        {/* <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="KRISHNA" /> */}
        {/* <img 
          // ref={myimageref}
          // src={img}
          // alt="Krishna Kumar"
        // className="w-72 md:w-96 lg:w-[430px] xl:w-[470px] rounded-xl object-cover shadow-xl"
        */}
        <img
          ref={myimageref}
          src={img}
          alt="KRISHNA"
          className="w-72 md:w-96 lg:w-[430px] xl:w-[470px] rounded-2xl object-cover shadow-2xl ring-1 ring-gray-200"
        />
      </div>
    </main>
  );
}

export default Home;
