"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Image from "next/image";
import {
  HBar2023,
  HBar2024,
  pie2023,
  Pie2024,
  Table2023,
  Table2024,
  VBar2023,
  VBar2024,
} from "@/assets";

function PlacementStatistics() {
  return (
    <div>
      <div className=" text-3xl font-bold my-4 w-full md:w-4/5 mx-auto">
       Placement at a Glance
      </div>
      <div className=" my-4 w-full md:w-4/5 flex justify-center  flex-col items-center mx-auto gap-3">
        <Tabs
          aria-label="Options"
          classNames={{
            base: "w-full flex justify-center py-2",
            tabContent: " text-xl text-center",
          }}
        >
          <Tab key="2024Batch" title="2024 Batch">
            <div className=" text-center grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { src: HBar2024, alt: "Horizontal Bar Chart" },
                { src: Pie2024, alt: "Pie Chart" },
                { src: VBar2024, alt: "Vertical Bar Chart" },
                { src: Table2024, alt: "Table" },
              ].map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-3/4 my-5"
                />
              ))}
            </div>
          </Tab>
          <Tab key="2023Batch" title="2023 Batch">
            <div className=" text-center grid grid-cols-1 md:grid-cols-2 gap-3">
              {" "}
              {[
                { src: HBar2023, alt: "Horizontal Bar Chart" },
                { src: pie2023, alt: "Pie Chart" },
                { src: VBar2023, alt: "Vertical Bar Chart" },
                { src: Table2023, alt: "Table" },
              ].map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-3/4 my-5"
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default PlacementStatistics;
