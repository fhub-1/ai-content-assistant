import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">AI Content Assistant</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content Creation Area */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create New Content</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Content Type
              </label>
              <select
                id="contentType"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option>Blog Post</option>
                <option>Social Media Post</option>
                <option>Email Newsletter</option>
                <option>Product Description</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Describe what you want to create..."
              />
            </div>

            <div>
              <label htmlFor="tone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Tone
              </label>
              <select
                id="tone"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option>Professional</option>
                <option>Casual</option>
                <option>Friendly</option>
                <option>Formal</option>
                <option>Humorous</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Generate Content
            </button>
          </div>
        </div>

        {/* Quick Templates */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="text-left p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
              <h3 className="font-semibold text-gray-900 dark:text-white">Blog Post Outline</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Generate a structured outline for your blog post</p>
            </button>
            <button className="text-left p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
              <h3 className="font-semibold text-gray-900 dark:text-white">Social Media Bundle</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Create a week&apos;s worth of social media posts</p>
            </button>
            <button className="text-left p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
              <h3 className="font-semibold text-gray-900 dark:text-white">Email Sequence</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Design a 5-email welcome sequence</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
