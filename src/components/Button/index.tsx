import React from "react";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-md",
} as const;
const variants = {
  fill: {
    gray_500: "bg-gray-500 shadow-bs text-gray-300",
    red_500_99: "bg-red-500_99 text-black-900",
    blue_50_02: "bg-blue-50_02 text-blue_gray-900",
    white_A700: "bg-white-A700",
    blue_400_99: "bg-blue-400_99 text-black-900",
    blue_50: "bg-blue-50",
    light_blue_A700_87: "bg-light_blue-A700_87 text-blue-A700_87",
    red_100: "bg-red-100 text-blue_gray-900",
    blue_A700: "bg-blue-A700 shadow-bs text-white-A700",
    gray_100: "bg-gray-100 shadow-bs text-gray-700",
    black_900_4c_01: "bg-black-900_4c_01 text-white-A700",
    light_blue_A700: "bg-light_blue-A700 shadow-bs text-white-A700_01",
    blue_300_01: "bg-blue-300_01",
    red_600: "bg-red-600 text-white-A700",
    blue_300_02: "bg-blue-300_02",
  },
  outline: {
    gray_900_a2: "border border-gray-900_a2 border-solid text-gray-900",
    light_blue_A700:
      "border border-light_blue-A700 border-solid shadow-bs text-light_blue-A700",
  },
} as const;
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "p-3",
  lg: "p-[15px]",
  xl: "p-[35px] sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
