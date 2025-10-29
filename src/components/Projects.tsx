import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Brain } from "lucide-react";

const projects = [
  {
    title: "Rock, Paper, Scissors Game",
    description: "An interactive GUI-based game supporting both single-player (AI opponent) and multiplayer modes with real-time feedback on results and scores.",
    icon: Gamepad2,
    technologies: ["Python", "GUI", "Game Development"],
    highlights: [
      "Interactive GUI with intuitive design",
      "AI opponent implementation",
      "Real-time score tracking",
      "Robust error handling"
    ]
  },
  {
    title: "Genetic Algorithm for Diabetes Diagnosis",
    description: "AI-powered system leveraging Genetic Algorithms to optimize feature selection and enhance diabetes prediction accuracy using machine learning classifiers.",
    icon: Brain,
    technologies: ["Python", "AI/ML", "Genetic Algorithms", "SVM"],
    highlights: [
      "Feature optimization using GA",
      "Multiple classifier integration",
      "Applied to PIMA dataset",
      "Improved prediction accuracy"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border card-glow">
              <CardHeader>
                <project.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground/80 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-primary/50 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
