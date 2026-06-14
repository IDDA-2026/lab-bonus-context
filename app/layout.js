import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hi, It's Me",
  description: "A tiny login app built with React Context.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/*
        Right now nothing wraps the app. The Navbar and the home page have no way
        to know who is logged in. Where would a provider go so that BOTH of them
        could read the user? (Hint: it would wrap {children}, and the Navbar too.)
      */}
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
