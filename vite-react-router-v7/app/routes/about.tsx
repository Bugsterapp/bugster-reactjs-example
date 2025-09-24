import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - React Router v7 App" },
    {
      name: "description",
      content: "Learn more about our React Router v7 application",
    },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Us - Page
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Welcome to our React Router v7 demonstration application. This
              project showcases the powerful routing capabilities of the latest
              version of React Router.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Modern Routing
                </h3>
                <p className="text-gray-600">
                  React Router v7 brings file-based routing, improved
                  performance, and better developer experience with type-safe
                  route definitions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Built with Vite
                </h3>
                <p className="text-gray-600">
                  Leveraging Vite's lightning-fast development server and
                  optimized build process for the best developer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
