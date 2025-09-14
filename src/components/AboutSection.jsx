import React, { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🔹 Content object
  const aboutContent = {
    title: "About Revatix",
    description:
      "We are a new, innovative IT company dedicated to providing cutting-edge software solutions for Internet Service Providers (ISPs). Our mission is to streamline operations, enhance customer experience, and drive growth for businesses in the telecom industry.",
  };

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
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${animateClass}`}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          {aboutContent.title}
        </h2>
        <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {aboutContent.description}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;