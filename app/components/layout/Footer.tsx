import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
              ContentMagic AI
            </h2>
            <p className="text-zinc-400 text-sm">
              Empowering content creators with AI-powered tools for better content creation.
              Transform your content workflow with cutting-edge AI technology.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" platform="Twitter" />
              <SocialLink href="#" platform="YouTube" />
              <SocialLink href="#" platform="GitHub" />
            </div>
          </div>

          {/* Product section */}
          <FooterSection
            title="Product"
            links={[
              { href: '#features', label: 'Features' },
              { href: '#pricing', label: 'Pricing' },
              { href: '/api', label: 'API' },
              { href: '/integrations', label: 'Integrations' },
              { href: '/templates', label: 'Templates' }
            ]}
          />

          {/* Resources section */}
          <FooterSection
            title="Resources"
            links={[
              { href: '/blog', label: 'Blog' },
              { href: '/docs', label: 'Documentation' },
              { href: '/tutorials', label: 'Tutorials' },
              { href: '/community', label: 'Community' },
              { href: '/support', label: 'Support Center' }
            ]}
          />

          {/* Company section */}
          <FooterSection
            title="Company"
            links={[
              { href: '/about', label: 'About' },
              { href: '/careers', label: 'Careers' },
              { href: '/contact', label: 'Contact' },
              { href: '/press', label: 'Press Kit' },
              { href: '/partners', label: 'Partners' }
            ]}
          />
        </div>

        {/* Bottom footer */}
        <div className="border-t border-zinc-800 py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} ContentMagic AI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <FooterLink href="/privacy" label="Privacy Policy" />
            <FooterLink href="/terms" label="Terms of Service" />
            <FooterLink href="/cookies" label="Cookie Policy" />
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterSectionProps = {
  title: string;
  links: Array<{ href: string; label: string }>;
};

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type FooterLinkProps = {
  href: string;
  label: string;
};

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-zinc-400 hover:text-white transition-colors text-sm"
    >
      {label}
    </Link>
  );
}

type SocialLinkProps = {
  href: string;
  platform: 'Twitter' | 'YouTube' | 'GitHub';
};

function SocialLink({ href, platform }: SocialLinkProps) {
  return (
    <Link href={href} className="text-zinc-400 hover:text-indigo-400 transition-colors">
      <span className="sr-only">{platform}</span>
      {getSocialIcon(platform)}
    </Link>
  );
}

function getSocialIcon(platform: string) {
  switch (platform) {
    case 'Twitter':
      return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      );
    case 'YouTube':
      return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'GitHub':
      return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
}
