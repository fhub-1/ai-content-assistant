import ContentGenerationForm from '@/app/components/dashboard/ContentGenerationForm';
import DashboardLayout from '@/app/components/dashboard/DashboardLayout';

export default function CreatePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Create Content</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Generate AI-powered content for your needs
          </p>
        </div>
        
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <ContentGenerationForm />
        </div>
      </div>
    </DashboardLayout>
  );
}
