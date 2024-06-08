import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import combosDetails from '../../constants/comboDetails';
import ComboCard from '../ComboCard';

function ComboDetails(props) {
    const [sectionDetail, setSectionDetails] = useState({});
    const location = useLocation();
    useEffect(() => {
        setSectionDetails(combosDetails[location.pathname.split('/').pop()]);
    }, [location.pathname]);
    return (
        <section className="w-full flex flex-col justify-center items-center lg:gap-[40px] gap-[16px] xl:pt-[42px] pt-[36.5px] xl:pb-[43px] pb-[36.5px] bg-light-violet xl:px-0 px-[16px]">
            <div className="xl:w-[1180px] w-full text-center flex flex-col gap-[12px]">
                <h1 className="sm:text-[36px] text-[24px] font-bold">{sectionDetail.title}</h1>
                <p className="text-[20px] font-normal">{sectionDetail.desc}</p>
            </div>
            <div className="xl:w-[1180px] w-full flex lg:items-stretch items-center justify-center lg:flex-row flex-col sm:gap-[24px] gap-[12px]">
                {sectionDetail?.details?.map((detail, index) => {
                    return (
                        <ComboCard
                            key={index}
                            title={detail.name}
                            price={detail.price}
                            functions={detail.functions}
                            desc={detail.desc}
                            className={'flex-1 lg:w-full w-[95%]'}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default ComboDetails;
