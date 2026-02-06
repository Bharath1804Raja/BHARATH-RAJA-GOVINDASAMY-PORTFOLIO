import { Code, Globe, Database, BookOpen, Star } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "HTML", "CSS", "SQL", "R Programming"],
    borderColor: "border-orange-200",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-500",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      "React",
      "Node.js",
      "Bootstrap",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    iconBg: "bg-primary",
  },
  {
    title: "Data & Tools",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "IBM Watson Studio",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    borderColor: "border-emerald-200",
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-500",
  },
];

const coursework = [
  "Introduction to Python",
  "IBM Watson Studio",
  "Object-Oriented Programming",
  "Web Development Fundamentals",
  "Data Structures & Algorithms",
  "Database Management Systems",
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Comprehensive skill set spanning multiple technologies and
            programming paradigms.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`rounded-xl border-2 ${category.borderColor} ${category.bgColor} p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2 rounded-lg ${category.iconBg} text-card`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-card/80 text-foreground border border-border hover:bg-card transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coursework */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border-2 border-pink-200 bg-pink-50 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-pink-500 text-card">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground">
                Relevant Coursework
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-3 p-3 bg-card/50 rounded-lg"
                >
                  <Star className="w-4 h-4 text-pink-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
