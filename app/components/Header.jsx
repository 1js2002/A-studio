import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
    <h1 className="text-3xl">A+studio</h1>
    <ul className="md:flex hidden justify-end space-x-[60px] ">
      <Link href="#home">
        <li className="">Home</li>
      </Link>
      <Link href="#whatwedo">
        <li className="">WhatWeDo</li>
      </Link>
      <Link href="#service">
        <li className="">Service</li>
      </Link>
      <Link href="#product">
        <li className="">Product</li>
      </Link>
      <Link href="#blog">
        <li className="">Blog</li>
      </Link>
      <Link href="#contact">
        <li className="">Contact</li>
      </Link>
    </ul>
    <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
    </div>
  </header>
  )
}