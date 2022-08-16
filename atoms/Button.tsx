import { ButtonTypes } from "../utils/types";
import buttonStyles from "../styles/UtilsStyles/Home.module.scss";

const Button = ({
  logo,
  darkLogo,
  icon,
  darkIcon,
  text,
  black,
  width,
  font,
  sm,
  opacity,
  size,
  neutral,
  bg,
  sFont,
}: ButtonTypes) => {
  return (
    <button
      className={`${
        black
          ? "bg-black dark:bg-[#E5E7EB] text-white dark:text-black mr-0"
          : neutral
          ? "bg-[#f5f5f5] dark:bg-transparent dark:border dark:border-[#4F4F4F] py-[8px]"
          : "bg-transparent border border-gray-200 text-[#000] dark:text-white"
      } ${width ? buttonStyles.width : "max-w-fit"} ${
        opacity &&
        "bg-gray-200 dark:bg-[#1F2937] opacity-50 border border-solid border-[#E5E7EB]"
      } ${
        bg && "dark:border-[#4F4F4F]"
      } hover:cursor-pointer px-6 py-3 rounded-lg mr-4`}
    >
      <div className="flex items-center justify-between">
        {logo && <div className="mr-3">{darkLogo}</div>}
        <p
          className={`${font && "font-bold"} ${size && "text-2xl"} ${
            sm && "text-xs"
          } ${sFont && "font-medium"} text-left grow`}
        >
          {text}
        </p>
        {icon && <div className="ml-3">{darkIcon}</div>}
      </div>
    </button>
  );
};

export default Button;
