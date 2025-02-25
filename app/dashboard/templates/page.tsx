import DashboardLayout from '@/app/components/dashboard/DashboardLayout';

export default function TemplatesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Content Templates</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Quick-start your content creation with pre-made templates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Blog Post Outline',
              description: 'Generate a structured outline for your blog post',
              category: 'Blog',
            },
            {
              title: 'Social Media Bundle',
              description: 'Create a week\'s worth of social media posts',
              category: 'Social',
            },
            {
              title: 'Video Script',
              description: 'Create an engaging video script with hooks',
              category: 'Video',
            },
            {
              title: 'Podcast Episode',
              description: 'Generate a podcast episode outline with talking points',
              category: 'Podcast',
            },
            {
              title: 'Newsletter',
              description: 'Create an engaging newsletter template',
              category: 'Email',
            },
            {
              title: 'Product Description',
              description: 'Write compelling product descriptions',
              category: 'Marketing',
            },
          ].map((template) => (
            <div
              key={template.title}
              className="group relative bg-zinc-900 rounded-lg border border-zinc-800 p-6 hover:border-indigo-500 transition-colors"
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 mb-4">
                  {template.category}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {template.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {template.description}
                </p>
              </div>
              <button className="mt-4 w-full bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
