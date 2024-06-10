import abouUsPageImages from '../../assets/about-us';

function Introduction(props) {
    return (
        <section className="w-full flex flex-col sm:py-[60px] py-[24px] justify-center items-center bg-light-violet">
            <div className="xl:w-[1180px] w-full flex lg:flex-row flex-col gap-[40px] xl:px-0 px-4">
                <div className="flex-1 flex flex-col lg:gap-[40px] gap-[20px]">
                    <div className="flex flex-col gap-[20px]">
                        <h1 className="sm:text-[36px] text-[24px] font-bold">Sứ mệnh</h1>
                        <p className="text-[16px] font-normal">
                            Mang dịch vụ y tế phù hợp đến đúng đối tượng nhất thông qua marketing
                        </p>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <h1 className="sm:text-[36px] text-[24px] font-bold">Tầm nhìn</h1>
                        <p className="text-[16px] font-normal">
                            Trở thành agency marketing y tế ĐẦU TAY phù hợp khi khách hàng cần triển khai chiến dịch.{' '}
                        </p>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <h1 className="sm:text-[36px] text-[24px] font-bold">Năng lực</h1>
                        <p className="text-[16px] font-normal">
                            Đội ngũ MedPulse Marketing đã thực hiện thành công nhiều chiến dịch marketing cho các thương
                            hiệu y tế lớn và nhỏ. Với sứ mệnh, tầm nhìn và giá trị cốt lõi của mình, đội ngũ MedPulse
                            Marketing nỗ lực hằng ngày, cập nhật công nghệ mới để cải thiện dịch vụ tốt nhất đến với
                            khách hàng.{' '}
                        </p>
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-2 grid-rows-2 sm:gap-[20px] gap-[12px]">
                    {Array.from({ length: 4 }).map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="h-full lg:p-[20px] p-[12px] rounded-[20px] flex flex-col gap-[16px] items-start justify-center bg-white"
                            >
                                <div className="flex gap-[8px] lg:flex-col flex-row items-start">
                                    <div className="p-[10px] bg-button sm:rounded-[15px] rounded-[8.49px]">
                                        <img src={abouUsPageImages.userIcon} alt="userIcons" />
                                    </div>
                                    <h2 className="sm:text-[20px] text-[16px] font-medium">
                                        <span className="hidden sm:inline-block">{index+1}.</span> Medical Ethics
                                    </h2>
                                </div>
                                <div>
                                    <p className="lg:text-[16px] text-[14px] font-normal">
                                        Luôn lấy Y tế làm kim chỉ nam trong hoạt động marketing.
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Introduction;
