import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { Logo, SearchPopup, InventoryBagPreview, MobileMenu } from "../components";
import { navigationLinks, navLinks } from "../constants";
import { submenuSlider_01 } from "../assets";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu5Line, RiSearch2Line, RiShoppingCartLine } from "react-icons/ri";

const Navigation = () => {
    const [submenuToggle, setSubmenuToggle] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleBag, setToggleBag] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);


    const submenuSlider = (
        <div className={cn("submenu",
            submenuToggle && "active"
        )}>
            <img
                src={submenuSlider_01}
                className="absolute bottom-0 h-full right-0 transition duration-[.3s] rounded-tr-md rounded-br-md"
                alt="banner"
            />
            {/* List Links */}
            <div className="grid grid-cols-2 gap-5 max-w-[750px]">
                {navigationLinks.map((item) => (
                    <Link key={item.id} to={item.url} className="submenu-slider-item">
                        <item.icon className="text-blackColor text-[22px]" />
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );

    const renderLinks = (
        <ul className="md:flex items-center h-full hidden">
            {navLinks.map((item) => (
                <li
                    key={item.id}
                    className="h-full"
                    onMouseEnter={() =>
                        item.submenuSlider && setSubmenuToggle(true)
                    }
                    onMouseLeave={() =>
                        item.submenuSlider && setSubmenuToggle(false)
                    }
                >
                    {item.url ? (
                        <Link to={item.url} className="link-item">
                            {item.title}
                        </Link>
                    ) : (
                        <p className="link-item gap-1 cursor-pointer">
                            {item.title}
                            <IoIosArrowDown className="text-base" />
                        </p>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {/* ------ # Nav Links # ------ */}
            <nav className="absolute top-[58px] left-0 w-full z-10">
                <div className="relative flexBetween mainContainer bg-whiteColor h-[85px] xs:px-10 px-5 md:rounded-b-md">
                    <Logo dark hideFromSmallScreen />
                    <div className="flex items-center gap-8 h-full">
                        {renderLinks}
                        {/* Submenu Slider */}
                        {submenuSlider}
                        <div className="flex item-center gap-4">
                            <div
                                onClick={() => setToggleSearch(true)}
                                className="cursor-pointer"
                            >
                                <RiSearch2Line style={{ fontSize: "25px", color: "#535353" }} />
                            </div>
                            <div
                                onClick={() => setToggleBag(true)}
                                className="relative cursor-pointer"
                            >
                                <RiShoppingCartLine
                                    style={{ fontSize: "25px", color: "#535353" }}
                                />
                                <div className="absolute -top-3 -right-3 flexCenter w-[22px] h-[22px] bg-blueColor rounded-full text-whiteColor text-sm">
                                    5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* ------ # Menu Button In Small Screen # ------ */}
            <div
                onClick={() => setToggleMobileMenu(true)}
                className="md:hidden absolute top-[143px] left-0 flex items-center justify-center w-full h-[40px] bg-[#252627] cursor-pointer z-10"
            >
                <RiMenu5Line style={{ fontSize: "22px", color: "#fff" }} />
            </div>

            <SearchPopup
                toggle={toggleSearch}
                closeSearch={() => setToggleSearch(false)}
            />
            <InventoryBagPreview
                toggle={toggleBag}
                closeBag={() => setToggleBag(false)}
            />
            <MobileMenu
                toggle={toggleMobileMenu}
                closeMenu={() => setToggleMobileMenu(false)}
            />
        </>
    )
}

export default Navigation
