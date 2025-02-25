import DashboardLayout from '@/app/components/dashboard/DashboardLayout';

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Generation History</h1>
          <p className="mt-1 text-sm text-zinc-400">
            View and manage your content generation history
          </p>
        </div>

        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
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
    </DashboardLayout>
  );
}
