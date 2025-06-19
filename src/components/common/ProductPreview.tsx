import { Link } from "react-router-dom";
import StarsList from "./StarsList";

type ProductPreviewProps = {
    products: {
        id: string;
        img: string;
        title: string;
        category: string;
        price: string;
        rating: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
    }[];
    light?: boolean;
}

const ProductPreview = ({ products, light }: ProductPreviewProps) => {
    return (
        <ul className="space-y-2">
            {products.map((item) => (
                <li key={item.id} className="flex items-start gap-2 group">
                    <Link
                        onClick={() => scrollTo(0, 0)}
                        to="/product-detail"
                        className="relative min-w-[80px] w-[80px] h-[85px]"
                    >
                        <img
                            src={item.img}
                            loading="lazy"
                            className="w-full h-full"
                            alt="image"
                        />
                    </Link>
                    <div className="leading-5">
                        <Link
                            onClick={() => scrollTo(0, 0)}
                            to="/product-detail"
                            className={`text-sm ${light ? "text-whiteColor" : "text-blackColor"
                                }`}
                        >
                            {item.title}
                        </Link>
                        <p className="text-lightColor text-sm my-1">{item.category}</p>
                        <div className="flex items-center gap-2">
                            <StarsList elements={item.rating} />
                        </div>
                        <p className="text-whiteColor text-sm mt-1">$ {item.price}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ProductPreview
