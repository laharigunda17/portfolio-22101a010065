import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get in <span className="gradient-text">Touch</span>
        </h2>

        <Card className="bg-card border-border card-glow">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Let's Connect!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 justify-start gap-3 h-auto py-4"
                asChild
              >
                <a href="mailto:laharigunda17@gmail.com">
                  <Mail className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm">laharigunda17@gmail.com</div>
                  </div>
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 justify-start gap-3 h-auto py-4"
                asChild
              >
                <a href="tel:+918309177896">
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-sm">+91 8309177896</div>
                  </div>
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 justify-start gap-3 h-auto py-4"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/lahari-gunda-309a98290/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">LinkedIn</div>
                    <div className="text-sm">Lahari Gunda</div>
                  </div>
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 justify-start gap-3 h-auto py-4"
              >
                <MapPin className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm">Tirupati, India</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
