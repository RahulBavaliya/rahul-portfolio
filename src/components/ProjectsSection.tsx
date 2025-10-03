import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Wrench , Briefcase, User, Fingerprint, Droplets, Bolt } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: "Plumbing Service",
      type: "Collaborative Project",
      description: "Developed the Rajkot Plumbing Service project in close collaboration with the business owner, creating a user-friendly platform to highlight services and enhance customer reach.",
      technologies: ["React", "TypeScript", "HTML", "CSS", "Web Development", "Plumbing Service"],
      icon: Wrench,
      color: "text-red-500",
      code: "https://github.com/RahulBavaliya/PlumbingProject",
      preview: "https://rahulbavaliya.github.io/PlumbingProject/",
    },
    {
      title: "RSA Token Generator",
      type: "Personal Project",
      description: "Developed a secure RSA-based token generator that encrypts user credentials and metadata with a public key, and verifies them using private key decryption to ensure safe authentication and data transfer.",
      technologies: ["Next JS", "TypeScript", "HTML", "CSS", "Web Development", "Token Generator"],
      icon: Fingerprint,
      color: "text-green-500",
      code: "https://github.com/RahulBavaliya/rsatokengenerator",
      preview: "https://rsatokengenerator.vercel.app/",
    },
    {
      title: "Dada Aro Care",
      type: "Collaborative Project",
      description: "Built Aro Care, a customer service platform with automated WhatsApp messaging, service reminders, review collection, and real-time analytics for enhanced customer engagement.",
      technologies: ["React", "TypeScript", "HTML", "CSS", "Supabase", "Web Development", "Aro Care"],
      icon: Droplets,
      color: "text-blue-500",
      code: "https://github.com/RahulBavaliya/Aro-Care-Customer-Service",
      preview: "https://aro-care-customer-service.vercel.app/",
    },
    {
      title: "Tool Ocean",
      type: "Personal Project",
      description: "Created a One-Stop Destination for Free Online Tools, offering 15+ powerful, fast, and secure utilities for developers, writers, and professionals. The platform is completely registration-free, allowing users to instantly access tools with a single click.",
      technologies: ["Angular", "TypeScript", "HTML", "CSS", "Tools"],
      icon: Bolt,
      color: "text-orange-500",
      code: "https://github.com/RahulBavaliya/ToolOcean",
      preview: "https://tool-ocean.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className={`h-6 w-6 ${project.color}`} />
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1" 
                        onClick={() => window.open(project.code, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1"
                        onClick={() => window.open(project.preview, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}