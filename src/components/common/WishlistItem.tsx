import { useState } from "react"
import BubbleIcon from "./BubbleIcon"
import StarsList from "./StarsList"
import { RiCloseFill, RiPriceTag3Line } from "react-icons/ri"
import { HiMinus, HiPlus } from "react-icons/hi"

type WishlistItemProps = {
    elements: {
        id: string;
        img: string;
        title: string;
        category: string;
        oldPrice: string;
        price: string;
        rating: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
    }
}

const WishlistItem = ({ elements }: WishlistItemProps) => {
    const [counter, setCounter] = useState(1);

    return (
        <div className="relative w-full">
            <div className="absolute -top-4 -right-4 space-y-2">
                <BubbleIcon size="sm" color="red">
                    <RiCloseFill className="relative text-white text-xl" /></BubbleIcon>
                <BubbleIcon size="sm" color="blueGreen">
                    <RiPriceTag3Line className="relative text-white text-xl" />
                </BubbleIcon>
            </div>
            <a
                href="#"
                className="block h-[200px] border border-borderColor p-4 rounded mb-2"
            >
                <img
                    src={elements.img}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    alt={elements.title}
                />
            </a>
            <p className="text-blackColor text-sm">{elements.title}</p>
            <p className="text-grayColor text-sm mb-1">{elements.category}</p>
            <StarsList elements={elements.rating} />
            <div className="space-x-2 mt-2">
                <span className="text-lightColor line-through text-xs">
                    $ {elements.oldPrice}
                </span>
                <span className="text-blackColor text-sm">$ {elements.price}</span>
            </div>
            <div className="flexBetween w-full h-[45px] border border-borderColor rounded-md p-1 my-2">
                <button
                    onClick={() => setCounter((prev) => (prev <= 1 ? counter : prev - 1))}
                    className="w-[50px] h-full bg-blueColor rounded-md flexCenter"
                >
                    <HiMinus
                        style={{
                            color: "#fff",
                            strokeWidth: "1.5",
                            stroke: "#fff",
                        }}
                    />
                </button>
                <span className="text-blackColor text-base">{counter}</span>
                <button
                    onClick={() => setCounter((prev) => prev + 1)}
                    className="w-[50px] h-full bg-blueColor rounded-md flexCenter"
                >
                    <HiPlus
                        style={{
                            color: "#fff",
                            strokeWidth: "1.5",
                            stroke: "#fff",
                        }}
                    />
                </button>
            </div>
            <button className="w-full h-[40px] bg-violetColor text-sm text-whiteColor rounded-md active:bg-violetColor/90 transition">
                Add to bag
            </button>
        </div>
    )
}

export default WishlistItem
