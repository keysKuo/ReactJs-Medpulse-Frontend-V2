import { FaStar } from 'react-icons/fa6';

import { feedbackImages } from '../../assets/home';

function Feedback(props) {
    return (
        <section className="w-full flex flex-col justify-center items-center lg:gap-[30px] gap-[16px] xl:pt-[42px] pt-[36.5px] xl:pb-[43px] pb-[36.5px] bg-light-violet xl:px-0 px-[16px]">
            <h1 className="sm:text-[36px] text-[24px] font-bold text-center">Khách hàng nói gì về MedPulse</h1>
            <div className="xl:w-[1180px] w-full flex items-center lg:flex-row flex-col sm:gap-[24px] gap-[12px]">
                <div className="flex-1 flex sm:flex-col flex-col-reverse gap-[12px] sm:p-[20px] p-[12px] sm:items-center items-start justify-center bg-white sm:rounded-[24px] rounded-[12px]">
                    <div className="flex flex-col sm:items-center items-start justify-center sm:gap-[16px] gap-[8px]">
                        <p className="text-[16px] font-normal sm:text-center text-start">
                            Nhờ team MedPulse hỗ trợ kỹ thuật marketing phòng khám Tiêu Hóa Nội Soi 474 của tôi đến với
                            bệnh nhân hiệu quả hơn.
                        </p>
                        <div className="flex gap-2 text-dark-yellow">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:items-center items-start sm:justify-center justify-start gap-[8px]">
                        <div className="sm:w-[50px] w-[20px] sm:mt-0 mt-1">
                            <img src={feedbackImages[0]} alt="feedbackImage" />
                        </div>
                        <div className="flex flex-col sm:items-center items-start sm:gap-[8px] gap-0">
                            <h1 className="sm:text-[18px] text-[16px] font-semibold">TS. BS. Ngô Phương Minh Thuận</h1>
                            <p className="sm:text-[14px] text-[12px] font-normal sm:text-black text-gray">
                                Bác sĩ tiêu hóa - Bệnh viện Chợ Rẫy
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex sm:flex-col flex-col-reverse gap-[12px] sm:p-[20px] p-[12px] sm:items-center items-start justify-center bg-white sm:rounded-[24px] rounded-[12px]">
                    <div className="flex flex-col sm:items-center items-start justify-center sm:gap-[16px] gap-[8px]">
                        <p className="text-[16px] font-normal sm:text-center text-start">
                            Hài lòng về sự chuyên nghiệp của MedPulse Marketing và thấu hiểu cách vận hành bệnh viện,
                            lên kịch bản, shotlist, timeline phối hợp với đa chuyên khoa để có được những thước phim
                            không phải lúc nào cũng quay được.
                        </p>
                        <div className="flex gap-2 text-dark-yellow">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:items-center items-start sm:justify-center justify-start gap-[8px]">
                        <div className="sm:w-[50px] w-[20px] sm:mt-0 mt-1">
                            <img src={feedbackImages[1]} alt="feedbackImage" />
                        </div>
                        <div className="flex flex-col sm:items-center items-start sm:gap-[8px] gap-0">
                            <h1 className="sm:text-[18px] text-[16px] font-semibold">BS. Phan Hoàng Đăng Khoa</h1>
                            <p className="sm:text-[14px] text-[12px] font-normal sm:text-black text-gray">
                                Marketing Manager - BV Hoàn Mỹ Thủ Đức
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex sm:flex-col flex-col-reverse gap-[12px] sm:p-[20px] p-[12px] sm:items-center items-start justify-center bg-white sm:rounded-[24px] rounded-[12px]">
                    <div className="flex flex-col sm:items-center items-start justify-center sm:gap-[16px] gap-[8px]">
                        <p className="text-[16px] font-normal sm:text-center text-start">
                            Đội ngũ MedPulse tư vấn và triển khai xây kênh cá nhân cho bác sĩ rất chuyên nghiệp và chuẩn
                            y khoa như tôi mong muốn.
                        </p>
                        <div className="flex gap-2 text-dark-yellow">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:items-center items-start sm:justify-center justify-start gap-[8px]">
                        <div className="sm:w-[50px] w-[20px] sm:mt-0 mt-1">
                            <img src={feedbackImages[2]} alt="feedbackImage" />
                        </div>
                        <div className="flex flex-col sm:items-center items-start sm:gap-[8px] gap-0">
                            <h1 className="sm:text-[18px] text-[16px] font-semibold">
                                BS. CKII. Bùi Lê Phước Thu Thảo
                            </h1>
                            <p className="sm:text-[14px] text-[12px] font-normal sm:text-black text-gray">
                                Bác sĩ Xạ trị - Bệnh viện ĐKQT Vinmec
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
