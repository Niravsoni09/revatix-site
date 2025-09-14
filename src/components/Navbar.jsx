// import React from "react";

// const Navbar = ({handleSmoothScroll }) => {
//   const navItems = [
//     { name: "Home", id: "home" },
//     { name: "About", id: "about" },
//     { name: "Services", id: "services" },
//     { name: "Contact Us", id: "contact" },
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
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";

// The updated Navbar component with mobile responsiveness
const Navbar = ({ handleSmoothScroll }) => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact Us", id: "contact" },
  ];

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle link clicks: scrolls smoothly and closes the mobile menu
  const handleLinkClick = (e, id) => {
    handleSmoothScroll(e, id);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-80 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={(e) => handleLinkClick(e, 'home')}>
              Revatix
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className="text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-md font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon changes based on menu state */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" // 'X' icon for close
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" // Hamburger icon
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Simplified overlay animation */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;