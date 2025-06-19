import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { IoIosArrowForward } from "react-icons/io";

type ButtonProps = {
  div?: boolean;
  url?: string;
  className?: string;
  iconClassName?: string;
  variant: "red" | "blue" | "purple";
  size?: "sm";
  children: React.ReactNode;
}

const Button = ({ div, url, className, iconClassName, variant, size, children }: ButtonProps) => {
  const classes = cn(className,
    "flex items-center gap-1 pl-4 rounded-full text-whiteColor uppercase transition",
    size === "sm" ? "pr-1 py-[2px] text-xs" : "pr-1 pl-5 py-[5px]");

  const variantClasses =
    variant === "red"
      ? "bg-redColor hover:bg-[#f52d73]"
      : variant === "blue"
        ? "bg-blueColor hover:bg-[#3ca4f5]"
        : variant === "purple"
          ? "bg-violetColor hover:bg-[#8146ee]"
          : ""

  const icon = (
    <div
      className={cn(
        "rounded-full flex items-center justify-center ml-1",
        size === "sm" ? "w-[30px] h-[30px]" : "w-[40px] h-[40px]",
        variant === "red"
          ? "bg-[#bd0244]"
          : variant === "blue"
            ? "bg-[#0270c5]"
            : variant === "purple"
              ? "bg-[#4d2598]"
              : "",
        iconClassName,
      )}
    >
      <IoIosArrowForward
        style={{ color: "#fff", fontSize: size === "sm" ? "16px" : "20px" }}
      />
    </div>
  );

  return (
    <>
      {url ? (
        <Link onClick={() => scrollTo(0, 0)} to={url} className={cn("w-fit", classes,
          variantClasses
        )}>
          {children}
          {icon}
        </Link>
      ) : (
        <>
          {div ? (
            <div className={cn("w-fit cursor-pointer", classes,
              variantClasses
            )}>
              {children}
              {icon}
            </div>
          ) : (

            <button className={cn(classes,
              variantClasses
            )}>
              {children}
              {icon}
            </button>

          )
          }

        </>

      )}

    </>
  );
};

export default Button;
