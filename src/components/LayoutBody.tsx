import { Link } from "react-router-dom"
import Posts from "./Posts"
import PromoBanner from "./PromoBanner"
import Title from "./common/Title"
import PostVideo from "./common/PostVideo"
import TagOrnament from "./common/TagOrnament"
import { latestVideos, postPreview_lg, postPreview_sm, postPreviewShowcase_lg } from "../constants"
import { cover_07, cover_16, cover_18, cover_25 } from "../assets"

const LayoutBody = () => {
    return (
        <>
            <div className="layout-item">
                <div className="relative sm:col-span-2 col-span-3 max-sm:h-[500px] overflow-hidden group">
                    <div
                        className="w-full h-full bg-cover bg-center animation-img shadow_01"
                        style={{ backgroundImage: `URL(${cover_16})` }}
                    />
                    <div className="absolute bottom-7 left-5 max-w-[450px]">
                        <TagOrnament url="post" color="red">GAME REVIEWS</TagOrnament>
                        <h2 className="text-whiteColor text-3xl mt-2 mb-1">
                            WE REVIEWED THE NEW MAGIMONS GAME
                        </h2>
                        <p className="text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt.
                        </p>
                    </div>
                    <Link
                        onClick={() => scrollTo(0, 0)}
                        to="/posts"
                        className="block absolute top-0 left-0 w-full h-full"
                    ></Link>
                </div>
                <div className="w-full max-sm:col-span-3 max-sm:grid max-sm:grid-cols-3 max-ss:grid-cols-1">
                    <div className="block relative w-full h-[190px] overflow-hidden group">
                        <div
                            className="w-full h-full bg-cover bg-center animation-img shadow_02"
                            style={{ backgroundImage: `URL(${cover_07})` }}
                        />
                        <TagOrnament
                            url="news"
                            className="absolute top-0 left-0 z-[2]"
                            color="blue">GAMING NEWS</ TagOrnament>
                        <p className="absolute bottom-4 left-4 text-whiteColor text-lg leading-5">
                            NEW EXPANSION PACK COMING TO "RISE OF DEPREDATORS"
                        </p>
                        <Link
                            onClick={() => scrollTo(0, 0)}
                            to="/posts"
                            className="block absolute top-0 left-0 w-full h-full"
                        ></Link>
                    </div>
                    <div className="block relative w-full h-[190px] overflow-hidden group">
                        <div
                            className="w-full h-full bg-cover bg-center animation-img shadow_02"
                            style={{ backgroundImage: `URL(${cover_25})` }}
                        />
                        <TagOrnament
                            url="news"
                            className="absolute top-0 left-0 z-[2]"
                            color="red"
                        >GAME REVIEWS</ TagOrnament>
                        <p className="absolute bottom-4 left-4 text-whiteColor text-lg leading-5">
                            "LEGEND OF KENSHI II" IS A BIT GREEN FOR NOW
                        </p>
                        <Link
                            onClick={() => scrollTo(0, 0)}
                            to="/posts"
                            className="block absolute top-0 left-0 w-full h-full"
                        ></Link>
                    </div>
                    <div className="block relative w-full h-[190px] overflow-hidden group">
                        <div
                            className="w-full h-full bg-cover bg-center animation-img shadow_02"
                            style={{ backgroundImage: `URL(${cover_18})` }}
                        />
                        <TagOrnament
                            url="news"
                            className="absolute top-0 left-0 z-[2]"
                            color="orange"
                        >GEEKY NEWS</ TagOrnament>
                        <p className="absolute bottom-4 left-4 text-whiteColor text-lg leading-5">
                            "ICHIGO IDOL" ANIME WILL HAVE A NEW SEASON IN APRIL
                        </p>
                        <Link
                            onClick={() => scrollTo(0, 0)}
                            to="/posts"
                            className="block absolute top-0 left-0 w-full h-full"
                        ></Link>
                    </div>
                </div>
            </div>
            <div className="layout-item gap-5 mt-10">
                <div className="sm:col-span-2 col-span-3 space-y-4">
                    <Posts big posts={postPreview_lg} />
                </div>
                <div className="space-y-2 max-sm:col-span-3">
                    <Posts posts={postPreview_sm} />
                </div>
            </div>
            <div className="grid gridCols_3 gap-4 mt-10">
                {postPreviewShowcase_lg.map((item) => (
                    <div key={item.id} className="w-full">
                        <Title
                            marginBottom
                            lineColor="before:bg-blueColor"
                        >{item.title}</Title>
                        <div className="relative w-full h-[150px] overflow-hidden group">
                            <div
                                className="w-full h-full bg-cover bg-center animation-img"
                                style={{ backgroundImage: `URL(${item.img})` }}
                            >
                                <Link
                                    to="posts"
                                    onClick={() => scrollTo(0, 0)}
                                    className="block absolute top-0 left-0 w-full h-full"
                                ></Link>
                            </div>
                            <TagOrnament
                                url="news"
                                className="absolute bottom-0 left-0"
                                color={item.color}
                            >item.tagText</TagOrnament>
                        </div>
                        <p className="text-blackColor text-base leading-5 my-2">
                            {item.postTitle}
                        </p>
                        <p className="text-grayColor">
                            By{" "}
                            <a href="#" className={`text-${item.color}`}>
                                {item.authorName}
                            </a>{" "}
                            | December 15th, 2018
                        </p>
                        <div className="w-full h-[1px] bg-borderColor my-3" />
                        <p className="text-blackColor text-base leading-5 mb-2">
                            {item.postTitle}
                        </p>
                        <p className="text-grayColor">
                            By{" "}
                            <a href="#" className={`text-${item.color}`}>
                                {item.authorName}
                            </a>{" "}
                            | December 15th, 2018
                        </p>
                        <div className="w-full h-[1px] bg-borderColor my-3" />
                        <p className="text-blackColor text-base leading-5 mb-2">
                            {item.postTitle}
                        </p>
                        <p className="text-grayColor">
                            By{" "}
                            <a href="#" className={`text-${item.color}`}>
                                {item.authorName}
                            </a>{" "}
                            | December 15th, 2018
                        </p>
                    </div>
                ))}
            </div>
            <PromoBanner />
            <div className="w-full">
                <Title
                    marginBottom
                    lineColor="before:bg-blueGreen"
                >LATEST VIDEOS</Title>
                <div className="grid gridCols_3 gap-4">
                    {latestVideos.map((item) => (
                        <PostVideo
                            key={item.id}
                            banner={item.img}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default LayoutBody
