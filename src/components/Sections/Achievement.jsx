import { FaStar } from 'react-icons/fa6';

function Achievement(props) {
    return (
        <section className="w-full leading-normal flex flex-col justify-center items-center py-[20px] xl:px-0 px-[16px]">
            <div className="xl:w-[1180px] w-full flex lg:flex-row flex-col lg:gap-[20px] gap-[12px]">
                <div className="flex-grow flex flex-col sm:gap-[12px] gap-[8px] p-[20px] items-center justify-center bg-button bg-opacity-20 rounded-[24px]">
                    <div className="flex flex-col sm:gap-[8px] gap-[4px] items-center justify-center">
                        <p className="sm:text-[20px] text-[16px] font-medium">Fanpage</p>
                        <h1 className="sm:text-[31px] text-[24px] font-bold text-dark-green">1,000+ Followers</h1>
                    </div>
                    <div className="sm:text-[20px] text-[16px] font-normal">Từ bệnh nhân, chia sẻ seeding</div>
                </div>
                <div className="flex-grow flex flex-col sm:gap-[12px] gap-[8px] p-[20px] items-center justify-center bg-button bg-opacity-20 rounded-[24px]">
                    <div className="flex flex-col sm:gap-[8px] gap-[4px] items-center justify-center">
                        <p className="sm:text-[20px] text-[16px] font-medium">Trung bình hiệu quả</p>
                        <h1 className="sm:text-[31px] text-[24px] font-bold text-dark-green">10 bệnh nhân/ngày</h1>
                    </div>
                    <div className="sm:text-[20px] text-[16px] font-normal">Vượt mục tiêu 5 bệnh nhân/ngày</div>
                </div>
                <div className="flex-grow flex flex-col sm:gap-[12px] gap-[8px] p-[20px] items-center justify-center bg-button bg-opacity-20 rounded-[24px]">
                    <div className="flex flex-col sm:gap-[8px] gap-[4px] items-center justify-center">
                        <p className="sm:text-[20px] text-[16px] font-medium">Google Map</p>
                        <h1 className="sm:text-[31px] text-[24px] font-bold text-dark-green flex items-center gap-[6px]">
                            <p>50 đánh giá 5</p>
                            <FaStar className="text-yellow" />
                        </h1>
                    </div>
                    <div className="sm:text-[20px] text-[16px] font-normal">Vượt trội hoàn toàn với đối thủ</div>
                </div>
            </div>
        </section>
    );
}

export default Achievement;
