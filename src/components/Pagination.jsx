import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Pagination(props) {
    const { totalPage, currentPage, siblingCount = 1, pageSelected } = props;
    const [active, setActive] = useState(currentPage);

    const next = () => {
        if (active === totalPage) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    useEffect(() => {
        pageSelected(active);
    }, [active]);

    return (
        <div className="flex items-center gap-[8px] text-[16px] font-medium select-none">
            <div
                className="flex items-center justify-center bg-light-gray bg-opacity-40 cursor-pointer rounded-[4px] w-[30px] h-[30px]"
                onClick={prev}
            >
                <IoIosArrowBack className={` ${active === 1 ? 'text-gray' : 'text-violet'}`} />
            </div>
            <div className="flex items-center gap-[8px]">
                {Array.from({ length: totalPage }).map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`p-2 rounded-[4px] w-[30px] h-[30px] cursor-pointer flex items-center justify-center  ${
                                index + 1 === active
                                    ? 'text-white bg-dark-violet'
                                    : 'text-dark-violet bg-light-gray bg-opacity-40'
                            }`}
                            onClick={() => setActive(index + 1)}
                        >
                            {index + 1}
                        </div>
                    );
                })}
            </div>
            <div
                className="flex items-center justify-center bg-light-gray bg-opacity-40 cursor-pointer w-[30px] h-[30px] rounded-[4px]"
                onClick={next}
            >
                <IoIosArrowForward className={` ${active === totalPage ? 'text-gray' : 'text-violet'}`} />
            </div>
        </div>
    );
}

export default Pagination;
