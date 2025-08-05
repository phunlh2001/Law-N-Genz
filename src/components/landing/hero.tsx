import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto text-center max-w-4xl px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Định hướng các vấn đề pháp lý phức tạp một cách rõ ràng và cẩn trọng
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Chúng tôi cung cấp kiến thức pháp lý dễ tiếp cận, các mẫu tài liệu đáng tin cậy và tư vấn chuyên nghiệp để giúp bạn tự tin đối mặt với những thách thức pháp lý.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#services">Khám phá dịch vụ của chúng tôi</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
