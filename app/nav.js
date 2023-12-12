"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const clickhandler = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <nav>
      <div className="flex justify-between items-center">
        <h1>
          <Link href="/">Food Ninja</Link>
        </h1>
        <div className="md:hidden" id="burger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            onClick={clickhandler}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div className={`mt-6 text-sm text-right ${isOpen ? "block" : "hidden"}  md:block`} id="menu">
        <div className="mr-4 py-1 border-red-600 border-r-2 pr-2">
          <Link href="#">
            <span>Home</span>
          </Link>
        </div>
        <div className="mr-4 py-1 border-black-600 border-r-2 pr-2">
          <Link href="#">
            <span>About</span>
          </Link>
        </div>
        <div className="mr-4 py-1 border-black-600 border-r-2 pr-2">
          <Link href="#">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
