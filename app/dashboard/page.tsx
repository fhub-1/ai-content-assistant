import DashboardLayout from '../components/dashboard/DashboardLayout';
import ContentGenerationForm from '../components/dashboard/ContentGenerationForm';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Content Dashboard</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Create and manage your AI-generated content
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Content Generated', value: '128' },
            { label: 'Words Generated', value: '64,298' },
            { label: 'Templates Used', value: '24' },
            { label: 'Generation Credits', value: '872' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-900 overflow-hidden rounded-lg border border-zinc-800"
            >
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-zinc-400 truncate">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">
                  {stat.value}
                </dd>
              </div>
            </div>
          ))}
        </div>

        {/* Content Generation Form */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Create New Content</h2>
          <ContentGenerationForm />
        </div>

        {/* Recent Generations */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Generations</h2>
            <button className="text-sm text-indigo-400 hover:text-indigo-300">
              View All
            </button>
          </div>
          <div className="overflow-hidden">
            <div className="space-y-4">
              {[
                {
                  title: 'How to Boost Your Content Marketing Strategy',
                  type: 'Blog Post',
                  date: '2 hours ago',
                  status: 'Completed',
                },
                {
                  title: 'Product Launch Announcement',
                  type: 'Social Media',
                  date: '5 hours ago',
                  status: 'Completed',
                },
                {
                  title: 'Weekly Tech News Roundup',
                  type: 'Video Script',
                  date: '1 day ago',
                  status: 'Completed',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white truncate">
                      {item.title}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xs text-zinc-400">{item.type}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs text-zinc-400">{item.date}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
