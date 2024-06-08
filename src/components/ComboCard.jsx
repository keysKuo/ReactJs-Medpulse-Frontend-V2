import { Link } from 'react-router-dom';

import { FaCheck } from 'react-icons/fa6';
import Button from './Button';

function ComboCard(props) {
    const { title, price, desc, functions, className = '' } = props;
    return (
        <div
            className={`${className} flex flex-col gap-[20px] items-center bg-white sm:p-[30px] p-[30px_20px] rounded-[30px]`}
        >
            <h1 className="text-[36px] font-bold text-violet whitespace-nowrap">{price}</h1>
            <div className=" w-full flex flex-col items-start gap-[8px] p-[16px]">
                <div className='lg:text-start text-center w-full'>
                    <h2 className="text-[20px] font-medium">{title}</h2>
                    <p className="text-[16px] font-normal">{desc}</p>
                    <hr className="h-px mt-[12px] sm:mb-[20px] mb-[16px] bg-dark-violet border-0 " />
                </div>
                <div className="flex flex-col gap-[12px]">
                    {functions?.map((item, index) => {
                        return (
                            <div key={index} className="flex gap-[10px] items-center justify-start">
                                <div className="p-[8px] bg-light-violet rounded-full ">
                                    <FaCheck className="text-[16px] text-violet" />
                                </div>
                                <p className="text-[16px] font-normal">{item}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='flex-grow h-full flex items-end'>
                <Button />
            </div>
        </div>
    );
}

export default ComboCard;
