import { FaStar } from "react-icons/fa"

type StarsListProps = {
    elements: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
}

const StarsList = ({ elements }: StarsListProps) => {
    return (
        <div className="flex items-center gap-1">
            <FaStar style={{ fontSize: "12px", color: elements[1] }} />
            <FaStar style={{ fontSize: "12px", color: elements[2] }} />
            <FaStar style={{ fontSize: "12px", color: elements[3] }} />
            <FaStar style={{ fontSize: "12px", color: elements[4] }} />
            <FaStar style={{ fontSize: "12px", color: elements[5] }} />
        </div>
    )
}

export default StarsList
