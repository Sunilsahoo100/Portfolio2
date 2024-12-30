import React, { useRef, useState, useEffect, forwardRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loading from './components/Loading';
import { useGsapAnimations } from './components/useGsapAnimations';

const App = () => {
  const [loading, setLoading] = useState(true);

  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useGsapAnimations([heroRef, aboutRef, technologiesRef, educationRef, projectsRef, contactRef]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 z-[-2]" />
      <Navbar
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToTechnologies={() => scrollToRef(technologiesRef)}
        scrollToEducation={() => scrollToRef(educationRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Technologies ref={technologiesRef} />
      <Education ref={educationRef} />
      <Experience ref={educationRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default App;

