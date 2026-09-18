export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 min-h-[100svh] w-full flex items-center justify-center px-5 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="w-full max-w-7xl mx-auto py-16 sm:py-20 lg:py-0">

        {/* Main Content */}
        <div className="max-w-5xl">

          {/* Section Label */}
          <p className="mb-4 sm:mb-5 text-[11px] sm:text-[13px] font-medium uppercase tracking-[3px] sm:tracking-[4px] text-[#9AA9D6]">
            WHO WE ARE
          </p>

          {/* Heading */}
          <h2 className="m-0 text-[48px] sm:text-[80px] lg:text-[104px] font-medium uppercase tracking-[-1px] sm:tracking-[-2px] leading-[0.9] text-[#E8EEFF]">
            ABOUT
            <br />
            <span className="text-[#6FA8FF]">CES.</span>
          </h2>

          {/* Divider */}
          <div className="mt-6 sm:mt-8 h-px w-16 sm:w-24 bg-[#6FA8FF]/70" />

          {/* Description */}
          <div className="mt-6 sm:mt-8 max-w-2xl">
            <p className="text-[14px] sm:text-[18px] leading-[1.65] sm:leading-[1.75] text-[#B8C5E3]">
              The Computer Engineers&apos; Society (CES) is the official
              departmental club of the Department of Computer Science and
              Engineering at Siliguri Institute of Technology. Since 2017, we
              have been fostering technical excellence, creativity, and
              innovation among students.
            </p>

            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[18px] leading-[1.65] sm:leading-[1.75] text-[#8F9CC2]">
              We empower students to transform academic theory into practical
              skills. By providing a dynamic platform to learn, build, and
              lead, CES bridges the gap between academics and industry through
              technical events, collaborative projects, and immersive
              workshops.
            </p>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-x-8 gap-y-7 sm:gap-10 lg:gap-14">

          {/* Established */}
          <div>
            <p className="text-[9px] sm:text-[11px] font-medium uppercase tracking-[2px] sm:tracking-[3px] text-[#7D89B5]">
              ESTABLISHED
            </p>

            <p className="mt-1.5 sm:mt-2 text-[24px] sm:text-[30px] font-medium tracking-[1px] text-[#E8EEFF]">
              2017
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-12 w-px bg-[#B8C5E3]/15" />

          {/* Department */}
          <div>
            <p className="text-[9px] sm:text-[11px] font-medium uppercase tracking-[2px] sm:tracking-[3px] text-[#7D89B5]">
              DEPARTMENT
            </p>

            <p className="mt-1.5 sm:mt-2 text-[24px] sm:text-[30px] font-medium tracking-[1px] text-[#E8EEFF]">
              CSE • SIT
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-12 w-px bg-[#B8C5E3]/15" />

          {/* Focus */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[9px] sm:text-[11px] font-medium uppercase tracking-[2px] sm:tracking-[3px] text-[#7D89B5]">
              FOCUS
            </p>

            <p className="mt-1.5 sm:mt-2 text-[20px] sm:text-[30px] font-medium tracking-[1px] text-[#E8EEFF]">
              LEARN • BUILD • LEAD
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}