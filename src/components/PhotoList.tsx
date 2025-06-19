import { photos } from "../constants"
import { HiPlus } from "react-icons/hi"

const PhotoList = () => {
    return (
        <>
            {photos.map((item) => (
                <div key={item.id} className="photo-item group">
                    <div
                        className="photo-item-img"
                        style={{ backgroundImage: `URL(${item.img})` }}
                    >
                        <div className="photo-item-overlay">
                            <HiPlus
                                className="photo-item-icon"
                                style={{
                                    fontSize: "35px",
                                    color: "#fff",
                                    stroke: "#fff",
                                    strokeWidth: "0.5",
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PhotoList
