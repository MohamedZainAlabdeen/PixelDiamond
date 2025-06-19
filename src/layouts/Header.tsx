import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "../components";

import { IoIosArrowDown } from "react-icons/io";
import { CiBookmark, CiHeart } from "react-icons/ci";

import {
  flag_es,
  flag_fr,
  flag_jp,
  flag_us,
  userAvatar_01,
} from "../assets";
import Navigation from "./Navigation";

const Header = () => {
  const [lang, setLang] = useState({
    flag: flag_us,
    name: "English"
  });
  const [currency, setCurrency] = useState("USD");


  const [langDropdown, setLangDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  const resetAllDropdown = () => {
    setLangDropdown(false);
    setCurrencyDropdown(false);
    setAccountDropdown(false);
  };

  return (
    <>
      <header className="w-full bg-[#252627] py-3">
        <div className="mainContainer flexBetween">
          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                resetAllDropdown();
                setLangDropdown(!langDropdown);
              }}
              className="relative flex items-center gap-2 cursor-pointer text-xs"
            >
              <img
                src={lang.flag}
                className="xs:block hidden"
                alt={lang.name}
              />
              <p className="text-whiteColor">
                {lang.name}
              </p>
              <IoIosArrowDown className="text-white text-base" />

              {/* Lang Dropdown */}
              <ul
                className={cn("menuDropdown top-[calc(100%+32px)] w-[150px]",
                  langDropdown
                    ? "opacity-100 -translate-y-2"
                    : "opacity-0 pointer-events-none"
                )}
              >
                <li
                  onClick={() => {
                    setLang({
                      flag: flag_us,
                      name: "English",
                    });
                  }}
                  className="flex items-center gap-2 widget-option"
                >
                  <img src={flag_us} alt="Us" />
                  <span>English</span>
                </li>
                <li
                  onClick={() => {
                    setLang({
                      flag: flag_fr,
                      name: "French",
                    });
                  }}
                  className="flex items-center gap-2 widget-option"
                >
                  <img src={flag_fr} alt="Fr" />
                  <span>French</span>
                </li>
                <li
                  onClick={() => {
                    setLang({
                      flag: flag_es,
                      name: "Spanish",
                    });
                  }}
                  className="flex items-center gap-2 widget-option"
                >
                  <img src={flag_es} alt="Es" />
                  <span>Spanish</span>
                </li>
                <li
                  onClick={() => {
                    setLang({
                      flag: flag_jp,
                      name: "Japanese",
                    });
                  }}
                  className="flex items-center gap-2 widget-option border-b-0"
                >
                  <img src={flag_jp} alt="Jp" />
                  <span>Japanese</span>
                </li>
              </ul>
            </div>

            <div
              onClick={() => {
                resetAllDropdown();
                setCurrencyDropdown(!currencyDropdown);
              }}
              className="relative flex items-center gap-1 cursor-pointer text-xs"
            >
              <p className="text-whiteColor">Currency:</p>
              <p className="text-blueColor">
                {currency}
              </p>
              <IoIosArrowDown style={{ color: "#fff", fontSize: "16px" }} />

              {/* Currency Dropdown */}
              <ul
                className={cn("menuDropdown left-11 top-[calc(100%+32px)] w-[120px]",
                  currencyDropdown
                    ? "opacity-100 -translate-y-2"
                    : "opacity-0 pointer-events-none"
                )}
              >
                <li
                  onClick={() => setCurrency("USD")}
                  className="flex items-center gap-2 widget-option"
                >
                  <span>USD</span>
                </li>
                <li
                  onClick={() => setCurrency("Euros")}
                  className="flex items-center gap-2 widget-option"
                >
                  <p>Euros</p>
                </li>
                <li
                  onClick={() => setCurrency("Pesos")}
                  className="flex items-center gap-2 widget-option border-b-0"
                >
                  <span>Pesos</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <ul className="md:flex items-center gap-4 hidden">
              <li
                onClick={() => {
                  resetAllDropdown();
                  setAccountDropdown(!accountDropdown);
                }}
                className="relative flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={userAvatar_01}
                  width={32}
                  height={32}
                  className="rounded-full"
                  alt="User Avatar"
                />
                <p className="text-whiteColor text-xs">Mohamed Zain</p>
                <IoIosArrowDown style={{ color: "#fff", fontSize: "16px" }} />
                {/* Account Dropdown */}
                <div
                  className={cn("menuDropdown",
                    accountDropdown
                      ? "opacity-100 -translate-y-2"
                      : "opacity-0 pointer-events-none"
                  )}
                >
                  <p className="widget-option border-l-2 border-l-blueColor">
                    Main Account
                  </p>
                  <Link to="/account-settings" className="widget-option-link">
                    Account Settings
                  </Link>
                  <a href="#" className="widget-option-link">
                    Shipping Details
                  </a>
                  <a href="#" className="widget-option-link">
                    Billing Details
                  </a>
                  <a href="#" className="widget-option-link">
                    Orders History
                  </a>
                  <p className="widget-option border-l-2 border-l-redColor">
                    Pixel Forums
                  </p>
                  <a href="#" className="widget-option-link">
                    Summary
                  </a>
                  <a href="#" className="widget-option-link">
                    Activity
                  </a>
                  <a href="#" className="widget-option-link">
                    Notifications
                  </a>
                  <a href="#" className="widget-option-link">
                    Messages
                  </a>
                  <a href="#" className="widget-option-link">
                    Profile Badges
                  </a>
                  <a href="#" className="widget-option-link border-b-0">
                    Settings
                  </a>
                </div>
              </li>
              <li>
                <Link to="/wishlist" className="flex items-center gap-2">
                  <CiHeart
                    style={{
                      color: "#1c95f3",
                      fontSize: "20px",
                      stroke: "#1c95f3",
                      strokeWidth: "0.5",
                    }}
                  />
                  <p className="text-whiteColor text-xs">Wishlist (5)</p>
                </Link>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <CiBookmark
                  style={{
                    color: "#1c95f3",
                    fontSize: "20px",
                    stroke: "#1c95f3",
                    strokeWidth: "0.5",
                  }}
                />
                <p className="text-whiteColor text-xs">Compare (2)</p>
              </li>
            </ul>
            <Button url="/login" variant="red" size="sm">LOGOUT</Button>
          </div>
        </div>
      </header>

      <Navigation />
    </>
  )
}

export default Header
