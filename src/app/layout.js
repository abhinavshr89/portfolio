import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { Orbitron } from "next/font/google";
import localFont from 'next/font/local';


import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400", // Add the desired weight here
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: "400", // Add the desired weight here
});

// * This is how we use local fonts in NextJS
const myFont = localFont({
  src: '../../public/fonts/neotech.ttf', 
  weight: '400',
  style: 'normal',
  variable: '--font-neotech',
});

export const metadata = {
  title: "Abhinav Shrivastav",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico", // Correctly specify the favicon path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${orbitron.variable} ${myFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
