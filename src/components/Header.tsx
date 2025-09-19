import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="py-2 border-b border-border/50">
          <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(631) 732-3700</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Thu: 8AM-8PM | Fri: 8AM-5PM | Sat: 9AM-3PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>1879 NY-112, Coram, NY 11727</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gradient">Pride Dentist</h1>
            <span className="text-sm text-muted-foreground hidden sm:block">
              Serving Long Island for over 30 years
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Our Team
            </a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#insurance" className="text-foreground hover:text-primary transition-colors">
              Insurance
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <Button className="btn-hero">
            Book Appointment
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;