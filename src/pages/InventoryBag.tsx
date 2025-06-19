import { useState } from "react";
import { useMetaTitle } from "../hooks";
import { Banner, BubbleIcon, Button } from "../components";
import { banner_05, product_01, product_07 } from "../assets";
import { inventoryBag } from "../constants";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { RiCloseFill, RiShoppingCartLine } from "react-icons/ri";
import clsx from "clsx";

const InventoryBag = () => {
    useMetaTitle("Pixel Diamond - Inventory Bag");
    const [quantity, setQuantity] = useState(2);
    const [promotionalCodeToggle, setPromotionalCodeToggle] = useState(true);
    const [activeImage, setActiveImage] = useState(product_07);

    const renderCartProduct = (
        <>
            {inventoryBag.map((item) => (
                <div
                    key={item.id}
                    onClick={() => setActiveImage(item.image)}
                    className={clsx("relative w-full border p-2 rounded-md cursor-pointer transition",
                        activeImage === item.image ? "border-blueColor" : "border-borderColor"
                    )}
                >
                    <BubbleIcon className="absolute -top-2 -right-5 z-10 hover:scale-105" size="sm" color="red">
                        <RiCloseFill className="relative text-white text-[22px]" />
                    </BubbleIcon>
                    <img src={item.image} className="w-full h-full" alt={item.title} />
                    <span className="absolute bottom-0 right-0 px-3 py-0.5 bg-blackColor text-whiteColor text-xs">
                        x {item.quantity}
                    </span>
                </div>
            ))}
        </>
    );

    return (
        <>
            <Banner
                img={banner_05}
                title="Inventory Bag"
                path={{ from: " Shop", to: "Inventory Bag" }}
            />
            <main className="mainContainer py-20 ">
                <div className="grid grid-cols-3 max-[975px]:grid-cols-2 gap-4">
                    <section className="max-[975px]:col-span-full">
                        <h3 className="text-blackColor text-sm border-y border-borderColor py-4">
                            4 items in inventory
                        </h3>
                        <div className="grid grid-cols-3 gap-4 mt-5">
                            {renderCartProduct}
                            {Array(2).fill(0).map((_, index) => (
                                <div key={index} className="flexCenter w-full h-full border border-borderColor rounded">
                                    <RiShoppingCartLine className="text-[#e4e4e4] text-[50px] stroke-[0.5]" />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="col-span-2">
                        <h3 className="text-blackColor text-sm border-y border-borderColor py-4">
                            Item description
                        </h3>
                        <div className="grid min-[680px]:grid-cols-2 gap-4 my-5">
                            <div className="w-full">
                                <img src={activeImage} className="w-full" alt="product" />
                                <button className="w-full py-3 bg-redColor text-whiteColor text-sm uppercase rounded-full hover:bg-[#f52d73] transition">
                                    Remove from bag
                                </button>
                            </div>
                            <div>
                                <h4 className="text-blackColor text-xl">
                                    New Funtendo 3XSD - Black
                                </h4>
                                <div className="flex items-center gap-4 mb-4">
                                    <small className="text-grayColor uppercase">Funtendo</small>
                                    <div className="flex items-center gap-1">
                                        <FaStar style={{ color: "#ffb400", fontSize: "15px" }} />
                                        <FaStar style={{ color: "#ffb400", fontSize: "15px" }} />
                                        <FaStar style={{ color: "#ffb400", fontSize: "15px" }} />
                                        <FaStar style={{ color: "#ffb400", fontSize: "15px" }} />
                                        <FaStar style={{ color: "#ddd", fontSize: "15px" }} />
                                    </div>
                                </div>
                                <h5 className="text-blackColor text-2xl">$ 199.00</h5>
                                <p className="text-grayColor text-sm mt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco...
                                </p>
                                <div className="grid min-[374px]:grid-cols-3 gap-4 my-10">
                                    <div className="leading-[14px]">
                                        <span className="text-grayColor uppercase">Condition:</span>
                                        <h5 className="text-blackColor text-lg">New</h5>
                                    </div>
                                    <div className="leading-[14px]">
                                        <span className="text-grayColor uppercase">
                                            Availabilty:
                                        </span>
                                        <h5 className="text-blackColor text-lg">In Stock</h5>
                                    </div>
                                    <div className="leading-[14px]">
                                        <span className="text-grayColor uppercase">Shipping:</span>
                                        <h5 className="text-blackColor text-lg">Worldwide</h5>
                                    </div>
                                </div>
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
                                <span className="inline-block text-grayColor text-base mt-4">
                                    Item Total:{" "}
                                </span>
                                <span className="text-blackColor text-lg"> $ 398.00</span>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="flexBetween max-[390px]:justify-center flex-wrap gap-y-4 border-y border-borderColor py-4 mt-5">
                    <div className="flex items-center gap-4 max-[390px]:flex-col">
                        <button className="px-6 py-2 text-sm bg-zinc-200 text-whiteColor rounded-full uppercase hover:bg-blueColor transition">
                            Continue Shopping
                        </button>
                        <button className="px-6 py-2 text-sm bg-violetColor text-whiteColor rounded-full uppercase hover:bg-[#885dd5] transition">
                            Update Bag
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-grayColor uppercase">
                            Inventory Subtotal :
                        </span>
                        <span className="text-blackColor text-lg">$ 670.50</span>
                    </div>
                </div>
                <div className="flexBetween flex-wrap gap-y-4 border-b border-borderColor py-4 max-sm:w-full">
                    <div className="flex min-[510px]:items-center gap-2 max-sm:w-full max-[510px]:flex-col">
                        <label htmlFor="promotionalCode" className="text-blackColor mr-2">
                            Promotional Code:
                        </label>
                        <div className="flex items-center gap-2 sm:w-[600px] w-full h-[55px] border border-borderColor rounded-md p-1">
                            <input
                                onChange={(e) => setPromotionalCodeToggle(e.target.value !== "" ? false : true)}
                                type="text"
                                className="w-full h-full pl-2 text-blackColor"
                                placeholder="Enter your promo code..."
                                id="promotionalCode"
                            />
                            <button disabled={promotionalCodeToggle} className="px-4 h-full bg-blueColor text-whiteColor text-sm rounded-md shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition">
                                Redeem Code
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-grayColor uppercase">
                            Discount and promos:
                        </span>
                        <span className="text-blackColor text-lg">- $ 10.00</span>
                    </div>
                </div>
                <div className="border-b border-borderColor py-3">
                    <span className="text-grayColor text-sm">Order Total:</span>
                    <h5 className="text-blackColor text-xl">$ 680.50</h5>
                </div>
                <Button div className="ml-auto mt-10" variant="purple" iconClassName="ml-5">
                    Proceed To Checkout
                </Button>
            </main>
        </>
    )
}

export default InventoryBag
