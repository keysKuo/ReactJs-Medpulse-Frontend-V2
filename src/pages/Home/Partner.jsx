import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { partnerImages } from '../../assets/home';

function Partner(props) {
    const totalItems = 6;
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (partnerImages.length - 4));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (partnerImages.length - 4)) % (partnerImages.length - 4));
    };

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === partnerImages.length - 4 ? 0 : prevIndex + 1));
        }, 2000);
        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    return (
        <section className="w-full pt-[40px] pb-[52px] flex flex-col justify-center items-center gap-[32px] xl:px-0 px-[16px]">
            <h1 className="sm:text-[36px] text-[24px] font-bold text-center">Đối tác MedPulse</h1>
            <div className="xl:w-[1050px] w-[85%] relative flex flex-col items-center gap-[20px]">
                <div className="w-full overflow-hidden">
                    <div
                        className="w-screen grid grid-rows-2 grid-flow-col gap-y-[16px] lg:gap-x-0 gap-x-[12px] transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 15}%)` }}
                    >
                        {partnerImages.map((image, index) => {
                            return (
                                <div key={index} className="w-fit flex items-center justify-center">
                                    <img src={image} alt="imagePartber" className="md:max-w-[200px] max-w-[85px]" />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="mx-auto xl:hidden block">
                    {[...Array(totalItems)].map((item, idx) => (
                        <div
                            key={idx}
                            className={`text-center inline-block h-2 w-2 cursor-pointer m-1 rounded-full ${
                                currentIndex === idx ? 'bg-emerald transform scale-150' : 'bg-gray-200'
                            }`}
                        ></div>
                    ))}
                </div>
                <div
                    onClick={prevSlide}
                    className="absolute cursor-pointer top-1/2 -translate-y-1/2 -translate-x-14 xl:block hidden left-0  rounded-full bg-white shadow-md p-[8px]"
                >
                    <IoIosArrowBack />
                </div>
                <div
                    onClick={nextSlide}
                    className="absolute cursor-pointer top-1/2 -translate-y-1/2 translate-x-14 xl:block hidden right-0 rounded-full bg-white shadow-md p-[8px]"
                >
                    <IoIosArrowForward />
                </div>
            </div>
        </section>
    );
}

export default Partner;
