"use client";

export function HomeSection() {
    return (
        <div className="w-full">
            {/* Hero — sticky layer 0 */}
            <div className="sticky top-0 z-0 w-full h-dvh bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/hero.png')" }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col pt-10 gap-4 max-w-4xl items-center mx-auto">
                        <h1 className="font-(family-name:--font-noto-serif) text-foreground text-[67px] text-center">
                            <span className="text-secondary">
                                FOOD VINA
                            </span>
                            – Khởi nguồn thay đổi từ bữa ăn ngon, lành mạnh
                        </h1>
                        <p className="text-muted-foreground">Chúng tôi kiến tạo chuẩn mực mới cho văn hóa ẩm thực, nâng tầm chất lượng cuộc sống.</p>
                    </div>
                </div>
            </div>

            {/* Service — trượt đè lên hero */}
            <div className="relative z-10 w-full h-dvh bg-green-200">
                <div className="container mx-auto px-4">

                </div>
            </div>

            {/* Guarantee — sticky layer 1, đứng yên */}
            <div className="sticky top-0 z-20 w-full h-dvh bg-yellow-200">
                <div className="container mx-auto px-4">

                </div>
            </div>

            {/* Operation — trượt đè lên Guarantee */}
            <div className="relative z-30 w-full h-dvh bg-red-200">
                <div className="container mx-auto px-4">

                </div>
            </div>

            {/* Contact — tiếp tục trượt lên */}
            <div className="relative z-30 w-full h-dvh bg-orange-200">
                <div className="container mx-auto px-4">

                </div>
            </div>
        </div>
    );
}
