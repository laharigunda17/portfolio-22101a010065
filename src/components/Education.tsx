import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const educationData = [
  {
    degree: "BTech in Computer Science and Engineering",
    institution: "Mohan Babu University",
    period: "2021 - 2025",
    grade: "CGPA: 9.7",
    status: "4th Year, 1st Semester"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya College",
    period: "2019 - 2021",
    grade: "90%",
    status: "Completed"
  },
  {
    degree: "10th Grade",
    institution: "Keshava Reddy High School",
    period: "2019",
    grade: "99%",
    status: "Completed"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-card border-border card-glow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant="outline" className="border-primary text-primary">
                      {edu.period}
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                      {edu.grade}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{edu.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
