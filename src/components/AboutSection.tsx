import { Card, CardContent } from './ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Full-Stack Developer with <span className="text-foreground font-medium">4+ years of experience </span> 
                in building and deploying scalable web applications. Skilled in 
                <span className="text-foreground font-medium"> Angular, Vue.js, .NET, SQL databases</span>, 
                and experienced with <span className="text-foreground font-medium">CI/CD pipelines and server management</span>. 
                Proven track record of delivering high-quality solutions through strong 
                <span className="text-foreground font-medium"> problem-solving, research, and teamwork</span>. 
                Passionate about <span className="text-foreground font-medium">AI, software development</span>, and creating tools that make real-world impact.
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2020</div>
                  <div className="text-sm text-muted-foreground">Completed Graduation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">7+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Internship Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}