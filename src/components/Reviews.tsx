import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Coram, NY",
      rating: 5,
      text: "The staff is incredibly caring and professional. They made me feel comfortable throughout my entire visit. The office is modern and clean, and Dr. Ekram explained everything thoroughly.",
      highlight: "caring staff"
    },
    {
      name: "Michael R.",
      location: "Selden, NY", 
      rating: 5,
      text: "I've been terrified of dentists my whole life, but this team changed everything. They are patient, understanding, and the procedures were completely painless. Highly recommend!",
      highlight: "painless experience"
    },
    {
      name: "Lisa K.",
      location: "Port Jefferson, NY",
      rating: 5,
      text: "Amazing experience! Dr. Dumanski did my dental implant and the results are perfect. The whole team is friendly and makes you feel like family. The technology here is impressive.",
      highlight: "like family"
    },
    {
      name: "Roberto C.",
      location: "Medford, NY",
      rating: 5,
      text: "They speak Spanish here which made me so comfortable. Dr. Fermo is excellent and took great care of my gum issues. Professional service and fair pricing with my insurance.",
      highlight: "multi-language support"
    },
    {
      name: "Jennifer T.",
      location: "Lake Grove, NY",
      rating: 5,
      text: "My whole family goes here now. They're great with kids and adults alike. The scheduling is flexible and they always remember our names. Truly personalized care.",
      highlight: "personalized care"
    },
    {
      name: "David L.",
      location: "Centereach, NY",
      rating: 5,
      text: "State-of-the-art facility with the latest equipment. The dentists explain everything clearly and never pressure you. They worked with my insurance perfectly. Very satisfied!",
      highlight: "state-of-the-art"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success/10 text-success border-success/20">
            Patient Testimonials
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold text-foreground">4.5 Stars</span>
            <span className="text-muted-foreground">• Google Reviews</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our patients consistently praise our caring approach, professional service, 
            and commitment to making every visit comfortable and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={`${review.name}-${index}`}
              className="card-gradient border-0 shadow-soft hover-lift hover:shadow-medium transition-all duration-300 relative"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-accent-foreground" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-foreground leading-relaxed mb-4">
                  "{review.text}"
                </blockquote>

                {/* Highlight Badge */}
                <Badge 
                  variant="secondary" 
                  className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs"
                >
                  {review.highlight}
                </Badge>

                {/* Author */}
                <div className="border-t border-border pt-3">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to join our family of satisfied patients?
          </p>
          <div className="inline-flex items-center space-x-2 text-primary">
            <Star className="h-4 w-4" />
            <span className="font-medium">Book your appointment today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;