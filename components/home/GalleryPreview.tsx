import Link from "next/link";

const galleryItems = [
  { 
    id: 1, 
    title: "SIT Hack-A-Verse 2025", 
    category: "Hackathon BTS", 
    desc: "Teams collaborating through the 24-hour coding sprint." 
  },
  { 
    id: 2, 
    title: "Campus 2 Corporate", 
    category: "Industry Connect", 
    desc: "Mock interviews and professional preparation sessions." 
  },
  { 
    id: 3, 
    title: "Code Bites 5.0", 
    category: "Competition Highlights", 
    desc: "Participants deep in focus during the programming challenge." 
  },
];

export default function GalleryPreview() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-white/[0.03] bg-transparent py-20">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[var(--ces-text-secondary)]">
            Visual Feed
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[var(--ces-text-primary)] sm:text-4xl">
            Moments from CES
          </h2>

          <p className="mt-3 max-w-lg text-sm font-medium leading-relaxed text-[var(--ces-text-muted)]">
            A look behind the scenes at our hackathons, workshops, and community events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-64 overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.015] transition-all duration-300 hover:bg-white/[0.02] hover:border-white/[0.12] flex flex-col justify-end p-6"
            >
              {/* Clean subtle texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

              {/* Bottom gradient fade for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-80 pointer-events-none" />

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col gap-1">
                <span className="text-xs font-mono font-semibold text-[var(--ces-gold)] tracking-widest uppercase">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-[var(--ces-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-[var(--ces-text-muted)] mt-1 line-clamp-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* View Gallery Link Card */}
          <Link
            href="/gallery"
            className="group relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.015] transition-all duration-300 hover:bg-white/[0.02] hover:border-white/[0.12]"
          >
            {/* Clean subtle texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 transition-opacity duration-300 group-hover:opacity-50" />

            {/* Content */}
            <div className="relative flex items-center gap-3">
              <span className="text-sm font-semibold text-[var(--ces-text-secondary)] transition-colors group-hover:text-[var(--ces-text-primary)]">
                Explore full gallery
              </span>

              <span className="text-lg text-[var(--ces-text-secondary)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--ces-text-primary)]">
                →
              </span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}