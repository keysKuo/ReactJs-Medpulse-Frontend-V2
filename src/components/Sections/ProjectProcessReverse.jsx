import { lineImage, processImage } from '../../assets/home';

function ProjectProcessReverse(props) {
    return (
        <section className="w-full flex flex-col justify-center items-center py-[30px]">
            <div className="xl:w-[1180px] w-full flex xl:flex-row-reverse flex-col justify-between relative items-center gap-[86px] sm:gap-[30px] xl:px-0 px-4">
                <div className="flex flex-col gap-[16px] items-center justify-center">
                    <h1 className="sm:text-[36px] text-[24px] font-bold">Quy trình triển khai dự án</h1>
                    <img src={processImage.main} alt="processImage" className="max-w-full" />
                </div>
                <img
                    src={lineImage}
                    alt="line"
                    className="absolute xl:w-[60%] md:w-[740px] sm:w-[432px] w-[360px] xl:h-[50%] md:h-[30%] sm:h-[350px] h-[300px] xl:left-0 xl:bottom-1/2 bottom-0 xl:translate-y-1/2 -translate-y-12 xl:-translate-x-5"
                />
                <div className="grid md:grid-cols-3 grid-cols-2 md:gap-y-[75px] gap-y-[12px] md:gap-x-[30px] gap-x-[12px]  relative">
                    <div className="bg-light-violet sm:p-[16px] p-[12px] rounded-[20px] sm:w-[200px] w-[170px]">
                        <div className="flex gap-[8px] items-center justify-start">
                            <div className="p-[5.88px]">
                                <img
                                    src={processImage.process1}
                                    alt="processIcon"
                                    className="sm:w-[38.2px] w-[31.2px]"
                                />
                            </div>
                            <div className="sm:text-[20px] text-[16px] font-bold">Nhu cầu</div>
                        </div>
                        <ul className="sm:text-[16px] text-[14px] font-normal list-disc pl-[30px]">
                            <li>Mong muốn</li>
                            <li>Ngân sách</li>
                            <li>KPI dự kiến</li>
                        </ul>
                    </div>
                    <div className="bg-light-violet sm:p-[16px] p-[12px] rounded-[20px] sm:w-[200px] w-[170px]">
                        <div className="flex gap-[8px] items-center justify-start">
                            <div className="p-[5.88px]">
                                <img
                                    src={processImage.process2}
                                    alt="processIcon"
                                    className="sm:w-[38.2px] w-[31.2px]"
                                />
                            </div>
                            <div className="sm:text-[20px] text-[16px] font-bold">Kế hoạch</div>
                        </div>
                        <ul className="sm:text-[16px] text-[14px] font-normal list-disc pl-[30px]">
                            <li>Phân tích</li>
                            <li>Đánh giá</li>
                            <li>Đề xuất giải pháp</li>
                        </ul>
                    </div>
                    <div className="bg-light-violet sm:p-[16px] p-[12px] rounded-[20px] sm:w-[200px] w-[170px]">
                        <div className="flex gap-[8px] items-center justify-start">
                            <div className="p-[5.88px]">
                                <img
                                    src={processImage.process3}
                                    alt="processIcon"
                                    className="sm:w-[38.2px] w-[31.2px]"
                                />
                            </div>
                            <div className="sm:text-[20px] text-[16px] font-bold">Chi tiết</div>
                        </div>
                        <ul className="sm:text-[16px] text-[14px] font-normal list-disc pl-[30px]">
                            <li>Hoạt động MKT</li>
                            <li>Timeline</li>
                            <li>KPI cam kết</li>
                        </ul>
                    </div>
                    <div className="bg-light-violet sm:p-[16px] p-[12px] rounded-[20px] sm:w-[200px] w-[170px]">
                        <div className="flex gap-[8px] items-center justify-start">
                            <div className="p-[5.88px]">
                                <img
                                    src={processImage.process4}
                                    alt="processIcon"
                                    className="sm:w-[38.2px] w-[31.2px]"
                                />
                            </div>
                            <div className="sm:text-[20px] text-[16px] font-bold">Ký kết</div>
                        </div>
                        <ul className="sm:text-[16px] text-[14px] font-normal list-disc pl-[30px]">
                            <li>Hợp đồng</li>
                            <li>Thỏa thuận bảo mật (NDA)</li>
                        </ul>
                    </div>
                    <div className="bg-light-violet sm:p-[16px] p-[12px] rounded-[20px] sm:w-[200px] w-[170px]">
                        <div className="flex gap-[8px] items-center justify-start">
                            <div className="p-[5.88px]">
                                <img
                                    src={processImage.process5}
                                    alt="processIcon"
                                    className="sm:w-[38.2px] w-[31.2px]"
                                />
                            </div>
                            <div className="sm:text-[20px] text-[16px] font-bold">Triển khai</div>
                        </div>
                        <ul className="sm:text-[16px] text-[14px] font-normal list-disc pl-[30px]">
                            <li>Triển khai</li>
                            <li>Đo lường</li>
                            <li>Tối ưu</li>
                        </ul>
                    </div>
                    <div className="bg-light-violet sm:p-[16px] p-[12px] rounded-[20px] sm:w-[200px] w-[170px]">
                        <div className="flex gap-[8px] items-center justify-start">
                            <div className="p-[5.88px]">
                                <img
                                    src={processImage.process6}
                                    alt="processIcon"
                                    className="sm:w-[38.2px] w-[31.2px]"
                                />
                            </div>
                            <div className="sm:text-[20px] text-[16px] font-bold">Nghiệm thu</div>
                        </div>
                        <ul className="sm:text-[16px] text-[14px] font-normal list-disc pl-[30px]">
                            <li>Nghiệm thu KPI</li>
                            <li>Đánh giá tổng kết</li>
                            <li>Nhận nhu cầu mới</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectProcessReverse;
