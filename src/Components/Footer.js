import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto max-width py-8 mt-16">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://github.com/krish8986"
          target="_blank"
          rel="noreferrer noopener"
        >
          KRISHNA
        </a>{" "}
        with
        <span className="text-gradient font-medium"> Love</span> &
        <span className="text-gradient font-medium"> Coffee</span>
      </p>
    </footer>
  );
}
export default Footer;
