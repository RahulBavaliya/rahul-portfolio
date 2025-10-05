import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Slack, 
  MessagesSquare 
} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities,
              collaborations, or just having a chat about
              technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:rsbavaliya330@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        rsbavaliya330@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+917046504657"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 7046504657
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        Gandhinagar, Gujarat
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Connect with Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => window.open("https://www.linkedin.com/in/rahul-bavaliya-302467123", "_blank")}
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => window.open("https://github.com/RahulBavaliya", "_blank")}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => window.open("https://stackoverflow.com/users/6672088/rahul-bavaliya", "_blank")}
                    >
                      <Slack className="h-5 w-5 text-orange-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => window.open("https://wa.me/917046504657?text=Hi%20Rahul!%20I%20came%20across%20your%20portfolio%20and%20was%20really%20impressed.%20I%E2%80%99d%20like%20to%20connect.", "_blank")}
                    >
                      <MessagesSquare className="h-5 w-5 text-green-600" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me more about your inquiry..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}