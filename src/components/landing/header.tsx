import { Scale } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline text-foreground">Law Lắng & Genz</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#services" className="hover:text-primary transition-colors">Dịch vụ</Link>
          <Link href="#disclaimer" className="hover:text-primary transition-colors">Miễn trừ trách nhiệm</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}
