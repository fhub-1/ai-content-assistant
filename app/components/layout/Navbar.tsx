import Link from 'next/link';

export default function Navbar() {
  // import sing in
   
  return (
    <nav className="fixed w-full bg-zinc-950/80 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
              ContentMagic AI
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105">
              Start Creating
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
