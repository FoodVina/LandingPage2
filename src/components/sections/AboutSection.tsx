"use client"

import Image from "next/image"
import { StickyCard } from "../layout/StickyCard"


export const AboutSection = () => {
    return (
        <div className="relative w-full ">

            {/* Hero */}
            <div className="sticky top-0 z-0 w-full h-dvh" >
                <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                    <div className="flex justify-between">
                        <div className="relative w-[200px] h-[300px] bg-center bg-no-repeat bg-cover rounded-[8px]"
                            style={{ backgroundImage: "url('/images/aboutpage/hero1.png')" }}>
                            <div className="absolute inset-0 bg-background opacity-50" />
                        </div>
                        <div className="mt-30 relative w-[200px] h-[300px] bg-center bg-no-repeat bg-cover rounded-[8px]"
                            style={{ backgroundImage: "url('/images/aboutpage/hero2.png')" }}>
                            <div className="absolute inset-0 bg-background opacity-50" />
                        </div>
                        <div className="relative w-[200px] h-[300px] bg-center bg-no-repeat bg-cover rounded-[8px]"
                            style={{ backgroundImage: "url('/images/aboutpage/hero3.png')" }}>
                            <div className="absolute inset-0 bg-background opacity-50" />
                        </div>
                    </div>
                    <div className="w-5xl flex justify-center self-center">
                        <h1 className="pt-5 font-(family-name:--font-noto-serif) text-foreground text-[40px] text-center">
                            Tiêu chuẩn mới cho văn hóa ẩm thực nâng tầm giá trị cuộc sống, FOOD VINA cam kết mang đến sự tươi ngon của nguyên liệu, niềm vui của thời gian và hạnh phúc của sự hài lòng.
                        </h1>
                    </div>
                </div>
            </div>

            {/* Section 1 */}
            <StickyCard i={0} className="bg-background ">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center gap-16 py-16">
                    <div className="flex">
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-secondary font-bold text-sm">FOOD VINA & DY FOOD</p>
                            <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Gia đình thương hiệu của chúng tôi</h2>
                        </div>
                        <p className="flex-1">
                            Năm 2024, FOOD VINA đã mở rộng danh mục tập đoàn bằng việc thâu tóm DY FOOD — thương hiệu được tin tưởng trong lĩnh vực suất ăn công nghiệp và dịch vụ catering.
                            <br /><br />
                            DY FOOD vẫn gìn giữ bản sắc chuyên môn và văn hóa tổ chức riêng của mình tại Việt Nam, đồng thời cùng chia sẻ những giá trị cốt lõi mà tập đoàn FOOD VINA theo đuổi: chất lượng, uy tín và niềm đam mê ẩm thực.
                            <br /><br />
                            FOOD VINA và DY FOOD cùng nhau tiến về phía trước — hướng đến thị trường rộng lớn hơn, nhiều khách hàng hơn và tiêu chuẩn cao hơn.
                        </p>

                    </div>
                    <div className="relative h-[364px] bg-center bg-no-repeat bg-cover p-6"
                        style={{ backgroundImage: "url('/images/aboutpage/brand.png')" }}>
                        <div className="absolute inset-0 bg-background/20" />
                        <p className="w-[50%] relative z-1 font-(family-name:--font-noto-serif) text-[40px]">
                            “Cùng nhau phát triển, dẫn dắt tương lai ngành dịch vụ thực phẩm”
                        </p>
                    </div>
                </div>
            </StickyCard>
            <StickyCard i={1} className="bg-background">
                <div className="relative h-full w-full">
                    <div className="absolute inset-0 h-full w-full grid grid-cols-2" >
                        <div className="bg-no-repeat bg-center bg-cover h-full w-full " style={{ backgroundImage: "url('/images/aboutpage/vision.png')" }} />
                        <div className="absolute inset-0 bg-[#00763B]/50 w-[50%]" />
                    </div>
                    <div className="container mx-auto px-4 relative z-1 grid grid-cols-2 h-full ">
                        <div className="h-full flex items-end py-16">
                            <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Tầm nhìn</h2>
                        </div>
                        <div className="p-16 flex flex-col gap-8">
                            <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Nhà lãnh đạo giải pháp suất ăn công nghiệp tại Việt Nam</h2>
                            <p>
                                Dịch vụ thực phẩm và Suất ăn công nghiệp của FOOD VINA đang không ngừng tiến hóa, hướng tới việc dẫn dắt lối sống lành mạnh cho khách hàng và thúc đẩy sự tăng trưởng vượt bậc trong tương lai bằng những giải pháp độc đáo.
                                <br />
                                Với vị thế là đơn vị tiên phong dẫn dắt những thay đổi bền vững tại Việt Nam, chúng tôi luôn chuẩn bị sẵn sàng cho tương lai để sự phát triển của mình song hành với sự phát triển bền vững của toàn ngành công nghiệp.
                            </p>
                        </div>
                    </div>
                </div>
            </StickyCard>
            <StickyCard i={2} className="bg-background">
                <div className="relative h-full w-full">

                    <div className="container mx-auto px-4 relative z-1 grid grid-cols-2 h-full ">
                        <div className="p-16 flex flex-col gap-8">
                            <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Cam kết phát triển</h2>
                            <p>
                                FOOD VINA cam kết trở thành một doanh nghiệp hữu ích, giúp cuộc sống của quý khách trở nên lành mạnh hơn và hỗ trợ hoạt động kinh doanh của quý đối tác cùng phát triển thông qua các dịch vụ của chúng tôi.
                            </p>
                        </div>
                        <div className="h-full flex items-end p-16 ">
                            <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Mục tiêu</h2>
                        </div>

                    </div>
                    <div className="absolute inset-0 h-full w-full grid grid-cols-2" >
                        <div />
                        <div className="bg-no-repeat bg-center bg-cover h-full w-full " style={{ backgroundImage: "url('/images/aboutpage/target.png')" }} />
                        <div className="absolute inset-y-0 right-0 w-1/2 bg-[#00763B]/50" />
                    </div>
                </div>
            </StickyCard>
            <StickyCard i={3} className="bg-background">
                <div className="relative h-full w-full">
                    <div className="absolute inset-0 h-full w-full grid grid-cols-2" >
                        <div className="bg-no-repeat bg-center bg-cover h-full w-full " style={{ backgroundImage: "url('/images/aboutpage/value.png')" }} />
                        <div className="absolute inset-0 bg-[#00763B]/50 w-[50%]" />
                    </div>
                    <div className="container mx-auto px-4 relative z-1 grid grid-cols-2 h-full ">
                        <div className="h-full flex items-end py-16">
                            <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Giá trị</h2>
                        </div>
                        <div className="p-16 flex flex-col gap-8">
                            <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Hương vị và chất lượng tốt hơn, Sức khỏe và Hạnh phúc, Thách thức và Đổi mới, Cùng nhau phát triển.</h2>
                        </div>
                    </div>
                </div>
            </StickyCard>
            <StickyCard i={4} className="bg-background" tall>
                <div className="grid grid-cols-2 py-32 container mx-auto px-4 ">
                    <div className="flex flex-col gap-8">
                        <div className="relative flex flex-col gap-8">
                            <div className="relative z-1 flex flex-col gap-6">
                                <p className="font-bold text-sm text-secondary">TRIẾT LÝ KINH DOANH</p>
                                <h2 className="font-(family-name:--font-noto-serif) text-[40px]">
                                    "Trách nhiệm và Tin cậy, Thách thức và Cải tiến, Quan tâm và Phụng sự - Mang lại sự hài lòng nhất và chất lượng tốt nhất"
                                </h2>
                            </div>
                            <Image alt="philosophy" src={`/images/aboutpage/philosophy.png`} width={2000} height={2000} className="w-full" />
                            <div className="absolute inset-0 bg-background/50" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 pt-[96px] pl-16">
                        <p>
                            Được thành lập từ năm 2015 dựa trên tinh thần "Đức tin và Yêu thương", với sự đồng lòng phụng sự của toàn thể đội ngũ nhân viên, FOOD VINA hiện đã bước sang năm thứ 11 hoạt động. Chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực cung cấp suất ăn công nghiệp tại các khu vực: Vĩnh Phúc, Phú Thọ, Hòa Bình, Hưng Yên, Hải Dương, Hải Phòng, Bắc Ninh và Bắc Giang.
                            <br /><br />
                            Với triết lý doanh nghiệp: "Trách nhiệm và Tin cậy, Thách thức và Cải tiến, Quan tâm và Phụng sự - Mang lại sự hài lòng nhất và chất lượng tốt nhất", toàn thể cán bộ công nhân viên công ty đã nỗ lực hết mình với thái độ làm việc tận tâm. Kết quả là hiện nay, chúng tôi đang cung cấp dịch vụ suất ăn tập thể cho 50.000 người mỗi ngày.
                            <br /><br />
                            Bước sang cột mốc 11 năm thành lập, với sứ mệnh và niềm tự hào trong việc kiến tạo một nền văn hóa ẩm thực đúng đắn, lấy khách hàng và sức khỏe làm trọng tâm, chúng tôi luôn giữ vững những giá trị cơ bản nhất. Bằng sự chăm chút và tận tâm để quyết định nên hương vị và chất lượng, FOOD VINA đang nỗ lực xây dựng một doanh nghiệp bảo vệ sức khỏe và giá trị của khách hàng thông qua những nguyên liệu tươi sạch kết hợp cùng sự tinh tế trong chế biến.
                            <br /><br />
                            Chúng tôi rất mong nhận được sự yêu mến và ủng hộ không ngừng của Quý khách hàng đối với những thử thách và bước tiến mới của FOOD VINA trong tương lai.
                            <br /><br />
                            Xin chân thành cảm ơn!
                        </p>
                        <div className=" text-xl text-end">
                            <p className="font-bold">Tổng giám đốc FOOD VINA</p>
                            <p className="italic">Ahn Gil-hyun</p>
                        </div>
                    </div>

                </div>
            </StickyCard>
        </div>
    )
}

