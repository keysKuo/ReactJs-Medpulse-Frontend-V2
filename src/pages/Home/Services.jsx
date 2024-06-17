import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import Overlay from '../../components/Overlay';
import RegisterForm from '../../components/RegisterForm';

import { serviceImage } from '../../assets/home';

function Services(props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <section className="w-full flex flex-col xl:py-[27.5px] py-[42px] xl:px-0 px-4 justify-center items-center bg-light-violet">
                <h1 className="sm:text-[36px] text-[24px] sm:font-bold font-medium sm:mb-[32px] mb-[20px]">Dịch vụ cung cấp</h1>
                <div className="xl:w-[1180px] w-full flex sm:flex-row flex-col gap-[24px]">
                    <div className="p-[20px] h-min bg-white flex flex-col gap-[32px] items-center rounded-[20px] shadow-lg">
                        <div className="w-full">
                            <h2 className="text-[20px] font-bold text-dark-violet">Giải pháp Marketing tổng thể</h2>
                            <hr className="h-px my-[12px] bg-dark-violet border-0 " />
                            <p className="text-[16px] leading-normal">
                                MedPulse đề ra chiến lược phù hợp cho doanh nghiệp, thương hiệu y tế với chi phí tối
                                ưu-hiệu quả dựa trên việc phân tích thị trường và nghiên cứu nhu cầu khách hàng.
                            </p>
                        </div>
                        <img src={serviceImage.serviceImage3} alt="serviceImage" className="w-[271px] h-[191px]" />
                    </div>
                    <div className="flex-shrink-1 p-[20px] bg-white flex flex-col gap-[32px] items-center rounded-[20px] shadow-lg">
                        <div>
                            <h2 className="text-[20px] font-bold text-dark-violet">Giải pháp Thương hiệu</h2>
                            <hr className="h-px my-[12px] bg-dark-violet border-0 " />
                            <p className="text-[16px] leading-normal">
                                Định hướng thương hiệu nhằm truyền tải giá trị cốt lõi của doanh nghiệp đến với công
                                chúng một cách rõ ràng thông qua xây dựng nội dung và phân phối đa kênh.
                            </p>
                        </div>
                        <img
                            src={serviceImage.serviceImage1}
                            alt="serviceImage"
                            className="sm:w-[270px] w-[223px] sm:h-[262px] h-[207px]"
                        />
                    </div>
                    <div className="p-[20px] h-min bg-white flex flex-col gap-[32px] items-center rounded-[20px] shadow-lg">
                        <div>
                            <h2 className="text-[20px] font-bold text-dark-violet">Giải pháp Tiếp thị và Bán hàng</h2>
                            <hr className="h-px my-[12px] bg-dark-violet border-0 " />
                            <p className="text-[16px] leading-normal">
                                Dựa trên phân tích thị trường, MedPulse thiết kế chiến lược tiếp thị nhằm tối ưu hóa
                                hiệu quả bán hàng. Từ đó tăng cơ hội tiếp thị và thành công kinh doanh.
                            </p>
                        </div>
                        <img src={serviceImage.serviceImage2} alt="serviceImage" className="w-[271px] h-[191px]" />
                    </div>
                </div>
                <hr className="h-px sm:mt-[36px] mt-[24px] sm:mb-[36px] mb-[16px] bg-black border-0 xl:w-[1180px] w-full" />
                <div className="xl:w-[1180px] w-full flex justify-between items-center sm:gap-[5px] gap-[10px]">
                    <p className="sm:text-[20px] text-[14px] font-medium leading-normal">
                        Hãy để đội ngũ chuyên gia MedPulse tư vấn cho bạn
                    </p>
                    <div
                        onClick={() => setShowModal(true)}
                        className="flex cursor-pointer items-center justify-center w-fit sm:px-[28px] px-[16px] py-[12px] rounded-[50px] bg-button text-button-text gap-[12px]"
                    >
                        <p className="sm:text-[20px] text-[16px] font-medium whitespace-nowrap sm:block hidden">
                            Đăng ký tư vấn
                        </p>
                        <p className="sm:text-[20px] text-[16px] font-medium whitespace-nowrap sm:hidden block">
                            Đăng ký
                        </p>
                        <IoIosArrowForward className="text-[20px]" />
                    </div>
                </div>
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

export default Services;
