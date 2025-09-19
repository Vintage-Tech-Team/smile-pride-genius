import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Heart } from "lucide-react";
import drDumanski from "@/assets/dr-dumanski.jpg";
import drFermo from "@/assets/dr-fermo.jpg";
import drEkram from "@/assets/dr-ekram.jpg";

const Team = () => {
  const doctors = [
    {
      name: "Dr. Joseph Dumanski",
      credentials: "D.M.D.",
      specialties: ["General Dentistry", "Implant Dentistry"],
      education: "Temple University School of Dentistry",
      affiliations: ["Academy of General Dentistry", "American Dental Association"],
      image: drDumanski,
      description: "With extensive experience in general and implant dentistry, Dr. Dumanski combines advanced techniques with personalized care."
    },
    {
      name: "Dr. Jennifer Fermo",
      credentials: "D.D.S.",
      specialties: ["General Dentistry", "Periodontics"],
      education: "NYU (Undergrad) • Stony Brook School of Dentistry",
      affiliations: ["GPR Residency Graduate", "American Dental Association"],
      image: drFermo,
      description: "Dr. Fermo specializes in comprehensive dental care with particular expertise in periodontal health and gum disease treatment."
    },
    {
      name: "Dr. Nausheen Ekram",
      credentials: "D.D.S.",
      specialties: ["Cosmetic Dentistry", "Invisalign", "Pediatric Care"],
      education: "Advanced training in anxiety management and cosmetic procedures",
      affiliations: ["Invisalign Certified Provider", "Pediatric Dentistry Specialist"],
      image: drEkram,
      description: "Known for treating apprehensive patients with exceptional care, Dr. Ekram makes dental treatment comfortable for patients of all ages."
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Expert Care Team
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Our Experienced Dentists
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of skilled dentists brings decades of combined experience and 
            specialized expertise to provide you with the highest quality dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card 
              key={doctor.name}
              className="card-gradient border-0 shadow-soft hover-lift hover:shadow-medium transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={`Dr. ${doctor.name} - Professional headshot`}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{doctor.name}</h3>
                  <p className="text-white/90 font-medium">{doctor.credentials}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Specialties */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="h-4 w-4 text-accent" />
                      <span className="font-semibold text-foreground">Specialties</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty) => (
                        <Badge 
                          key={specialty}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <GraduationCap className="h-4 w-4 text-success" />
                      <span className="font-semibold text-foreground">Education</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{doctor.education}</p>
                  </div>

                  {/* Affiliations */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-4 w-4 text-secondary-accent" />
                      <span className="font-semibold text-foreground">Affiliations</span>
                    </div>
                    <ul className="space-y-1">
                      {doctor.affiliations.map((affiliation) => (
                        <li key={affiliation} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <div className="w-1 h-1 bg-secondary-accent rounded-full" />
                          <span>{affiliation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border">
                    {doctor.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;