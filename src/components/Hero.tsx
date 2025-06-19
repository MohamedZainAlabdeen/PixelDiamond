import { Link } from "react-router-dom"
import Button from "./common/Button"
import LiveNews from "./LiveNews"
import { slider_1 } from "../assets"

const Hero = () => {
    return (
        <>
            <section
                className="w-full h-screen bg-cover bg-center relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0000006e]"
                style={{ backgroundImage: `URL(${slider_1})` }}
            >
                <div className="mainContainer relative h-full flex items-center justify-start">
                    <div>
                        <Link
                            onClick={() => scrollTo(0, 0)}
                            to="/news"
                            className="tag-ornament bg-blueColor"
                        >
                            GAMING NEWS
                        </Link>
                        <h2 className="text-whiteColor ss:text-5xl text-3xl max-w-2xl font-bold my-4">
                            THE "CLASH OF ETERNITY" NEW GAME WAS JUST RELEASED
                        </h2>
                        <p className="text-gray-300 max-w-lg mb-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                            odit debitis nobis quaerat omnis. Veritatis cum iure accusantium
                            suscipit.
                        </p>
                        <Button url="/posts" variant="blue">GO TO THE ARTICLE</Button>
                    </div>
                </div>
            </section>

            <LiveNews />
        </>
    )
}

export default Hero
