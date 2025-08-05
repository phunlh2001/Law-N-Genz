import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Scale, FileText, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Scale className="h-10 w-10 text-accent" />,
    title: "Kiến thức pháp lý",
    description: "Đơn giản hóa các chủ đề pháp lý phức tạp thành các bài viết và hướng dẫn dễ hiểu cho mọi người.",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "Mẫu tài liệu",
    description: "Truy cập thư viện các mẫu tài liệu pháp lý được soạn thảo chuyên nghiệp cho các nhu cầu cá nhân và doanh nghiệp khác nhau.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: "Tư vấn",
    description: "Kết nối với các chuyên gia pháp lý để nhận được lời khuyên và các buổi tư vấn được cá nhân hóa cho tình huống của bạn.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Dịch vụ của chúng tôi</h2>
          <p className="mt-4 text-lg text-muted-foreground">Hỗ trợ pháp lý chuyên nghiệp, đáng tin cậy và dễ tiếp cận.</p>
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
