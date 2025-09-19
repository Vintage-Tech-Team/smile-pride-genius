import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Sparkles, 
  Shield, 
  Baby, 
  AlertCircle, 
  Scissors 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "General Dentistry",
      description: "Comprehensive oral health care for the whole family",
      features: ["Regular Cleanings", "Cavity Fillings", "Oral Exams", "Fluoride Treatments"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our aesthetic dental solutions",
      features: ["Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Smile Makeovers"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Shield,
      title: "Restorative Dentistry",
      description: "Restore function and beauty to damaged teeth",
      features: ["Dental Crowns", "Dental Bridges", "Dental Implants", "Dentures"],
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Gentle, specialized care for children and teens",
      features: ["Children's Cleanings", "Sealants", "Fluoride Treatments", "Early Orthodontics"],
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10"
    },
    {
      icon: AlertCircle,
      title: "Emergency Dentistry",
      description: "Immediate relief for urgent dental problems",
      features: ["Tooth Pain Relief", "Broken Tooth Repair", "Lost Filling Replacement", "Dental Trauma Care"],
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      icon: Scissors,
      title: "Oral Surgery",
      description: "Advanced surgical procedures with comfort in mind",
      features: ["Tooth Extractions", "Wisdom Teeth Removal", "Bone Grafting", "Implant Placement"],
      color: "text-primary-dark",
      bgColor: "bg-primary/5"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Comprehensive Care
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Complete Dental Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From routine cleanings to advanced procedures, we provide comprehensive 
            dental care using the latest technology and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="card-gradient border-0 shadow-soft hover-lift hover:shadow-medium transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-foreground">
                        <div className={`w-1.5 h-1.5 ${service.bgColor} rounded-full`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;