import { useMetaTitle } from "../hooks"
import { Banner, BubbleIcon, Button, Input, Textarea, Title } from "../components"
import { banner_01, newsletter_left, newsletter_people, newsletter_right } from "../assets"
import { CiLocationOn, CiMail } from "react-icons/ci"
import { IoIosArrowForward, IoLogoGameControllerB } from "react-icons/io"
import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa"
import { RiTwitchLine, RiTwitterXLine, RiYoutubeLine } from "react-icons/ri"

const ContactUs = () => {
    useMetaTitle("Pixel Diamond - Contact");
    return (
        <>
            <Banner img={banner_01} title="Contact Us" path={{ to: "Contact Us" }} />
            <section className="mainContainer my-20">
                <div className="text-center max-w-xl mx-auto">
                    <h3 className="text-4xl text-blackColor">Keep in Touch!</h3>
                    <p className="text-grayColor mt-2">
                        Do you have a question or wanna join our team? Send us an email or a
                        message and we’ll answer you as fast as we can!
                    </p>
                </div>
                <div className="grid gridCols_2 gap-5 my-16">
                    <div className="text-center">
                        <CiMail style={{ fontSize: "35px", color: "#1c95f3", margin: "0 auto" }} />
                        <span className="block text-xs text-grayColor mt-5">
                            Inquiries Contact
                        </span>
                        <a
                            href="mailto:info@pixeldiamond.com"
                            className="text-blackColor text-base"
                        >
                            info@pixeldiamond.com
                        </a>
                        <p className="text-gray-700 text-sm mt-1">(+004) 555 1268 2779</p>
                    </div>
                    <div className="text-center">
                        <CiLocationOn style={{ fontSize: "35px", color: "#1c95f3", margin: "0 auto" }} />
                        <span className="block text-xs text-grayColor mt-5">
                            Pixel Diamond HQ
                        </span>
                        <p className="text-blackColor text-sm mt-1">
                            <span className="text-base">890 W58TH ST, New York</span> <br />{" "}
                            NY 10001, USA
                        </p>
                    </div>
                    <div className="text-center">
                        <IoLogoGameControllerB
                            style={{
                                fontSize: "35px",
                                fill: "none",
                                strokeWidth: "16",
                                stroke: "#1c95f3",
                                color: "#1c95f3",
                                margin: "0 auto",
                            }}
                        />
                        <span className="block text-xs text-grayColor mt-5">
                            Work With Us!
                        </span>
                        <a
                            href="mailto:jobs@pixeldiamond.com"
                            className="text-blackColor text-base"
                        >
                            jobs@pixeldiamond.com
                        </a>
                        <p className="text-gray-700 text-sm mt-1">HHRR - Valery Dex</p>
                    </div>
                </div>
                {/* List Social Links */}
                <div className="flex items-center justify-center gap-4">
                    <BubbleIcon className="hover:-translate-y-1 transition" color="blue">
                        <FaFacebookF style={{ color: "#fff", fontSize: "17px" }} />
                    </BubbleIcon>
                    <BubbleIcon className="bg-[#1f1f1f] before:border-l-[#1f1f1f] hover:-translate-y-1 transition">
                        <RiTwitterXLine style={{ color: "#fff", fontSize: "17px" }} />
                    </BubbleIcon>
                    <BubbleIcon className="hover:-translate-y-1 transition bg-[#f9288a] before:border-l-[#f9288a]">
                        <FaInstagram style={{ color: "#fff", fontSize: "17px" }} />
                    </BubbleIcon>
                    <BubbleIcon className="hover:-translate-y-1 transition" color="purple">
                        <RiTwitchLine style={{ color: "#fff", fontSize: "17px" }} />
                    </BubbleIcon>
                    <BubbleIcon className="bg-[#ffb400] before:border-l-[#ffb400] hover:-translate-y-1 transition">
                        <FaGooglePlusG style={{ color: "#fff", fontSize: "17px" }} />
                    </BubbleIcon>
                    <BubbleIcon className="hover:-translate-y-1 transition" color="red">
                        <RiYoutubeLine style={{ color: "#fff", fontSize: "17px" }} />
                    </BubbleIcon>
                </div>
                {/* Send Message */}
                <div className="mt-16">
                    <Title marginBottom lineColor="blue">Send us a message</Title>
                    <form action="#">
                        <div className="grid xs:grid-cols-2 gap-5">
                            <Input
                                id="yourName"
                                label="Your Name"
                                type="text"
                                inputName="yourName"
                                placeholder="Enter Your Name here..."
                            />
                            <Input
                                id="yourEmail"
                                label="Your Email"
                                type="email"
                                inputName="yourEmail"
                                placeholder="Enter Your Email here..."
                            />
                            <Input
                                className="xs:col-span-2"
                                id="messageSubject"
                                label="Message Subject"
                                type="text"
                                inputName="subject"
                                placeholder="Enter Your Subject here..."
                            />
                            <Textarea
                                className="xs:col-span-2"
                                setHeight="h-[200px]"
                                id="message"
                                label="Your Message"
                                name="message"
                                placeholder="Enter Your Message here..."
                            />
                        </div>
                        <Button className="mt-6 ml-auto uppercase" variant="blue">
                            Send your message
                        </Button>
                    </form>
                </div>
            </section>
            {/* Subscribe Section */}
            <section className="relative w-full h-[195px] max-[1200px]:mb-10">
                <div
                    className="absolute top-0 left-0 w-[450px] max-[1200px]:hidden h-full bg-no-repeat"
                    style={{ backgroundImage: `URL(${newsletter_left})` }}
                />
                <div
                    className="absolute top-0 right-0 w-[450px] max-[1200px]:hidden h-full bg-no-repeat"
                    style={{ backgroundImage: `URL(${newsletter_right})` }}
                />

                <img
                    src={newsletter_people}
                    loading="lazy"
                    className="absolute bottom-0 left-[200px] max-[1505px]:hidden"
                    alt="newsletter people"
                />
                <div className="relative mainContainer h-full flex items-center justify-center max-[1200px]:text-center">
                    <div>
                        <h5 className="text-blackColor text-3xl mb-1">
                            Subscribe to our newsletter!
                        </h5>
                        <p className="text-grayColor text-sm mb-5">
                            Receive the latest news, promos, featured videos and more
                        </p>
                        <form
                            action="#"
                            className="flex items-center ss:w-[500px] w-full h-[50px] border border-borderColor rounded-md p-1"
                        >
                            <input
                                type="email"
                                className="w-full h-full pl-3"
                                placeholder="Enter your email here..."
                            />
                            <button className="flexCenter w-[35px] h-[35px] bg-greenColor rounded-md shrink-0">
                                <IoIosArrowForward
                                    style={{ fontSize: "20px", color: "#fff" }}
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
