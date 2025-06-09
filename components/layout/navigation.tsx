// navigation.tsx
export const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      // href: "/",
      subitems: [
        { name: "AI Solutions", href: "/features/ai" },
        { name: "Stripe Payment", href: "/pricing" },
        { name: "Razorpay Payment", href: "/aboutus" },
        { name: "Projects", href: "/projects" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ];