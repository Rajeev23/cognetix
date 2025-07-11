"use client";

import { ReactNode, useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "./header";
import Footer from "./footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  showBanner?: boolean;
}

export default function Layout({ 
  children,
  showBanner = false 
}: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(showBanner);
  const [bannerHeight, setBannerHeight] = useState(0);
  const navbarHeight = 64; // 4rem

  useEffect(() => {
    setMounted(true);
    const banner = document.getElementById("banner");
    if (banner) {
      setBannerHeight(banner.offsetHeight);
    }
  }, []);

  // Don't render anything until mounted
  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={cn(
        "min-h-screen",
        "bg-background text-foreground",
        
      )}>
        <Navbar 
          bannerVisible={isBannerVisible}
          bannerHeight={bannerHeight}
        />
        
        <main
          className={cn(
            
            "pt-[var(--navbar-height)]"
          )}
          style={{ "--navbar-height": `${navbarHeight}px` } as React.CSSProperties}
        >
          <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
