"use client";
import { navItem } from "@/util/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";

const navItems = [
  {
    path: "/",
    
    title: "Home",
  },
  {
    path: "/portfolio",
    title: "Portfolio",
  },
];

export default function Navbar() {
  const [currentRoute, setCurrentRoute] = useState<navItem>();
  const pathName = usePathname();
  useEffect(() => {
    const newRoute = navItems.find((val: navItem) => val.path === pathName);
    setCurrentRoute(newRoute);
  }, [pathName]);
  return (
    <nav className="flex items-center">
      <img src="/logo.png" alt="Sanket Lamsal Logo" className="h-16 w-16" />
      <ul className="flex w-full items-center justify-center gap-10 text-xl">
        {navItems.map((item: navItem, index: number) => (
          <Link
            href={item.path}
            key={index}
            className={item.path === currentRoute?.path ? "border-b-2" : "border-transparent border-b-2"}>
            {item.title}
          </Link>
        ))}
      </ul>
      <FaMoon size={24} className="ml-auto cursor-pointer" />
    </nav>
  );
}
