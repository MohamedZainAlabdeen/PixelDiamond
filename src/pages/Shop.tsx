import { useMetaTitle } from "../hooks"
import { Banner, PageNavigation, Product, ProductPreview, Title } from "../components"
import { listProducts } from "../constants"
import { banner_05 } from "../assets"
import { FaStar } from "react-icons/fa"
import { HiBars4 } from "react-icons/hi2"
import { CiGrid41 } from "react-icons/ci"
import { IoIosArrowDown } from "react-icons/io"
import { RiSearch2Line } from "react-icons/ri"

const Shop = () => {
    useMetaTitle("Pixel Diamond - Shop");
    return (
        <>
            <Banner img={banner_05} title="Pixel Shop" path={{ to: "Shop" }} />
            <main className="mainContainer my-20">
                {/* Box Search */}
                <div className="flex items-center gap-2 w-full h-[55px] border border-borderColor rounded-md p-1">
                    <input
                        type="text"
                        className="w-full h-full text-blackColor pl-2"
                        placeholder="What are you looking for in the shop?..."
                    />
                    <button className="flexCenter w-[45px] h-[45px] bg-violetColor rounded-md shrink-0">
                        <RiSearch2Line style={{ color: "#fff", fontSize: "20px" }} />
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-8 mt-10">
                    {/* Filters */}
                    <aside className="md:block hidden">
                        {/* Categories */}
                        <Title marginBottom lineColor="purple">Categories</Title>
                        <div className="flexBetween cursor-pointer border-b border-borderColor pb-4">
                            <h3 className="text-lg text-blackColor">Powerstation</h3>
                            <IoIosArrowDown style={{ color: "#363636", fontSize: "18px" }} />
                        </div>
                        <ul className="my-4 space-y-4">
                            <li className="flexBetween">
                                <h4 className="text-grayColor text-sm uppercase">
                                    Hardware System
                                    <span className="px-1.5 py-0.5 bg-blueGreen text-whiteColor text-xs rounded-md ml-1">
                                        hot!
                                    </span>
                                </h4>
                                <span className="text-grayColor text-sm">6</span>
                            </li>
                            <li className="flexBetween">
                                <h4 className="text-grayColor text-sm uppercase">
                                    Accesories And Cables
                                </h4>
                                <span className="text-grayColor">12</span>
                            </li>
                            <li className="flexBetween">
                                <h4 className="text-grayColor text-sm uppercase">
                                    Joystics And Gamepads
                                </h4>
                                <span className="text-grayColor text-sm">8</span>
                            </li>
                            <li className="flexBetween">
                                <h4 className="text-grayColor text-sm uppercase">
                                    Game
                                    <span className="px-1.5 py-0.5 bg-blueColor text-whiteColor text-xs rounded-md ml-1">
                                        New
                                    </span>
                                </h4>
                                <span className="text-grayColor text-sm">49</span>
                            </li>
                            <li className="flexBetween">
                                <h4 className="text-grayColor text-sm uppercase">Hot Deals</h4>
                                <span className="text-grayColor text-sm">20</span>
                            </li>
                            <li className="flexBetween">
                                <h4 className="text-grayColor text-sm uppercase">
                                    Latest Arrivals
                                </h4>
                                <span className="text-grayColor text-sm">3</span>
                            </li>
                        </ul>
                        <div className="flexBetween cursor-pointer border-y border-borderColor py-4">
                            <h3 className="text-lg text-blackColor">Funtendo</h3>
                            <IoIosArrowDown style={{ color: "#363636", fontSize: "18px" }} />
                        </div>
                        <div className="flexBetween cursor-pointer border-y border-borderColor py-4">
                            <h3 className="text-lg text-blackColor">X-Rock</h3>
                            <IoIosArrowDown style={{ color: "#363636", fontSize: "18px" }} />
                        </div>
                        <div className="flexBetween cursor-pointer border-y border-borderColor py-4">
                            <h3 className="text-lg text-blackColor">Clothing & Hats</h3>
                            <IoIosArrowDown style={{ color: "#363636", fontSize: "18px" }} />
                        </div>
                        <div className="flexBetween cursor-pointer border-y border-borderColor py-4">
                            <h3 className="text-lg text-blackColor">Merchandise</h3>
                            <IoIosArrowDown style={{ color: "#363636", fontSize: "18px" }} />
                        </div>
                        {/* Reviews */}
                        <Title margin lineColor="purple">Reviews</Title>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <input
                                    type="radio"
                                    className="w-[20px] h-[20px] cursor-pointer"
                                    name="stars"
                                    id="fourStar"
                                />
                                <label
                                    htmlFor="fourStar"
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <ul className="flex items-center gap-1">
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                    </ul>
                                    <span className="text-blackColor text-sm uppercase">
                                        4 Stars And Up
                                    </span>
                                </label>
                            </li>
                            <li className="flex items-center gap-4">
                                <input
                                    type="radio"
                                    className="w-[20px] h-[20px] cursor-pointer"
                                    name="stars"
                                    id="threeStars"
                                    defaultChecked
                                />
                                <label
                                    htmlFor="threeStars"
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <ul className="flex items-center gap-1">
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                    </ul>
                                    <span className="text-blackColor text-sm uppercase">
                                        3 Stars And Up
                                    </span>
                                </label>
                            </li>
                            <li className="flex items-center gap-4">
                                <input
                                    type="radio"
                                    className="w-[20px] h-[20px] cursor-pointer"
                                    name="stars"
                                    id="twoStar"
                                />
                                <label
                                    htmlFor="twoStar"
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <ul className="flex items-center gap-1">
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                    </ul>
                                    <span className="text-blackColor text-sm uppercase">
                                        2 Stars And Up
                                    </span>
                                </label>
                            </li>
                            <li className="flex items-center gap-4">
                                <input
                                    type="radio"
                                    className="w-[20px] h-[20px] cursor-pointer"
                                    name="stars"
                                    id="star"
                                />
                                <label
                                    htmlFor="star"
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <ul className="flex items-center gap-1">
                                        <li>
                                            <FaStar className="text-orangeColor text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                        <li>
                                            <FaStar className="text-[#d5d5d5] text-[15px]" />
                                        </li>
                                    </ul>
                                    <span className="text-blackColor text-sm uppercase">
                                        1 Stars And Up
                                    </span>
                                </label>
                            </li>
                        </ul>
                        {/* Price & Discount */}
                        <Title margin lineColor="purple">Price & Discount</Title>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                type="number"
                                className="w-full h-[45px] text-blackColor placeholder:text-gray-400 border border-border rounded-md pl-2"
                                min="1"
                                placeholder="Min $..."
                            />
                            <input
                                type="number"
                                className="w-full h-[45px] text-blackColor placeholder:text-gray-400 border border-border rounded-md pl-2"
                                min="1"
                                placeholder="Max $..."
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-5">
                            <label
                                htmlFor="off10"
                                className="flex items-center gap-1 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    className="w-[18px] h-[18px]"
                                    name="offers"
                                    id="off10"
                                />
                                <span className="text-blackColor text-sm">10%+ OFF</span>
                            </label>
                            <label
                                htmlFor="off25"
                                className="flex items-center gap-1 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    className="w-[18px] h-[18px]"
                                    name="offers"
                                    id="off25"
                                    defaultChecked
                                />
                                <span className="text-blackColor text-sm">25%+ OFF</span>
                            </label>
                            <label
                                htmlFor="off50"
                                className="flex items-center gap-1 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    className="w-[18px] h-[18px]"
                                    name="offers"
                                    id="off50"
                                />
                                <span className="text-blackColor text-sm">50%+ OFF</span>
                            </label>
                            <label
                                htmlFor="off80"
                                className="flex items-center gap-1 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    className="w-[18px] h-[18px]"
                                    name="offers"
                                    id="off80"
                                />
                                <span className="text-blackColor text-sm">80%+ OFF</span>
                            </label>
                        </div>
                        <button className="px-4 py-2 bg-violetColor text-whiteColor rounded-md my-4 hover:bg-[#8457d8] transition">
                            Filter Now!
                        </button>
                        {/* Latest Products */}
                        <Title margin lineColor="purple">Latest Products</Title>
                        <ul>
                            {listProducts.map((el, index) => (
                                <ProductPreview key={index} products={el.latestProducts} />
                            ))}
                        </ul>
                    </aside>

                    {/* Products */}
                    <section className="md:col-span-3 col-span-4">
                        <Title marginBottom lineColor="purple">Featured Products</Title>
                        <div className="xs:flex hidden flexBetween max-sm:flex-col max-sm:gap-4 border-b border-borderColor pb-5">
                            <p className="text-blackColor text-sm uppercase">
                                Showing 12 out 156 Products
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <span className="text-blackColor text-sm uppercase">
                                        Show 12 Products
                                    </span>
                                    <IoIosArrowDown
                                        style={{ color: "#363636", fontSize: "15px" }}
                                    />
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <span className="text-blackColor text-sm uppercase">
                                        Order By Price
                                    </span>
                                    <IoIosArrowDown
                                        style={{ color: "#363636", fontSize: "15px" }}
                                    />
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <span className="text-blackColor text-sm uppercase">
                                        Descending
                                    </span>
                                    <IoIosArrowDown
                                        style={{ color: "#363636", fontSize: "15px" }}
                                    />
                                </div>
                                <button className="max-[655px]:hidden">
                                    <CiGrid41
                                        style={{
                                            color: "#7442ce",
                                            strokeWidth: ".5",
                                            fontSize: "22px",
                                        }}
                                    />
                                </button>
                                <button className="max-[655px]:hidden">
                                    <HiBars4 style={{ color: "#afafaf", fontSize: "22px" }} />
                                </button>
                            </div>
                        </div>
                        <div className="grid gridCols_3 justify-items-center gap-4">
                            {listProducts.map((item) =>
                                item.products.map((product) => (
                                    <Product
                                        key={product.id}
                                        image={product.img}
                                        title={product.title}
                                        category={product.category}
                                        rating={product.rating}
                                        price={product.price}
                                    />
                                ))
                            )}
                        </div>
                        <div className="flexCenter"><PageNavigation /></div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Shop
