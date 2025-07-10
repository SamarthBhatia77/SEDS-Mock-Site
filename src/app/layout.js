import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "SEDS | BPHC",
  description: "Mock Website for SEDS",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="p-3 ml-0 text-white fixed top-0 left-0 w-full z-50  bg-black/40 backdrop-blur-sm border-b border-white/20 ">
          <div className="flex align-center items-center justify-between">
            <div>
              <Link href="/"><img src="/SEDSLogo.png" className="w-38 cursor-pointer"></img></Link>
            </div>
            <div className="flex font-bold">
              <p className="mx-3 cursor-pointer transform transition duration-200 ease-in-out hover:scale-115  transition 0.5s ease">
                <Link href="/">Home</Link></p>
              <p className="mx-3 cursor-pointer transform transition duration-200 ease-in-out hover:scale-115  transition 0.5s ease">
                <Link href="/team">Team</Link></p>
              <p className="mx-3 mr-5 cursor-pointer transform transition duration-200 ease-in-out hover:scale-115  transition 0.5s ease ">
                <Link href="/projects">Projects</Link></p>
            </div>
          </div>
        </header>
        <main className="flex-grow mt-45 lg:mt-30">
          {children}
        </main>
        <footer className="text-white bg-black flex items-center justify-centers text-[10px]">
          <p className="ml-160 py-1">&copy; 2025 SEDS-BPHC | Space | Astronomy | Propulsion  Website by Samarth Bhatia</p>
        </footer>
      </body>
    </html>
  );
}
