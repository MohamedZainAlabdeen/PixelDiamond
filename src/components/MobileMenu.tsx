import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { mobileLinks } from "../constants";
import { logo } from "../assets";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

type MobileMenuProps = {
    toggle: boolean;
    closeMenu: () => void;
};

const MobileMenu = ({ toggle, closeMenu }: MobileMenuProps) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <div
                className={cn(
                    "fixed top-0 left-0 w-[300px] max-[325px]:w-full h-screen py-5 bg-whiteColor overflow-auto z-[1000] transition duration-[.3s]",
                    toggle ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flexBetween px-5">
                    <img src={logo} alt="Logo" />
                    <button onClick={() => closeMenu()}>
                        <IoMdClose style={{ color: "#363636", fontSize: "25px" }} />
                    </button>
                </div>
                {/* List Links */}
                <ul className="mt-10">
                    {mobileLinks.map((item) => (
                        <li key={item.id} className="border-b border-borderColor">
                            {item.url ? (
                                <Link
                                    onClick={() => {
                                        scrollTo(0, 0);
                                        closeMenu();
                                    }}
                                    to={item.url}
                                    className="block w-full px-5 py-3 text-blackColor hover:bg-blueColor hover:text-whiteColor transition"
                                >
                                    {item.avatar ? (
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={item.avatar}
                                                loading="lazy"
                                                className="w-[35px] h-[35px] rounded-full"
                                                alt="User Avatar"
                                            />
                                            <span>{item.title}</span>
                                        </div>
                                    ) : (
                                        <span>{item.title}</span>
                                    )}
                                </Link>
                            ) : (
                                <div className="mobile-menu">
                                    <div
                                        onClick={() => setDropdown((prev) => !prev)}
                                        className={cn("mobile-menu-item flexBetween w-full px-5 py-3 text-blackColor hover:bg-blueColor hover:text-whiteColor transition cursor-pointer",
                                            dropdown && "bg-blueColor text-whiteColor"
                                        )}
                                    >
                                        <span>{item.title}</span>
                                        <IoIosArrowDown style={{ fontSize: "20px" }} />
                                    </div>

                                    <ul
                                        className={cn("mobile-dropdown px-8 py-4 space-y-4",
                                            dropdown ? "block" : "hidden"
                                        )}
                                    >
                                        {item.menu?.map((link) => (
                                            <li key={link.id}>
                                                <Link
                                                    onClick={() => {
                                                        scrollTo(0, 0);
                                                        closeMenu();
                                                        setDropdown(false);
                                                    }}
                                                    to={link.url}
                                                    className="block text-blackColor text-sm hover:text-blueColor transition"
                                                >
                                                    {link.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {/* ------ # Overlay # ------ */}
            <div
                onClick={closeMenu}
                className={`overlay ${toggle ? "block" : "hidden"}`}
            />
        </>
    )
}

export default MobileMenu
