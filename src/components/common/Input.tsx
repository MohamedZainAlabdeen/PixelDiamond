import { cn } from "../../lib/utils"

type InputProps = {
    className?: string,
    inputWidth?: string,
    id?: string,
    label?: string,
    type?: string,
    inputName?: string,
    value?: string,
    placeholder?: string
}

const Input = ({
    className,
    inputWidth,
    id,
    label,
    type,
    inputName,
    value,
    placeholder,
}: InputProps) => {
    return (
        <div className={cn(className)}>
            <label htmlFor={id} className="block mb-2 text-grayColor">
                {label}
            </label>
            <input
                type={type}
                name={inputName}
                defaultValue={value | un}
                id={id}
                className={`${inputWidth ? inputWidth : "w-full"} h-[50px] text-lightColor border border-borderColor pl-3 rounded-md transition placeholder:text-sm focus:border-blueColor`}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
