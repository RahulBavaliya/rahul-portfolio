import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Calendar, Building2 } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      title: "Backend Completion Certificate",
      issuer: "Blue Fox Pvt. Ltd.",
      year: "2024",
      description: "Successfully completed comprehensive backend development training program",
      skills: ["Laravel", "PHP", "MySQL", "Backend Architecture"]
    },
    {
      title: "PHP & Laravel Integration Proficiency",
      issuer: "Blue Fox Pvt. Ltd.",
      year: "2024",
      description: "Demonstrated proficiency in PHP and Laravel framework integration",
      skills: ["PHP", "Laravel", "MVC", "Web Development"]
    },
    {
      title: "Git & GitHub Basics",
      issuer: "Self-Directed Learning",
      year: "2024",
      description: "Mastered version control fundamentals and collaborative development workflow",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Training
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-500" />
                        {cert.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}