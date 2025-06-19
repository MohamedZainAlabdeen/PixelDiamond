import { Link } from "react-router-dom";
import StarsList from "./StarsList";
import BubbleIcon from "./BubbleIcon"
import { CiHeart } from "react-icons/ci";
import { RiPriceTag3Line } from "react-icons/ri";

type ProductProps = {
  image: string;
  title: string;
  category: string;
  rating: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  price: string;
}

const Product = ({ image, title, category, rating, price }: ProductProps) => {
  return (
    <div className="relative group">
      <div className="absolute -top-4 -right-4 space-y-2">
        <BubbleIcon className="scale-0 group-hover:scale-100 transition duration-[.3s]" size="sm" color="red">
          <CiHeart className="relative text-white text-xl stroke-[.8]" />
        </BubbleIcon>
        <BubbleIcon className="scale-0 group-hover:scale-100 transition duration-[.5s]" size="sm" color="blueGreen">
          <RiPriceTag3Line className="relative text-white text-xl" />
        </BubbleIcon>
      </div>
      <Link onClick={() => scrollTo(0, 0)} to="/product-detail">
        <img
          src={image}
          loading="lazy"
          width={250}
          height={250}
          alt="Product"
        />
      </Link>
      <p className="text-blackColor text-lg">{title}</p>
      <div className="flex items-center gap-3">
        <p className="text-grayColor text-xs">{category}</p>
        <StarsList elements={rating} />
      </div>
      <span className="block text-blackColor text-xl mt-5 group-hover:opacity-0 transition duration-[.4s]">
        $ {price}
      </span>
      <button className="absolute bottom-0 px-5 py-2 bg-violetColor text-whiteColor rounded-md translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition duration-[.4s]">
        Add to bag
      </button>
    </div>
  )
}

export default Product
