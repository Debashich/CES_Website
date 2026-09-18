const domains = [
  {
    id: "01",
    title: "Hackathons & Innovation",
    desc: "Building real-world solutions under pressure in flagship events like SIT Hack-A-Verse and the Smart India Hackathon.",
  },
  {
    id: "02",
    title: "Cybersecurity",
    desc: "Exploring threat intelligence, digital defense systems, and competing in national challenges like the CyberShield Hackathon.",
  },
  {
    id: "03",
    title: "IoT & Hardware",
    desc: "Designing embedded systems and smart devices, from crop advisory sensors to satellite-enabled communication technology.",
  },
  {
    id: "04",
    title: "Web & App Development",
    desc: "Creating scalable applications, mastering modern web frameworks, and exploring cross-platform tools like Flutter.",
  },
  {
    id: "05",
    title: "Open Source",
    desc: "Contributing to global public codebases and fostering developer networks through GDG DevFest and SAP Hackfest.",
  },
  {
    id: "06",
    title: "Competitive Programming",
    desc: "Strengthening logical thinking and algorithmic problem-solving through intensive events like Code Bites and DSA challenges.",
  },
];

export default function Domains() {
  return (
    <section
      id="domains"
      className="relative z-10 min-h-[100svh] w-full flex items-center justify-center px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0 bg-transparent border-t border-white/[0.03]"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12 lg:mb-14 border-l border-[#6FA8FF]/40 pl-4 sm:pl-5">

          <p className="mb-2 text-[11px] sm:text-xs font-medium uppercase tracking-[3px] sm:tracking-[2px] text-[#9AA9D6]">
            WHAT WE DO
          </p>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[1.05] tracking-[-1px] text-[#E8EEFF]">
            Technical Scope
            <br className="sm:hidden" />{" "}
            <span className="text-[#6FA8FF]">& Focus Tracks</span>
          </h2>

        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">

          {domains.map((domain) => (
            <div
              key={domain.id}
              className="group relative min-h-[190px] sm:min-h-[205px] lg:min-h-[220px] p-5 sm:p-6 lg:p-7 bg-white/[0.015] border border-white/[0.06] rounded-xl hover:border-[#6FA8FF]/30 hover:bg-white/[0.025] transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
            >

              {/* Top */}
              <div>

                <span className="block mb-4 text-[10px] sm:text-xs font-mono font-medium tracking-[1px] text-[#6F7DA8]">
                  {domain.id}
                </span>

                <h3 className="mb-3 text-[18px] sm:text-[19px] lg:text-xl font-medium leading-tight text-[#E8EEFF] group-hover:text-[#C9D8FF] transition-colors">
                  {domain.title}
                </h3>

                <p className="text-[13px] sm:text-sm font-normal leading-[1.65] text-[#8F9CC2]">
                  {domain.desc}
                </p>

              </div>

              {/* Arrow */}
              <div className="mt-5 text-right text-lg font-medium text-[#66749F] group-hover:text-[#6FA8FF] group-hover:translate-x-1 transition-all duration-300">
                →
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}