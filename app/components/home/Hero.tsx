import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-zinc-950 z-0"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/50 text-indigo-400 mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.4,21.76a1,1,0,0,1-1.12.26,1,1,0,0,1-.68-.94V16.67H10.25a1,1,0,0,1-.89-.54,1,1,0,0,1,.08-1l6.72-8.73a1,1,0,0,1,1.12-.26,1,1,0,0,1,.68.94v4.41h1.35a1,1,0,0,1,.89.54,1,1,0,0,1-.08,1Z"/>
              <path d="M3.89,16.13h4.14a1,1,0,0,1,.89.54,1,1,0,0,1-.08,1L2.11,26.4a1,1,0,0,1-1.12.26A1,1,0,0,1,.31,25.72V17.13H3A1,1,0,0,0,3.89,16.13Z"/>
            </svg>
            <span className="text-sm font-medium">AI-Powered Content Creation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Your AI Content Partner for
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
              YouTube & Podcasts
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto">
            Transform your content creation process. Get AI-powered scripts, descriptions, 
            and titles that keep your audience coming back for more.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/dashboard"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-indigo-600 rounded-full overflow-hidden transform transition-all hover:scale-105 hover:bg-indigo-500"
            >
              <span className="relative flex items-center gap-2">
                Start Creating Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="#features"
              className="text-zinc-400 hover:text-white transition-colors px-8 py-3 rounded-full border border-zinc-800 hover:border-zinc-700"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
