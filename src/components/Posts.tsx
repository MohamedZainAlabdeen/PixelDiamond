import { Link } from "react-router-dom"
import { cn } from "../lib/utils";
import TagOrnament from "./common/TagOrnament"

type PostsProps = {
    big?: boolean;
    setHeight?: string;
    posts: {
        id: string;
        img: string;
        tag: string;
        color: "red" | "blue" | "orange" | "green" | "purple";
        title: string;
        authorName: string;
        authorAvatar?: string;
        text: string;
        comments?: string;
    }[];
}

const Posts = ({ big, setHeight, posts }: PostsProps) => {
    return (
        <>
            {posts.map((item) => (
                <div key={item.id} className="relative group">
                    <div
                        className={cn("relative w-full overflow-hidden",
                            setHeight
                                ? setHeight
                                : big
                                    ? "h-[300px]"
                                    : "h-[140px] max-sm:h-[200px]"
                        )}
                    >
                        <Link to="/posts" onClick={() => scrollTo(0, 0)}>
                            <div
                                className="w-full h-full bg-cover bg-center animation-img"
                                style={{ backgroundImage: `URL(${item.img})` }}
                            />
                        </Link>
                        <TagOrnament
                            url="news"
                            className="absolute bottom-0 left-0"
                            color={item.color}
                        >{item.tag}</ TagOrnament>
                    </div>
                    <h2
                        className={`text-blackColor ${big ? "text-3xl" : "text-lg"} my-2`}
                    >
                        {item.title}
                    </h2>
                    <div className="flex items-center gap-2">
                        <img
                            src={item.authorAvatar}
                            loading="lazy"
                            width={35}
                            height={35}
                            className={`rounded-full ${big ? "block" : "hidden"}`}
                            alt="User Avatar"
                        />
                        <p className="text-grayColor">
                            By{" "}
                            <a href="#" className={`text-${item.color}`}>
                                {item.authorName}
                            </a>{" "}
                            | December 15th, 2018
                            {big && (
                                <>
                                    {" "}
                                    |{" "}
                                    <a href="comments" className={`text-${item.color}`}>
                                        {item.comments} Comments
                                    </a>
                                </>
                            )}
                        </p>
                    </div>
                    <p className="text-grayColor text-sm mt-2">{item.text}</p>
                </div>
            ))
            }
        </ >
    )
}

export default Posts
