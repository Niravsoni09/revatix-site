import React, { useEffect, useRef, useState } from "react";

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [productCarouselIndex, setProductCarouselIndex] = useState(0);

  //  Content object
  const productsContent = {
    heading: "Our Flagship Product: isp360 CRM",
    intro:
      "isp360 CRM is our comprehensive customer relationship management system designed specifically for the unique needs of ISPs. It comes with the following key features.",
    features: [
      {
        title: "CRM",
        description:
          "Manage customer data, interactions, and sales pipelines to streamline your business processes and improve customer relationships.",
      },
      {
        title: "TR-069",
        description:
          "Automate device provisioning and management for customer premises equipment, ensuring a seamless setup and reliable service delivery.",
      },
      {
        title: "Radius Protocol",
        description:
          "Implement robust authentication, authorization, and accounting for network access, enhancing security and user management.",
      },
      {
        title: "HR Module",
        description:
          "Simplify human resources tasks from employee onboarding to payroll management, freeing up time for your core business activities.",
      },
      {
        title: "Network Monitoring",
        description:
          "Keep a watchful eye on your network infrastructure with real-time alerts and performance analytics to proactively identify and resolve issues.",
      },
      {
        title: "Accounting & Reports",
        description:
          "Track financial transactions, generate invoices, and create insightful reports to maintain financial health and make data-driven decisions.",
      },
      {
        title: "Inventory Management",
        description:
          "Manage and track your hardware inventory, including routers, modems, and other equipment, from purchase to deployment.",
      },
    ],
  };

  // Auto-scroll carousel
  useEffect(() => {
    const productCarouselInterval = setInterval(() => {
      setProductCarouselIndex(
        (prevIndex) => (prevIndex + 1) % productsContent.features.length
      );
    }, 5000);
    return () => clearInterval(productCarouselInterval);
  }, [productsContent.features.length]);

  // Intersection Observer
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

  const getProductCarouselCards = () => {
    const total = productsContent.features.length;
    const prevIndex = (productCarouselIndex - 1 + total) % total;
    const nextIndex = (productCarouselIndex + 1) % total;
    return [
      productsContent.features[prevIndex],
      productsContent.features[productCarouselIndex],
      productsContent.features[nextIndex],
    ];
  };

  const handleProductDotClick = (index) => setProductCarouselIndex(index);

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-gray-50">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${animateClass}`}>
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            {productsContent.heading}
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {productsContent.intro}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full h-96 flex justify-center">
          {getProductCarouselCards().map((feature, index) => {
            let transformClass = "scale-75 opacity-50 z-0";
            if (index === 1) {
              transformClass = "scale-100 opacity-100 shadow-2xl z-10";
            } else if (index === 0 || index === 2) {
              transformClass = "scale-90 opacity-80";
            }

            return (
              <div
                key={feature.title}
                className={`flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 p-6 mx-4 rounded-xl border-2 border-transparent transition-all duration-500 transform ${transformClass} bg-gradient-to-br from-purple-200 to-indigo-300 text-gray-900 flex flex-col justify-center items-center text-center`}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {productsContent.features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleProductDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                productCarouselIndex === index ? "bg-indigo-600" : "bg-gray-400"
              }`}
              aria-label={`Go to product slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
