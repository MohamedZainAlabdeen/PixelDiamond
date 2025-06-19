import { useMetaTitle } from "../hooks";
import { Banner, Button } from "../components";
import { banner_01, error_img } from "../assets";


const Page404 = () => {
    useMetaTitle("Pixel Diamond - Error 404");
    return (
        <>
            <Banner
                className="!mt-0"
                img={banner_01}
                title="404 Error"
                path={{ to: "404 Error Page" }}
            />
            <section className="mainContainer py-20 text-center">
                <div className="xs:ml-[120px] ml-[85px]">
                    <img src={error_img} className="mx-auto" alt="Error Image" />
                </div>
                <h3 className="text-blackColor text-7xl max-[570px]:text-5xl max-[410px]:text-4xl mt-5 mb-3">
                    Oooooopsss!
                </h3>
                <h4 className="text-grayColor text-2xl">
                    Seems that something went wrong
                </h4>
                <p className="text-grayColor max-w-[650px] mx-auto mt-4">
                    The page you are looking for has been moved or doesn’t exist anymore,
                    if you like you can return to the previous page, or go to our main
                    homepage. If the problem persists, please send us an email to {"  "}
                    <a
                        href="mailto:mohamedzain.dev@gmail.com"
                        className="text-blueColor"
                    >
                        mohamedzain.dev@gmail.com
                    </a>
                </p>
                <div className="flexCenter max-xs:flex-col gap-4 mt-10">
                    <Button url="/" variant="purple" className="max-xs:w-full" iconClassName="max-xs:ml-auto">
                        Go to main home
                    </Button>
                    <Button url="/" className="max-xs:w-full" variant="blue" iconClassName="max-xs:ml-auto">Go to previous</Button>
                </div>
            </section>
        </>
    );
};

export default Page404;
