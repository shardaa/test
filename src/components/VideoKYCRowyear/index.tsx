import React from "react";

import { Button, Text } from "components";

type VideoKYCRowyearProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "year" | "week" | "month" | "day"
> &
  Partial<{ year: string; week: string; month: string; day: string }>;

const VideoKYCRowyear: React.FC<VideoKYCRowyearProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="!text-blue_gray-900_87 cursor-pointer font-poppins font-semibold h-10 min-w-[64px] outline outline-[1px] outline-gray-100_03 rounded-bl-[30px] rounded-tl-[30px] text-center text-xs"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.year}
        </Button>
        <Button
          className="!text-blue_gray-900 cursor-pointer font-poppins font-semibold h-10 min-w-[65px] outline outline-[1px] outline-gray-100_03 text-center text-xs"
          shape="square"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.week}
        </Button>
        <Button
          className="!text-blue_gray-900_87 cursor-pointer font-poppins font-semibold h-10 min-w-[69px] outline outline-[1px] outline-gray-100_03 text-center text-xs"
          shape="square"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.month}
        </Button>
        <Text
          className="bg-white-A700 h-10 justify-center outline outline-[1px] outline-gray-100_03 pb-[9px] pl-[15px] pt-3 rounded-br-[30px] rounded-tr-[30px] text-blue_gray-900_87 text-center text-xs w-auto"
          size="txtPoppinsSemiBold12Bluegray90087"
        >
          {props?.day}
        </Text>
      </div>
    </>
  );
};

VideoKYCRowyear.defaultProps = {
  year: "Year",
  week: "Week",
  month: "Month",
  day: "Day",
};

export default VideoKYCRowyear;
