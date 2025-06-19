import { useMetaTitle } from "../hooks"
import { Link } from "react-router-dom"
import { Banner, Title } from "../components"
import { banner_01 } from "../assets"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"

const Login = () => {
    useMetaTitle("Pixel Diamond - Login");
    return (
        <>
            <Banner
                img={banner_01}
                title="Login & Register"
                path={{ to: "Login and Register" }}
            />
            <main className="mainContainer my-20">
                <section className="max-w-[650px] mx-auto">
                    <div className="grid grid-cols-2 border-y border-borderColor">
                        <Link
                            to="/login"
                            className="w-full text-center text-blackColor py-4 border-b-2 border-blueColor"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="w-full text-center text-grayColor py-4 border-b-2 border-transparent"
                        >
                            Register
                        </Link>
                    </div>
                    <Title margin lineColor="purple">
                        Login To Your Account
                    </Title>
                    <form action="#">
                        <label htmlFor="inputEmail" className="text-blackColor">
                            Email Address:
                        </label>
                        <input
                            type="email"
                            id="inputEmail"
                            className="w-full h-[50px] text-blackColor pl-2 mt-1 border border-borderColor rounded-md focus:border-blueColor transition"
                            placeholder="Enter Your Email..."
                            required
                        />
                        <label
                            htmlFor="inputPassword"
                            className="block text-blackColor mt-4"
                        >
                            Password:
                        </label>
                        <input
                            type="password"
                            id="inputPassword"
                            className="w-full h-[50px] text-blackColor pl-2 mt-1 border border-borderColor rounded-md focus:border-blueColor transition"
                            placeholder="Enter Your Password..."
                        />
                        <div className="flexBetween my-4 max-[440px]:flex-col max-[440px]:gap-y-3 max-[440px]:items-start">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                    id="inputCheckbox"
                                />
                                <label
                                    htmlFor="inputCheckbox"
                                    className="text-blackColor text-sm cursor-pointer"
                                >
                                    Remember Email And Password
                                </label>
                            </div>
                            <span className="text-blackColor text-sm cursor-pointer">
                                Forget Password?
                            </span>
                        </div>
                        <button className="w-full py-4 bg-blueColor text-whiteColor rounded-md mb-3 hover:bg-[#529ffd] transition">
                            Login Now!
                        </button>
                        <div className="flexCenter">
                            <button className="flexCenter gap-2 w-[49%] max-[440px]:w-full max-[440px]:mr-0 py-4 bg-[#4154b3] text-whiteColor rounded-md mr-[2%] hover:bg-[#495ec9] transition">
                                <FaFacebookF />
                                Facebook Login
                            </button>
                            <button className="flexCenter gap-2 w-[49%] max-[440px]:w-full max-[440px]:mt-3 py-4 bg-[#242424] text-whiteColor rounded-md hover:bg-[#333333] transition">
                                <BsTwitterX />
                                Twitter Login
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Login
