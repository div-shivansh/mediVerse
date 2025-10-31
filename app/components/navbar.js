import react from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
  <header className="bg-white/95 backdrop-blur-[20px] text-gray-800 py-4 fixed w-full top-0 z-[1000] border-b border-gray-200 transition-all duration-300">
    <div className="mx-auto px-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 font-bold">
          <Link href="/">
          <div className="w-15 h-15 flex items-center gap-3">
        <Image src="/Logo.png" alt="Logo" width={800} height={800} />
          <h1 className="text-3xl font-bold text-blue-600">Medi<span className="text-teal-600">Verse</span></h1>
          </div>
          </Link>
        </div>
        <nav className="flex gap-8 items-center">
          <Link href="/#trust" className="text-gray-600 no-underline py-2.5 px-4 rounded-lg transition-all duration-300 font-medium relative overflow-hidden hover:text-blue-600 hover:bg-blue-600/5 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:w-4/5">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-gray-600 no-underline py-2.5 px-4 rounded-lg transition-all duration-300 font-medium relative overflow-hidden hover:text-blue-600 hover:bg-blue-600/5 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:w-4/5">
            How It Works
          </Link>
          <Link href="/#stats" className="text-gray-600 no-underline py-2.5 px-4 rounded-lg transition-all duration-300 font-medium relative overflow-hidden hover:text-blue-600 hover:bg-blue-600/5 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:w-4/5">
            Statistics
          </Link>
          <Link href="/#testimonials" className="text-gray-600 no-underline py-2.5 px-4 rounded-lg transition-all duration-300 font-medium relative overflow-hidden hover:text-blue-600 hover:bg-blue-600/5 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:w-4/5">
            Reviews
          </Link>
          <Link href="/about">
          <button className="py-3 px-6 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center gap-2 text-sm relative overflow-hidden bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5">
            About Us
          </button>
          </Link>
          <Link href="/selection">
          <button className="py-3 px-6 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center gap-2 text-sm relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl">
            Get Started
          </button>
          </Link>
        </nav>
      </div>
    </div>
  </header>
)

}

export default Navbar