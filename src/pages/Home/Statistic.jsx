function Statistic(props) {
    return (
        <section className="w-full flex flex-col gap-[20px] sm:mt-[52px] mt-[18px] sm:py-[42px] py-[27.5px] justify-center items-center bg-light-violet">
            <h1 className="sm:text-[36px] text-[24px] sm:font-bold font-medium">Thống kê chất lượng</h1>
            <div className="sm:max-w-[794px] w-full xl:px-0 px-[16px] grid lg:grid-cols-4 grid-cols-2 lg:gap-[57px] gap-[24px] items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="sm:text-[36px] text-[28px] font-bold text-violet">6+</h1>
                    <h2 className="sm:text-[20px] text-[16px] font-medium whitespace-nowrap">Năm kinh nghiệm</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="sm:text-[36px] text-[28px] font-bold text-violet">10.000+</h1>
                    <h2 className="sm:text-[20px] text-[16px] font-medium whitespace-nowrap">Khách hàng</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="sm:text-[36px] text-[28px] font-bold text-violet">50.000+</h1>
                    <h2 className="sm:text-[20px] text-[16px] font-medium whitespace-nowrap">Leads</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="sm:text-[36px] text-[28px] font-bold text-violet">100+</h1>
                    <h2 className="sm:text-[20px] text-[16px] font-medium whitespace-nowrap">Chiến dịch Marketing</h2>
                </div>
            </div>
        </section>
    );
}

export default Statistic;
