import React, { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  //  Content object
  const contactContent = {
    heading: "Get in Touch",
    description:
      "We'd like to hear from you. Contact us for a demo, a consultation, or any inquiries you might have.",
    buttons: [
      {
        label: "Email Us",
        link: "mailto:support@revatix.in",
      },
      {
        label: "Call Us",
        link: "tel:+91 99251 32277",
      },
    ],
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
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${animateClass}`}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          {contactContent.heading}
        </h2>
        <p className="text-md text-gray-600 max-w-3xl mx-auto mb-8">
          {contactContent.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {contactContent.buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.link}
              className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-md shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
