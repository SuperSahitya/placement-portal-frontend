import Link from "next/link";
import React from "react";

function InternalNavbar() {
  return (
    <div className=" bg-primary text-white flex justify-center space-x-8 py-4">
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/academics">Academics</Link>
      <Link href="/students">For Students</Link>
      <Link href="/recruiters">For Recruiters</Link>
      <Link href="/contact">Contact Us</Link>
    </div>
  );
}

export default InternalNavbar;
