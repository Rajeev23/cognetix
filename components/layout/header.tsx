"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { navigation } from "@/components/layout/navigation";
import MobileMenu from "@/components/layout/mobileMenu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "@/components/themeToggle";
import { cn } from "@/lib/utils";

interface NavbarProps {
  bannerVisible: boolean;
  bannerHeight: number;
}

export default function Navbar({ bannerVisible, bannerHeight }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const router = useRouter();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted
  if (!mounted) return null;

  return (
    <>
      <header
        className={cn(
          "fixed z-40 w-full transition-colors duration-200",
          "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        )}
        style={{ top: bannerVisible ? `${bannerHeight}px` : "0px" }}
      >
        <div className="container mx-auto px-4 lg:px-8 border-b">
          <div className="flex h-16 items-center justify-between">
            {/* Left: Logo + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden focus-visible:ring-0"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
              <Link
                href="/"
                className="flex items-center text-xl font-bold focus-visible:outline-none"
              >
                Cognetix
              </Link>
            </div>

            {/* Center: Navigation */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-center pl-8">
              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  {navigation.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.subitems ? (
                        <>
                          <NavigationMenuTrigger>
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                              {item.subitems.map((subitem) => (
                                <li key={subitem.name}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subitem.href}
                                      className={cn(
                                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
                                        "transition-colors duration-200",
                                        "hover:bg-accent hover:text-accent-foreground",
                                        "focus:bg-accent focus:text-accent-foreground focus-visible:ring-0"
                                      )}
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {subitem.name}
                                      </div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {subitem.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink 
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "transition-colors duration-200"
                            )}
                          >
                            {item.name}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right: Theme Toggle */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <ThemeToggle themeTextVisible={false} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}
