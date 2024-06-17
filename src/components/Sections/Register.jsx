import RegisterForm from '../../components/RegisterForm';
import { registerSectionImage } from '../../assets/home';

function Register(props) {
    return (
        <section className="w-full flex flex-col justify-center items-center lg:mt-[70px] mt-[22px] lg:p-0">
            <div className="xl:w-[1180px] w-full flex lg:flex-row flex-col-reverse justify-center items-center gap-[60px] xl:px-0 px-[12px]">
                <div className="flex-1 relative w-full lg:block hidden">
                    <img src={registerSectionImage} alt="registerSectionImage" />
                    <div class="absolute bottom-0 right-0 min-h-[60px] w-full bg-gradient-to-b from-[#ffffff00] from-[0%] to-[#FFF] to-[100%]"></div>
                </div>
                <div className="flex-1 lg:w-full md:w-[80%] w-full">
                    <RegisterForm />
                </div>
            </div>
        </section>
    );
}

export default Register;
