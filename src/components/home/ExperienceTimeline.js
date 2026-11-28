"use client";

const EXPERIENCE = [
  {
    badge: "Current role",
    date: "August 2026 - Present",
    title: "Software Developer & AI Intern",
    org: "JAKS & Associates",
    location: "Kochi",
    desc: "Working in software development and AI as an intern at JAKS & Associates in Kochi.",
    isCurrent: true,
  },
  {
    badge: "Ongoing",
    date: "",
    title: "Freelance Web Developer",
    org: "Client projects",
    location: "",
    desc: "Built and delivered websites for clients. Currently working on freelance projects.",
  },
  {
    badge: "",
    date: "2024 - 2026",
    title: "Master of Computer Applications",
    org: "Pondicherry University",
    location: "",
    desc: "Graduated April 2026 / GPA 7.3",
  },
  {
    badge: "",
    date: "September 2023 - March 2024",
    title: "Data Science Intern",
    org: "AI Variant",
    location: "Remote",
    desc: "Completed a six-month data science internship.",
  },
  {
    badge: "",
    date: "2020 - 2023",
    title: "Bachelor of Computer Applications",
    org: "Calicut University",
    location: "",
    desc: "GPA 6.5",
  },
];
export default function ExperienceTimeline() {
  return (
    <div className="relative mt-10">
      {/* 1. DESKTOP HORIZONTAL WAVE (hidden on mobile) */}
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="hidden md:block absolute top-0 left-0 w-full h-[100px] pointer-events-none z-0"
      >
        <path
          d="M 20 14 
       C 160 14, 170 90, 250 78 
       C 330 78, 360 14, 450 14 
       C 540 14, 570 90, 650 80 
       C 730 78, 760 14, 830 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="text-zinc-400 dark:text-zinc-600"
        />
      </svg>

      {/* 2. MOBILE VERTICAL WAVE (hidden on desktop) */}
      <svg
        viewBox="0 0 40 600"
        preserveAspectRatio="none"
        className="block md:hidden absolute top-3 bottom-12 left-0 w-7 h-[calc(100%-3rem)] pointer-events-none z-0"
      >
        <path
          d="M 20 0 
       C 34 75, 6 150, 20 225 
       C 34 300, 6 375, 20 450 
       C 34 525, 10 570, 20 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="text-zinc-400 dark:text-zinc-600"
        />
      </svg>
      {/* 5 Columns on Desktop, 1 Column on Mobile */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 ">
        {EXPERIENCE.map((item, idx) => {
          // Even indexes (0, 2, 4) are HIGH; Odd indexes (1, 3) are LOW
          const isLow = idx % 2 !== 0;

          return (
            <div
              key={item.title}
              className={`flex md:flex-col gap-5 md:gap-6 ${
                isLow ? "md:mt-16" : "md:mt-0"
              }`}
            >
              {/* THE DOT */}
              <div
                className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ${
                  item.isCurrent
                    ? "bg-zinc-900 border-zinc-900 dark:bg-zinc-100 dark:border-zinc-100"
                    : "bg-stone-100 border-zinc-400 dark:bg-zinc-950 dark:border-zinc-600"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.isCurrent
                      ? "bg-white dark:bg-zinc-900"
                      : "bg-zinc-900 dark:bg-zinc-100"
                  }`}
                />
              </div>

              {/* THE TEXT CONTENT */}
              <div className="space-y-2 mt-2">
                {/* Badge + Date row */}
                <div className="flex flex-wrap items-center gap-2">
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium">
                      {item.badge}
                    </span>
                  )}
                  {item.date && (
                    <span className="text-xs opacity-60">{item.date}</span>
                  )}
                </div>

                <h3 className="text-xl font-bold leading-snug">{item.title}</h3>

                <div>
                  <p className="text-sm font-semibold">{item.org}</p>
                  {item.location && (
                    <p className="text-xs opacity-60">{item.location}</p>
                  )}
                </div>

                <p className="text-xs sm:text-sm opacity-75 leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
