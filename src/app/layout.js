import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InternalNavbar from "./home/sections/InternalNavbar";
import NextUI from "@/providers/NextUI";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NIT Durgapur | Placements",
  description: "Get Placed Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUI>
          <Navbar />
          <InternalNavbar />
          {children}
          <Footer />
        </NextUI>
      </body>
    </html>
  );
}
