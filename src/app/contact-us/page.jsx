import { contact_list } from "@/utils/constants";
import Link from "next/link";
import React from "react";

function ContactUS() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        For placement related queries kindly reach to us at:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {contact_list.map((contact, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg">
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
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-1 font-semibold">LinkedIn Profile</p>
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
