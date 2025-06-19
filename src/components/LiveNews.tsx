import { liveNewsIcon } from "../assets"
import { cn } from "../lib/utils"

type LiveNewsProps = {
    className?: string;
}

const LiveNews = ({ className }: LiveNewsProps) => {
    return (
        <div className={cn("live-news", className)}>
            <div className="md:flex items-center gap-2 absolute top-1/2 lg:left-[180px] left-[75px] -translate-y-1/2 text-whiteColor hidden">
                <img src={liveNewsIcon} alt="icon" />
                LIVE NEWS
            </div>
            <div className="absolute top-0 lg:left-[300px] md:left-[200px] ss:left-[100px] left-[30px]">
                <div className="w-[60px] h-[5px] bg-redColor" />
                <div className="w-[55px] h-[5px] bg-redColor" />
                <div className="w-[50px] h-[5px] bg-redColor" />
                <div className="w-[45px] h-[5px] bg-redColor" />
                <div className="w-[40px] h-[5px] bg-redColor" />
                <div className="w-[35px] h-[5px] bg-redColor" />
                <div className="w-[30px] h-[5px] bg-redColor" />
            </div>
            <div
                className="absolute top-0 lg:right-[300px] md:right-[200px] ss:right-[100px] right-[30px]"
                dir="rtl"
            >
                <div className="w-[30px] h-[5px] bg-blueColor" />
                <div className="w-[35px] h-[5px] bg-blueColor" />
                <div className="w-[40px] h-[5px] bg-blueColor" />
                <div className="w-[45px] h-[5px] bg-blueColor" />
                <div className="w-[50px] h-[5px] bg-blueColor" />
                <div className="w-[55px] h-[5px] bg-blueColor" />
                <div className="w-[60px] h-[5px] bg-blueColor" />
            </div>
        </div>
    )
}

export default LiveNews
