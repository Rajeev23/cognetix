
  import React from "react";
  import Link from "next/link";
  import { Facebook, Instagram, Twitter } from "lucide-react";
  // Social Media Configuration
  const socialMediaIcons = [
    {
      href: "#",
      label: "Facebook",
      Icon: Facebook,
    },
    {
      href: "#",
      label: "Twitter",
      Icon: Twitter,
    },
    {
      href: "#",
      label: "Instagram",
      Icon: Instagram,
    },
  ] as const;
  
  // Footer Navigation Configuration
  const footerSections = [
    {
      title: "Product",
      items: [
        { name: "Home", href: "/" },
        { name: "Pricing", href: "/pricing" },
        { name: "Changelog", href: "/changelog" },
        { name: "Privacy", href: "/privacy" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Terms", href: "/terms" },
        { name: "Sitemap", href: "/sitemap" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Resource", href: "/resource" },
        { name: "Help & Support", href: "/support" },
        { name: "eBook", href: "/ebook" },
        { name: "What's New", href: "/whats-new" },
        { name: "Status", href: "/status" },
      ],
    },
  ] as const;
  
  const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className=" container w-full py-8 px-4 sm:px-6 lg:px-8  bg-background">
        <div className="container mx-auto lg:px-[5rem]">
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-xl font-bold">Cognetix</span>
              <p className="text-sm mt-3">
                &copy; {currentYear} Kalrovis. All rights reserved.
              </p>
              
              <ul className="flex space-x-4 mt-4">
                {socialMediaIcons.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      aria-label={label}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      <Icon className="w-6 h-6" />
                    </Link>
                  </li>
                ))}
              </ul>
  
              <div className="mt-6">
                
              </div>
            </div>
  
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <p className="text-xs font-semibold uppercase mb-3">
                    {section.title}
                  </p>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href}
                          className="text-sm text-secondary-foreground hover:text-secondary-hover"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}
  
          {/* Footer Bottom */}
          <div className=" text-center -mx-4 sm:-mx-6 lg:-mx-8">
            <p className="text-sm">
              Crafted with ❤️ by Cognetix
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;