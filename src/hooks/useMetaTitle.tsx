import { useEffect } from "react"

const useMetaTitle = (title: string) => {
    useEffect(() => {
        document.title = title;

        return () => {
            document.title = "VanCoder"
        }
    }, [title])
}

export default useMetaTitle
