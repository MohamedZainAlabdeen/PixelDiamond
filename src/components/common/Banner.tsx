import LiveNews from "../LiveNews"
import { cn } from "../../lib/utils"
import { IoIosArrowForward } from "react-icons/io"

type BannerProps = {
    className?: string;
    img?: string;
    title?: string;
    path?: {
        from?: string;
        to: string;
    };
    hiddenLiveNews?: boolean;
}

const Banner = ({ className, img, title, path, hiddenLiveNews }: BannerProps) => {
    return (
        <>
            <div
                className={cn("relative w-full h-[250px] max-[415px]:h-[200px] bg-cover bg-center md:mt-[85px] mt-[125px] flexCenter flex-col",
                    className,
                )}
                style={{ backgroundImage: `URL(${img})` }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#0000003b]" />
                <h2 className="relative text-5xl max-[415px]:text-3xl text-whiteColor uppercase">
                    {title}
                </h2>
                <div className="relative flex items-center gap-2 mt-4">
                    <p className="text-sm text-whiteColor">Home</p>
                    {path?.from && (
                        <>
                            <IoIosArrowForward style={{ fontSize: "17px", color: "#fff" }} />
                            <p className="text-sm text-whiteColor">{path.from}</p>
                        </>
                    )}
                    <IoIosArrowForward style={{ fontSize: "17px", color: "#fff" }} />
                    <p className="text-sm text-whiteColor">{path?.to}</p>
                </div>
            </div>
            <LiveNews className={cn(hiddenLiveNews && "hidden")} />
        </>
    )
}

export default Banner
