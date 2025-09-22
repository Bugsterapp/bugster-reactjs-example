import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - React Router v7 App" },
    { name: "description", content: "Your personal dashboard" },
  ];
}

const stats = [
  { label: "Total Users", value: "12,345", change: "+12%", trend: "up" },
  { label: "Revenue", value: "$45,678", change: "+8%", trend: "up" },
  { label: "Orders", value: "1,234", change: "-3%", trend: "down" },
  { label: "Conversion Rate", value: "3.2%", change: "+0.5%", trend: "up" },
];

const recentActivity = [
  { action: "New user registered", time: "2 minutes ago", type: "user" },
  { action: "Order #1234 completed", time: "5 minutes ago", type: "order" },
  { action: "Payment received", time: "12 minutes ago", type: "payment" },
  { action: "Product updated", time: "1 hour ago", type: "product" },
  { action: "New review posted", time: "2 hours ago", type: "review" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's what's happening with your app.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`text-sm font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Activity
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.type === "user"
                            ? "bg-blue-500"
                            : activity.type === "order"
                              ? "bg-green-500"
                              : activity.type === "payment"
                                ? "bg-yellow-500"
                                : activity.type === "product"
                                  ? "bg-purple-500"
                                  : "bg-gray-500"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  Quick Actions
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">
                      Add New Product
                    </div>
                    <div className="text-sm text-gray-500">
                      Create a new product listing
                    </div>
                  </button>

                  <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">
                      View Analytics
                    </div>
                    <div className="text-sm text-gray-500">
                      Check detailed performance metrics
                    </div>
                  </button>

                  <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">
                      Manage Users
                    </div>
                    <div className="text-sm text-gray-500">
                      View and edit user accounts
                    </div>
                  </button>

                  <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Settings</div>
                    <div className="text-sm text-gray-500">
                      Configure app preferences
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
