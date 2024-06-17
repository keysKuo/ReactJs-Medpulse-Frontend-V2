import { Link } from 'react-router-dom';

function NewsCard(props) {
    const { title, desc, date, thumbnail, url = '', className = '' } = props;
    return (
        <Link
            to={url}
            className={`flex flex-col sm:max-w-[285px] max-w-[200px] min-h-full border border-light-gray rounded-[12px] ${className}`}
        >
            <div className="w-full sm:h-[160px] h-[115px]">
                <img src={thumbnail} alt="blog" className="rounded-t-[12px] w-full h-full" />
            </div>
            <div className=" w-full flex flex-col items-start sm:gap-[8px] gap-0 leading-normal p-[16px]">
                <p className="font-normal text-gray sm:text-[13px] text-[12px]">{date}</p>
                <div className='flex flex-col sm:gap-0 gap-[8px]'>
                    <p className="line-clamp-2 font-medium sm:text-[18px] text-[16px]">{title}</p>
                    <p className="line-clamp-3 font-normal text-[16px]">{desc}</p>
                </div>
            </div>
        </Link>
    );
}

export default NewsCard;
