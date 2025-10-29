import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Core Java", "Python", "SQL"]
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Genetic Algorithms", "Neural Networks", "Data Analysis"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "VS Code", "Database Management"]
  }
];

const certifications = [
  "Web Development Certification",
  "Java Certification"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Skills & <span className="gradient-text">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border card-glow">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border card-glow">
          <CardHeader>
            <CardTitle className="text-xl">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, i) => (
                <Badge 
                  key={i} 
                  className="bg-primary/20 text-primary border-primary/50 px-4 py-2 text-sm"
                  variant="outline"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
