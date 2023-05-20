"use client";
import { navItem } from "@/util/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import logoImage from "@/public/logo.png";

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
      <Image
        src={logoImage}
        height={50}
        width={50}
        alt="Sanket Lamsal Logo"
      />
      <ul className="flex w-full items-center justify-center gap-10 text-xl">
        {navItems.map((item: navItem, index: number) => (
          <Link
            href={item.path}
            key={index}
            className={
              item.path === currentRoute?.path
                ? "border-b-2"
                : "border-b-2 border-transparent"
            }>
            {item.title}
          </Link>
        ))}
      </ul>
      <FaMoon size={24} className="ml-auto cursor-pointer" />
    </nav>
  );
}
