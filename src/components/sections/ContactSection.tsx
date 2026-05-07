"use client"

import Image from "next/image";
import { Button } from "../ui/button"
import { Marquee, MarqueeContent, MarqueeEdge, MarqueeItem } from "../ui/marquee";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const hero = [
    { key: "1", image: "/images/contactpage/hero1.png" },
    { key: "2", image: "/images/contactpage/hero2.png" },
    { key: "3", image: "/images/contactpage/hero3.png" },
    { key: "4", image: "/images/contactpage/hero4.png" },
    { key: "5", image: "/images/contactpage/hero5.png" },
    { key: "6", image: "/images/contactpage/hero6.png" },
    { key: "7", image: "/images/contactpage/hero7.png" },
    { key: "8", image: "/images/contactpage/hero8.png" },
]

export const ContactSection = () => {
    return (
        <div className="w-full bg-background ">
            <div className="w-full flex flex-col justify-between h-dvh">
                <div className="container mx-auto px-4  ">
                    <div className="flex flex-col  gap-16 justify-center items-center pt-10">
                        <h1 className="font-(family-name:--font-noto-serif) text-[40px] w-4xl text-center">Chỉ với một cái click Quý khách hàng có thể liên hệ với công ty chúng tôi để nhận được những thông tin mới nhất và được nhận những dịch vụ tốt nhất.</h1>
                        <Button variant={`secondary`} className="px-10 py-4 text-sm rounded-full text-background">
                            CONTACT
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Marquee autoFill side="right">
                        <MarqueeContent className="gap-4">
                            {hero.map((item) => (
                                <MarqueeItem key={item.key} className="w-[243px] h-[201px] bg-center bg-no-repeat bg-cov"
                                    style={{ backgroundImage: `url('${item.image}')` }}>
                                </MarqueeItem>
                            ))}
                        </MarqueeContent>
                    </Marquee>
                    <Marquee autoFill side="left">
                        <MarqueeContent className="gap-4">
                            {hero.map((item) => (
                                <MarqueeItem key={item.key} className="w-[243px] h-[201px] bg-center bg-no-repeat bg-cov"
                                    style={{ backgroundImage: `url('${item.image}')` }}>
                                </MarqueeItem>
                            ))}
                        </MarqueeContent>
                    </Marquee>
                </div>
            </div>
            <div className="min-h-dvh relative">
                <div className="absolute inset-0 h-full w-full grid grid-cols-2" >
                    <div className="bg-no-repeat bg-center bg-cover h-full w-full " style={{ backgroundImage: "url('/images/dyfoodpage/contact.png')" }} />
                    <div className="absolute inset-0 bg-background/50" />
                </div>
                <div className="container mx-auto px-4 grid grid-cols-2 relative z-1 ">
                    <div className="py-16">
                        {/* <h2 className="text-[67px] font-(family-name:--font-noto-serif) relative z-1">“Thêm lời nhận xét của khách hàng ở đây”</h2> */}
                    </div>
                    <div className="flex flex-col gap-[41px] p-16">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Kết nối</h2>
                            <p className="text-muted-foreground">Lựa chọn của đối tác tinh tế – cùng DY FOOD kiến tạo văn hóa ẩm thực xứng tầm.</p>
                        </div>
                        <div className="flex flex-col gap-[14px]">
                            <div className="flex flex-col gap-2">
                                <p>Công ty <span className="text-red-500">*</span></p>
                                <input type="text" className="w-full py-3 border-b focus:outline-0 focus:ring-0" placeholder="Tên công ty / Tổ chức" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>Họ và tên <span className="text-red-500">*</span></p>
                                <input type="text" className="w-full py-3 border-b focus:outline-0 focus:ring-0" placeholder="Họ và tên" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>Email <span className="text-red-500">*</span></p>
                                <input type="text" className="w-full py-3 border-b focus:outline-0 focus:ring-0" placeholder="Địa chỉ Email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>Số điện thoại <span className="text-red-500">*</span></p>
                                <input type="text" className="w-full py-3 border-b focus:outline-0 focus:ring-0" placeholder="Số điện thoại" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>Loại hình dịch vụ <span className="text-red-500">*</span></p>
                                <input type="text" className="w-full py-3 border-b focus:outline-0 focus:ring-0" placeholder="Chọn 1 dịch vụ" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>Nội dung cần tư vấn <span className="text-red-500">*</span></p>
                                <input type="text" className="w-full py-3 border-b focus:outline-0 focus:ring-0" placeholder="Tin nhắn" />
                            </div>
                            <Button variant={"secondary"} className="px-[10px] py-3 text-background">Gửi tin nhắn</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-dvh py-16 container mx-auto px-4 gap-16">
                <div className="flex flex-col gap-8">
                    <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Thông tin liên hệ</h2>
                    <div className="flex justify-between gap-20">
                        <div className="flex-1 flex gap-4">
                            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-secondary/20">
                                <Phone className="w-[18px] h-[18px] text-secondary" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="">Số điện thoại</p>
                                <p className="text-foreground/60">0211 3535 009</p>
                            </div>
                        </div>
                        <div className="flex-1 flex gap-4">
                            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-secondary/20">
                                <MapPin className="w-[18px] h-[18px] text-secondary" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="">Địa chỉ</p>
                                <p className="text-foreground/60">Hữu Bằng, Tam hợp, Bình Xuyên, Vĩnh Phúc</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-20">
                        <div className="flex-1 flex gap-4">
                            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-secondary/20">
                                <Mail className="w-[18px] h-[18px] text-secondary" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="">Email</p>
                                <p className="text-foreground/60">dyfoodvina@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex-1 flex gap-4">
                            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-secondary/20">
                                <Clock3 className="w-[18px] h-[18px] text-secondary" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="">Giờ làm việc</p>
                                <p className="text-foreground/60">Thứ 2 ~ thứ 7: từ 8:00~17:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620872.9586358508!2d103.51529400093592!3d19.336511469459197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab002d9f65a3%3A0xeb70c88063bb838b!2zQ8O0bmcgdHkgVE5ISCBE4buLY2ggduG7pSDEgm4gdeG7kW5nIEZvb2QgVmluYQ!5e0!3m2!1svi!2s!4v1778120024978!5m2!1svi!2s"
                        width="600"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" 
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}