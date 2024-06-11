import { IoIosArrowDown } from 'react-icons/io';

import { doctorComment } from '../../assets';
import RegisterForm from '../../components/RegisterForm';
import Blog from '../../components/Sections/Blog';

import blogs from '../../constants/blogSection';

function BlogDetail(props) {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="xl:w-[1180px] w-full flex flex-col xl:px-0 px-4">
                <div className="w-full grid xl:grid-cols-[800px_1fr] grid-cols-1 gap-[30px]">
                    <div className="min-w-full flex flex-col justify-center items-center gap-[20px]">
                        <div className="max-h-[1876px] relative">
                            <p>
                                4 tiêu chí để tìm ra các phòng khám chất lượng cao tại Việt Nam Với số lượng các phòng
                                khám ngày càng mọc như nấm ở Việt Nam thì tỷ lệ gặp phải 1 phòng khám "chui, kém chất
                                lượng cực kỳ cao, vì thế Medpro đưa ra 4 tiêu chí sau đây bạn cân nhắc trước khi gửi gắm
                                sức khỏe tại đó: Một trong những điểm cộng lớn của phòng khám đó là có các bác sĩ giỏi
                                và nổi tiếng tại các bệnh viện lớn. Nếu bạn đang tìm kiếm một nơi để thăm khám, đây là
                                một lựa chọn tuyệt vời cho bạn. Điều quan trọng tiếp theo là chi phí của dịch vụ. Phải
                                đảm bảo rằng các chi phí được minh bạch và rõ ràng để bạn có thể chuẩn bị tài chính
                                trước khi thăm khám. Ngoài ra, bạn cần được tư vấn kỹ càng để đảm bảo rằng bạn không bị
                                "chém" thêm các chi phí không cần thiết. Để đảm bảo rằng bạn nhận được dịch vụ y tế tốt
                                nhất, phòng khám cần được trang bị đầy đủ các thiết bị y tế cơ bản. Nếu phòng khám còn
                                có các thiết bị nâng cao, đó sẽ là một điểm cộng lớn. Cuối cùng, một yếu tố quan trọng
                                khác là review của các khách hàng đã từng thăm khám tại phòng khám. Nếu phòng khám có
                                nhiều review tốt, đó chứng tỏ phòng khám đó rất uy tín và bạn có thể yên tâm khi sử dụng
                                dịch vụ của họ. Hãy tham khảo ý kiến của các khách hàng trước khi quyết định thăm khám
                                tại phòng khám nào đó. Top 5 phòng khám chất lượng cao, chi phí hợp lý tại Việt Nam Để
                                bạn không phải tìm kiếm quá nhiều, Medpro xin giới thiệu 5 phòng khám đạt được các tiêu
                                chí bên trên Phòng khám Mediplus (Tổ hợp Y tế Mediplus): Địa chỉ: Tầng 2, TTTM Mandarin
                                Garden 2, số 99 đường Tân Mai, Phường Tân Mai, Quận Hoàng Mai, Thành phố Hà Nội Thời
                                gian làm việc: Thứ 2 - Chủ Nhật: 7h00 - 19h00 Về nơi gửi xe máy và xe ô tô, người bệnh
                                hoàn toàn có thể gửi tại tầng hầm của trung tâm thương mại và không quá lo lắng về chỗ
                                đỗ xe, đặc biệt với trường hợp đi ô tô. Hiện tại rất ít phòng khám tư nhân có được ưu
                                điểm này. Phòng khám Mediplus (Tổ hợp Y tế Mediplus) là Phòng khám có không gian rộng
                                rãi, khang trang, sạch đẹp. Đội ngũ Bác sĩ là Các Phó giáo sư, tiến sĩ, thạc sĩ, bác sĩ
                                giỏi chuyên khoa: Nội cơ xương khớp, Hô Hấp, Nội tim mạch, Nội tổng hợp .... đến từ các
                                bệnh viện lớn uy tín như: Trung tâm tim mạch, Trung tâm cơ xương khớp - Bệnh viện Bạch
                                Mai, Bệnh viện E Hà Nội, Bệnh viện Việt Tiệp Hải Phòng, Bệnh viện bạch mai... Trang
                                thiết bị hiện đại: Phòng khám Mediplus được đầu tư hệ thống trang thiết mới, các thiết
                                bị đều được nhập từ các nước có nền y học tiên tiến như Đức, Hàn Quốc, Nhật Bản... Một
                                số loại thiết bị như:Chụp cộng hưởng từ MRI 1.5 Tesla; Chụp cắt lớp vi tính (CT) trên
                                máy CT 125 dãy; Nội soi tiêu hóa công nghệ mới nhất BLI, LCI .... Đội ngũ bác sĩ phòng
                                khám Mediplus: Đội ngũ bác sĩ tại phòng khám đều là những người có nhiều năm kinh
                                nghiệm, được mời từ các bệnh viện lớn uy tín. Một số bác sĩ điển hình đang thăm khám tại
                                các chuyên khoa: Cơ xương khớp Tiến sĩ, Bác sĩ chuyên khoa II Lê Quốc Việt Nguyên Giám
                                đốc Trung tâm Cơ Xương khớp, Bệnh viện E Hơn 30 năm kinh nghiệm khám và điều trị các
                                bệnh nội cơ xương khớp Tiến sĩ, Bác sĩ Lê Thị Liễu Phó Giám đốc Trung tâm Cơ Xương Khớp
                                - Bệnh viện Bạch Mai Giảng viên kiêm nhiệm Bộ môn Nội tại Đại học Y Hà Nội và Đại học Y
                                Dược - Đại học Quốc Gia Hà Nội Hơn 20 năm kinh nghiệm trong lĩnh vực Cơ Xương Khớp Bác
                                sĩ chuyên khoa II Hoàng Thị Bích Bác sĩ hiện đang công tác tại Bệnh viện Lão Khoa Trung
                                ương Gần 20 năm kinh nghiệm trong lĩnh vực Nội Cơ Xương Khớp Thạc sĩ, Bác sĩ Nội trú
                                Nguyễn Anh Dũng Bác sĩ Khoa Chấn thương chỉnh hình Bệnh viện Bạch Mai Gần 10 năm kinh
                                nghiệm trong lĩnh vực Thần kinh - Cột sống - Cơ xương khớp
                            </p>
                            <div class="absolute bottom-0 right-0 min-h-[158px] w-full bg-gradient-to-b from-[#ffffff00] from-[0%] to-[#FFF] to-[100%]"></div>
                        </div>
                        <div className="w-full cursor-pointer flex justify-center items-center flex-col">
                            <p className="text-[16px] font-normal">Xem tiếp</p>
                            <IoIosArrowDown className="text-[16px]" />
                            <IoIosArrowDown className="text-[16px] opacity-60" />
                        </div>
                        <div className="w-full flex sm:flex-row flex-col gap-[24px] items-center justify-center p-[20px] rounded-[16px] bg-[#F1F6F1]">
                            <img
                                src={doctorComment}
                                alt="doctor"
                                width={100}
                                height={100}
                                className="w-[100px] h-[100px]"
                            />
                            <div className="flex flex-col gap-[12px] sm:text-start text-center">
                                <h1 className="text-[20px] font-medium text-dark-violet">Tôn Thất Bách</h1>
                                <p className="text-[16px] font-normal">
                                    Tôi cam kết chia sẻ kiến thức và kinh nghiệm hơn 5 năm kinh nghiệm trong lĩnh vực
                                    marketing y tế đa ngành đa lĩnh vực đa chuyên khoa. Mong rằng các bác sĩ, Quản lý
                                    Bệnh viện và marketer y tế có thể tìm thấy những giá trị áp dụng trong công việc của
                                    mình.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:flex hidden flex-col gap-[20px]">
                        <div className="flex flex-col gap-[12px]">
                            <h1 className="text-[20px] font-medium">Bài viết tương tự</h1>
                            {blogs.map((blog, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-[12px] p-[12px] bg-light-gray rounded-[12px] bg-opacity-20"
                                    >
                                        <img
                                            src={blog.thumbnail}
                                            alt="blogThumbNail"
                                            className="rounded-[8px] h-[100px] min-w-[140px]"
                                        />
                                        <div>
                                            <h2 className="text-[13px] text-gray font-medium">{blog.date}</h2>
                                            <h1 className="text-[16px] font-bold line-clamp-2">{blog.title}</h1>
                                            <p className="text-[14px] font-normal line-clamp-2">{blog.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="p-[24px_20px] bg-[#F1F6F1] rounded-[20px]">
                            <RegisterForm isSidebar={true} />
                        </div>
                    </div>
                </div>
                <Blog isBlogDetailPage={true} />
                <div className="p-[24px_20px] bg-[#F1F6F1] rounded-[20px] xl:hidden block">
                    <RegisterForm isSidebar={true} />
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
