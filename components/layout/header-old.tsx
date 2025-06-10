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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  if (!mounted) return null;

  return (
    <>
      <header
        className="fixed z-40 w-full bg-background"
        style={{
          top: bannerVisible ? `${bannerHeight}px` : '0px'
        }}
      >
        {/* 🧠 Wrap only the nav in container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            <div className="flex pr-10">
              <Link
                href="/"
                className="flex items-center text-xl font-bold focus-visible:outline-none"
              >
                Cognetix
              </Link>
            </div>
            {/* Mobile menu */}
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
                    <Menu className="h-6 w-6 text-primary" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={classNames(
                          "text-sm font-normal leading-6",
                          router.pathname === item.href
                            ? "text-primary border-b-2 border-primary"
                            : "text-navlink hover:text-primary hover:border-b-2 hover:border-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-sm font-normal leading-6 text-navlink cursor-default">
                        {item.name}
                      </span>
                    )}
                    {item.subitems && (
                      <ChevronDown className="h-4 w-4 ml-1 text-black dark:text-white" />
                    )}
                  </div>

                  {item.subitems && openSubmenu === item.name && (
                    <div
                      className="absolute left-0 mt-4 w-52 bg-background border border-border rounded-md shadow-lg"
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.subitems.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href || "#"}
                          className="block px-4 py-2 text-sm bg-background hover:bg-navHover"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Theme toggle right */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <ThemeToggle themeTextVisible={false} />
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu component */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}
