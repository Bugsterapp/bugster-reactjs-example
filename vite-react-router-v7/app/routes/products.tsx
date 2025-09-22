import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products - React Router v7 App" },
    { name: "description", content: "Explore our amazing products" },
  ];
}

const products = [
  {
    id: 1,
    name: "React Router Pro",
    description: "Advanced routing solution for complex applications",
    price: "$99",
    image: "🚀",
  },
  {
    id: 2,
    name: "Component Library",
    description: "Beautiful, reusable React components",
    price: "$149",
    image: "🎨",
  },
  {
    id: 3,
    name: "Development Tools",
    description: "Boost your productivity with our dev tools",
    price: "$79",
    image: "🛠️",
  },
  {
    id: 4,
    name: "UI Kit Premium",
    description: "Complete design system for modern web apps",
    price: "$199",
    image: "✨",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium tools and components designed to
            accelerate your React development workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{product.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Something Custom?
            </h2>
            <p className="text-gray-600 mb-6">
              We offer custom development services tailored to your specific
              needs. Get in touch to discuss your project requirements.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
