import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Custom font stack
  const sfFontStack = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

  // Smooth scroll handler
  const handleSmoothScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="bg-gray-50 text-gray-900 overflow-x-hidden"
      style={{ fontFamily: sfFontStack }}
    >
      <Navbar
        setCurrentPage={setCurrentPage}
        handleSmoothScroll={handleSmoothScroll}
      />
      <main className="pt-16">
        <HomeSection handleSmoothScroll={handleSmoothScroll} />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;










// import React, { useState} from 'react';
// import HomeSection from "./components/HomeSection";
// import AboutSection from "./components/About";
// import ServicesSection from "./components/ServicesSection";
// import ContactSection from "./components/ContactSection";
// import Navbar from "./components/Navbar";

// // Main App component that orchestrates all other components and handles routing.
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('home');

//   // Custom font stack to mimic San Francisco font
//   const sfFontStack = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
  
//   // Smooth scroll handler for in-page navigation
//   const handleSmoothScroll = (event, id) => {
//     event.preventDefault();
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Function to render the correct component based on the current page state
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//       case 'about':
//       case 'services':
//       case 'contact':
//         // For a single-page app, we render all sections and use smooth scrolling.
//         return (
//           <>
//             <HomeSection handleSmoothScroll={handleSmoothScroll} />
//             <AboutSection />
//             <ServicesSection />
//             <ProductsSection />
//             <ContactSection handleSmoothScroll={handleSmoothScroll} />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-gray-50 text-gray-900 overflow-x-hidden" style={{ fontFamily: sfFontStack }}>
//       <Navbar setCurrentPage={setCurrentPage} handleSmoothScroll={handleSmoothScroll} />
//       <main className="pt-16">
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// Import custom components (assumes these files exist in the same directory or adjust the paths as needed)

// export default App;



// import React, { useState, useEffect, useRef } from 'react';

// // Main App component that orchestrates all other components and handles routing.
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('home');

//   // Custom font stack to mimic San Francisco font
//   const sfFontStack = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
  
//   // Smooth scroll handler for in-page navigation
//   const handleSmoothScroll = (event, id) => {
//     event.preventDefault();
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Function to render the correct component based on the current page state
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//       case 'about':
//       case 'services':
//       case 'contact':
//         // For a single-page app, we render all sections and use smooth scrolling.
//         return (
//           <>
//             <HomeSection handleSmoothScroll={handleSmoothScroll} />
//             <AboutSection />
//             <ServicesSection />
//             <ProductsSection />
//             <ContactSection handleSmoothScroll={handleSmoothScroll} />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-gray-50 text-gray-900 overflow-x-hidden" style={{ fontFamily: sfFontStack }}>
//       <script src="https://cdn.tailwindcss.com"></script>
//       <Navbar setCurrentPage={setCurrentPage} handleSmoothScroll={handleSmoothScroll} />
//       <main className="pt-16">
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// // Navbar component for navigation
// const Navbar = ({ setCurrentPage, handleSmoothScroll }) => {
//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     { name: 'Services', id: 'services' },
//     { name: 'Contact Us', id: 'contact' },
//   ];

//   return (
//     <nav className="fixed w-full z-50 bg-white bg-opacity-90 shadow-lg backdrop-blur-md transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold text-indigo-600">Revatix</span>
//           </div>
//           <div className="hidden md:block">
//             <div className="flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   onClick={(e) => handleSmoothScroll(e, item.id)}
//                   className="text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="md:hidden">
//             <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-300">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Home Section component
// const HomeSection = ({ handleSmoothScroll }) => {
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [typingDirection, setTypingDirection] = useState('forward');
//   const typewriterQuotes = [
//     "Innovative Solutions",
//     "Digital Transformation",
//     "Tailored CRM",
//     "Efficient Operations"
//   ];
//   const typingPrefix = "Empowering ISPs with ";
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   // Typewriter effect logic
//   useEffect(() => {
//     const typingSpeed = 70;
//     const deletingSpeed = 30;
//     const pauseTime = 4000;

//     if (typingDirection === 'forward') {
//       if (charIndex < typewriterQuotes[textIndex].length) {
//         setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
//       } else {
//         setTimeout(() => setTypingDirection('backward'), pauseTime);
//       }
//     } else {
//       if (charIndex > 0) {
//         setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
//       } else {
//         setTypingDirection('forward');
//         setTextIndex((prevIndex) => (prevIndex + 1) % typewriterQuotes.length);
//       }
//     }
//   }, [charIndex, textIndex, typingDirection, typewriterQuotes]);

//   // Intersection Observer for scroll-to-reveal animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const animateClass = `transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

//   return (
//     <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4">
//       <div className={`max-w-4xl mx-auto ${animateClass}`}>
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
//           Revatix <br />
//           <span className="font-light">{typingPrefix}</span>
//           <span className="typewriter-text font-light text-indigo-200">
//             {typewriterQuotes[textIndex].substring(0, charIndex)}
//           </span>
//         </h1>
//         <p className="text-md sm:text-lg lg:text-xl font-light mb-8">
//           Your partner in digital transformation for the Internet Service Provider industry.
//         </p>
//         <a
//           href="#contact"
//           onClick={(e) => handleSmoothScroll(e, 'contact')}
//           className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-md shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
//         >
//           Get Started
//         </a>
//       </div>
//     </section>
//   );
// };

// // About Section component
// const AboutSection = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const animateClass = `transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

//   return (
//     <section id="about" ref={sectionRef} className="py-20 bg-white">
//       <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${animateClass}`}>
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">About Revatix</h2>
//         <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
//           We are a new, innovative IT company dedicated to providing cutting-edge software solutions for Internet Service Providers (ISPs). Our mission is to streamline operations, enhance customer experience, and drive growth for businesses in the telecom industry.
//         </p>
//       </div>
//     </section>
//   );
// };

// // Services Section component with a carousel
// const ServicesSection = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   const companyServices = [
//     { title: 'IT Consulting', description: 'We provide expert advice and strategic planning to help your ISP business navigate the complexities of the tech landscape.' },
//     { title: 'Web Development', description: 'Our team builds robust and scalable web solutions, from front-end user interfaces to complex back-end systems.' },
//     { title: 'Cloud Solutions', description: 'We offer a full suite of cloud services to enhance efficiency, reduce costs, and ensure the security of your operations.' },
//     { title: 'Managed Services', description: 'Our comprehensive managed IT services allow you to focus on your core business while we handle your technology infrastructure.' },
//   ];

//   // Carousel auto-scroll and navigation
//   useEffect(() => {
//     const carouselInterval = setInterval(() => {
//       setCarouselIndex((prevIndex) => (prevIndex + 1) % companyServices.length);
//     }, 3000);
//     return () => clearInterval(carouselInterval);
//   }, [companyServices.length]);
  
//   // Intersection Observer for scroll-to-reveal animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const animateClass = `transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

//   const getCarouselCards = () => {
//     const totalServices = companyServices.length;
//     const prevIndex = (carouselIndex - 1 + totalServices) % totalServices;
//     const nextIndex = (carouselIndex + 1) % totalServices;
//     return [
//       companyServices[prevIndex],
//       companyServices[carouselIndex],
//       companyServices[nextIndex],
//     ];
//   };
  
//   const handleDotClick = (index) => {
//     setCarouselIndex(index);
//   };

//   return (
//     <section id="services" ref={sectionRef} className="py-20 bg-gray-100">
//       <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${animateClass}`}>
//         <div className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Our Services</h2>
//           <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             We offer a range of specialized services to help your business thrive in the digital age.
//           </p>
//         </div>
        
//         <div className="relative overflow-hidden w-full h-96 flex justify-center">
//           {getCarouselCards().map((service, index) => {
//             let transformClass = 'scale-75 opacity-50 z-0';
//             if (index === 1) { // The middle card is the active one
//               transformClass = 'scale-100 opacity-100 shadow-2xl z-10';
//             } else if (index === 0) {
//               transformClass = 'scale-90 opacity-80';
//             } else if (index === 2) {
//                transformClass = 'scale-90 opacity-80';
//             }
            
//             return (
//               <div
//                 key={service.title}
//                 className={`flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 p-6 mx-4 rounded-xl border-2 border-transparent transition-all duration-500 transform ${transformClass} bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-center items-center text-center`}
//               >
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-sm">{service.description}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Pagination dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {companyServices.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`w-3 h-3 rounded-full transition-colors duration-300 ${carouselIndex === index ? 'bg-indigo-600' : 'bg-gray-400'}`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Products Section component with a carousel
// const ProductsSection = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [productCarouselIndex, setProductCarouselIndex] = useState(0);

//   const productFeatures = [
//     { title: 'CRM', description: 'Manage customer data, interactions, and sales pipelines to streamline your business processes and improve customer relationships.' },
//     { title: 'TR-069', description: 'Automate device provisioning and management for customer premises equipment, ensuring a seamless setup and reliable service delivery.' },
//     { title: 'Radius Protocol', description: 'Implement robust authentication, authorization, and accounting for network access, enhancing security and user management.' },
//     { title: 'HR Module', description: 'Simplify human resources tasks from employee onboarding to payroll management, freeing up time for your core business activities.' },
//     { title: 'Network Monitoring', description: 'Keep a watchful eye on your network infrastructure with real-time alerts and performance analytics to proactively identify and resolve issues.' },
//     { title: 'Accounting & Reports', description: 'Track financial transactions, generate invoices, and create insightful reports to maintain financial health and make data-driven decisions.' },
//     { title: 'Inventory Management', description: 'Manage and track your hardware inventory, including routers, modems, and other equipment, from purchase to deployment.' },
//   ];

//   // Carousel auto-scroll for products
//   useEffect(() => {
//     const productCarouselInterval = setInterval(() => {
//       setProductCarouselIndex((prevIndex) => (prevIndex + 1) % productFeatures.length);
//     }, 3000);
//     return () => clearInterval(productCarouselInterval);
//   }, [productFeatures.length]);

//   // Intersection Observer for scroll-to-reveal animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const animateClass = `transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

//   const getProductCarouselCards = () => {
//     const totalProducts = productFeatures.length;
//     const prevIndex = (productCarouselIndex - 1 + totalProducts) % totalProducts;
//     const nextIndex = (productCarouselIndex + 1) % totalProducts;
//     return [
//       productFeatures[prevIndex],
//       productFeatures[productCarouselIndex],
//       productFeatures[nextIndex],
//     ];
//   };

//   const handleProductDotClick = (index) => {
//     setProductCarouselIndex(index);
//   };

//   return (
//     <section id="products" ref={sectionRef} className="py-20 bg-gray-50">
//       <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${animateClass}`}>
//         <div className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Our Flagship Product: isp360 CRM</h2>
//           <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             isp360 CRM is our comprehensive customer relationship management system designed specifically for the unique needs of ISPs. It comes with the following key features.
//           </p>
//         </div>
        
//         <div className="relative overflow-hidden w-full h-96 flex justify-center">
//           {getProductCarouselCards().map((feature, index) => {
//             let transformClass = 'scale-75 opacity-50 z-0';
//             if (index === 1) {
//               transformClass = 'scale-100 opacity-100 shadow-2xl z-10';
//             } else if (index === 0) {
//               transformClass = 'scale-90 opacity-80';
//             } else if (index === 2) {
//                transformClass = 'scale-90 opacity-80';
//             }
            
//             return (
//               <div key={feature.title} className={`flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 p-6 mx-4 rounded-xl border-2 border-transparent transition-all duration-500 transform ${transformClass} bg-gradient-to-br from-purple-200 to-indigo-300 text-gray-900 flex flex-col justify-center items-center text-center`}>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-sm">{feature.description}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Pagination dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {productFeatures.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleProductDotClick(index)}
//               className={`w-3 h-3 rounded-full transition-colors duration-300 ${productCarouselIndex === index ? 'bg-indigo-600' : 'bg-gray-400'}`}
//               aria-label={`Go to product slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Contact Us Section component
// const ContactSection = ({ handleSmoothScroll }) => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const animateClass = `transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

//   return (
//     <section id="contact" ref={sectionRef} className="py-20 bg-white">
//       <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${animateClass}`}>
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Get in Touch</h2>
//         <p className="text-md text-gray-600 max-w-3xl mx-auto mb-8">
//           We'd love to hear from you. Contact us for a demo, a consultation, or any inquiries you might have.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//           <a
//             href="mailto:info@revatix.com"
//             className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-md shadow-xl hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 active:scale-95"
//           >
//             Email Us
//           </a>
//           <a
//             href="tel:+911234567890"
//             className="inline-block text-indigo-600 font-bold py-3 px-8 rounded-full text-md border border-indigo-600 hover:bg-indigo-50 transition-colors duration-300 transform hover:scale-105 active:scale-95"
//           >
//             Call Us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Footer Section component
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="mb-6">
//           <span className="text-2xl font-bold text-indigo-400">Revatix</span>
//         </div>
//         <div className="flex flex-wrap justify-center gap-6 text-sm">
//           <div className="flex items-center space-x-2">
//             <span className="font-semibold text-white">Address:</span>
//             <span>123 Revatix St, Tech City, 90210</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-semibold text-white">Contact:</span>
//             <a href="tel:+911234567890" className="hover:underline transition-colors duration-300">+91 1234567890</a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-semibold text-white">Email:</span>
//             <a href="mailto:info@revatix.com" className="hover:underline transition-colors duration-300">info@revatix.com</a>
//           </div>
//         </div>
//         <div className="mt-8 text-xs">
//           &copy; 2024 Revatix. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default App;
