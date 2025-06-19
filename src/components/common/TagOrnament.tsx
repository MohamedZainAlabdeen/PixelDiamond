import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type TagOrnamentProps = {
    url: string;
    className?: string;
    children: React.ReactNode;
    color: "red" | "blue" | "orange" | "green" | "purple";
}

const TagOrnament = ({ url, className, children, color }: TagOrnamentProps) => {
    const colorsClasses =
        color === "red"
            ? "bg-redColor"
            : color === "blue"
                ? "bg-blueColor"
                : color === "orange"
                    ? "bg-orangeColor"
                    : color === "green"
                        ? "bg-greenColor"
                        : color === "purple"
                            ? "bg-violetColor"
                            : ""

    return (
        <Link
            to={`/${url}`}
            onClick={() => window.scrollTo(0, 0)}
            className={cn("tag-ornament", className, colorsClasses)}
        >
            {children}
        </Link>
    )
}

export default TagOrnament
