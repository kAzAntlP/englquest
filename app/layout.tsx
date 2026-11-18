import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "../components/Footer";

const fredoka = localFont({
  src: "./fonts/ofont.ru_Fredoka One.ttf",
  variable: "--font-fredoka",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EngQuest",  
  description: "Учи английский",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${fredoka.variable} min-h-full flex flex-col`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
