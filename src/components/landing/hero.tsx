import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto text-center max-w-4xl px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Navigating Legal Complexities with Clarity and Care
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We provide accessible legal knowledge, reliable document templates, and professional consultations to help you face your legal challenges with confidence.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
