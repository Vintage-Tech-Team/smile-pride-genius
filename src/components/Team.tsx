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
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-32 left-10 w-36 h-36 rounded-full bg-secondary-accent/20 blur-3xl floating-animation" />
      <div className="absolute bottom-20 right-20 w-44 h-44 rounded-full bg-accent-glow/15 blur-3xl floating-animation" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 glass-effect backdrop-blur-lg text-accent border-accent/30 px-6 py-3 text-base font-semibold">
            Expert Care Team
          </Badge>
          <h2 className="section-title text-foreground mb-6">
            Meet Our Experienced Dentists
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our team of skilled dentists brings decades of combined experience and 
            specialized expertise to provide you with the highest quality dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {doctors.map((doctor, index) => (
            <Card 
              key={doctor.name}
              className="team-card group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={`Dr. ${doctor.name} - Professional headshot`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-white/90 font-semibold text-lg">{doctor.credentials}</p>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Specialties */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Heart className="h-5 w-5 text-accent" />
                      <span className="font-bold text-foreground">Specialties</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty) => (
                        <Badge 
                          key={specialty}
                          className="glass-effect text-primary border-primary/30 font-medium"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <GraduationCap className="h-5 w-5 text-success" />
                      <span className="font-bold text-foreground">Education</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{doctor.education}</p>
                  </div>

                  {/* Affiliations */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="h-5 w-5 text-secondary-accent" />
                      <span className="font-bold text-foreground">Affiliations</span>
                    </div>
                    <ul className="space-y-2">
                      {doctor.affiliations.map((affiliation) => (
                        <li key={affiliation} className="text-muted-foreground flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-secondary-accent rounded-full" />
                          <span>{affiliation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {doctor.description}
                    </p>
                  </div>
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