import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Disclaimer() {
  return (
    <section id="disclaimer" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="border-accent">
          <CardHeader className="flex-row items-center gap-4">
            <AlertCircle className="h-8 w-8 text-accent" />
            <CardTitle className="font-headline text-2xl text-accent">Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The information provided on the Law Lắng & Genz website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk. The site cannot and does not contain legal advice. The legal information is provided for general informational and educational purposes only and is not a substitute for professional advice.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
