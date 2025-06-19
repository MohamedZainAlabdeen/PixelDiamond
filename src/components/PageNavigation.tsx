import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const PageNavigation = () => {
    return (
        <ul className="flex items-center gap-2 mt-10">
            <li className="flexCenter w-[45px] h-[40px] bg-blueColor rounded cursor-pointer">
                <IoIosArrowBack style={{ color: "#fff", fontSize: "22px" }} />
            </li>
            <li className="flexCenter w-[45px] h-[40px] border border-borderColor rounded text-blueColor text-sm cursor-pointer">
                1
            </li>
            <li className="flexCenter w-[45px] h-[40px] border border-borderColor rounded text-blackColor text-sm cursor-pointer">
                2
            </li>
            <li className="flexCenter w-[45px] h-[40px] border border-borderColor rounded text-blackColor text-sm cursor-pointer">
                3
            </li>
            <li className="flexCenter w-[45px] h-[40px] border border-borderColor rounded text-blackColor text-sm cursor-pointer">
                4
            </li>
            <li className="flexCenter w-[45px] h-[40px] bg-blueColor rounded cursor-pointer">
                <IoIosArrowForward style={{ color: "#fff", fontSize: "22px" }} />
            </li>
        </ul>
    )
}

export default PageNavigation
