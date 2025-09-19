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
    <section id="services" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-primary-glow/10 blur-3xl" />
      <div className="absolute bottom-32 left-16 w-48 h-48 rounded-full bg-accent-glow/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 glass-effect backdrop-blur-lg text-primary border-primary/30 px-6 py-3 text-base font-semibold">
            Comprehensive Care
          </Badge>
          <h2 className="section-title text-foreground mb-6">
            Complete Dental Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From routine cleanings to advanced procedures, we provide comprehensive 
            dental care using the latest technology and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="service-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 ${service.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-10 w-10 ${service.color}`} />
                  </div>
                  <CardTitle className="card-title text-foreground mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3 text-foreground">
                        <div className={`w-2 h-2 ${service.color.replace('text-', 'bg-')} rounded-full shadow-sm`} />
                        <span className="font-medium">{feature}</span>
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