import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

import { serviceImage } from '../../assets/home';

function Services(props) {
    return (
        <section className="w-full flex flex-col xl:py-[27.5px] py-[41px] xl:px-0 px-4 justify-center items-center bg-light-violet">
            <h1 className="text-[36px] font-bold mb-[32px]">Dịch vụ cung cấp</h1>
            <div className="xl:w-[1180px] w-full flex sm:flex-row flex-col gap-[24px]">
                <div className="flex-1 p-[20px] bg-white flex flex-col gap-[32px] items-center rounded-[20px] shadow-lg">
                    <div>
                        <h2 className="text-[20px] font-bold text-dark-violet">Giải pháp Marketing tổng thể</h2>
                        <hr className="h-px my-[12px] bg-dark-violet border-0 " />
                        <p className="text-[16px]">
                            MedPulse đề ra chiến lược phù hợp cho doanh nghiệp, thương hiệu y tế với chi phí tối ưu -
                            hiệu quả dựa trên việc phân tích thị trường và nghiên cứu nhu cầu khách hàng.
                        </p>
                    </div>
                    <div className="w-full">
                        <img src={serviceImage.serviceImage1} alt="serviceImage" className="w-full" />
                    </div>
                </div>
                <div className="flex-1 p-[20px] bg-white flex flex-col gap-[32px] items-center rounded-[20px] shadow-lg">
                    <div>
                        <h2 className="text-[20px] font-bold text-dark-violet">Giải pháp Thương hiệu</h2>
                        <hr className="h-px my-[12px] bg-dark-violet border-0 " />
                        <p className="text-[16px]">
                            Định hướng thương hiệu nhằm truyền tải giá trị cốt lõi của doanh nghiệp đến với công chúng
                            một cách rõ ràng thông qua xây dựng nội dung và phân phối đa kênh.
                        </p>
                    </div>
                    <div className="w-full">
                        <img src={serviceImage.serviceImage2} alt="serviceImage" className="w-full" />
                    </div>
                </div>
                <div className="flex-1 p-[20px] bg-white flex flex-col gap-[32px] items-center rounded-[20px] shadow-lg">
                    <div>
                        <h2 className="text-[20px] font-bold text-dark-violet">Giải pháp Tiếp thị và Bán hàng</h2>
                        <hr className="h-px my-[12px] bg-dark-violet border-0 " />
                        <p className="text-[16px]">
                            Dựa trên phân tích thị trường, MedPulse thiết kế chiến lược tiếp thị nhằm tối ưu hóa hiệu
                            quả bán hàng. Từ đó tăng cơ hội tiếp thị và thành công kinh doanh.
                        </p>
                    </div>
                    <div className="w-full">
                        <img src={serviceImage.serviceImage3} alt="serviceImage" className="max-w-full" />
                    </div>
                </div>
            </div>
            <hr className="h-px my-[36px] bg-dark-violet border-0 xl:w-[1180px] w-full" />
            <div className="xl:w-[1180px] w-full flex justify-between items-center gap-[5px]">
                <p className="text-[20px] font-medium">Hãy để đội ngũ chuyên gia MedPulse tư vấn cho bạn</p>
                <Link className="flex items-center justify-center w-fit px-[28px] py-[12px] rounded-[50px] text-button-text bg-button gap-[20px]">
                    <p className="text-[20px] font-medium whitespace-nowrap sm:block hidden">Đăng ký tư vấn</p>
                    <p className="text-[20px] font-medium whitespace-nowrap sm:hidden block">Đăng ký</p>
                    <IoIosArrowForward className="text-[20px]" />
                </Link>
            </div>
        </section>
    );
}

export default Services;