export default function AIFeaturesPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">AI Solutions</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-[800px]">
          Our cutting-edge AI solutions are designed to help businesses automate processes,
          gain insights, and make data-driven decisions. Explore our range of AI-powered
          features below.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-lg border p-6">
          <h2 className="text-2xl font-bold">Natural Language Processing</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Advanced text analysis and understanding capabilities that help you process and
            extract insights from unstructured data.
          </p>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
            <li>Sentiment Analysis</li>
            <li>Text Classification</li>
            <li>Entity Recognition</li>
            <li>Language Translation</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border p-6">
          <h2 className="text-2xl font-bold">Computer Vision</h2>
          <p className="text-gray-500 dark:text-gray-400">
            State-of-the-art image and video analysis solutions for object detection,
            recognition, and tracking.
          </p>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
            <li>Object Detection</li>
            <li>Image Classification</li>
            <li>Facial Recognition</li>
            <li>Video Analytics</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border p-6">
          <h2 className="text-2xl font-bold">Predictive Analytics</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Leverage machine learning to forecast trends, identify patterns, and make
            data-driven predictions.
          </p>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
            <li>Demand Forecasting</li>
            <li>Risk Assessment</li>
            <li>Customer Behavior Analysis</li>
            <li>Market Trend Prediction</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border p-6">
          <h2 className="text-2xl font-bold">Automation & Optimization</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Streamline your operations with AI-powered automation and optimization solutions.
          </p>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
            <li>Process Automation</li>
            <li>Resource Optimization</li>
            <li>Workflow Management</li>
            <li>Performance Tuning</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Why Choose Our AI Solutions?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Scalable</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our solutions grow with your business, handling increasing data volumes and
              complexity.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Customizable</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Tailored to your specific needs and integrated with your existing systems.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Secure</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Enterprise-grade security with data encryption and compliance standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 