import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Disclaimer() {
  return (
    <section id="disclaimer" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="border-accent">
          <CardHeader className="flex-row items-center gap-4">
            <AlertCircle className="h-8 w-8 text-accent" />
            <CardTitle className="font-headline text-2xl text-accent">Tuyên bố miễn trừ trách nhiệm</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Thông tin được cung cấp trên trang web Law Lắng & Genz chỉ dành cho mục đích thông tin chung. Mọi thông tin trên trang web được cung cấp một cách thiện chí, tuy nhiên, chúng tôi không đưa ra bất kỳ tuyên bố hay bảo đảm nào, dù rõ ràng hay ngụ ý, về tính chính xác, đầy đủ, hợp lệ, đáng tin cậy, sẵn có hoặc hoàn chỉnh của bất kỳ thông tin nào trên trang web. Trong mọi trường hợp, chúng tôi sẽ không chịu bất kỳ trách nhiệm pháp lý nào đối với bạn về bất kỳ tổn thất hoặc thiệt hại nào phát sinh do việc sử dụng trang web hoặc tin cậy vào bất kỳ thông tin nào được cung cấp trên trang web. Việc bạn sử dụng trang web và tin cậy vào bất kỳ thông tin nào trên trang web hoàn toàn là rủi ro của riêng bạn. Trang web không thể và không chứa lời khuyên pháp lý. Thông tin pháp lý được cung cấp chỉ dành cho mục đích thông tin và giáo dục chung và không thể thay thế cho lời khuyên chuyên nghiệp.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
