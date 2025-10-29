import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="gradient-text">Lahari Gunda</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Computer Science Student | AI & ML Enthusiast
          </p>
        </div>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          A highly motivated BTech student with a passion for Artificial Intelligence, 
          Machine Learning, and Full-Stack Development. Building innovative solutions 
          to solve real-world challenges.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex justify-center gap-6 pt-8">
          <a 
            href="https://www.linkedin.com/in/lahari-gunda-309a98290/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:laharigunda17@gmail.com"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="tel:+918309177896"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
