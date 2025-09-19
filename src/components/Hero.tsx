import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/dental-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Enhanced Background with Glass Morphism */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern Pride Dentist office interior" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-light/85 to-secondary-accent/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-accent-glow/20 blur-xl floating-animation" />
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-primary-glow/30 blur-2xl floating-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          {/* Enhanced Trust Badge */}
          <div className="mb-8 fade-in-up">
            <Badge className="glass-effect backdrop-blur-lg text-white border-white/30 px-6 py-3 text-base font-semibold">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-3" />
              4.5 Stars • 30+ Years Serving Long Island
            </Badge>
          </div>

          {/* Main Headline with Enhanced Typography */}
          <div className="mb-12 fade-in-up">
            <h1 className="hero-title text-white mb-6">
              When was the last time you{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
                left the Dental Office Smiling?
              </span>
            </h1>
            <p className="text-xl text-white/95 max-w-3xl leading-relaxed font-medium">
              Experience the future of dental care with our state-of-the-art technology, 
              painless treatments, and personalized approach. Your comfort is our priority.
            </p>
          </div>

          {/* Enhanced Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12 fade-in-up">
            <Button size="lg" className="btn-hero pulse-glow">
              <Calendar className="h-5 w-5 mr-2" />
              Book Your Appointment
            </Button>
            <Button 
              size="lg" 
              className="btn-glass"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (631) 732-3700
            </Button>
          </div>

          {/* Enhanced Key Features with Modern Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            <div className="flex items-center space-x-4 text-white/95 glass-effect p-4 rounded-2xl">
              <div className="w-3 h-3 bg-accent-light rounded-full shadow-accent-glow" />
              <span className="font-semibold text-lg">Painless Treatment</span>
            </div>
            <div className="flex items-center space-x-4 text-white/95 glass-effect p-4 rounded-2xl">
              <div className="w-3 h-3 bg-accent-light rounded-full shadow-accent-glow" />
              <span className="font-semibold text-lg">State-of-the-Art Technology</span>
            </div>
            <div className="flex items-center space-x-4 text-white/95 glass-effect p-4 rounded-2xl">
              <div className="w-3 h-3 bg-accent-light rounded-full shadow-accent-glow" />
              <span className="font-semibold text-lg">Multi-Language Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;