import { Scale, MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary">
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-headline">Law Lắng & Genz</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Your trusted partner in navigating the complexities of the legal world. We provide clear, accessible, and reliable legal resources.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold font-headline tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">123 Legal Avenue, Lawsville, LS 45678</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">contact@lawlanggenz.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold font-headline tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">LinkedIn</span><Linkedin /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">Facebook</span><Facebook /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Law Lắng & Genz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
