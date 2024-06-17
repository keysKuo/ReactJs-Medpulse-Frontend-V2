import abouUsPageImages from '../../assets/about-us';

function Doctor(props) {
    return (
        <section className="w-full leading-normal flex flex-col md:gap-[24px] gap-[20px] justify-center items-center mt-[44px] sm:py-[50px] py-[24px] bg-light-violet ">
            <h1 className="sm:text-[36px] text-[24px] sm:font-bold font-medium">Cố vấn chuyên môn</h1>
            <div className="xl:w-[1002px] w-full flex xl:px-0 px-4">
                <div className="md:bg-white bg-light-violet md:p-[30px_40px] p-0 flex md:flex-row flex-col md:gap-[65px] gap-[12px] items-center rounded-[16px]">
                    <div className="flex flex-col gap-[16x] items-center">
                        <img
                            src={abouUsPageImages.doctorImage}
                            alt="doctorImage"
                            className="rounded-[12px] max-w-[250px]"
                        />
                        <h1 className="text-[20px] font-medium mt-[16px]">BS. CKI. Tôn Thất Tùng</h1>
                    </div>
                    <div className="flex flex-col gap-[16px] md:py-0 py-[10px]">
                        <div className="flex gap-[8px] items-start">
                            <div className="max-w-[16px] pt-1">
                                <img src={abouUsPageImages.listIcon} alt="listIcon" className="max-w-full" />
                            </div>
                            <p className="text-[16px] font-normal">
                                BS. CKI. Tôn Thất Tùng tốt nghiệp Y Đa Khoa và Chuyên khoa 1 Đại Học Y Dược Thành Phố Hồ
                                Chí Minh.
                            </p>
                        </div>
                        <div className="flex gap-[8px] items-start">
                            <div className="max-w-[16px] pt-1">
                                <img src={abouUsPageImages.listIcon} alt="listIcon" className="max-w-full" />
                            </div>
                            <p className="text-[16px] font-normal">
                                Với 10 năm kinh nghiệm khám và điều trị cho bệnh nhân, Bác sĩ Tùng là cố vấn chuyên môn
                                y khoa trong các hoạt động của MedPulse Marketing nhằm đảm bảo tính đúng đắn và chuẩn y
                                khoa, đồng hành cùng đội ngũ chuyền gia Marketing giúp các chỉiến dịch cho khách hàng
                                được hiệu quả.
                            </p>
                        </div>
                        <div className="flex gap-[8px] items-start">
                            <div className="max-w-[16px] pt-1">
                                <img src={abouUsPageImages.listIcon} alt="listIcon" className="max-w-full" />
                            </div>
                            <p className="text-[16px] font-normal">
                                Tôn chỉ của chúng tôi: “Trong lĩnh vực y tế - sức khỏe, quan trọng nhất là sự thấu cảm,
                                y đức và chuẩn chuyên môn, sau đó hãy nghĩ về marketing như thế nào”.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Doctor;
