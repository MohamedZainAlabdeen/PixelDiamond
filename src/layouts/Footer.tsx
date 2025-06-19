import { Link } from "react-router-dom"
import { Logo, PostPreviewShowcase, ProductPreview, Socials, Title } from "../components"
import { footerLinks, footerSponsor, latestPosts, latestReviews, listProducts, myWebsite, popularPosts } from "../constants"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { RiChat3Line, RiMailLine, RiTwitterXFill } from "react-icons/ri"

const Footer = () => {
    return (
        <footer className="w-full bg-[#252627]">
            <div className="mainContainer py-14">
                <div className="flexBetween max-md:flex-col max-md:gap-10 border-b border-[#383838] pb-10">
                    <Logo light />
                    {/* List Brands */}
                    <div className="flex items-center gap-5 max-md:order-3">
                        <button>
                            <IoIosArrowBack
                                style={{ color: "#fff", fontSize: "25px", opacity: ".9" }}
                            />
                        </button>
                        <ul className="flex items-center gap-12 max-w-[400px] overflow-auto hiddenScroll">
                            {footerSponsor.map((item) => (
                                <li key={item.id} className="shrink-0">
                                    <img
                                        src={item.img}
                                        loading="lazy"
                                        className="opacity-10"
                                        alt="banner"
                                    />
                                </li>
                            ))}
                        </ul>
                        <button>
                            <IoIosArrowForward
                                style={{ color: "#fff", fontSize: "25px", opacity: ".9" }}
                            />
                        </button>
                    </div>
                    {/* List Socials */}
                    <Socials />
                </div>
                <div className="pt-10">
                    <div className="grid gridCols_4 gap-8">
                        {/* List Links */}
                        <div>
                            <Title
                                marginBottom
                                lineColor="blue"
                                light
                            >PIXEL DIAMOND</Title>
                            <ul className="grid grid-cols-2 gap-2">
                                {footerLinks.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            onClick={() => scrollTo(0, 0)}
                                            to={item.url}
                                            className="flex items-center gap-2 text-whiteColor text-sm hover:text-blueColor hover:translate-x-2 transition duration-[.3s]"
                                        >
                                            <IoIosArrowForward style={{ color: "#fff" }} />
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Latest Reviews */}
                        <div>
                            <Title
                                marginBottom
                                lineColor="red"
                                light
                            >LATEST REVIEWS</Title>
                            <PostPreviewShowcase
                                posts={latestReviews}
                                color="red"
                                light
                            />
                        </div>
                        {/* Latest Posts */}
                        <div>
                            <Title
                                marginBottom
                                lineColor="orange"
                                light
                            >LATEST REVIEWS</Title>
                            <PostPreviewShowcase
                                posts={popularPosts}
                                color="orange"
                                light
                            />
                        </div>
                        {/* popular Posts */}
                        <div>
                            <Title
                                marginBottom
                                lineColor="blue"
                                light
                            >LATEST REVIEWS</Title>
                            <PostPreviewShowcase
                                posts={latestPosts}
                                color="blue"
                                light
                            />
                        </div>
                        {/* Contact Info */}
                        <div>
                            <Title
                                marginBottom
                                lineColor="green"
                                light
                            >Contact Info</Title>
                            <p className="text-lightColor text-xs leading-6">
                                Lorem ipsum dolor sit amet, consectetur dasede do eiusmod{" "}
                                <span className="text-whiteColor">tempor</span> unt ut labore et
                                dolore mag lere adveniam, quis rud citation laboris. Subscribe
                                to our
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <button className="relative flexCenter w-[50px] h-[50px] bg-greenColor rounded-full box-icon before:border-l-greenColor">
                                    <RiChat3Line style={{ fontSize: "30px", color: "#fff" }} />
                                </button>
                                <p className="text-whiteColor leading-4">
                                    Subscribe to our <br /> newsletter!
                                </p>
                            </div>
                            <div className="flex items-center w-full h-[50px] bg-whiteColor rounded-md p-1 mt-5 mb-4">
                                <input
                                    type="text"
                                    className="w-full h-full text-blackColor px-2"
                                    placeholder="Enter your email here..."
                                />
                                <button className="flexCenter w-[50px] h-full bg-greenColor rounded-md">
                                    <IoIosArrowForward
                                        style={{ color: "#fff", fontSize: "22px" }}
                                    />
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <RiMailLine style={{ color: "#58d819", fontSize: "25px" }} />
                                </div>
                                <a
                                    href="mailto:mohamedzain.dev@gmail.com"
                                    className="text-whiteColor text-xs"
                                >
                                    mohamedzain.dev@gmail.com
                                </a>
                            </div>
                        </div>
                        {/* Twitter Widget */}
                        <div>
                            <Title
                                marginBottom
                                lineColor="blueGreen"
                                light
                            >Twitter Widget</Title>
                            <ul className="space-y-4">
                                <li className="flex gap-2">
                                    <button className="relative flexCenter w-[50px] h-[50px] bg-[#363636] rounded-full box-icon before:border-l-[#363636] shrink-0">
                                        <RiTwitterXFill
                                            style={{ fontSize: "20px", color: "#fff" }}
                                        />
                                    </button>
                                    <div>
                                        <p className="text-lightColor leading-5 text-sm">
                                            We reviewed the new "magic Realm Dex" for Powerstion{" "}
                                            <span className="text-blueGreen">rit.ly/sdf</span>
                                        </p>
                                        <p className="text-lightColor text-sm mt-1">
                                            5 minutes ago
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <button className="relative flexCenter w-[50px] h-[50px] bg-[#363636] rounded-full box-icon before:border-l-[#363636] shrink-0">
                                        <RiTwitterXFill
                                            style={{ fontSize: "20px", color: "#fff" }}
                                        />
                                    </button>
                                    <div>
                                        <p className="text-lightColor leading-5 text-sm">
                                            We reviewed the new "magic Realm Dex" for Powerstion{" "}
                                            <span className="text-blueGreen">rit.ly/sdf</span>
                                        </p>
                                        <p className="text-lightColor text-sm mt-1">
                                            5 minutes ago
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <button className="relative flexCenter w-[50px] h-[50px] bg-[#363636] rounded-full box-icon before:border-l-[#363636] shrink-0">
                                        <RiTwitterXFill
                                            style={{ fontSize: "20px", color: "#fff" }}
                                        />
                                    </button>
                                    <div>
                                        <p className="text-lightColor leading-5 text-sm">
                                            We reviewed the new "magic Realm Dex" for Powerstion{" "}
                                            <span className="text-blueGreen">rit.ly/sdf</span>
                                        </p>
                                        <p className="text-lightColor text-sm mt-1">
                                            5 minutes ago
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Latest Products */}
                        <div>
                            <Title
                                marginBottom
                                lineColor="purple"
                                light
                            >Latest Products</Title>
                            {listProducts.map((el, index) => (
                                <ProductPreview
                                    key={index}
                                    products={el.latestProducts}
                                    light
                                />
                            ))}
                        </div>
                        {/* New Item Deals */}
                        <div>
                            <Title
                                marginBottom
                                lineColor="orange"
                                light
                            >New Item Deals</Title>
                            {listProducts.map((el, index) => (
                                <ProductPreview key={index} products={el.newItemDeals} light />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-5 text-center bg-[#1e1f20]">
                <p className="text-lightColor">
                    Developed by {"  "}
                    <a
                        href={myWebsite}
                        target="_blank"
                        className="text-gray-200 underline"
                    >
                        MohamedZain
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
