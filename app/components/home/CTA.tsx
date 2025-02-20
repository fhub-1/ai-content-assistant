import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-t from-indigo-950/10 to-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to Transform Your Content?
        </h2>
        <p className="text-xl text-zinc-400 mb-12">
          Join thousands of creators who are saving time and growing their audience with AI-powered content creation.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-indigo-600 rounded-full overflow-hidden transform transition-all hover:scale-105 hover:bg-indigo-500"
        >
          Get Started for Free
        </Link>
      </div>
    </section>
  );
}
