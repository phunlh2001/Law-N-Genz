import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Scale, FileText, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Scale className="h-10 w-10 text-accent" />,
    title: "Legal Knowledge",
    description: "Simplifying complex legal topics into easy-to-understand articles and guides for everyone.",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "Document Templates",
    description: "Access a library of professionally crafted legal document templates for various personal and business needs.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: "Consultations",
    description: "Connect with legal experts for personalized advice and consultation sessions tailored to your situation.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">Professional, reliable, and accessible legal support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300 pt-6">
              <CardHeader className="p-0">
                {service.icon}
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
