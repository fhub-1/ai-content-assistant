"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Layout, 
  Home, 
  FileText, 
  History, 
  Settings, 
  Menu,
  X,
  PenTool,
  BookOpen,
  Video,
  Mic
} from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
};

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Content Creation', href: '/dashboard/create', icon: PenTool },
  { name: 'Blog Posts', href: '/dashboard/blog', icon: FileText },
  { name: 'Video Scripts', href: '/dashboard/video', icon: Video },
  { name: 'Podcast Content', href: '/dashboard/podcast', icon: Mic },
  { name: 'History', href: '/dashboard/history', icon: History },
  { name: 'Templates', href: '/dashboard/templates', icon: BookOpen },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile sidebar panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 transform transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-zinc-900 border-b border-zinc-800">
          <Link href="/" className="text-xl font-bold text-white">
            AI Content
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-zinc-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="px-4 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md mb-1 ${
                pathname === item.href
                  ? 'text-white bg-indigo-600'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-zinc-900">
          <div className="flex items-center h-16 px-6 bg-zinc-900 border-b border-zinc-800">
            <Link href="/" className="text-xl font-bold text-white">
              AI Content
            </Link>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  pathname === item.href
                    ? 'text-white bg-indigo-600'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-10 flex items-center h-16 bg-zinc-900 border-b border-zinc-800 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-4 text-zinc-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1 px-4 text-xl font-bold text-white">
            AI Content
          </div>
        </div>
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
