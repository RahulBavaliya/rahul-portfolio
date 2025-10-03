import { Button } from './ui/button';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from '@/assets/profile.png';
import backgroundPattern from '@/assets/background.png';
import CV from '@/assets/Rahul_Bavaliya_CV.pdf';

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <ImageWithFallback
          src={backgroundPattern}
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1 animate-pulse">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-background" />
              </div>
              <ImageWithFallback
                src={profileImage}
                alt="Rahul Bavaliya"
                className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              Rahul Bavaliya
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-4">
              AI Generalist | Full Stack Developer | Aspiring Tech Innovator
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Blending AI research, full stack development, and problem-solving to create impactful solutions.
          </p>

          {/* Call-to-action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[160px]"
              onClick={() => window.open(CV, "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-2 hover:bg-accent hover:border-accent-foreground transition-all duration-300 transform hover:scale-105 min-w-[160px]"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}