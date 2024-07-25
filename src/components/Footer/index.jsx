// components/Footer.js
import { dgplogo } from "@/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <div className="text-center md:text-left">
            <Image src={dgplogo} />{" "}
            <h2 className="font-bold text-lg mt-2">
              National Institute of Technology, Durgapur
            </h2>
            <p className="mt-2">
              Subscribe to our updates
              <div className="mt-1">
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="p-2 rounded-l border border-gray-400"
                />
                <button className="p-2 bg-blue-500 text-white rounded-r">
                  Submit
                </button>
              </div>
            </p>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-center md:text-left">Quick Links</h3>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 18 }).map((_, i) => (
              <a key={i} href="#" className="block text-center md:text-left">
                Quick Link
              </a>
            ))}
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold">Contact Us</h3>
          <p>
            Training and Placement Cell
            <br />
            National Institute of Technology, Durgapur
            <br />
            Mahatma Gandhi Rd, A-Zone, Durgapur,
            <br />
            West Bengal 713209
            <br />
            Email:{" "}
            <a href="mailto:cdc@nitdgp.ac.in" className="text-blue-500">
              cdc@nitdgp.ac.in
            </a>
            <br />
            Contact: +91 7989833795
          </p>
        </div>
      </div>
      <div className="mt-4 text-center border-t border-gray-400 pt-4">
        <p>
          Copyright © 2024. National Institute of Technology, Durgapur. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
