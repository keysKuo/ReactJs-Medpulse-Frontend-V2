import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { partnerImages } from '../../assets/home';

function Partner(props) {
    const totalItems = partnerImages.length;
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
        <section className="w-full pt-[40px] pb-[52px] flex flex-col justify-center items-center gap-[32px] xl:px-0 px-[16px] pr-0">
            <h1 className="sm:text-[36px] text-[24px] font-bold text-center">Đối tác MedPulse</h1>
            <div className="xl:w-[1050px] sm:w-[85%] w-full relative flex flex-col items-center gap-[20px]">
                <div className="w-full overflow-hidden">
                    <div
                        className="w-screen grid sm:grid-rows-[repeat(2,100px)] grid-rows-[repeat(2,56.3px)] sm:grid-cols-[repeat(4,200px)] grid-cols-[repeat(4,113px)] grid-flow-col sm:gap-y-[16px] gap-y-[4px] sm:gap-x-[90px] gap-x-[12px] transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 15}%)` }}
                    >
                        {partnerImages.map((image, index) => {
                            return (
                                <div key={index} className="flex items-center justify-center">
                                    <img
                                        src={image}
                                        alt="imagePartber"
                                        className="max-w-full sm:max-h-full max-h-[45px]"
                                    />
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
                                currentIndex === idx ? 'bg-emerald transform scale-150' : 'bg-light-gray'
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
