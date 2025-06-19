import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { cn } from "../../lib/utils"

type SocialsProps = {
    size?: "lg";
}

const Socials = ({ size }: SocialsProps) => {
    return (
        <ul className="flex items-center justify-between gap-4">
            <li>
                <a
                    href="#"
                    target="_blank"
                    className={cn(
                        "social-link bg-[#4153b3] before:border-l-[#4153b3]",
                        size === "lg" ? "w-[55px] h-[55px]" : "w-[45px] h-[45px]"
                    )}
                >
                    <FaFacebookSquare style={{ color: "#fff", fontSize: "25px" }} />
                </a>
            </li>
            <li>
                <a
                    href="#"
                    target="_blank"
                    className={cn(
                        "social-link bg-[#f9288a] before:border-l-[#f9288a]",
                        size === "lg" ? "w-[55px] h-[55px]" : "w-[45px] h-[45px]"
                    )}
                >
                    <FaInstagram style={{ color: "#fff", fontSize: "25px" }} />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/MohamedZainAlabdeen"
                    target="_blank"
                    className={cn(
                        "social-link bg-[#333333] before:border-l-[#333333]",
                        size === "lg" ? "w-[55px] h-[55px]" : "w-[45px] h-[45px]"
                    )}
                >
                    <FaGithub style={{ color: "#fff", fontSize: "25px" }} />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/mohamedzain-dev"
                    target="_blank"
                    className={cn(
                        "social-link bg-[#006dc2] before:border-l-[#006dc2]",
                        size === "lg" ? "w-[55px] h-[55px]" : "w-[45px] h-[45px]"
                    )}
                >
                    <FaLinkedin style={{ color: "#fff", fontSize: "25px" }} />
                </a>
            </li>
        </ul>
    )
}

export default Socials
