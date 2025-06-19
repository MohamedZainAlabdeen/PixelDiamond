import { livePlayBanner, livePlayBannerLogo } from "../assets"
import TagOrnament from "./common/TagOrnament"

const PromoBanner = () => {
    return (
        <div
            className="relative flexBetween w-full h-[130px] bg-cover bg-center my-10 px-10 max-[930px]:flex-col max-[930px]:h-auto max-[930px]:py-10 max-[930px]:gap-4 max-[930px]:text-center"
            style={{ backgroundImage: `URL(${livePlayBanner})` }}
        >
            <img src={livePlayBannerLogo} loading="lazy" alt="Twitch" />
            <TagOrnament
                url="#"
                className="absolute bottom-0 left-0 text-xs"
                color="purple"
            >Jan 18 - 10PM PCT</TagOrnament>
            <div>
                <p className="flex items-center max-[930px]:justify-center text-gray-100">
                    Watch us play
                    <span className="w-1 h-1 bg-redColor rounded-full mx-2" /> live
                </p>
                <p className="text-3xl text-whiteColor">The last of them</p>
                <p className="text-gray-300">With SakuraBliss99 and James-Spiegel</p>
            </div>
            <div className="flex items-center text-center gap-8">
                <div>
                    <span className="text-3xl text-whiteColor">03</span>
                    <p className="text-gray-300 text-xs uppercase">Days</p>
                </div>
                <div>
                    <span className="text-3xl text-whiteColor">27</span>
                    <p className="text-gray-300 text-xs uppercase">Hours</p>
                </div>
                <div>
                    <span className="text-3xl text-whiteColor">38</span>
                    <p className="text-gray-300 text-xs uppercase">Minutes</p>
                </div>
                <div>
                    <span className="text-3xl text-whiteColor">19</span>
                    <p className="text-gray-300 text-xs uppercase">Seconds</p>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner
