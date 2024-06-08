import { Link } from 'react-router-dom';

import blogs from '../../constants/blogSection';
import NewsCard from '../NewsCard';

function Blog(props) {
    return (
        <section className="w-full flex flex-col justify-center items-center sm:gap-[30px] gap-[16px] sm:py-[52px] py-[24px] xl:px-0 px-[16px]">
            <h1 className="w-full sm:text-[36px] text-[24px] sm:font-bold font-medium sm:text-center text-start">
                Blog Marketing y tế
            </h1>
            <div className="xl:w-[1180px] w-full overflow-x-scroll hideScrollbar">
                <div className="min-w-max flex items-stretch flex-row sm:gap-[24px] gap-[12px]">
                    {blogs.map((blog, index) => {
                        return (
                            <NewsCard
                                key={index}
                                title={blog.title}
                                desc={blog.desc}
                                date={blog.date}
                                thumbnail={blog.thumbnail}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Blog;
