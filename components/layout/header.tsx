"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { navigation } from "./navigation";
import MobileMenu from "./mobileMenu";
import ThemeToggle from "../themeToggle";
import { Menu, ChevronDown } from "lucide-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavbarProps {
  bannerVisible: boolean;
  bannerHeight: number;
}

export default function Navbar({ bannerVisible, bannerHeight }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header
        className="fixed z-40 w-full bg-background"
        style={{ top: bannerVisible ? `${bannerHeight}px` : "0px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex pr-10">
              <Link
                href="/"
                className="flex items-center text-xl font-bold focus-visible:outline-none"
              >
                Cognetix
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              {!mobileMenuOpen && (
                <div className="flex items-center space-x-4">
                  <ThemeToggle themeTextVisible={false} />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                  >
                    <span className="sr-only">Open main menu</span>
                    <Menu className="h-6 w-6 text-primary" />
                  </button>
                </div>
              )}
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex lg:gap-x-10">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                >
                  {/* Main nav link */}
                  <div className="flex items-center space-x-1 cursor-pointer">
                    {item.href ? (
                     <Link
                     href={item.href}
                     className={classNames(
                       "text-sm font-medium leading-6 transition-colors border-b-2",
                       router.pathname === item.href
                         ? "text-primary border-primary"
                         : "text-navlink border-transparent hover:text-primary hover:border-primary"
                     )}
                   >
                     {item.name}
                   </Link>
                   
                    ) : (
                      <span className="text-sm font-medium leading-6 text-navlink cursor-default">
                        {item.name}
                      </span>
                    )}

                    {/* Chevron */}
                    {item.subitems && (
                      <ChevronDown className="h-4 w-4 text-navlink group-hover:rotate-180 group-hover:text-primary transition-transform duration-300 ease-in-out" />
                    )}
                  </div>

                  {/* Submenu */}
                  {item.subitems && (
                    <div className="absolute left-0 mt-3 w-56 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50"
                    >
                      <div className="py-1 cursor-default">
                        {item.subitems.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href || "#"}
                            className="block px-4 py-2 text-sm font-medium text-navlink hover:bg-navHover hover:text-primary transition cursor-pointer"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Theme Toggle Right */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <ThemeToggle themeTextVisible={false} />
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}
