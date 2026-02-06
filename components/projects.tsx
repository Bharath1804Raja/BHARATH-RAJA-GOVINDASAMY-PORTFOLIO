import { Layers, Globe, Database } from "lucide-react";

const projects = [
  {
    title: "Snake Game Using Python",
    description:
      "A classic arcade game where the player controls a growing snake that moves around the screen, consuming food while avoiding collisions with itself and the screen edges. The objective is to grow as long as possible without crashing.",
    category: "Game Development",
    status: "completed",
    tags: ["Python"],
    icon: Layers,
    accentColor: "bg-emerald-500",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200",
  },
  {
    title: "Health Monitoring App",
    description:
      "A React-based web application which allows users to chat in real time. Facilitating users' logins to websites without having to remember their credentials. Used live detection techniques to create high order security.",
    category: "Web Development",
    status: "completed",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: Globe,
    accentColor: "bg-primary",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    badgeBorder: "border-blue-200",
  },
  {
    title: "Traffic Detection Tracker",
    description:
      "Daily and weekly updated statistics tracking the number of traffic detection cases. Tracking world-wide cases using Google Maps and live API stats and datasets.",
    category: "Data Analysis",
    status: "completed",
    tags: ["R Programming"],
    icon: Database,
    accentColor: "bg-indigo-500",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-200",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            A selection of projects showcasing my skills in game development, web
            applications, and data analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group flex flex-col rounded-xl border border-border bg-background overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Accent bar */}
                <div className={`h-1.5 ${project.accentColor}`} />

                <div className="flex flex-col flex-1 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${project.badgeBg} ${project.badgeText} ${project.badgeBorder}`}
                      >
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-emerald-600 border border-emerald-200 rounded-md px-2.5 py-0.5">
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-md border border-border text-foreground bg-secondary/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
