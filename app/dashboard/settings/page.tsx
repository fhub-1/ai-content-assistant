import DashboardLayout from '@/app/components/dashboard/DashboardLayout';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Manage your account and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Account Settings</h2>
            <div className="space-y-4">
              {/* Profile settings will go here */}
              <p className="text-zinc-400">Profile settings coming soon...</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">API Settings</h2>
            <div className="space-y-4">
              {/* API settings will go here */}
              <p className="text-zinc-400">API settings coming soon...</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Notification Settings</h2>
            <div className="space-y-4">
              {/* Notification settings will go here */}
              <p className="text-zinc-400">Notification settings coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
