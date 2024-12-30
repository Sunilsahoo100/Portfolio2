import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/sunilLogo.avif";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu(); // Close the menu after scrolling
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <nav
      ref={navbarRef}
      className="mb-20 py-6 flex items-center justify-between px-8"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          className="w-15 h-16 cursor-pointer rounded-3xl"
          alt="logo"
          onClick={reloadPage}
        />
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        {showMenu ? (
          <button onClick={toggleMenu}>
            <FaTimes className="text-white" />
          </button>
        ) : (
          <button onClick={toggleMenu}>
            <FaBars className="text-white" />
          </button>
        )}
      </div>

      {/* Sidebar Menu */}
      {showMenu && (
        <div className="fixed top-0 right-0 h-full bg-gray-900 bg-opacity-90 w-64 py-4 px-8 transition-all duration-500 z-10">
          <div className="flex flex-col space-y-4">
            <button
              className="py-2 px-4 text-white hover:bg-gray-800 font-bold rounded"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="py-2 px-4 text-white hover:bg-gray-800 font-bold rounded"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className="py-2 px-4 text-white hover:bg-gray-800 font-bold rounded"
              onClick={() => scrollToSection("technologies")}
            >
              Technologies
            </button>
            <button
              className="py-2 px-4 text-white hover:bg-gray-800 font-bold rounded"
              onClick={() => scrollToSection("education")}
            >
              Education
            </button>
            <button
              className="py-2 px-4 text-white hover:bg-gray-800 font-bold rounded"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className="py-2 px-4 text-white hover:bg-gray-800 font-bold rounded"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="py-2 px-4 text-white hover:bg-gray-800 font-bold rounded"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}

      {/* Navigation Links for Larger Screens */}
      <div className="hidden md:flex md:items-center md:space-x-4 md:justify-end">
        <button
          className="py-2 px-4 text-white relative group"
          onClick={() => scrollToSection("home")}
        >
          <span className="relative">
            Home
            <span className="block relative bottom-0 left-0 w-0 bg-white h-0.5 transition-all duration-1000 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
          </span>
        </button>
        <button
          className="py-2 px-4 text-white relative group"
          onClick={() => scrollToSection("about")}
        >
          <span className="relative">
            About
            <span className="block relative bottom-0 left-0 w-0 bg-white h-0.5 transition-all duration-1000 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
          </span>
        </button>
        <button
          className="py-2 px-4 text-white relative group"
          onClick={() => scrollToSection("technologies")}
        >
          <span className="relative">
            Technologies
            <span className="block relative bottom-0 left-0 w-0 bg-white h-0.5 transition-all duration-1000 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
          </span>
        </button>
        <button
          className="py-2 px-4 text-white relative group"
          onClick={() => scrollToSection("education")}
        >
          <span className="relative">
            Education
            <span className="block relative bottom-0 left-0 w-0 bg-white h-0.5 transition-all duration-1000 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
          </span>
        </button>
        <button
          className="py-2 px-4 text-white relative group"
          onClick={() => scrollToSection("experience")}
        >
          <span className="relative">
            Experience
            <span className="block relative bottom-0 left-0 w-0 bg-white h-0.5 transition-all duration-1000 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
          </span>
        </button>
        <button
          className="py-2 px-4 text-white relative group"
          onClick={() => scrollToSection("projects")}
        >
          <span className="relative">
            Projects
            <span className="block relative bottom-0 left-0 w-0 bg-white h-0.5 transition-all duration-1000 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
          </span>
        </button>
        <button
          className="py-2 px-4 text-white relative group"
          onClick={() => scrollToSection("contact")}
        >
          <span className="relative">
            Get in Touch
            <span className="block relative bottom-0 left-0 w-0 bg-white h-0.5 transition-all duration-1000 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
