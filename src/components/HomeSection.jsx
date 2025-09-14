import React, { useState, useEffect, useRef } from "react";

const HomeSection = ({ handleSmoothScroll }) => {
  
  const homeContent = {
    title: "Welcome to Revatix IT Solutions",
    typingPrefix: "Empowering ISPs with ",
    typewriterQuotes: [
      "Innovative Solutions",
      "Digital Transformation",
      "Tailored CRM",
      "Efficient Operations",
    ],
    subtitle:
      "Your partner in digital transformation for the Internet Service Provider industry.",
    button: {
      text: "Explore Our Services",
      link: "services",
    },
  };

  // Typewriter state
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState("forward");

  // Intersection state
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const typingSpeed = 80;
    const deletingSpeed = 70;
    const pauseTime = 5000;

    if (typingDirection === "forward") {
      if (charIndex < homeContent.typewriterQuotes[textIndex].length) {
        setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
      } else {
        setTimeout(() => setTypingDirection("backward"), pauseTime);
      }
    } else {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
      } else {
        setTypingDirection("forward");
        setTextIndex((prevIndex) => (prevIndex + 1) % homeContent.typewriterQuotes.length);
      }
    }
  }, [charIndex, textIndex, typingDirection, homeContent.typewriterQuotes]);

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const animateClass = `transition-all duration-1000 ease-out transform ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4"
    >
      <div className={`max-w-4xl mx-auto ${animateClass}`}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
          {homeContent.title} <br />
          <span className="font-light">{homeContent.typingPrefix}</span>
          <span className="typewriter-text font-light text-indigo-200">
            {homeContent.typewriterQuotes[textIndex].substring(0, charIndex)}
          </span>
        </h1>
        <p className="text-md sm:text-lg lg:text-xl font-light mb-8">
          {homeContent.subtitle}
        </p>
        <a
          href={`#${homeContent.button.link}`}
          onClick={(e) => handleSmoothScroll(e, homeContent.button.link)}
          className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-md shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          {homeContent.button.text}
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
