import { Link } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa6';
import Button from './Button';

function ComboCard(props) {
    const { title, price, desc, functions, className = '' } = props;
    return (
        <div
            className={`${className} flex flex-col sm:gap-[20px] gap-[12px] items-center bg-white sm:p-[30px] p-[30px_16px] rounded-[30px]`}
        >
            <h1 className="sm:text-[36px] text-[31px] font-bold text-violet whitespace-nowrap">{price}</h1>
            <div className=" w-full flex flex-col items-start sm:gap-[20px] gap-[16px]">
                <div className="lg:text-start text-center w-full flex flex-col gap-[8px]">
                    <h2 className="text-[20px] font-medium">{title}</h2>
                    <p className="text-[16px] font-normal">{desc}</p>
                    <hr className="h-px mt-[4px] bg-dark-violet border-0 " />
                </div>
                <div className="flex flex-col gap-[12px]">
                    {functions?.map((item, index) => {
                        return (
                            <div key={index} className="flex gap-[10px] items-center justify-start">
                                <div className="p-[8px] bg-light-violet rounded-full ">
                                    <FaCheck className="text-[16px] text-violet" />
                                </div>
                                <p className="text-[16px] font-normal whitespace-nowrap">{item}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex-grow w-full h-full flex items-end">
                <div className=" w-full flex justify-between items-center sm:gap-[5px] gap-[10px]">
                    <div className="w-full flex cursor-pointer items-center justify-center px-[28px] py-[12px] rounded-[50px] bg-button text-button-text gap-[20px]">
                        <p className="text-[20px] font-medium whitespace-nowrap">Đăng ký tư vấn</p>
                        <IoIosArrowForward className="text-[20px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComboCard;
