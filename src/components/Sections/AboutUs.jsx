import Button from '../../components/Button';
import { aboutSectionImage } from '../../assets/home';

function AboutUs(props) {
    return (
        <section className="w-full flex flex-col mt-[30px] justify-center items-center">
            <div className="xl:w-[1180px] w-full flex lg:flex-row flex-col xl:px-0 px-4">
                <div className="flex flex-col md:gap-[24px] gap-[20px]">
                    <div className="flex flex-col md:gap-[16px] gap-[12px]">
                        <h1 className="md:text-[36px] text-[24px] font-bold">Định hướng MedPusle</h1>
                        <div className="flex flex-col md:gap-[12px] gap-[8px]">
                            <p className="md:text-[20px] text-[16px] font-normal ">Giới thiệu về Founder</p>
                            <h2 className="md:text-[31px] text-[18px] font-medium">
                                Agency mang giải pháp marketing đặc thù riêng biệt cho lĩnh vực y tế
                            </h2>
                            <p className="text-[16px] font-normal">
                                Với xuất thân Founder là Dược sĩ ĐHYD TPHCM, MBA UEH, cùng hơn 05 năm kinh nghiệm triển
                                khai marketing - sale cho bệnh viện, phòng khám, xét nghiệm và dược, chúng tôi thấu hiểu
                                và “bắt mạch” được tính đặc thù trong lĩnh vực này.
                                <span className="lg:hidden inline-block">
                                    Tôn chỉ của chúng tôi: “Trong lĩnh vực y tế - sức khỏe, quan trọng nhất là sự thấu
                                    cảm, y đức và chuẩn chuyên môn, sau đó hãy nghĩ về marketing như thế nào”.
                                </span>
                            </p>
                        </div>
                    </div>
                    <Button />
                </div>
                <div className="lg:inline-block hidden mx-[45px] min-h-full w-1 self-stretch bg-black"></div>
                <div className="flex flex-col gap-[28px] text-[16px] font-normal lg:mt-0 mt-[24px]">
                    <p className="lg:block hidden">
                        Tôn chỉ của chúng tôi: “Trong lĩnh vực y tế - sức khỏe, quan trọng nhất là sự thấu cảm, y đức và
                        chuẩn chuyên môn, sau đó hãy nghĩ về marketing như thế nào”.
                    </p>
                    <p className="lg:block hidden">
                        Với phương châm là bạn đồng hành cùng khách hàng. MedPulse vừa là đơn vị triển khai theo yêu
                        cầu, vừa đưa ra giải pháp linh hoạt, phù hợp, đảm bảo tính hiệu quả - y đức - đặc thù của ngành
                        Y tế. Mang giá trị dịch vụ tốt nhất của doanh nghiệp đến đúng với khách hàng mục tiêu.
                    </p>
                    <div className="md:w-full w-[241px] md:px-0 px-[31.5px] md:pt-0 pt-[21px] self-center bg-button bg-opacity-20 md:rounded-[30px] rounded-[11.754px]">
                        <img src={aboutSectionImage} alt="aboutUsImage" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutUs;
