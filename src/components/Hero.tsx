import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/dental-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern Pride Dentist office interior" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary-accent/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div className="mb-6 fade-in-up">
            <Badge className="bg-background/90 text-foreground border-0 px-4 py-2 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-2" />
              4.5 Stars • 30+ Years Serving Long Island
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="mb-8 fade-in-up">
            <h1 className="hero-title text-white mb-4">
              When was the last time you{" "}
              <span className="text-accent-light">left the Dental Office Smiling?</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Modern, gentle dentistry with state-of-the-art technology, painless treatment, 
              and personalized care. Experience the difference at Pride Dentist.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-in-up">
            <Button size="lg" className="btn-hero bg-accent hover:bg-accent-light text-accent-foreground">
              <Calendar className="h-5 w-5 mr-2" />
              Book Your Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (631) 732-3700
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-2 h-2 bg-accent-light rounded-full" />
              <span className="font-medium">Painless Treatment</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-2 h-2 bg-accent-light rounded-full" />
              <span className="font-medium">State-of-the-Art Technology</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-2 h-2 bg-accent-light rounded-full" />
              <span className="font-medium">Multi-Language Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;