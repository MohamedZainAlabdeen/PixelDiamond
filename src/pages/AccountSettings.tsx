import { useMetaTitle } from "../hooks"
import { Banner, BubbleIcon, Button, Input, Title } from "../components"
import { banner_01, userAvatar_01 } from "../assets"
import { FaPlus } from "react-icons/fa"


const AccountSettings = () => {
    useMetaTitle("Pixel Diamond - Account Settings");
    return (
        <>
            <Banner
                img={banner_01}
                title="Your Account"
                path={{ from: "Account", to: "Mohamed Zain" }}
            />
            {/* Account Settings */}
            <main className="mainContainer py-20">
                <section className="grid gridCols_4 gap-5 max-[1100px]:gap-0">
                    {/* Account Info */}
                    <div className="max-[1100px]:col-span-full">
                        <div className="text-center">
                            <div className="relative w-[90px] h-[90px] mx-auto">
                                <BubbleIcon className="absolute -top-3 -right-5" size="sm" color="blue">
                                    <FaPlus className="relative text-base text-white" />
                                </BubbleIcon>

                                <img
                                    src={userAvatar_01}
                                    className="w-full h-full rounded-full mx-auto"
                                    alt="User Avatar"
                                />
                            </div>
                            <p className="text-blackColor text-xl mt-2">Mohamed Zain</p>
                            <p className="text-grayColor text-xs">Front-End Developer</p>
                        </div>
                        {/* account Info Stats */}
                        <div className="grid grid-cols-3 mt-5">
                            <div className="text-center">
                                <span className="text-blackColor text-base">69</span>
                                <p className="text-grayColor text-xs">Comments</p>
                            </div>
                            <div className="text-center">
                                <span className="text-blackColor text-base">165</span>
                                <p className="text-grayColor text-xs">Likes RCV</p>
                            </div>
                            <div className="text-center">
                                <span className="text-blackColor text-base">5</span>
                                <p className="text-grayColor text-xs">Orders</p>
                            </div>
                        </div>
                        {/* Dropdown List */}
                        <ul className="mt-8">
                            <li>
                                <a
                                    href="#"
                                    className="dropdown-list-item-link border-t text-blueColor"
                                >
                                    Account Settings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown-list-item-link">
                                    Shipping Details
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown-list-item-link">
                                    Billing Details
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown-list-item-link">
                                    Orders History
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Account Settings */}
                    <div className="col-span-3">
                        <Title marginBottom lineColor="blue">Account Settings</Title>
                        <form
                            action="#"
                            className="grid gridCols_2 max-xs:grid-cols-1 gap-4"
                        >
                            <Input
                                id="firstName"
                                label="First Name"
                                type="text"
                                inputName="firstName"
                                value="Mohamed"
                                placeholder="Enter Your First Name Here"
                            />
                            <Input
                                id="lastName"
                                label="Last Name"
                                type="text"
                                inputName="lastName"
                                value="Zain Alabdeen"
                                placeholder="Enter Your Last Name Here"
                            />
                            <Input
                                className="col-span-full"
                                id="username"
                                label="User Name"
                                type="text"
                                inputName="username"
                                value="Mohamed Zain"
                                placeholder="Enter Your Name Here"
                            />
                            <Input
                                className="col-span-full"
                                id="email"
                                label="Email"
                                type="email"
                                inputName="email"
                                value="mohamedzain.dev@gmail.com"
                                placeholder="Enter Your email Here"
                            />
                            <Input
                                id="changePassword"
                                label="Change Password"
                                type="password"
                                inputName="changePassword"
                                placeholder="Enter Your password Here"
                            />
                            <Input
                                id="repeatPassword"
                                label="Repeat Password"
                                type="password"
                                inputName="repeatPassword"
                                placeholder="Repeat Your password Here"
                            />
                        </form>
                        <Button div className="mt-6 uppercase" variant="blue">Save all changes</Button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AccountSettings
