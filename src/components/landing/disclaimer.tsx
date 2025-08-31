import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Disclaimer() {
  return (
    <section id="disclaimer" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">CÁC KHOẢN MIỄN TRỪ TRÁCH NHIỆM</h2>
            <p className="mt-4 text-muted-foreground">
              Vui lòng đọc kỹ Điều khoản Miễn trừ Trách nhiệm này trước khi sử dụng các dịch vụ tư vấn, nội dung pháp lý hoặc các tài liệu được cung cấp bởi LAW LẮNG & GENZ. Bằng việc truy cập, sử dụng dịch vụ hoặc tài liệu của chúng tôi, bạn được xem là đã đọc, hiểu và đồng ý với các điều khoản dưới đây.
            </p>
        </div>

        <Card className="border-accent">
          <CardHeader className="flex-row items-center gap-4">
            <AlertCircle className="h-8 w-8 text-accent" />
            <CardTitle className="font-headline text-2xl text-accent">Chi tiết các khoản miễn trừ</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold">1. Không Phải Là Dịch Vụ Luật Sư/Quan Hệ Luật Sư - Khách Hàng</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>LAW LẮNG & GENZ được thành lập và hoạt động bởi Nguyễn Chiến Thắng, người có bằng Cử nhân Luật. Chúng tôi không phải là văn phòng luật sư, công ty luật hay tổ chức hành nghề luật sư.</p>
                  <p>Các dịch vụ tư vấn, thông tin, nội dung pháp lý và tài liệu chúng tôi cung cấp không cấu thành quan hệ luật sư - khách hàng theo quy định của pháp luật.</p>
                  <p>Chúng tôi không cung cấp dịch vụ đại diện, bào chữa, hay bảo vệ quyền và lợi ích hợp pháp tại Tòa án hoặc các cơ quan nhà nước tương tự như một Luật sư được cấp phép hành nghề.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-semibold">2. Mục Đích Của Thông Tin & Dịch Vụ</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>Mục đích chính của các dịch vụ và nội dung chúng tôi cung cấp là cung cấp thông tin, kiến thức pháp luật tổng quát, giải thích các quy định pháp luật và hỗ trợ soạn thảo các văn bản pháp lý theo yêu cầu (như hợp đồng mẫu, điều lệ...).</p>
                  <p>Các thông tin và lời khuyên được đưa ra chỉ mang tính chất tham khảo, định hướng hoặc giáo dục, dựa trên kiến thức pháp luật và kinh nghiệm của chúng tôi tại thời điểm cung cấp.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-semibold">3. Không Thay Thế Lời Khuyên Pháp Lý Chuyên Sâu</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>Thông tin và dịch vụ của chúng tôi không nhằm mục đích thay thế lời khuyên pháp lý chuyên sâu, cụ thể từ một Luật sư được cấp phép hành nghề hoặc chuyên gia pháp lý có đủ thẩm quyền cho từng trường hợp riêng biệt của bạn.</p>
                  <p>Mỗi tình huống pháp lý đều có những đặc thù riêng. Việc áp dụng các quy định pháp luật cần sự đánh giá kỹ lưỡng từ một Luật sư có kinh nghiệm, người có thể xem xét toàn bộ bối cảnh và đưa ra lời khuyên phù hợp nhất.</p>
                  <p>Bạn nên tham khảo Luật sư để được tư vấn chuyên sâu, cụ thể cho tình huống của mình, đặc biệt đối với các vấn đề phức tạp, có tranh chấp hoặc liên quan đến tố tụng.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-semibold">4. Giới Hạn Trách Nhiệm</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>Chúng tôi luôn nỗ lực để đảm bảo tính chính xác, đầy đủ và cập nhật của các thông tin, tài liệu và dịch vụ được cung cấp. Tuy nhiên, do sự thay đổi liên tục của pháp luật và tính chất riêng biệt của mỗi vụ việc, chúng tôi không đảm bảo rằng tất cả thông tin luôn hoàn toàn chính xác, đầy đủ, và phù hợp với mọi trường hợp cụ thể.</p>
                  <p>LAW LẮNG & GENZ và Người sáng lập (Nguyễn Chiến Thắng) sẽ không chịu trách nhiệm pháp lý đối với bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, đặc biệt hoặc do hậu quả nào phát sinh từ việc bạn sử dụng hoặc không thể sử dụng thông tin, dịch vụ hoặc tài liệu của chúng tôi, hoặc do bạn đưa ra quyết định dựa trên thông tin đó mà không có sự tư vấn chuyên sâu từ Luật sư.</p>
                  <p>Trách nhiệm của chúng tôi (nếu có) sẽ chỉ giới hạn trong phạm vi chi phí dịch vụ mà bạn đã thanh toán cho chúng tôi, tùy thuộc vào từng trường hợp cụ thể.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b-0">
                <AccordionTrigger className="font-semibold">5. Thay Đổi Điều Khoản</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>Chúng tôi có quyền sửa đổi hoặc cập nhật Điều khoản Miễn trừ Trách nhiệm này vào bất cứ lúc nào mà không cần báo trước. Bạn có trách nhiệm xem lại các điều khoản này định kỳ để nắm bắt những thay đổi mới nhất. Việc tiếp tục sử dụng dịch vụ của chúng tôi sau khi các thay đổi được đăng tải có nghĩa là bạn đã chấp nhận các thay đổi đó.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
