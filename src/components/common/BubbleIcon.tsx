import { cn } from "../../lib/utils"

type BubbleIconProps = {
    className?: string;
    size?: "sm" | "md";
    setSize?: string;
    color?: "red" | "blue" | "blueGreen" | "purple";
    children?: React.ReactNode;
}

const BubbleIcon = ({ className, size, setSize, color, children }: BubbleIconProps) => {
    const colorClasses =
        color === "red"
            ? "bg-redColor before:border-l-redColor"
            : color === "blue"
                ? "bg-blueColor before:border-l-blueColor"
                : color === "blueGreen"
                    ? "bg-blueGreen before:border-l-blueGreen"
                : color === "purple"
                    ? "bg-violetColor before:border-l-violetColor"
                    : "";

    const sizeClasses =
        size === "sm"
            ? "size-[28px]"
            : size === "md"
                ? "size-[35px]"
                : ""
    return (
        <button
            className={cn(
                "box-icon w-[45px] h-[45px]",
                className || "",
                setSize,
                sizeClasses,
                colorClasses
            )}
        >
            {children}
        </button>
    )
}

export default BubbleIcon
