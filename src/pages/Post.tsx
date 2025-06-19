import { useMetaTitle } from "../hooks";
import { RiReplyLine, RiThumbUpLine, RiTwitterXLine } from "react-icons/ri";
import { BubbleIcon, Button, Input, LiveNews, PageNavigation, PhotoList, PostPreviewShowcase, Posts, PostVideo, TagOrnament, TagsList, Textarea, Title } from "../components";
import { cover_03, cover_10, cover_16_flat, cover_18, cover_19, cover_21, cover_22, cover_27, cover_29, cover_32, cover_35, userAvatar_02 } from "../assets";
import { FaFacebookSquare, FaGooglePlusG, FaRegComments } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { commentsList, latestReviews, popularPosts, postPreview_sm } from "../constants";

const Post = () => {
    useMetaTitle("Pixel Diamond - Posts");
    const renderComments = (
        <>
            {commentsList.map((item) => (
                <div
                    key={item.id}
                    className="flex items-start max-ss:flex-col gap-4 py-8"
                >
                    <div className={`w-16 h-16 rounded-full shrink-0`}>
                        <img
                            src={item.avatar}
                            loading="lazy"
                            className="w-full h-full rounded-full"
                            alt="User Avatar"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-x-2.5">
                            <h4 className="text-blackColor text-lg">{item.name}</h4>
                            <span className="text-grayColor text-xs">{item.time}</span>
                            <span className="text-grayColor text-xs">Report</span>
                        </div>
                        <p className="text-grayColor text-sm mt-1">{item.text}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <BubbleIcon size="sm" color="blue">
                                <RiReplyLine className="text-white text-xl relative" />
                            </BubbleIcon>
                            <BubbleIcon size="sm" color="blueGreen">
                                <RiThumbUpLine className="text-white text-base relative" />
                            </BubbleIcon>
                            <span className="text-grayColor text-sm">
                                {item.thumbsUp} Thumbs Up
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );


    return (
        <div className="md:mt-[85px] mt-[125px]">
            <LiveNews />
            <main className="mainContainer py-20 grid grid-cols-4 gap-5">
                <section className="md:col-span-3 col-span-4">
                    <TagOrnament url="news" color="orange">GEEKY NEWS</TagOrnament>
                    <h2 className="xs:text-5xl text-2xl font-semibold mt-4 uppercase">
                        Check Out Some Hearte Bunny Original Design Ideas
                    </h2>
                    <p className="text-blackColor text-lg mt-3">
                        Also, get a sneak peak of the new season looks
                    </p>
                    <div className="flex items-center flex-wrap gap-10 my-5">
                        <div className="flex gap-2">
                            <img
                                src={userAvatar_02}
                                loading="lazy"
                                className="w-[40px] h-[40px] rounded-full"
                                alt="User Avatar"
                            />
                            <p className="text-sm text-grayColor">
                                By <span className="text-orangeColor">Vellatrix</span> <br />{" "}
                                Decenmber 15th,2023
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <FaRegComments style={{ fontSize: "40px", color: "#dbdbdb" }} />
                            <p className="text-sm text-grayColor">
                                <span className="text-orangeColor">174</span> <br /> Comments
                            </p>
                        </div>
                    </div>
                    <div className="grid gridCols_3 justify-items-center gap-4">
                        <button className="w-full flex items-center justify-center gap-2 bg-[#4154b3] rounded-md py-3">
                            <FaFacebookSquare style={{ fontSize: "22px", color: "#fff" }} />
                            <p className="text-white text-sm">Share On Facebook</p>
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 bg-[#272727] rounded-md py-3">
                            <RiTwitterXLine style={{ fontSize: "22px", color: "#fff" }} />
                            <p className="text-white text-sm">Share On Twitter</p>
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 bg-[#ffb400] rounded-md py-3">
                            <FaGooglePlusG style={{ fontSize: "22px", color: "#fff" }} />
                            <p className="text-white text-sm">Share On Google</p>
                        </button>
                    </div>
                    {/* Banner Post */}
                    <div className="w-full h-[450px] mt-5">
                        <img
                            src={cover_10}
                            className="w-full h-full object-cover rounded-md"
                            loading="lazy"
                            alt="Banner"
                        />
                    </div>
                    <p className="text-grayColor max-xs:text-sm my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                        illum ipsa dolorem ab aut repudiandae iste sunt ullam dolore
                        voluptatum explicabo reiciendis asperiores laudantium accusamus
                        itaque voluptas voluptate tempora accusantium quasi vitae pariatur
                        esse. Temporibus veritatis ea eligendi cum minima sed, sapiente
                        blanditiis voluptatem reprehenderit debitis eum, qui fuga. Ipsa.
                    </p>
                    <p className="text-grayColor max-xs:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                        esse nulla officiis dolor cumque, at fugit eligendi veniam ipsum
                        voluptate labore cum eos rem aspernatur quasi consectetur facere
                        nihil autem eveniet aliquid nobis modi maxime natus! Dolorum
                        aspernatur obcaecati officia veritatis delectus quasi recusandae?
                        Cum tempore ad rem sit officia, voluptatibus laudantium soluta
                        obcaecati magni consequatur est laborum voluptatum eos explicabo
                        atque. Quo aliquid ipsa sit tenetur tempore et, corrupti aliquam
                        quibusdam quis exercitationem fugit est. Laudantium, quos? Labore,
                        sunt.
                    </p>
                    <h3 className="text-blackColor text-3xl my-5">Image Slideshows</h3>
                    <p className="text-grayColor my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        illum error illo eaque. Fugit exercitationem rerum hic pariatur
                        repudiandae, consequuntur dolorem ut expedita doloremque tenetur
                        harum aliquid voluptatem? Vitae, quasi.
                    </p>
                    <h3 className="text-blackColor text-3xl my-5">Slideshow V1</h3>
                    {/* Post Banner */}
                    <div className="relative w-full h-[500px] mt-5">
                        <img
                            src={cover_35}
                            className="w-full h-full object-cover rounded-md"
                            loading="lazy"
                            alt="Banner"
                        />
                        <div className="flexBetween max-xs:flex-col max-xs:justify-center max-xs:gap-5 w-full absolute bottom-0 left-0 p-5 bg-[#252628] rounded-b-md">
                            <div>
                                <h4 className="text-whiteColor uppercase">
                                    1/5 - Bunny's New Look For Season 02
                                </h4>
                                <p className="text-lightColor text-xs">
                                    In this new season Banny will have wardrobe change and a
                                    revamped look
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flexCenter w-[40px] h-[40px] bg-lightColor rounded-md">
                                    <IoIosArrowBack style={{ color: "#fff", fontSize: "25px" }} />
                                </button>
                                <button className="flexCenter w-[40px] h-[40px] bg-orangeColor rounded-md">
                                    <IoIosArrowForward
                                        style={{ color: "#fff", fontSize: "25px" }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-blackColor text-3xl my-10">Slideshow V2</h3>
                    {/* Banner Post */}
                    <div className="w-full h-[450px] mt-5">
                        <img
                            src={cover_16_flat}
                            className="w-full h-full object-cover rounded-md"
                            loading="lazy"
                            alt="Banner"
                        />
                    </div>
                    <div className="flexBetween w-full mt-3">
                        <button className="flexCenter min-w-[40px] h-[40px] bg-lightColor rounded-md">
                            <IoIosArrowBack style={{ color: "#fff", fontSize: "25px" }} />
                        </button>
                        <div className="flex items-center gap-5 max-w-[680px] overflow-auto hiddenScroll">
                            <div className="min-w-[80px] h-[80px] rounded cursor-pointer">
                                <img
                                    src={cover_19}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="min-w-[80px] h-[80px] rounded cursor-pointer">
                                <img
                                    src={cover_29}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="min-w-[80px] h-[80px] rounded cursor-pointer">
                                <img
                                    src={cover_27}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="min-w-[80px] h-[80px] rounded border-2 border-orangeColor cursor-pointer">
                                <img
                                    src={cover_22}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="min-w-[80px] h-[80px] rounded cursor-pointer">
                                <img
                                    src={cover_18}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="min-w-[80px] h-[80px] rounded cursor-pointer">
                                <img
                                    src={cover_32}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="min-w-[80px] h-[80px] rounded cursor-pointer">
                                <img
                                    src={cover_21}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                        </div>
                        <button className="flexCenter min-w-[40px] h-[40px] bg-orangeColor rounded-md">
                            <IoIosArrowForward style={{ color: "#fff", fontSize: "25px" }} />
                        </button>
                    </div>
                    <p className="text-grayColor text-sm my-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                        illum ipsa dolorem ab aut repudiandae iste sunt ullam dolore
                        voluptatum explicabo reiciendis asperiores laudantium accusamus
                        itaque voluptas voluptate tempora accusantium quasi vitae pariatur
                        esse. Temporibus veritatis ea eligendi cum minima sed, sapiente
                        blanditiis voluptatem reprehenderit debitis eum, qui fuga. Ipsa.
                    </p>
                    {/* Tag List */}
                    <div className="py-7 border-y border-borderColor">
                        <TagsList />
                    </div>
                    {/* Related News */}
                    <Title margin lineColor="blue">Related News</Title>
                    <div className="grid gridCols_4 gap-4">
                        <Posts posts={postPreview_sm.slice(0, 3)} />
                    </div>
                    {/* Write A Comment */}
                    <Title
                        margin
                        lineColor="blue"
                    >Write A Comment</Title>
                    <div className="grid gridCols_2 gap-2">
                        <Input
                            id="yourName"
                            label="Your Name"
                            type="text"
                            inputName="yourName"
                            placeholder="Enter Your Name Here..."
                        />
                        <Input
                            id="yourEmail"
                            label="Your Email"
                            type="email"
                            inputName="yourEmail"
                            placeholder="Enter Your Email Here..."
                        />
                        <Textarea
                            className="col-span-full"
                            id="yourComment"
                            label="Your Comment"
                            setHeight="min-h-[200px] max-h-[200px]"
                            name="yourComment"
                            placeholder="Enter Your Comment Here..."
                        />
                    </div>
                    <Button url="/posts" className="mt-4 float-right" variant="blue">GO TO THE ARTICLE</Button>
                    {/* Comments */}
                    <div className="mt-20">
                        <Title margin lineColor="blue">Comments (174)</Title>
                        <div className="divide-y divide-borderColor">{renderComments}</div>
                        <PageNavigation />
                    </div>
                </section>

                <aside className="md:block hidden">
                    {/* POPULAR POSTS */}
                    <Title marginBottom lineColor="blue">POPULAR POSTS</Title>
                    <PostPreviewShowcase posts={popularPosts} color="blue" />
                    {/* Latest Reviews */}
                    <Title margin lineColor="red">LATEST REVIEWS</Title>
                    <PostPreviewShowcase posts={latestReviews} color="red" />
                    {/* Post Video */}
                    <Title margin lineColor="blue">FEATURED VIDEO</Title>
                    <PostVideo
                        banner={cover_03}
                        title="'THE SANDBENDERS II' BREAK THE BAD SEQUEL SPELL WITH A..."
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
                    />
                    {/* Tags List */}
                    <Title margin lineColor="blue">PIXEL TAGS</Title>
                    <TagsList />
                    {/* Instagram */}
                    <Title margin lineColor="red">INSTAGRAM WIDGET</Title>
                    <div className="photo-list grid grid-cols-3 gap-1">
                        <PhotoList />
                    </div>
                </aside>
            </main>
        </div>
    )
}

export default Post
