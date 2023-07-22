"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (!menuRef.current || !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "whatwedo", label: "WhatWeDo" },
    { id: "service", label: "Service" },
    { id: "product", label: "Product" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header className="top-0 relative p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <h1 className="text-3xl cursor-pointer"><span className="font-bold">A</span>+studio</h1>
      {/* Small menu for mobile devices */}
      <ul className="md:flex hidden justify-end space-x-[60px]">
        <Link href="#home">
          <li className="hover:text-gray-700 font-medium">Home</li>
        </Link>
        <Link href="#whatwedo">
          <li className="hover:text-gray-700 font-medium">WhatWeDo</li>
        </Link>
        <Link href="#service">
          <li className="hover:text-gray-700 font-medium">Service</li>
        </Link>
        <Link href="#product">
          <li className="hover:text-gray-700 font-medium">Product</li>
        </Link>
        <Link href="#blog">
          <li className="hover:text-gray-700 font-medium">Blog</li>
        </Link>
        <Link href="#contact">
          <li className="hover:text-gray-700 font-medium">Contact</li>
        </Link>
      </ul>
      <div className="md:hidden">
        {/* small menu */}
        <a className="text-4xl" href="#" onClick={toggleMenu}>
          &#8801;
        </a>
        {isMenuOpen && (
          <ul
            className="absolute top-16 right-4 p-6 rounded-md shadow-md"
            style={{ backgroundColor: "white", color: "black" }}
          >
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={`#${item.id}`}>
                  <span className="hover:text-gray-700 rounded-sm">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
