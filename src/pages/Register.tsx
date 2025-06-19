import { useMetaTitle } from "../hooks";
import { Link } from "react-router-dom"
import { banner_01 } from "../assets"
import { Banner, Title } from "../components"

const Register = () => {
    useMetaTitle("Pixel Diamond - Register");
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
                            className="w-full text-center text-blackColor py-4 border-b-2 border-transparent"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="w-full text-center text-grayColor py-4 border-b-2 border-redColor"
                        >
                            Register
                        </Link>
                    </div>
                    <Title margin lineColor="red">Register Now!</Title>
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
                        <label
                            htmlFor="repeatPassword"
                            className="block text-blackColor mt-4"
                        >
                            Repeat Password:
                        </label>
                        <input
                            type="password"
                            id="repeatPassword"
                            className="w-full h-[50px] text-blackColor pl-2 mt-1 border border-borderColor rounded-md focus:border-blueColor transition"
                            placeholder="Rewrite Your Password..."
                        />
                        <button className="w-full py-4 bg-redColor text-whiteColor rounded-md mt-4 mb-3 hover:bg-[#eb447e] transition">
                            Create Your Account!
                        </button>
                        <p className="text-grayColor text-center">
                            You'll receive a confirmation email in your inbox with a link to
                            activate your account!
                        </p>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Register
