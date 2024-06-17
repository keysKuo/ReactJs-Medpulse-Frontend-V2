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
        <section className="w-full leading-normal flex flex-col justify-center items-center lg:gap-[40px] gap-[16px] xl:pt-[42px] pt-[36.5px] xl:pb-[43px] pb-[36.5px] bg-light-violet xl:px-0 px-[16px]">
            <div className="xl:w-[1180px] w-full text-center flex flex-col sm:gap-[12px] gap-[8px]">
                <h1 className="sm:text-[36px] text-[24px] sm:font-bold font-medium sm:block hidden">
                    {sectionDetail?.title?.desktop}
                </h1>
                <h1 className="sm:text-[36px] text-[24px] sm:font-bold font-medium sm:hidden block">
                    {sectionDetail?.title?.mobile}
                </h1>
                <p className="text-[20px] font-normal leading-normal sm:block hidden">{sectionDetail?.desc?.desktop}</p>
                <p className="text-[16px] font-normal leading-normal sm:hidden block">{sectionDetail?.desc?.mobile}</p>
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
                            className={'w-full'}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default ComboDetails;
