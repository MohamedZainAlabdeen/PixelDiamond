import { cn } from "../../lib/utils"

type TitleProps = {
    children: React.ReactNode;
    light?: boolean;
    lineColor?: "red" | "blue" | "blueGreen" | "purple" | "orange" | "green";
    margin?: boolean;
    marginBottom?: boolean;
}

const Title = ({ children, light, lineColor, margin, marginBottom }: TitleProps) => {
    const handleLineColor =
        lineColor === "red" ? "before:bg-redColor"
            : lineColor === "blue" ? "before:bg-blueColor"
                : lineColor === "blueGreen" ? "before:bg-blueGreen"
                    : lineColor === "purple" ? "before:bg-violetColor"
                        : lineColor === "orange" ? "before:bg-orangeColor"
                        : lineColor === "green" ? "before:bg-greenColor"
                            : ""

    return (
        <div className={`${margin ? "my-8" : marginBottom ? "mb-8" : null}`}>
            <h2
                className={cn(
                    "text-2xl mb-2 uppercase max-[405px]:text-xl",
                    light ? "text-whiteColor" : "text-blackColor"
                )}
            >
                {children}
            </h2>
            <div
                className={cn(
                    "w-full h-0.5 rounded relative before:absolute before:w-[100px] before:h-full",
                    light ? "bg-[#383838]" : "bg-[#d0daec]",
                    handleLineColor,
                )}
            />
        </div>
    )
}

export default Title
