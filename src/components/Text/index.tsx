import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold18LightblueA700: "font-poppins font-semibold",
  txtRobotoRomanLight13: "font-light font-roboto",
  txtPoppinsRegular16Bluegray900a2: "font-normal font-poppins",
  txtPoppinsMedium14LightblueA70087: "font-medium font-poppins",
  txtPoppinsSemiBold13: "font-poppins font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium14WhiteA70087: "font-medium font-poppins",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsRegular14Bluegray90087: "font-normal font-poppins",
  txtPoppinsRegular16Bluegray90005: "font-normal font-poppins",
  txtPoppinsMedium153: "font-medium font-poppins",
  txtPoppinsSemiBold18Bluegray90003: "font-poppins font-semibold",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtRobotoRomanLight12: "font-light font-roboto",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsSemiBold19: "font-poppins font-semibold",
  txtPoppinsMedium10GreenA700: "font-medium font-poppins",
  txtPoppinsSemiBold12Bluegray90087: "font-poppins font-semibold",
  txtRobotoRomanRegular16WhiteA700: "font-normal font-roboto",
  txtPoppinsMedium10Gray50001: "font-medium font-poppins",
  txtPoppinsMedium20Bluegray900: "font-medium font-poppins",
  txtPoppinsRegular14Black900: "font-normal font-poppins",
  txtPoppinsSemiBold18Orange60001: "font-poppins font-semibold",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular14Bluegray700: "font-normal font-poppins",
  txtInterMedium10: "font-inter font-medium",
  txtPoppinsMedium15WhiteA70001: "font-medium font-poppins",
  txtPoppinsMedium14LightblueA700: "font-medium font-poppins",
  txtPoppinsMedium16Bluegray400: "font-medium font-poppins",
  txtPoppinsRegular24Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtInterMedium16: "font-inter font-medium",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtPoppinsMedium16WhiteA70087: "font-medium font-poppins",
  txtPoppinsMedium16WhiteA70001: "font-medium font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsRegular14Gray90087: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular13Black90001: "font-normal font-poppins",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtPoppinsRegular12WhiteA700a2: "font-normal font-poppins",
  txtPoppinsSemiBold18Red600: "font-poppins font-semibold",
  txtPoppinsMedium20WhiteA70087: "font-medium font-poppins",
  txtPoppinsSemiBold24WhiteA700: "font-poppins font-semibold",
  txtPoppinsBold18: "font-bold font-poppins",
  txtPoppinsRegular12Bluegray700: "font-normal font-poppins",
  txtInterMedium16Bluegray90002: "font-inter font-medium",
  txtPoppinsBold12: "font-bold font-poppins",
  txtPoppinsSemiBold14Red60099: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold37: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsMedium16Bluegray900: "font-medium font-poppins",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtPoppinsSemiBold14GreenA70099: "font-poppins font-semibold",
  txtPoppinsRegular16LightblueA700: "font-normal font-poppins",
  txtPoppinsMedium16BlueA70087: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold20Bluegray900: "font-poppins font-semibold",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsMedium16GreenA700: "font-medium font-poppins",
  txtPoppinsRegular18Bluegray900: "font-normal font-poppins",
  txtPoppinsMedium20Bluegray900a2: "font-medium font-poppins",
  txtPoppinsSemiBold12Black90001: "font-poppins font-semibold",
  txtPoppinsRegular14Black90099: "font-normal font-poppins",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsBold22: "font-bold font-poppins",
  txtPoppinsSemiBold20LightblueA700: "font-poppins font-semibold",
  txtPoppinsMedium16Red600: "font-medium font-poppins",
  txtPoppinsMedium14Bluegray90087: "font-medium font-poppins",
  txtPoppinsSemiBold13Orange600: "font-poppins font-semibold",
  txtPoppinsMedium14Bluegray900: "font-medium font-poppins",
  txtPoppinsMedium14Bluegray90003: "font-medium font-poppins",
  txtRobotoRomanLight20: "font-light font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
