"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/components/layout/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "@/components/themeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) {
  const router = useRouter();

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button> */}
        </div>
        <div className="flex flex-col h-[calc(100vh-4rem)]">
          <nav className="flex-1 px-4 py-6 space-y-6">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-3">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`block text-sm font-medium ${
                      router.pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-muted-foreground">
                      {item.name}
                    </div>
                    {item.subitems?.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block pl-4 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="p-4 border-t">
            <ThemeToggle themeTextVisible={true} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}