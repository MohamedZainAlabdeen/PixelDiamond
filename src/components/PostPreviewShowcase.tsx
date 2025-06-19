import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { RiStarFill } from "react-icons/ri";

type PostPreviewShowcaseProps = {
    posts: {
        id: string;
        img: string;
        title: string;
        authorInfo: string;
        author: string;
        rating?: boolean;
    }[];
    color: "blue" | "red" | "orange";
    light?: boolean;
}

const PostPreviewShowcase = ({ posts, color, light }: PostPreviewShowcaseProps) => {
    return (
        <ul className="space-y-2">
            {posts.map((item) => (
                <li key={item.id} className="flex items-start gap-2 group">
                    <Link
                        onClick={() => scrollTo(0, 0)}
                        to="/posts"
                        className="block relative min-w-[85px] w-[85px] h-[80px] overflow-hidden"
                    >
                        <img
                            src={item.img}
                            loading="lazy"
                            className="w-full h-full group-hover:scale-[1.1] transition duration-[.3s] object-cover"
                            alt="image"
                        />
                        {item.rating && (
                            <ul className="absolute bottom-0 left-0 w-full flex items-center justify-between py-1 px-1.5 bg-[#000000bf]">
                                <li>
                                    <RiStarFill style={{ color: "#58d819", fontSize: "12px" }} />
                                </li>
                                <li>
                                    <RiStarFill style={{ color: "#58d819", fontSize: "12px" }} />
                                </li>
                                <li>
                                    <RiStarFill style={{ color: "#58d819", fontSize: "12px" }} />
                                </li>
                                <li>
                                    <RiStarFill style={{ color: "#ddd", fontSize: "12px" }} />
                                </li>
                                <li>
                                    <RiStarFill style={{ color: "#ddd", fontSize: "12px" }} />
                                </li>
                            </ul>
                        )}
                    </Link>
                    <div className="leading-5">
                        <Link
                            onClick={() => scrollTo(0, 0)}
                            to="/posts"
                            className={`text-sm ${light ? "text-whiteColor" : "text-blackColor"
                                }`}
                        >
                            {item.title}
                        </Link>
                        <p className="text-grayColor text-sm mt-1">
                            {" "}
                            By {"  "}
                            <a href="#" className={cn(color === "blue" ? "text-blueColor" : color === "red" ? "text-redColor" : color === "orange" ? "text-orangeColor" : "")}>
                                {item.author}
                            </a>{" "}
                            | {item.authorInfo}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default PostPreviewShowcase
