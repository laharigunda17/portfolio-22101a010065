import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border card-glow">
            <CardHeader>
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              BTech in Computer Science at Mohan Babu University with an outstanding CGPA of 9.7
            </CardContent>
          </Card>

          <Card className="bg-card border-border card-glow">
            <CardHeader>
              <Code className="w-12 h-12 text-secondary mb-4" />
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Proficient in Java, Python, HTML/CSS, SQL, and passionate about AI/ML technologies
            </CardContent>
          </Card>

          <Card className="bg-card border-border card-glow">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Leadership</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Core member of Coding Club, organizing events like CODE CLASH and Java Kingdom
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
