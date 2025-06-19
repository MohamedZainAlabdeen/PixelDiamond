import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

import { inventoryBag } from "../constants";

import BubbleIcon from "./common/BubbleIcon";
import StarsList from "./common/StarsList";

import { IoMdClose } from "react-icons/io";
import { RiCloseFill, RiShoppingCartLine } from "react-icons/ri";

type InventoryBagPreviewProps = {
    toggle: boolean,
    closeBag: () => void;
}

const InventoryBagPreview = ({ toggle, closeBag }: InventoryBagPreviewProps) => {
    return (
        <>
            <div
                className={cn(
                    "fixed top-0 right-0 xs:w-[350px] w-full h-screen p-5 bg-whiteColor overflow-y-auto z-[1000] transition duration-[.3s]",
                    toggle ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flexBetween border-b border-borderColor pb-2">
                    <span className="text-grayColor text-sm">8 items in inventory</span>
                    <button onClick={closeBag}>
                        <IoMdClose style={{ color: "#363636", fontSize: "25px" }} />
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    {inventoryBag.map((item) => (
                        <div key={item.id} className="relative">
                            <BubbleIcon
                                className="absolute -top-2 -right-5 z-10"
                                color="red"
                                size="sm"
                            >
                                <RiCloseFill className="relative text-white text-lg" />
                            </BubbleIcon>
                            <Link
                                onClick={() => {
                                    scrollTo(0, 0);
                                    closeBag();
                                }}
                                to="/product-detail"
                                key={item.id}
                            >
                                <div className="relative w-full border border-borderColor p-2 rounded-md cursor-pointer">
                                    <img src={item.image} className="w-full" alt="product" />
                                    <span className="absolute bottom-0 right-0 px-3 py-0.5 bg-blackColor text-whiteColor text-xs">
                                        x {item.quantity}
                                    </span>
                                </div>
                                <p className="text-blackColor text-xs mb-1 mt-2">
                                    {item.title}
                                </p>
                            </Link>
                            <StarsList elements={item.rating} />
                            <p className="text-grayColor text-xs mt-2">{item.price}</p>
                        </div>
                    ))}
                    {Array(8)
                        .fill(1)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="flexCenter w-full h-[95.27px] border border-borderColor rounded"
                            >
                                <RiShoppingCartLine className="text-3xl stroke-[0.5] text-[#e4e4e4]" />
                            </div>
                        ))}
                </div>
                <div className="flexBetween border-y border-borderColor py-4 mt-5">
                    <p className="text-blackColor text-xs uppercase">
                        Inventory subtotal:
                    </p>
                    <p className="text-grayColor text-xs">$ 670.50</p>
                </div>
                <Link
                    onClick={() => {
                        scrollTo(0, 0);
                        closeBag();
                    }}
                    to="/inventory-bag"
                    className="block w-full py-3 bg-blueColor text-whiteColor text-center rounded-md mb-2 mt-5 hover:bg-[#3ca4f5] transition"
                >
                    Go to the inventory bag
                </Link>
                <button className="w-full py-3 bg-violetColor text-whiteColor rounded-md hover:bg-[#885dd5] transition">
                    Proceed to checkout
                </button>
            </div>

            {/* ------ # Overlay # ------ */}
            <div
                onClick={() => closeBag()}
                className={`overlay ${toggle ? "block" : "hidden"}`}
            />
        </>
    );
};

export default InventoryBagPreview;
