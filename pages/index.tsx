import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Card data array
const cardData = [
  {
    title: "AI Solutions",
    description: "Advanced AI capabilities tailored to your business needs.",
  },
  {
    title: "Analytics",
    description: "Powerful analytics and insights to drive decision-making.",
  },
  {
    title: "Integration",
    description: "Seamless integration with your existing systems.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center gap-8 min-h-screen px-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Cognetix</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Your AI-powered solution for modern challenges. We help businesses leverage the power of artificial intelligence to drive growth and innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default">Get Started</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
