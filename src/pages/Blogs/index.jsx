import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

import HeroBanner from '../../components/Sections/HeroBanner';
import NewsCard from '../../components/NewsCard';
import Pagination from '../../components/Pagination';

import blogs from '../../constants/blogSection';

function Blogs(props) {
    const [selectedPage, setSelectedPage] = useState(1);

    const handleOnPageSelect = (pageIndex) => {
        setSelectedPage(pageIndex);
    };
    return (
        <>
            <HeroBanner />
            <section className="w-full flex flex-col relative justify-center items-center mt-[40px] xl:px-0 px-[16px]">
                <div className="xl:w-[1180px] w-full grid lg:grid-rows-[min-content_1fr] lg:grid-cols-[270px_1fr] grid-cols-1 gap-[20px]">
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex gap-[10px] p-[11px_20px] items-center w-full bg-light-gray bg-opacity-25 rounded-[12px]">
                            <CiSearch className="text-[24px] text-gray min-w-[24px]" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="text-[16px] bg-transparent bg-opacity-15 focus:outline-none font-medium p-[5px]"
                            />
                        </div>
                        <div className="flex flex-col gap-[8px] font-medium sm:p-[12px_16px] sm:bg-light-gray sm:bg-opacity-25 sm:rounded-[12px] hideScrollbar sm:overscroll-none overflow-x-scroll">
                            <h1 className="py-[12px] text-[20px] lg:block hidden">Chuyên mục</h1>
                            <div className="flex lg:flex-col flex-row lg:gap-[8px] gap-0 items-start sm:w-full min-w-max">
                                <p className="lg:p-[12px_10px] p-[8px] text-center lg:text-start cursor-pointer sm:w-full w-fit text-[16px] sm:rounded-[6px] sm:bg-light-violet bg-white sm:text-violet text-blue-400 sm:border-none border-b-2 border-blue-400 hover:bg-light-violet hover:text-violet hover:font-medium">
                                    Case Study
                                </p>
                                <p className="lg:p-[12px_10px] p-[8px] text-center lg:text-start cursor-pointer sm:w-full w-fit text-[16px] sm:rounded-[6px] font-normal hover:bg-light-violet hover:text-violet hover:font-medium">
                                    Kiến thức y tế
                                </p>
                                <p className="lg:p-[12px_10px] p-[8px] text-center lg:text-start cursor-pointer sm:w-full w-fit text-[16px] sm:rounded-[6px] font-normal hover:bg-light-violet hover:text-violet hover:font-medium">
                                    Tin tức
                                </p>
                                <p className="lg:p-[12px_10px] p-[8px] text-center lg:text-start cursor-pointer sm:w-full w-fit text-[16px] sm:rounded-[6px] font-normal hover:bg-light-violet hover:text-violet hover:font-medium">
                                    Sự kiện ưu đãi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col gap-[20px] lg:items-start items-center">
                        <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row sm:gap-[20px] gap-0">
                            {[...blogs, ...blogs, blogs[0]].map((blog, index) => {
                                return (
                                    <div key={index}>
                                        <Link
                                            to={'/blogs/blog'}
                                            className={`flex lg:flex-col flex-row sm:gap-0 gap-[12px] lg:max-w-[285px] max-w-full lg:min-h-full sm:border sm:border-light-gray rounded-[12px]`}
                                        >
                                            <div className="lg:w-full min-w-[35%] sm:h-[166px] h-[115px]">
                                                <img
                                                    src={blog.thumbnail}
                                                    alt="blog"
                                                    className="lg:rounded-t-[12px] rounded-[8px] w-full h-full"
                                                />
                                            </div>
                                            <div className=" w-full flex flex-col items-start gap-[8px] sm:p-[16px] p-0">
                                                <p className="font-normal text-gray sm:block hidden">{blog.date}</p>
                                                <div>
                                                    <p className="line-clamp-2 font-medium sm:text-[18px] text-[16px]">
                                                        {blog.title}
                                                    </p>
                                                    <p className="line-clamp-3 font-normal sm:text-[16px] text-[14px]">
                                                        {blog.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <hr className="h-px my-[12px] bg-light-gray border-0 sm:hidden block" />
                                    </div>
                                );
                            })}
                        </div>
                        <Pagination totalPage={4} currentPage={selectedPage} pageSelected={handleOnPageSelect} />
                    </div>
                    <div className="lg:col-start-1 flex flex-col gap-[8px] font-medium p-[12px_16px] h-fit bg-light-gray bg-opacity-25 rounded-[12px]">
                        <h1 className="py-[12px] text-[20px]">Bài viết nổi bật</h1>
                        <div className="flex flex-col gap-0">
                            {Array.from({ length: 5 }).map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start justify-start cursor-pointer gap-[10px] p-[12px]"
                                    >
                                        <div className="text-[36px] text-dark-violet font-bold">{index + 1}</div>
                                        <div className="flex flex-col items-start gap-[4px]">
                                            <h2 className="text-[16px] font-medium">Sự kiện và ưu đãi fake</h2>
                                            <p className="text-[13px] font-normal line-clamp-2 text-gray">
                                                At sit viverra dictumst tortor bland semper. Metus euismod facilisis
                                                turpis dictumst
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;
