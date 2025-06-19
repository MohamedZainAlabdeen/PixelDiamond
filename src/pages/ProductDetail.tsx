import { useState } from "react";
import { useMetaTitle } from "../hooks"
import { featuredProducts } from "../constants";
import { banner_05, product_02, product_04, product_05, product_06 } from "../assets";
import { Banner, BubbleIcon, Button, Product, Title } from "../components";
import { FaFacebookF, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { RiHeart3Line, RiPriceTag3Line, RiTwitterXFill } from "react-icons/ri";

const ProductDetail = () => {
    useMetaTitle("Pixel Diamond - Product Detail");
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product_02);

    const renderProducts = (
        <>
            {featuredProducts.map((item) => (
                <Product
                    key={item.id}
                    image={item.img}
                    title={item.title}
                    category={item.category}
                    rating={item.rating}
                    price={item.price}
                />
            ))}
        </>
    );

    return (
        <>
            <Banner img={banner_05} title="Product Detail" path={{ to: "Details" }} />
            <main className="mainContainer py-20">
                <section className="grid min-[1045px]:grid-cols-2 gap-5">
                    <div className="w-full max-[1045px]:flex max-[1045px]:flex-row-reverse max-[650px]:flex-col">
                        <img
                            src={mainImage || product_02}
                            className="max-[1045px]:w-[450px] max-[1045px]:mx-auto max-[650px]:w-full"
                            alt="Product"
                        />
                        {/* intro Product */}
                        <div className="flex items-center justify-center max-[1045px]:flex-col max-[650px]:flex-row gap-5 min-[650px]:shrink-0 max-[650px]:flex-wrap">
                            <img
                                onClick={() => setMainImage(product_02)}
                                src={product_02}
                                loading="lazy"
                                className="w-[120px] max-[1045px]:w-[90px] max-[375px]:w-[50px] cursor-pointer"
                                alt="product"
                            />
                            <img
                                onClick={() => setMainImage(product_06)}
                                src={product_06}
                                loading="lazy"
                                className="w-[120px] max-[1045px]:w-[90px] max-[375px]:w-[50px] cursor-pointer"
                                alt="product"
                            />
                            <img
                                onClick={() => setMainImage(product_04)}
                                src={product_04}
                                loading="lazy"
                                className="w-[120px] max-[1045px]:w-[90px] max-[375px]:w-[50px] cursor-pointer"
                                alt="product"
                            />
                            <img
                                onClick={() => setMainImage(product_05)}
                                src={product_05}
                                loading="lazy"
                                className="w-[120px] max-[1045px]:w-[90px] max-[375px]:w-[50px] cursor-pointer"
                                alt="product"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-blackColor text-2xl mb-2">
                            New Funtendo 3Xsd - Black
                        </h3>
                        <div className="flex items-center gap-4">
                            <span className="text-grayColor uppercase">Funtendo</span>
                            <ul className="flex items-center gap-1">
                                <li>
                                    <FaStar style={{ color: "#ffb400", fontSize: "15px" }} />
                                </li>
                                <li>
                                    <FaStar style={{ color: "#ffb400", fontSize: "15px" }} />
                                </li>
                                <li>
                                    <FaStar style={{ color: "#ffb400", fontSize: "15px" }} />
                                </li>
                                <li>
                                    <FaStar style={{ color: "#ffb400", fontSize: "15px" }} />
                                </li>
                                <li>
                                    <FaStar style={{ color: "#ddd", fontSize: "15px" }} />
                                </li>
                                <li>
                                    <span className="text-grayColor text-sm">(16)</span>
                                </li>
                            </ul>
                        </div>
                        <h4 className="text-blackColor text-2xl my-4">$ 199.00</h4>
                        <p className="text-grayColor ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia
                            fugiat corporis recusandae ea sequi molestias voluptatem maiores
                            ad officia! Ipsa architecto aspernatur iusto nulla voluptates
                            quisquam amet nobis obcaecati!
                        </p>
                        <div className="grid min-[374px]:grid-cols-3 gap-4 my-10">
                            <div className="leading-[14px]">
                                <span className="text-grayColor uppercase">Condition:</span>
                                <h5 className="text-blackColor text-lg">New</h5>
                            </div>
                            <div className="leading-[14px]">
                                <span className="text-grayColor uppercase">Availabilty:</span>
                                <h5 className="text-blackColor text-lg">In Stock</h5>
                            </div>
                            <div className="leading-[14px]">
                                <span className="text-grayColor uppercase">Shipping:</span>
                                <h5 className="text-blackColor text-lg">Worldwide</h5>
                            </div>
                        </div>
                        {/* Quantity */}
                        <div>
                            <span className="block text-blackColor uppercase mb-2">
                                Quantity:
                            </span>
                            <div className="flexBetween w-full h-[55px] border border-borderColor rounded-md p-1">
                                <button
                                    onClick={() =>
                                        setQuantity(quantity > 1 ? quantity - 1 : quantity)
                                    }
                                    className="flexCenter w-[50px] h-full bg-violetColor rounded-md cursor-pointer shrink-0"
                                >
                                    <FaMinus style={{ color: "#fff", fontSize: "20px" }} />
                                </button>
                                <span className="text-blackColor text-xl">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="flexCenter w-[50px] h-full bg-violetColor rounded-md cursor-pointer shrink-0"
                                >
                                    <FaPlus style={{ color: "#fff", fontSize: "20px" }} />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap max-[470px]:justify-center gap-8 mt-5">
                            <Button div className="pl-10" variant="purple" iconClassName="ml-5">Add To Bag</Button>
                            <div className="flex items-center gap-4">
                                <BubbleIcon size="md" color="red">
                                    <RiHeart3Line className="relative text-white text-[17px]" />
                                </BubbleIcon>
                                <BubbleIcon size="md" color="blueGreen">
                                    <RiPriceTag3Line className="relative text-white text-[17px]" />
                                </BubbleIcon>

                                <BubbleIcon size="md" className="bg-[#4153b3] before:border-l-[#4153b3]">
                                    <FaFacebookF className="relative text-white text-[17px]" />
                                </BubbleIcon>
                                <BubbleIcon size="md" className="bg-[#202020] before:border-l-[#202020]">
                                    <RiTwitterXFill className="relative text-white text-[17px]" />
                                </BubbleIcon>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-20">
                    <div className="grid min-[400px]:grid-cols-3 justify-items-center text-center border-y border-borderColor">
                        <div className="w-full text-grayColor py-4 cursor-pointer">
                            Description
                        </div>
                        <div className="w-full text-grayColor py-4 cursor-pointer">
                            Reviews
                        </div>
                        <div className="w-full text-blackColor py-4 border-b-2 border-violetColor cursor-pointer">
                            Specifications
                        </div>
                    </div>
                    <ul className="w-[650px] max-[710px]:w-full mx-auto mt-10">
                        <li className="flexBetween py-4 border-y border-borderColor max-[420px]:flex-col max-[420px]:gap-5">
                            <h4 className="text-blackColor text-base">
                                Upper Screen Dimension
                            </h4>
                            <span className="text-grayColor text-sm uppercase">
                                4.88 Inches
                            </span>
                        </li>
                        <li className="flexBetween py-4 border-b border-borderColor max-[420px]:flex-col max-[420px]:gap-5">
                            <h4 className="text-blackColor text-base">
                                Lower Screen Dimension
                            </h4>
                            <span className="text-grayColor text-sm uppercase">
                                4.18 Inches
                            </span>
                        </li>
                        <li className="flexBetween py-4 border-b border-borderColor max-[420px]:flex-col max-[420px]:gap-5">
                            <h4 className="text-blackColor text-base">Weight</h4>
                            <span className="text-grayColor text-sm uppercase">11.9 OZ</span>
                        </li>
                        <li className="flexBetween py-4 border-b border-borderColor max-[420px]:flex-col max-[420px]:gap-5">
                            <h4 className="text-blackColor text-base">Resolution</h4>
                            <span className="text-grayColor text-sm uppercase">
                                800x240 PX
                            </span>
                        </li>
                        <li className="flexBetween py-4 border-b border-borderColor max-[420px]:flex-col max-[420px]:gap-5">
                            <h4 className="text-blackColor text-base">Bottom Screen</h4>
                            <span className="text-grayColor text-sm uppercase">
                                Touch PAD
                            </span>
                        </li>
                        <li className="flexBetween py-4 border-b border-borderColor max-[420px]:flex-col max-[420px]:gap-5">
                            <h4 className="text-blackColor text-base">SKU</h4>
                            <span className="text-grayColor text-sm uppercase">
                                Fntdo75896
                            </span>
                        </li>
                        <li className="flexBetween py-4 border-b border-borderColor max-[420px]:flex-col max-[420px]:gap-5">
                            <h4 className="text-blackColor text-base">Tags</h4>
                            <span className="text-grayColor text-sm uppercase">
                                Funtendo, 3xsd, Handheld, Hardware
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <Title marginBottom lineColor="purple">Related Products</Title>
                    <div className="grid gridCols_4 justify-items-center gap-4">
                        {renderProducts}
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductDetail
