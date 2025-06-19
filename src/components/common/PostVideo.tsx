import { FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom"

type PostVideoProps = {
    banner: string;
    title: string;
    text: string;
}

const PostVideo = ({ banner, title, text }: PostVideoProps) => {
    return (
        <Link
            to="/pixel-videos"
            onClick={() => scrollTo(0, 0)}
            className="post-preview-video group"
        >
            <div
                className="video-banner"
                style={{ backgroundImage: `URL(${banner})` }}
            />
            <div className="post-preview-overlay">
                <div className="video-icon">
                    <FaPlay className="text-base text-whiteColor" />
                </div>
                <div className="video-preview-info">
                    <p className="post-preview-title text-whiteColor text-sm">{title}</p>
                    <p className="text-gray-200 text-xs mt-1">{text}</p>
                </div>
            </div>
        </Link>
    )
}

export default PostVideo
