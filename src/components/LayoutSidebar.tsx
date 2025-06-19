import { LatestComments, latestReviews, popularPosts, streamer } from "../constants";
import PostPreviewShowcase from "./PostPreviewShowcase";
import PhotoList from "./PhotoList";
import Title from "./common/Title";
import Socials from "./common/Socials";
import TagsList from "./common/TagsList";
import PostVideo from "./common/PostVideo";
import { cover_03 } from "../assets";
import { CiSearch } from "react-icons/ci";

const LayoutSidebar = () => {
    const renderStreamer = (
        <>
            {streamer.map((item) => (
                <div
                    key={item.id}
                    className="relative px-3 h-[70px]"
                    style={{ backgroundImage: `URL(${item.streamerBanner})` }}
                >
                    <img
                        src={item.streamerImg}
                        loading="lazy"
                        className="absolute top-0 right-0"
                        alt="streamer"
                    />
                    <div className="w-full h-full flex justify-center flex-col">
                        <p className="text-whiteColor text-sm">{item.streamerName}</p>
                        <p className="text-gray-200 text-xs max-w-[200px] my-0.5">
                            {item.streamerTopic}
                        </p>
                        <div className="flex items-center gap-1">
                            <div
                                className={`w-[5px] h-[5px] rounded-full ${item.streamStartCounter === "LIVE"
                                    ? "bg-redColor"
                                    : item.streamStartCounter === "OFFLINE"
                                        ? "bg-gray-200"
                                        : "bg-blueColor"
                                    }`}
                            />
                            <p className="text-gray-200 text-xs">{item.streamStartCounter}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

    const renderComments = (
        <>
            {LatestComments.map((item, index) => (
                <div key={item.id} className="flex gap-2">
                    <img
                        src={item.avatar}
                        loading="lazy"
                        className="w-[55px] h-[55px] rounded-full"
                        alt="User Avatar"
                    />
                    <div className="leading-[10px]">
                        <a href="#" className="block text-sm text-blackColor">
                            {item.commentTitle}
                        </a>
                        <a
                            href="#"
                            className={`text-sm ${index === 0
                                ? "text-orangeColor"
                                : index === 1
                                    ? "text-blueColor"
                                    : "text-greenColor"
                                }`}
                        >
                            {item.commentLink}
                        </a>
                        <p className="text-grayColor text-xs">{item.commentText}</p>
                    </div>
                </div>
            ))}
        </>
    );
    return (
        <>
            {/* Search Box */}
            <div className="flex items-center w-full h-[50px]">
                <input
                    type="text"
                    placeholder="Search articles here..."
                    className="w-full h-full text-blackColor border border-gray-200 px-2 rounded-l-md"
                />
                <button className="flexCenter w-[60px] h-full bg-blueColor rounded-r-md">
                    <CiSearch
                        style={{
                            color: "#fff",
                            fontSize: "22px",
                            stroke: "#fff",
                            strokeWidth: "1",
                        }}
                    />
                </button>
            </div>
            {/* List Social */}
            <Title margin lineColor="before:bg-blueColor">Social Pixel</Title>
            <Socials size="lg" />
            {/* POPULAR Posts */}
            <Title margin lineColor="before:bg-blueColor">POPULAR POSTS</Title>
            <PostPreviewShowcase posts={popularPosts} color="blue" />
            {/* Latest Reviews */}
            <Title margin lineColor="before:bg-redColor">LATEST REVIEWS</Title>
            <PostPreviewShowcase posts={latestReviews} color="red" />
            {/* Streamer */}
            <Title margin lineColor="before:bg-violetColor">TWITCH STREAMS</Title>
            <div className="space-y-2">{renderStreamer}</div>
            {/* Comments */}
            <Title margin lineColor="before:bg-blueColor">LATEST COMMENTS</Title>
            <div className="space-y-4">{renderComments}</div>
            <Title margin lineColor="before:bg-redColor">PIXELATED POLL</Title>
            <p className="text-grayColor text-sm mb-3">
                WHAT ACTOR DO YOU LIKE TO PLAY "JAMES" IN THE UPCOMING FIRESTORM MOVIE?
            </p>
            <form action="#">
                <div className="space-y-4">
                    <div className="radio-item">
                        <input
                            type="radio"
                            name="theRadio"
                            className="w-[22px] h-[22px] cursor-pointer"
                            id="radio_1"
                        />
                        <label
                            htmlFor="radio_1"
                            className="text-blackColor text-sm cursor-pointer"
                        >
                            STEPHEN CLARK JONES
                        </label>
                    </div>
                    <div className="radio-item">
                        <input
                            type="radio"
                            name="theRadio"
                            className="w-[22px] h-[22px] cursor-pointer"
                            id="radio_2"
                        />
                        <label
                            htmlFor="radio_2"
                            className="text-blackColor text-sm cursor-pointer"
                        >
                            DEREK RICHARDSON
                        </label>
                    </div>
                    <div className="radio-item">
                        <input
                            type="radio"
                            name="theRadio"
                            className="w-[22px] h-[22px] cursor-pointer"
                            defaultChecked
                            id="radio_3"
                        />
                        <label
                            htmlFor="radio_3"
                            className="text-blackColor text-sm cursor-pointer"
                        >
                            JHONATAN SPECTER
                        </label>
                    </div>
                    <div className="radio-item">
                        <input
                            type="radio"
                            name="theRadio"
                            className="w-[22px] h-[22px] cursor-pointer"
                            id="radio_4"
                        />
                        <label
                            htmlFor="radio_4"
                            className="text-blackColor text-sm cursor-pointer"
                        >
                            ROBERTS DAURISTEN JR.
                        </label>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <button className="w-full py-2 bg-redColor text-whiteColor rounded hover:bg-[#f52d73] transition">
                        SUBMIT VOTE
                    </button>
                    <button className="w-full py-2 bg-blueColor text-whiteColor rounded hover:bg-[#3ca4f5] transition">
                        VIEW RESULTS
                    </button>
                </div>
            </form>
            {/* Post Video */}
            <Title margin lineColor="before:bg-blueGreen">FEATURED VIDEO</Title>
            <PostVideo
                banner={cover_03}
                title="'THE SANDBENDERS II' BREAK THE BAD SEQUEL SPELL WITH A..."
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
            />
            {/* Tags List */}
            <Title margin lineColor="before:bg-blueColor">PIXEL TAGS</Title>
            <TagsList />
            {/* Instagram */}
            <Title margin lineColor="before:bg-redColor">INSTAGRAM WIDGET</Title>
            <div className="photo-list grid grid-cols-3 gap-1">
                <PhotoList />
            </div>
        </>
    )
}

export default LayoutSidebar
