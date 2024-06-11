import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import Overlay from '../../components/Overlay';
import RegisterForm from '../../components/RegisterForm';

import { aboutSectionImage } from '../../assets/home';
import transparentImages from '../../assets/transparentImages';

function AboutUs(props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <section className="w-full relative flex flex-col mt-[30px] justify-center items-center">
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
                                    Với xuất thân Founder là Dược sĩ ĐHYD TPHCM, MBA UEH, cùng hơn 05 năm kinh nghiệm
                                    triển khai marketing - sale cho bệnh viện, phòng khám, xét nghiệm và dược, chúng tôi
                                    thấu hiểu và “bắt mạch” được tính đặc thù trong lĩnh vực này.
                                    <span className="lg:hidden inline-block">
                                        Tôn chỉ của chúng tôi: “Trong lĩnh vực y tế - sức khỏe, quan trọng nhất là sự
                                        thấu cảm, y đức và chuẩn chuyên môn, sau đó hãy nghĩ về marketing như thế nào”.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => setShowModal(true)}
                            className="flex cursor-pointer items-center justify-center w-fit px-[28px] py-[12px] rounded-[50px] text-button-text bg-button gap-[20px]"
                        >
                            <p className="text-[20px] font-medium whitespace-nowrap sm:block hidden">Đăng ký tư vấn</p>
                            <p className="text-[20px] font-medium whitespace-nowrap sm:hidden block">Đăng ký</p>
                            <IoIosArrowForward className="text-[20px]" />
                        </div>{' '}
                    </div>
                    <div className="lg:inline-block hidden mx-[45px] min-h-full w-1 self-stretch bg-black"></div>
                    <div className="flex flex-col gap-[28px] text-[16px] font-normal lg:mt-0 mt-[24px]">
                        <p className="lg:block hidden">
                            Tôn chỉ của chúng tôi: “Trong lĩnh vực y tế - sức khỏe, quan trọng nhất là sự thấu cảm, y
                            đức và chuẩn chuyên môn, sau đó hãy nghĩ về marketing như thế nào”.
                        </p>
                        <p className="lg:block hidden">
                            Với phương châm là bạn đồng hành cùng khách hàng. MedPulse vừa là đơn vị triển khai theo yêu
                            cầu, vừa đưa ra giải pháp linh hoạt, phù hợp, đảm bảo tính hiệu quả - y đức - đặc thù của
                            ngành Y tế. Mang giá trị dịch vụ tốt nhất của doanh nghiệp đến đúng với khách hàng mục tiêu.
                        </p>
                        <div className="md:w-full w-[241px] md:px-0 px-[30px] md:pt-0 pt-[21px] self-center bg-button flex justify-center bg-opacity-20 md:rounded-[30px] rounded-[11.754px]">
                            <img
                                src={aboutSectionImage}
                                alt="aboutUsImage"
                                className="md:min-w-[439px] md:min-h-[436px] min-w-[210px] min-h-[210px]"
                            />
                        </div>
                    </div>
                </div>
                <img
                    src={transparentImages.aboutSectionsLogo}
                    alt="bgImage"
                    className="absolute bottom-0 left-0 translate-y-[30%] -translate-x-[20%] mix-blend-screen z-[-1] sm:block hidden"
                    height={340}
                    width={721}
                />
            </section>
            {showModal && (
                <Overlay className={'flex flex-col justify-center items-center'} onClick={() => setShowModal(false)}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="xl:w-[600px] w-[80%] sm:p-[40px] p-[20px] bg-white rounded-[20px] text-center"
                    >
                        <RegisterForm isModal={true} onCloseModal={() => setShowModal(false)} />
                    </div>
                </Overlay>
            )}
        </>
    );
}
export default AboutUs;
