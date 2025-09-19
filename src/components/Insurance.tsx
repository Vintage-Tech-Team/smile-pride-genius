import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CreditCard, 
  FileText, 
  CheckCircle,
  Phone,
  Calculator
} from "lucide-react";

const Insurance = () => {
  const insuranceProviders = [
    "Aetna",
    "Blue Cross Blue Shield", 
    "Cigna",
    "Delta Dental",
    "Empire Blue Cross",
    "Guardian",
    "Humana",
    "MetLife"
  ];

  const paymentFeatures = [
    {
      icon: Shield,
      title: "Direct Insurance Billing",
      description: "We handle all insurance paperwork and billing directly with your provider"
    },
    {
      icon: FileText,
      title: "Pre-Treatment Estimates",
      description: "Get detailed cost estimates before any treatment begins"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Plans",
      description: "Multiple payment options to make dental care affordable"
    },
    {
      icon: Calculator,
      title: "Maximizing Your Benefits",
      description: "We help you get the most out of your dental insurance coverage"
    }
  ];

  return (
    <section id="insurance" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Insurance & Payment
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            We Accept Most Insurance Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Making quality dental care accessible and affordable for you and your family. 
            We work with most major insurance providers and offer flexible payment options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Insurance Providers */}
          <Card className="card-gradient border-0 shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span>Accepted Insurance Plans</span>
              </CardTitle>
              <CardDescription>
                We're in-network with most major dental insurance providers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider) => (
                  <div 
                    key={provider}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-muted/30 border border-border/50"
                  >
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{provider}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm text-foreground text-center">
                  <strong>Don't see your insurance?</strong> We accept most plans. 
                  Call us to verify your coverage.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Features */}
          <Card className="card-gradient border-0 shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <CreditCard className="h-6 w-6 text-accent" />
                <span>Payment Made Easy</span>
              </CardTitle>
              <CardDescription>
                Multiple options to make your dental care affordable
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {paymentFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-secondary-accent rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Questions About Your Insurance Coverage?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our friendly staff will verify your benefits and provide a detailed treatment 
            estimate before your appointment. No surprises, just transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call for Benefits Verification
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Request Cost Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;