import React, { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // 🔹 Content object
  const servicesContent = {
    heading: "Our Services",
    intro:
      "We offer a range of specialized services to help your business thrive in the digital age.",
    items: [
      {
        title: "IT Consulting",
        description:
          "We provide expert advice and strategic planning to help your ISP business navigate the complexities of the tech landscape.",
      },
      {
        title: "Web Development",
        description:
          "Our team builds robust and scalable web solutions, from front-end user interfaces to complex back-end systems.",
      },
      {
        title: "Cloud Solutions",
        description:
          "We offer a full suite of cloud services to enhance efficiency, reduce costs, and ensure the security of your operations.",
      },
      {
        title: "Managed Services",
        description:
          "Our comprehensive managed IT services allow you to focus on your core business while we handle your technology infrastructure.",
      },
    ],
  };

  // Carousel auto-scroll
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % servicesContent.items.length);
    }, 5000);
    return () => clearInterval(carouselInterval);
  }, [servicesContent.items.length]);

  // Intersection Observer for scroll-to-reveal
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

  const getCarouselCards = () => {
    const total = servicesContent.items.length;
    const prevIndex = (carouselIndex - 1 + total) % total;
    const nextIndex = (carouselIndex + 1) % total;
    return [
      servicesContent.items[prevIndex],
      servicesContent.items[carouselIndex],
      servicesContent.items[nextIndex],
    ];
  };

  const handleDotClick = (index) => setCarouselIndex(index);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-100">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${animateClass}`}>
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            {servicesContent.heading}
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {servicesContent.intro}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full h-96 flex justify-center">
          {getCarouselCards().map((service, index) => {
            let transformClass = "scale-75 opacity-50 z-0";
            if (index === 1) {
              transformClass = "scale-100 opacity-100 shadow-2xl z-10";
            } else if (index === 0 || index === 2) {
              transformClass = "scale-90 opacity-80";
            }

            return (
              <div
                key={service.title}
                className={`flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 p-6 mx-4 rounded-xl border-2 border-transparent transition-all duration-500 transform ${transformClass} bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-center items-center text-center`}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {servicesContent.items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                carouselIndex === index ? "bg-indigo-600" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
