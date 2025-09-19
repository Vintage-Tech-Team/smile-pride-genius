import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  Globe,
  Calendar,
  Navigation
} from "lucide-react";

const Contact = () => {
  const languages = [
    "English", "Español", "Polski", "Italiano", "Français", "Urdu", "Filipino"
  ];

  const officeHours = [
    { days: "Monday", hours: "8:00 AM - 8:00 PM" },
    { days: "Tuesday", hours: "8:00 AM - 8:00 PM" },
    { days: "Wednesday", hours: "8:00 AM - 5:00 PM" },
    { days: "Thursday", hours: "8:00 AM - 8:00 PM" },
    { days: "Friday", hours: "8:00 AM - 5:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 3:00 PM" },
    { days: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Contact Us
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Schedule Your Visit Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're conveniently located in Coram, NY, and easily accessible from anywhere 
            on Long Island. Multiple ways to reach us for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="card-gradient border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>Contact Information</span>
              </CardTitle>
              <CardDescription>
                Multiple ways to reach our friendly team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">(631) 732-3700</p>
                  <p className="text-sm text-muted-foreground">Main Office Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">info@pride.dentist</p>
                  <p className="text-sm text-muted-foreground">General Inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">1879 NY-112</p>
                  <p className="text-foreground">Coram, NY 11727</p>
                  <p className="text-sm text-muted-foreground">Suffolk County</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Office Hours */}
          <Card className="card-gradient border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-success" />
                <span>Office Hours</span>
              </CardTitle>
              <CardDescription>
                Extended hours to fit your schedule
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {officeHours.map((schedule) => (
                  <div key={schedule.days} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="font-medium text-foreground">{schedule.days}</span>
                    <span className={`text-sm ${schedule.hours === 'Closed' ? 'text-muted-foreground' : 'text-success'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages & Services */}
          <Card className="card-gradient border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-secondary-accent" />
                <span>Language Support</span>
              </CardTitle>
              <CardDescription>
                Comprehensive care in multiple languages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {languages.map((language) => (
                  <Badge 
                    key={language}
                    variant="secondary"
                    className="justify-center text-xs bg-secondary-accent/10 text-secondary-accent border-secondary-accent/20"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Our multilingual team ensures clear communication and comfortable care for all patients.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary via-primary-light to-secondary-accent rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h3>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Join the thousands of satisfied patients who have experienced the Pride Dentist difference. 
            Your journey to a healthier, more beautiful smile starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment Online
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8"
            >
              <Navigation className="h-5 w-5 mr-2" />
              Get Directions
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-white/90">
            <Phone className="h-4 w-4" />
            <span>Call now: (631) 732-3700</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;