import { Scale, Phone, Mail, Linkedin, Facebook } from "lucide-react";
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
              Đối tác tin cậy của bạn trong việc định hướng các vấn đề phức tạp của thế giới pháp lý. Chúng tôi cung cấp các nguồn tài liệu pháp lý rõ ràng, dễ tiếp cận và đáng tin cậy.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold font-headline tracking-wider uppercase">Liên hệ</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-muted-foreground"><path d="M20.34 3.66 12 12 3.66 20.34"></path><path d="M16 8a4 4 0 0 0-8 0"></path><path d="m12 12 8.34 8.34"></path><path d="m3.66 3.66 8.34 8.34"></path></svg>
                <span className="text-muted-foreground">Zalo: 0378044780</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">0378044780</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">luatsuthang03@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold font-headline tracking-wider uppercase">Theo dõi chúng tôi</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">LinkedIn</span><Linkedin /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">Facebook</span><Facebook /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Law Lắng & Genz. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
