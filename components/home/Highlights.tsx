import Link from "next/link";

const highlights = [
  {
    tag: "HACKATHON",
    date: "03 APR 2025",
    title: "SIT Hack-A-Verse 2025",
    desc: "Our flagship 24-hour hackathon bringing together over 200 students and 50+ teams to tackle challenging real-world problem statements.",
    href: "/events",
  },
  {
    tag: "INDUSTRY CONNECT",
    date: "18 AUG 2025",
    title: "Campus 2 Corporate",
    desc: "A five-day intensive program bridging the gap to corporate life through technical mock interviews, group discussions, and career preparation.",
    href: "/events",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative z-10 min-h-[100svh] w-full flex items-center justify-center px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0 bg-transparent border-t border-white/[0.03]"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 lg:mb-14 gap-5">

          <div>
            <p className="mb-2 text-[11px] sm:text-xs font-medium uppercase tracking-[3px] sm:tracking-[2px] text-[#9AA9D6]">
              SPOTLIGHT
            </p>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[1.05] tracking-[-1px] text-[#E8EEFF]">
              Featured
              <span className="text-[#6FA8FF]"> Events</span>
            </h2>
          </div>

          <Link
            href="/events"
            className="text-[13px] sm:text-sm font-medium text-[#8F9CC2] hover:text-[#E8EEFF] transition-colors"
          >
            View all events →
          </Link>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

          {highlights.map((item, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm transition-all duration-300 hover:border-[#6FA8FF]/30 hover:bg-white/[0.025]"
            >

              {/* Visual Area */}
              <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden border-b border-white/[0.04]">

                {/* Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Large Event Number */}
                <div className="absolute bottom-3 left-5 sm:bottom-5 sm:left-6 text-[64px] sm:text-[80px] lg:text-[96px] font-medium leading-none tracking-[-5px] text-white/[0.035] select-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Corner Label */}
                <div className="absolute right-5 top-5 sm:right-6 sm:top-6">
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-[2px] text-[#6F7DA8]">
                    CES / {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col justify-between p-5 sm:p-6 lg:p-7">

                <div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] sm:text-[10px] font-mono font-medium tracking-[1.5px]">

                    <span className="text-[#6FA8FF]">
                      {item.tag}
                    </span>

                    <span className="text-[#6F7DA8]">
                      {item.date}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-[23px] sm:text-[26px] lg:text-[30px] font-medium leading-tight tracking-[-0.5px] text-[#E8EEFF] group-hover:text-[#C9D8FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xl text-[13px] sm:text-sm leading-[1.7] text-[#8F9CC2]">
                    {item.desc}
                  </p>

                </div>

                {/* Link */}
                <Link
                  href={item.href}
                  className="mt-7 inline-flex items-center text-[13px] sm:text-sm font-medium text-[#9AA9D6] hover:text-[#E8EEFF] transition-colors"
                >
                  View event
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}