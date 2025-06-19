import { useMetaTitle } from "../hooks";
import { Banner, PageNavigation, Title } from "../components"
import { pixelVideos } from "../constants";
import { banner_04 } from "../assets";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"

const PixelVideos = () => {
    useMetaTitle("Pixel Diamond - Pixel Videos");
    const renderVideos = (
        <>
            {pixelVideos.map((item) => (
                <div key={item.id} className="w-full">
                    <a href="#" className="block relative w-full h-[180px] rounded">
                        <div
                            className="w-full h-full bg-cover bg-center rounded"
                            style={{ backgroundImage: `URL(${item.banner})` }}
                        />
                        <div className="post-preview-overlay flexCenter">
                            <div className="flexCenter w-[40px] h-[40px] border-[3px] border-blueGreen bg-[#00000073] rounded-full">
                                <FaPlay className="text-base text-white" />
                            </div>
                        </div>
                        <span className="absolute bottom-0 right-0 px-3 py-1 bg-[#00000093] text-xs text-whiteColor">
                            {item.time}
                        </span>
                    </a>
                    <div className="flex items-center gap-2 mt-3">
                        {item.tags.map((tag) => (
                            <div
                                key={tag.id}
                                className={`px-3 py-1 rounded text-xs text-whiteColor uppercase`}
                                style={{ backgroundColor: tag.color }}
                            >
                                {tag.title}
                            </div>
                        ))}
                    </div>
                    <h3 className="text-blackColor text-xl leading-5 mt-4 mb-2">
                        {item.title}
                    </h3>
                    <p className="text-grayColor text-sm my-2">
                        By <span className="text-blueColor">{item.author}</span> | December
                        15th, 2024
                    </p>
                    <p className="text-grayColor">{item.text}</p>
                </div>
            ))}
        </>
    );
    return (
        <>
            <Banner
                img={banner_04}
                title="Pixel Videos"
                path={{ to: "Pixel Videos" }}
            />
            <main className="mainContainer my-20">
                <Title marginBottom lineColor="blueGreen">Browse Videos</Title>
                {/* List Filter Videos */}
                <div className="flex items-center flex-wrap max-[540px]:justify-center gap-5 border-y border-borderColor py-5">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <span className="text-blackColor text-sm uppercase">
                            All Categories
                        </span>
                        <IoIosArrowDown style={{ color: "#363636", fontSize: "15px" }} />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <span className="text-blackColor text-sm uppercase">
                            All Authors
                        </span>
                        <IoIosArrowDown style={{ color: "#363636", fontSize: "15px" }} />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <span className="text-blackColor text-sm uppercase">
                            Order By Date
                        </span>
                        <IoIosArrowDown style={{ color: "#363636", fontSize: "15px" }} />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <span className="text-blackColor text-sm uppercase">
                            Descending
                        </span>
                        <IoIosArrowDown style={{ color: "#363636", fontSize: "15px" }} />
                    </div>
                </div>
                {/* List Videos */}
                <section className="grid gridCols_4 gap-8 mt-5">{renderVideos}</section>
                <div className="flex justify-center mt-10">
                    <PageNavigation />
                </div>
            </main>
        </>
    )
}

export default PixelVideos
