// components/Footer.js
import { dgplogo, person_placeholder } from "@/assets";
import { contact_list } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 ">
      <div className=" w-full mx-auto flex flex-col md:flex-row items-center justify-around py-3">
        <div className="mb-4 md:mb-0 px-4">
          <div className="text-center md:text-left">
            <Image src={dgplogo} className=" mx-auto" />{" "}
            <h2 className="font-bold text-lg mt-2">
              National Institute of Technology, Durgapur
            </h2>
            <p>
              Training and Placement Cell
              <br />
              National Institute of Technology, Durgapur
              <br />
              Mahatma Gandhi Rd, A-Zone, Durgapur,
              <br />
              West Bengal 713209
              <br />
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-1 mt-4 text-blue-500">
              <Link
                href="https://forms.gle/Sn3H61inDZ9seePu7"
                className=" hover:underline"
                target="blank"
              >
                Recruiters Form
              </Link>
              <Link
                href="/placement-statistics"
                className=" hover:underline"
              >
                Placement Statistics
              </Link>
              <Link
                href="https://nitdgp.ac.in/"
                className=" hover:underline"
                target="blank"
              >
                NIT Durgapur
              </Link>
              <Link
                href="/contributors"
                className=" hover:underline"
              >
                Contributors
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-center text-2xl md:text-left">
            Contacts
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
            {contact_list.map((conatct, i) => (
              <div key={i} className=" flex gap-2 px-2 py-3">
                <div className=" rounded-full w-[15%]">
                  {" "}
                  <Image
                    src={person_placeholder}
                    alt="person_placeholder"
                    height={50}
                    width={50}
                    className=" rounded-full "
                  />
                </div>
                <div className=" w-4/5">
                  <div className=" font-bold">{conatct.name}</div>
                  <div className=" text-md text-nowrap">
                    {conatct.title} {conatct.mobile && "-"} {conatct.mobile}
                  </div>
                  <div className=" flex flex-col">
                    {conatct.email.map((em, i) => (
                      <Link
                        key={`${em}-${i}`}
                        className=" text-md hover:underline"
                        href={`mailto:${em}`}
                      >
                        {em}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
      <div className="mt-4 text-center border-t border-gray-400 pt-4">
        <p>
          Copyright © 2024. National Institute of Technology, Durgapur. All
          rights reserved.
        </p>
      </div>
      <div className="mt-4 text-center md:flex md:justify-center gap-2 md:items-center w-full px-2 text-md  bg-white/80 py-3">
        Built and Maintained by <Image src={"https://nitdgplug.org/static/images/glug-logo.png"} className=" hidden md:block" height={30} width={30} />  <span className=" font-semibold">GNU Linux Users&apos; Group</span> , NIT Durgapur
      </div>
    </footer>
  );
};

export default Footer;
