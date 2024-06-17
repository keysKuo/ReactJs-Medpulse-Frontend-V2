import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { partnerImages } from '../../assets/home';
// To understand why I duplicate the sliding items
// please remove the overflow-hidden and comment out the useEffect

function Partner(props) {
    // duplicate sliding items to eliminate conflicts when moving slides without animation
    const [slides, setSlides] = useState([...partnerImages, ...partnerImages]);
    // index for slide translate
    const [indexSlide, setIndexSlide] = useState(0);
    // index for progress bar
    const [progressIndex, setProgressIndex] = useState(0);
    const [transform, setTransform] = useState(true);
    const timeoutRef = useRef(null);
    const timer = useRef(null);
    // for responsive percent translate
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const handleNextSlide = () => {
        resetTimeout();
        if (indexSlide === slides.length / 2 - 4) {
            // remove animation to move slide as soon as slideshow move to the end
            setTransform(false);
        } else {
            setTransform(true);
        }
        setIndexSlide((prevIndexSlide) =>
            prevIndexSlide === slides.length / 2 - 4 ? Math.round((partnerImages.length / 2) % 4) : prevIndexSlide + 1,
        );
        setProgressIndex((prevProgressIndex) =>
            prevProgressIndex === Math.round(partnerImages.length / 2 - 1) ? 0 : progressIndex + 1,
        );
    };

    const handlePrevSlide = () => {
        resetTimeout();
        if (indexSlide === 0) {
            // remove animation to move slide as soon as when backward to start
            setTransform(false);
        } else {
            setTransform(true);
        }
        setIndexSlide((prevIndexSlide) =>
            prevIndexSlide === 0 ? Math.round(partnerImages.length / 2) : prevIndexSlide - 1,
        );
        setProgressIndex((prevProgressIndex) =>
            prevProgressIndex === 0 ? Math.round(partnerImages.length / 2 - 1) : progressIndex - 1,
        );
    };

    // auto slide
    useEffect(() => {
        timeoutRef.current = setTimeout(() => handleNextSlide(), 2500);
        return () => {
            resetTimeout();
        };
    }, [indexSlide]);

    useEffect(() => {
        // delay for switch slide before continue slideshow for next button
        if (!transform && indexSlide === Math.round((partnerImages.length / 2) % 4)) {
            timer.current = setInterval(() => {
                setTransform(true);
                setIndexSlide((prevIndexSlide) => (prevIndexSlide += 1));
            }, 10);
        }
        // delay for switch slide before continue slideshow for prev button
        if (!transform && indexSlide === Math.round(partnerImages.length / 2)) {
            timer.current = setInterval(() => {
                setTransform(true);
                setIndexSlide((prevIndexSlide) => (prevIndexSlide -= 1));
            }, 100);
        }
        return () => {
            clearInterval(timer.current);
        };
    }, [transform]);

    // to catch the screen width changes
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="w-full pt-[40px] pb-[52px] flex flex-col justify-center items-center sm:gap-[32px] gap-[20px] xl:px-0 px-[16px] pr-0">
            <h1 className="sm:text-[36px] text-[24px] sm:font-bold font-medium text-center">Đối tác MedPulse</h1>
            <div className="xl:w-[1050px] sm:w-[85%] w-full relative flex flex-col items-center gap-[20px]">
                <div className="w-full overflow-hidden">
                    <div
                        className={`w-full grid sm:grid-rows-[repeat(2,100px)] grid-rows-[repeat(2,56.3px)] sm:grid-cols-[repeat(4,200px)] grid-cols-[repeat(4,113px)] grid-flow-col sm:gap-y-[16px] gap-y-[4px] sm:gap-x-[90px] gap-x-[12px] ${
                            transform ? 'transition-transform ease-in-out' : ''
                        }`}
                        style={{ transform: `translate3d(${-indexSlide * (windowWidth === 375 ? 33 : 27)}%, 0, 0)` }}
                    >
                        {slides.map((image, index) => {
                            return (
                                <div key={index} className="flex items-center justify-center sm:w-[200px] w-[100px]">
                                    <img
                                        src={image}
                                        alt="imagePartber"
                                        className="sm:max-w-[200px] sm:max-h-[100px] max-w-[100px] max-h-[45px] "
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="text-center gap-[3px] flex">
                    {Array.from({ length: Math.round(partnerImages.length / 2) }).map((_, idx) => {
                        return (
                            <div
                                key={idx}
                                className={`h-[6px] w-[6px] rounded-full cursor-pointer  ${
                                    progressIndex === idx ? 'bg-button' : 'bg-[#c4c4c4]'
                                }`}
                                // onClick={() => {
                                //     resetTimeout();
                                //     setIndexSlide(idx);
                                //     setProgressIndex(idx);
                                // }}
                            ></div>
                        );
                    })}
                </div>
                <div
                    onClick={handlePrevSlide}
                    className="absolute cursor-pointer top-1/2 -translate-y-1/2 -translate-x-14 xl:block hidden left-0  rounded-full bg-white shadow-md p-[8px]"
                >
                    <IoIosArrowBack />
                </div>
                <div
                    onClick={handleNextSlide}
                    className="absolute cursor-pointer top-1/2 -translate-y-1/2 translate-x-14 xl:block hidden right-0 rounded-full bg-white shadow-md p-[8px]"
                >
                    <IoIosArrowForward />
                </div>
            </div>
        </section>
    );
}

export default Partner;
