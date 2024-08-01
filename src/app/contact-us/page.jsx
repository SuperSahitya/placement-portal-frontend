import { person_placeholder } from "@/assets";
import { contact_list } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactUS() {
  return (
    <div className="p-6  bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold my-8 text-center">
        For placement related queries kindly reach to us at:
      </h2>
      <div className=" w-full md:w-1/2 mx-auto">
        {contact_list.slice(0, 1).map((contact, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg flex w-full md:w-3/4  mx-auto shadow-blueLight bg-blue-300/20"
          >
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
            <div>
              <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
              <p className="text-gray-600 mb-1">{contact.title}</p>
              {contact.mobile && (
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Mobile Number: </span>
                  <Link href={`tel:${contact.mobile}`}>{contact.mobile}</Link>
                </p>
              )}
              {contact.email && (
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Email ID: </span>
                  {contact.email.map((email, idx) => (
                    <span key={idx}>
                      <Link href={`mailto:${email}`}> {email}</Link>
                      {idx < contact.email.length - 1 && " / "}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold my-7 py-5 text-center">
        Placement Co-ordinators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {contact_list.slice(1, 5).map((contact, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg flex w-full md:w-3/4 mx-auto shadow-blueLight bg-blue-300/20"
          >
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
            <div>
              <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
              <p className="text-gray-600 mb-1">{contact.title}</p>
              {contact.mobile && (
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Mobile Number: </span>
                  <Link href={`tel:${contact.mobile}`}>{contact.mobile}</Link>
                </p>
              )}
              {contact.email && (
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Email ID: </span>
                  {contact.email.map((email, idx) => (
                    <span key={idx}>
                      <Link href={`mailto:${email}`}> {email}</Link>
                      {idx < contact.email.length - 1 && " / "}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold my-8 text-center">
        Other Placement Officers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {contact_list.slice(5).map((contact, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg flex  w-full md:w-3/4 mx-auto  shadow-blueLight bg-blue-300/20"
          >
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
            <div>
              <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
              <p className="text-gray-600 mb-1">{contact.title}</p>
              {contact.mobile && (
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Mobile Number: </span>
                  <Link href={`tel:${contact.mobile}`}>{contact.mobile}</Link>
                </p>
              )}
              {contact.email && (
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Email ID: </span>
                  {contact.email.map((email, idx) => (
                    <span key={idx}>
                      <Link href={`mailto:${email}`}> {email}</Link>
                      {idx < contact.email.length - 1 && " / "}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold mt-8 text-center">
          LinkedIn Profile{" "}
        </h2>
        <Link
          href="https://www.linkedin.com/company/cdc-nitdgp-official/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Training and Placement Cell, NIT Durgapur | LinkedIn
        </Link>
      </div>
    </div>
  );
}

export default ContactUS;
