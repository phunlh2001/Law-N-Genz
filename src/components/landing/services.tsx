import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Scale, FileText, Briefcase, Building2, BookUser, ShieldCheck, Brain, PencilRuler } from "lucide-react";

const services = [
  {
    icon: <Scale className="h-10 w-10 text-accent" />,
    title: "Tư vấn pháp lý & Soạn thảo văn bản",
    description: "Tư vấn miễn phí các mảng dân sự, hình sự, đất đai, hôn nhân, gia đình, hành chính. Hỗ trợ soạn đơn, hợp đồng, di chúc và các văn bản khác.",
  },
  {
    icon: <Building2 className="h-10 w-10 text-accent" />,
    title: "Tư vấn doanh nghiệp",
    description: "Cung cấp các gói tư vấn pháp lý riêng, chuyên biệt cho các vấn đề hoạt động và phát triển của doanh nghiệp.",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "Thủ tục hành chính",
    description: "Hỗ trợ thực hiện các thủ tục hành chính như đăng ký công ty, thay đổi giấy phép kinh doanh, và các thủ tục liên quan đến đất đai.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Sở hữu trí tuệ",
    description: "Tư vấn và hỗ trợ đăng ký bản quyền, nhãn hiệu, và các vấn đề khác liên quan đến sở hữu trí tuệ để bảo vệ tài sản sáng tạo của bạn.",
  },
  {
    icon: <BookUser className="h-10 w-10 text-accent" />,
    title: "Thủ tục cho người nước ngoài",
    description: "Hỗ trợ người nước ngoài các thủ tục làm hộ chiếu, thị thực, và đăng ký lao động tại Việt Nam một cách nhanh chóng và hiệu quả.",
  },
  {
    icon: <Brain className="h-10 w-10 text-accent" />,
    title: "Tư vấn tâm lý",
    description: "Cung cấp các buổi tư vấn tâm lý, giúp bạn giải tỏa căng thẳng và tìm ra hướng giải quyết cho các vấn đề trong cuộc sống.",
  },
  {
    icon: <PencilRuler className="h-10 w-10 text-accent" />,
    title: "Dịch vụ viết lách",
    description: "Cung cấp dịch vụ viết Ebook, bài giới thiệu sản phẩm, CV chuyên nghiệp và các nội dung sáng tạo khác theo yêu cầu của bạn.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
