import Image from 'next/image';

type StatProps = {
  value: string;
  label: string;
};

type TestimonialProps = {
  content: string;
  author: string;
  role: string;
  image: string;
};

function Stat({ value, label }: StatProps) {
  return (
    <div className="h-12 flex items-center">
      <span className="text-xl font-bold text-zinc-400">{value} {label}</span>
    </div>
  );
}

function Testimonial({ content, author, role, image }: TestimonialProps) {
  return (
    <div className="relative p-6 bg-zinc-900 rounded-xl border border-zinc-800">
      {/* Quote icon */}
      <div className="absolute -top-4 -left-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-6">
        <p className="text-zinc-400 text-lg leading-relaxed">"{content}"</p>
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-white font-medium">{author}</h4>
            <p className="text-zinc-400 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandLogo({ name }: { name: string }) {
  const brandColors: { [key: string]: string } = {
    youtube: "hover:text-[#FF0000]", // YouTube Red
    spotify: "hover:text-[#1DB954]", // Spotify Green
    twitch: "hover:text-[#9146FF]", // Twitch Purple
    patreon: "hover:text-[#FF424D]", // Patreon Red
    substack: "hover:text-[#FF6719]"  // Substack Orange
  };

  const icons = {
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    spotify: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
    twitch: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
      </svg>
    ),
    patreon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z"/>
      </svg>
    ),
    substack: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
      </svg>
    )
  };

  return (
    <div className={`w-32 h-12 text-zinc-400 ${brandColors[name]} transition-colors duration-300 transform hover:scale-110`}>
      {icons[name as keyof typeof icons]}
    </div>
  );
}

export default function SocialProof() {
  const stats = [
    { value: "1M+", label: "Videos" },
    { value: "500K+", label: "Scripts" },
    { value: "100K+", label: "Creators" },
    { value: "50K+", label: "Podcasts" }
  ];

  const testimonials = [
    {
      content: "ContentMagic AI has transformed how I create content. My YouTube channel has grown 3x faster since I started using it.",
      author: "Sarah Chen",
      role: "Tech YouTuber, 1.2M Subscribers",
      image: "/images/testimonials/creator1.jpg"
    },
    {
      content: "The AI-generated scripts and titles have helped me consistently create engaging content that my audience loves.",
      author: "Mike Johnson",
      role: "Podcast Host, The Future Today",
      image: "/images/testimonials/creator2.jpg"
    },
    {
      content: "This tool has cut my content creation time in half while maintaining the quality my subscribers expect.",
      author: "Emma Rodriguez",
      role: "Educational Content Creator",
      image: "/images/testimonials/creator3.jpg"
    }
  ];

  const brands = [
    { name: "youtube" },
    { name: "spotify" },
    { name: "twitch" },
    { name: "patreon" },
    { name: "substack" }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
          {stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Loved by Content Creators
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.author}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>

        {/* Trusted By Brands */}
        <div className="pt-16 border-t border-zinc-800">
          <h3 className="text-center text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-8">
            Integrated with your favorite platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-12">
            {brands.map((brand) => (
              <BrandLogo
                key={brand.name}
                name={brand.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
