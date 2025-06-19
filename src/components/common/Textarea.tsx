import { cn } from "../../lib/utils"

type TextareaProps = {
    className?: string,
    id?: string,
    label?: string,
    name?: string,
    setHeight?: string,
    placeholder?: string
}

const Textarea = ({
    className,
    id,
    label,
    name,
    setHeight,
    placeholder }: TextareaProps) => {
    return (
        <div className={cn(className)}>
            <label htmlFor={id} className="block mb-2 text-grayColor">
                {label}
            </label>
            <textarea
                id={id}
                name={name}
                className={cn("w-full resize-none text-lightColor border border-borderColor p-3 rounded-md transition placeholder:text-sm focus:border-blueColor",
                    setHeight
                )}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Textarea
