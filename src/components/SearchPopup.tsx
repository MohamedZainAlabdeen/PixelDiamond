import { cn } from "../lib/utils";
import { IoIosClose } from "react-icons/io";

type SearchPopupProps = {
    toggle: boolean,
    closeSearch: () => void;
}

const SearchPopup = ({ toggle, closeSearch }: SearchPopupProps) => {
    return (
        <div
            className={cn(
                "fixed top-0 left-0 w-full h-screen bg-[#1c95f3f0] z-[1000] transition duration-[.4s]",
                toggle
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}
        >
            <div className="mainContainer h-full flexCenter">
                <button
                    onClick={closeSearch}
                    className="absolute top-10 xs:right-10 right-5"
                >
                    <IoIosClose style={{ color: "#fff", fontSize: "50px" }} />
                </button>
                <div className="text-center">
                    <input
                        type="text"
                        className={cn(
                            "w-full max-[950px]:text-5xl max-[635px]:text-3xl text-7xl text-whiteColor font-bold border-b border-borderColor placeholder:text-6xl max-[950px]:placeholder:text-5xl max-[635px]:placeholder:text-3xl placeholder:text-whiteColor placeholder:font-bold transition duration-[.4s]",
                            toggle ? "translate-y-0" : "translate-y-10"
                        )}
                        placeholder="What are you looking for...?"
                    />
                    <p className="text-gray-200 mt-4 max-[950px]:text-sm">
                        Write what you are looking for and press enter to begin your search!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SearchPopup;
