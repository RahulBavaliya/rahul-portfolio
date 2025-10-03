import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-500" />
                    IT Engineer I
                  </CardTitle>
                  <p className="text-lg font-medium text-primary">IIT Gandhinagar</p>
                </div>
                <div className="flex flex-col sm:text-right gap-1">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jul 2021 - present</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Gandhinagar, Gujarat</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Developed and maintained the <span className="text-foreground font-medium">Institute Management System (IMS)</span>, 
                  a large-scale ERP handling all data related to students, faculty, and staff/employees. Contributed to full-stack 
                  development, database management, and server administration while collaborating with stakeholders for requirement gathering.
                </p>

                <div>
                  <h4 className="font-semibold mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Utilized ASP.NET, .NET Core, MVC, Angular, Vue, HTML, CSS, JavaScript, TypeScript for full-stack development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Handled database design and server-related tasks using MS SQL Server 2012</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Gathered software requirements from higher authorities of IITGN for the software development lifecycle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Managed version control with Git and SVN, and tracked issues using JIRA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Used tools like Visual Studio 2019, SQL Server Management Studio (SSMS), and Visual Studio Code for development</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary">ASP.NET</Badge>
                  <Badge variant="secondary">.NET Core</Badge>
                  <Badge variant="secondary">MVC</Badge>
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">Vue</Badge>
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">MS SQL Server</Badge>
                  <Badge variant="secondary">Bootstrap</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">SVN</Badge>
                  <Badge variant="secondary">JIRA</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-500" />
                    Android Developer Intern
                  </CardTitle>
                  <p className="text-lg font-medium text-primary">Pujansoft Global Solutions.LLP</p>
                </div>
                <div className="flex flex-col sm:text-right gap-1">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 2019 - Jul 2019</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Rajkot, Gujarat</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Developed a Gate Pass Management Android application using Java, focusing on secure entry/exit management, real-time data handling, and smooth deployment on Android devices.
                </p>

                <div>
                  <h4 className="font-semibold mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Implemented QR code generation and scanning for secure entry/exit management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Integrated database and server-side APIs to handle gate pass records in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Ensured smooth performance, usability, and deployment on Android devices</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Android</Badge>
                  <Badge variant="secondary">QR Code</Badge>
                  <Badge variant="secondary">API Integration</Badge>
                  <Badge variant="secondary">Database</Badge>
                  <Badge variant="secondary">Deployment</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}