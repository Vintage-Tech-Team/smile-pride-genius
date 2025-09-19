import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-accent mb-4">Pride Dentist</h3>
            <p className="text-background/80 mb-4">
              Modern, gentle dentistry serving Long Island for over 30 years.
            </p>
            <p className="text-background/60 text-sm">
              "When was the last time you left the Dental Office Smiling?"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#services" className="hover:text-accent transition-colors">General Dentistry</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Emergency Care</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Pediatric Dentistry</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>(631) 732-3700</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@pride.dentist</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <div>
                  <p>1879 NY-112</p>
                  <p>Coram, NY 11727</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-semibold text-background mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <div>
                  <p>Mon, Tue, Thu: 8AM-8PM</p>
                  <p>Wed, Fri: 8AM-5PM</p>
                  <p>Sat: 9AM-3PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              <p>&copy; 2024 Pride Dentist. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm text-background/80">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-background/50">
              Multi-language support: English, Español, Polski, Italiano, Français, Urdu, Filipino
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;