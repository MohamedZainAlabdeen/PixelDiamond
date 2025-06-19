import { Link } from "react-router-dom";
import { logo } from "../../assets";

type LogoProps = {
    light?: boolean;
    dark?: boolean;
    hideFromSmallScreen?: boolean;
}

const Logo = ({ light, dark, hideFromSmallScreen }: LogoProps) => {
    return (
        <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2"
        >
            <img src={logo} alt="logo" />
            <div className={`leading-4 ${hideFromSmallScreen && "max-[325px]:hidden"}`}>
                <p
                    className={`${light ? "text-whiteColor" : dark && "text-blackColor"
                        } text-xl`}
                >
                    PIXEL<span className="text-blueColor">DIAMOND</span>
                </p>
                <p
                    className={`${light ? "text-lightColor" : dark && "text-grayColor"} ${hideFromSmallScreen ? "max-xs:text-xs" : ""
                        }`}
                >
                    The Latest Gaming News
                </p>
            </div>
        </Link>
    );
};

export default Logo;
