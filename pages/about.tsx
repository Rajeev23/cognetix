export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">About Cognetix</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-[800px]">
          Cognetix is a leading provider of AI-powered solutions, dedicated to helping businesses
          harness the power of artificial intelligence to drive innovation and growth. Our team of
          experts combines deep technical knowledge with industry experience to deliver cutting-edge
          solutions that solve real-world problems.
        </p>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-[800px]">
          To empower businesses with intelligent solutions that drive efficiency, innovation, and
          growth through the power of artificial intelligence. We believe in making AI accessible
          and practical for businesses of all sizes.
        </p>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">CEO & Founder</p>
            <p className="text-gray-500 dark:text-gray-400">
              Visionary leader with 15+ years of experience in AI and technology.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
            <p className="text-gray-500 dark:text-gray-400">
              Technical expert specializing in machine learning and AI architecture.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            <h3 className="text-xl font-bold">Mike Johnson</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Head of Product</p>
            <p className="text-gray-500 dark:text-gray-400">
              Product strategist focused on delivering exceptional user experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 