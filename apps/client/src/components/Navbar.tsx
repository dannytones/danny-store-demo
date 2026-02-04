import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { ArrowRight, Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* Left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logoD.svg"
          alt="DannyLogo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          Danny Store.
        </p>
      </Link>
      <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 px-4 py-1 rounded-full whitespace-nowrap">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 border-r border-neutral-300 pr-2">
          Demo
        </span>
        <p className="text-[11px] text-neutral-600 font-medium">
          Full version on{" "}
          <a
            href="https://github.com/dannytones/DannyStore-Ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-4"
            style={{ color: "#2563eb", textDecorationColor: "#bfdbfe" }}
          >
            GitHub
          </a>
        </p>
      </div>
      {/* Right */}
      <div className="flex items-center gap-6">
        <Suspense
          fallback={
            <div className="hidden sm:block w-32 h-8 bg-gray-100 animate-pulse rounded-md" />
          }
        >
          <SearchBar />
        </Suspense>
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
