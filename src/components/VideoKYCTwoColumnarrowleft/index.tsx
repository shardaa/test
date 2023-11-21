import React from "react";

import { Button, Img, Text } from "components";

type VideoKYCTwoColumnarrowleftProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "monthcounter" | "yearbutton" | "weekbutton" | "monthbutton" | "daybutton"
> &
  Partial<{
    monthcounter: string;
    yearbutton: string;
    weekbutton: string;
    monthbutton: string;
    daybutton: string;
  }>;

const VideoKYCTwoColumnarrowleft: React.FC<VideoKYCTwoColumnarrowleftProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mb-[681px] w-full">
          <div className="flex sm:flex-1 flex-row gap-9 items-center justify-center w-[24%] sm:w-full">
            <Button
              className="flex h-10 items-center justify-center outline outline-[1px] outline-gray-100_03 rounded-[50%] shadow-bs2 w-10"
              shape="circle"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-7"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
            </Button>
            <Text
              className="text-blue_gray-900 text-center text-xs"
              size="txtPoppinsBold12"
            >
              {props?.monthcounter}
            </Text>
            <Button
              className="flex h-10 items-center justify-center outline outline-[1px] outline-gray-100_03 rounded-[50%] shadow-bs2 w-10"
              shape="circle"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-7"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </Button>
          </div>
          <div className="flex flex-row items-center justify-start shadow-bs2 w-auto">
            <Button
              className="!text-blue_gray-900_87 cursor-pointer font-poppins font-semibold h-10 min-w-[64px] outline outline-[1px] outline-gray-100_03 rounded-bl-[30px] rounded-tl-[30px] text-center text-xs"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.yearbutton}
            </Button>
            <Button
              className="!text-blue_gray-900 cursor-pointer font-poppins font-semibold h-10 min-w-[65px] outline outline-[1px] outline-gray-100_03 text-center text-xs"
              shape="square"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.weekbutton}
            </Button>
            <Button
              className="!text-blue_gray-900_87 cursor-pointer font-poppins font-semibold h-10 min-w-[69px] outline outline-[1px] outline-gray-100_03 text-center text-xs"
              shape="square"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.monthbutton}
            </Button>
            <Text
              className="bg-white-A700 h-10 justify-center outline outline-[1px] outline-gray-100_03 pb-[9px] pl-[15px] pt-3 rounded-br-[30px] rounded-tr-[30px] text-blue_gray-900_87 text-center text-xs w-auto"
              size="txtPoppinsSemiBold12Bluegray90087"
            >
              {props?.daybutton}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

VideoKYCTwoColumnarrowleft.defaultProps = {
  yearbutton: "Year",
  weekbutton: "Week",
  monthbutton: "Month",
  daybutton: "Day",
};

export default VideoKYCTwoColumnarrowleft;
