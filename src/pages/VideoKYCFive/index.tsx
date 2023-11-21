import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const VideoKYCFivePage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_grid_light_blue_a700.svg"
          alt="grid"
        />
      ),
      label: "Video KYC",
      href: "/videokycconsent",
      active: window.location.pathname === "/videokycconsent",
    },
    {
      label: (
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_group_white_a700.svg"
            alt="group"
          />
          <Text className="w-auto">Appointment History</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_group_white_a700.svg"
            alt="group_One"
          />
          <Text className="w-auto">Option 3</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-row gap-3.5 items-center justify-center w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_group_white_a700.svg"
            alt="group_Two"
          />
          <Text className="w-auto">Rejection List</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_group_white_a700.svg"
            alt="group_Three"
          />
          <Text className="w-auto">Option 5</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_group_white_a700.svg"
            alt="group_Four"
          />
          <Text className="w-auto">Calendar</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_group_white_a700.svg"
            alt="group_Five"
          />
          <Text className="w-auto">Option 7</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_group_white_a700.svg"
            alt="group_Six"
          />
          <Text className="w-auto">Option 7</Text>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[255px] flex h-screen md:hidden justify-start overflow-auto shadow-bs3 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-5 w-full">
            <Header className="flex flex-col items-center justify-center w-full" />
            <Line className="bg-black-900_19 h-px mt-[21px] w-full" />
            <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-6 shadow-bs7 w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-center p-2.5 rounded-lg shadow-bs6 w-[48%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[11px] mt-3.5 text-blue_gray-900 text-xl tracking-[1.00px] underline"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Upcoming Appointment
                </Text>
                <div className="bg-blue-50_01 border border-light_blue-A700 border-solid flex flex-col items-center justify-start mt-[13px] p-[11px] rounded-[10px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between my-0.5 w-[506px] sm:w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_rectangle75_51x50.png"
                        alt="rectangleSeventyFive"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[0.80px] w-auto"
                          size="txtPoppinsMedium16Bluegray900"
                        >
                          Anshuman Mishra
                        </Text>
                        <Text
                          className="text-blue_gray-900_87 text-sm w-auto"
                          size="txtPoppinsRegular14Bluegray90087"
                        >
                          01 Dec 2023 | Tuesday
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[78px] rounded-lg text-[15px] text-center"
                      shape="round"
                      color="light_blue_A700"
                      size="sm"
                      variant="fill"
                    >
                      Start
                    </Button>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-4 items-center mb-[5px] ml-1.5 md:ml-[0] mt-[15px] px-[5px] w-[98%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[506px] sm:w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_rectangle75_51x50.png"
                        alt="rectangleSeventyFive"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[0.80px] w-auto"
                          size="txtPoppinsMedium16Bluegray900"
                        >
                          Rohit Sharma
                        </Text>
                        <Text
                          className="text-blue_gray-900_87 text-sm w-auto"
                          size="txtPoppinsRegular14Bluegray90087"
                        >
                          01 Dec 2023 | Tuesday
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[78px] rounded-lg text-[15px] text-center"
                      shape="round"
                      color="light_blue_A700"
                      size="sm"
                      variant="fill"
                    >
                      Start
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-gray-500_a8 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[506px] sm:w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_rectangle75_51x50.png"
                        alt="rectangleSeventyFive"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[0.80px] w-auto"
                          size="txtPoppinsMedium16Bluegray900"
                        >
                          Abhishek Sharma
                        </Text>
                        <Text
                          className="text-blue_gray-900_87 text-sm w-auto"
                          size="txtPoppinsRegular14Bluegray90087"
                        >
                          01 Dec 2023 | Tuesday
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[78px] rounded-lg text-[15px] text-center"
                      shape="round"
                      color="light_blue_A700"
                      size="sm"
                      variant="fill"
                    >
                      Start
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-gray-500_a8 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[506px] sm:w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_rectangle75_51x50.png"
                        alt="rectangleSeventyFive"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[0.80px] w-auto"
                          size="txtPoppinsMedium16Bluegray900"
                        >
                          Virat Kohli
                        </Text>
                        <Text
                          className="text-blue_gray-900_87 text-sm w-auto"
                          size="txtPoppinsRegular14Bluegray90087"
                        >
                          01 Dec 2023 | Tuesday
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[78px] rounded-lg text-[15px] text-center"
                      shape="round"
                      color="light_blue_A700"
                      size="sm"
                      variant="fill"
                    >
                      Start
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-gray-500_a8 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[506px] sm:w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_rectangle75_51x50.png"
                        alt="rectangleSeventyFive"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[0.80px] w-auto"
                          size="txtPoppinsMedium16Bluegray900"
                        >
                          Virat Kohli
                        </Text>
                        <Text
                          className="text-blue_gray-900_87 text-sm w-auto"
                          size="txtPoppinsRegular14Bluegray90087"
                        >
                          01 Dec 2023 | Tuesday
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[78px] rounded-lg text-[15px] text-center"
                      shape="round"
                      color="light_blue_A700"
                      size="sm"
                      variant="fill"
                    >
                      Start
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-gray-500_a8 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[506px] sm:w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_rectangle75_51x50.png"
                        alt="rectangleSeventyFive"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[0.80px] w-auto"
                          size="txtPoppinsMedium16Bluegray900"
                        >
                          Virat Kohli
                        </Text>
                        <Text
                          className="text-blue_gray-900_87 text-sm w-auto"
                          size="txtPoppinsRegular14Bluegray90087"
                        >
                          01 Dec 2023 | Tuesday
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[78px] rounded-lg text-[15px] text-center"
                      shape="round"
                      color="light_blue_A700"
                      size="sm"
                      variant="fill"
                    >
                      Start
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-gray-500_a8 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[506px] sm:w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_rectangle75_51x50.png"
                        alt="rectangleSeventyFive"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[0.80px] w-auto"
                          size="txtPoppinsMedium16Bluegray900"
                        >
                          Virat Kohli
                        </Text>
                        <Text
                          className="text-blue_gray-900_87 text-sm w-auto"
                          size="txtPoppinsRegular14Bluegray90087"
                        >
                          01 Dec 2023 | Tuesday
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[78px] rounded-lg text-[15px] text-center"
                      shape="round"
                      color="light_blue_A700"
                      size="sm"
                      variant="fill"
                    >
                      Start
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-gray-500_a8 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[506px] sm:w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_rectangle75_51x50.png"
                        alt="rectangleSeventyFive"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[0.80px] w-auto"
                          size="txtPoppinsMedium16Bluegray900"
                        >
                          Virat Kohli
                        </Text>
                        <Text
                          className="text-blue_gray-900_87 text-sm w-auto"
                          size="txtPoppinsRegular14Bluegray90087"
                        >
                          01 Dec 2023 | Tuesday
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-10 w-[92px]"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                  </div>
                </List>
              </div>
              <div className="md:h-[514px] h-[712px] sm:h-[906px] relative w-1/2 md:w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex flex-row gap-[15px] items-start justify-start ml-1.5 md:ml-[0] w-[54%] md:w-full">
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_rectangle75_51x50.png"
                        alt="rectangleSeventyFive_One"
                      />
                      <Text
                        className="mt-[3px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[1.20px]"
                        size="txtPoppinsSemiBold24"
                      >
                        Anshuman Mishra
                      </Text>
                    </div>
                    <div className="flex flex-col font-roboto md:gap-10 gap-[237px] items-start justify-start md:ml-[0] ml-[26px] mt-[133px]">
                      <Text
                        className="text-gray-600 text-xs tracking-[0.60px]"
                        size="txtRobotoRomanLight12"
                      >
                        Today, 8.30pm
                      </Text>
                      <Text
                        className="text-[13px] text-gray-600 tracking-[0.65px]"
                        size="txtRobotoRomanLight13"
                      >
                        Today, 8.36pm
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row font-roboto gap-[15px] items-center justify-between mt-[207px] w-full">
                      <div className="bg-light_blue-A700_6c flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[9px] rounded-[25px]">
                        <Img
                          className="h-[27px] ml-1 sm:ml-[0] sm:mt-0 my-0.5 w-[27px]"
                          src="images/img_link.svg"
                          alt="link"
                        />
                        <Text
                          className="ml-5 sm:ml-[0] text-blue_gray-900_05 text-xl tracking-[1.00px]"
                          size="txtRobotoRomanLight20"
                        >
                          Type your message here...
                        </Text>
                        <Img
                          className="h-[27px] sm:ml-[0] ml-[107px] w-[27px]"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <Img
                          className="h-6 ml-4 sm:ml-[0] w-6"
                          src="images/img_camera.svg"
                          alt="camera"
                        />
                      </div>
                      <Button
                        className="flex h-[50px] items-center justify-center rounded-[20px] w-[50px]"
                        color="light_blue_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_microphone_white_a700.svg"
                          alt="microphone"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col font-roboto inset-x-[0] justify-start mx-auto top-[9%] w-[98%]">
                  <Line className="bg-gray-500_a8 h-px w-full" />
                  <div className="h-11 md:h-[61px] mt-6 relative w-[27%]">
                    <div className="absolute bg-gray-300_01 flex flex-col items-start justify-end p-[9px] right-[0] rounded-[19px] top-[0]">
                      <Text
                        className="ml-2.5 md:ml-[0] text-base text-blue_gray-900_05"
                        size="txtRobotoRomanRegular16"
                      >
                        Hey There!
                      </Text>
                    </div>
                    <div className="absolute bg-gray-200_01 bottom-[0] h-[11px] left-[0] rounded-[5px] w-[11px]"></div>
                  </div>
                  <div className="md:h-[45px] h-[46px] mt-2 relative w-[32%]">
                    <div className="absolute bg-gray-300_01 flex flex-col items-start justify-end p-2 right-[0] rounded-[19px] top-[0]">
                      <Text
                        className="md:ml-[0] ml-[13px] mt-0.5 text-base text-blue_gray-900_05"
                        size="txtRobotoRomanRegular16"
                      >
                        How are you?
                      </Text>
                    </div>
                    <div className="absolute bg-gray-200_01 bottom-[0] h-[11px] left-[0] rounded-[5px] w-[11px]"></div>
                  </div>
                  <div className="flex flex-row items-end justify-end md:ml-[0] ml-[468px] mt-[35px] w-[17%] md:w-full">
                    <Text
                      className="bg-light_blue-A700 h-[38px] justify-center mb-1 sm:pl-5 pl-[26px] pr-[15px] py-[9px] rounded-[19px] text-base text-white-A700 w-[82px]"
                      size="txtRobotoRomanRegular16WhiteA700"
                    >
                      Hello!
                    </Text>
                    <div className="bg-light_blue-A700 h-[11px] mt-[30px] rounded-[5px] w-[11px]"></div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[461px] text-gray-600 text-xs tracking-[0.60px]"
                    size="txtRobotoRomanLight12"
                  >
                    Today, 8.33pm
                  </Text>
                  <div className="flex flex-row items-end justify-end md:ml-[0] ml-[314px] mt-[21px] w-[45%] md:w-full">
                    <div className="bg-light_blue-A700 flex flex-col items-end justify-end mb-1 p-[7px] rounded-[19px]">
                      <Text
                        className="mr-[7px] mt-[3px] text-base text-white-A700"
                        size="txtRobotoRomanRegular16WhiteA700"
                      >
                        I am fine and how are you?
                      </Text>
                    </div>
                    <div className="bg-light_blue-A700 h-[11px] ml-0.5 mt-[30px] rounded-[5px] w-[11px]"></div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[460px] text-gray-600 text-xs tracking-[0.60px]"
                    size="txtRobotoRomanLight12"
                  >
                    Today, 8.34pm
                  </Text>
                  <div className="font-poppins h-11 md:h-[69px] mt-[33px] relative w-[74%] sm:w-full">
                    <div className="absolute bg-gray-300_01 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[5px] rounded-[19px] top-[0]">
                      <Text
                        className="ml-3.5 md:ml-[0] mt-0.5 text-base text-blue_gray-900_05"
                        size="txtPoppinsRegular16Bluegray90005"
                      >
                        I am doing well, Can we meet tomorrow?
                      </Text>
                    </div>
                    <div className="absolute bg-gray-200_01 bottom-[0] h-[11px] left-[0] rounded-[5px] w-[11px]"></div>
                  </div>
                  <div className="flex flex-row font-roboto items-end justify-end md:ml-[0] ml-[420px] mt-[29px] w-[26%] md:w-full">
                    <Text
                      className="bg-light_blue-A700 h-[38px] justify-center mb-1 sm:pl-5 pl-[35px] pr-[15px] py-[9px] rounded-[19px] text-base text-white-A700 w-[129px]"
                      size="txtRobotoRomanRegular16WhiteA700"
                    >
                      Yes Sure!
                    </Text>
                    <div className="bg-light_blue-A700 h-[11px] mt-[30px] rounded-[5px] w-[11px]"></div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[460px] text-gray-600 text-xs tracking-[0.60px]"
                    size="txtRobotoRomanLight12"
                  >
                    Today, 8.58pm
                  </Text>
                </div>
                <Img
                  className="absolute h-[25px] right-[0] top-[2%] w-[25px]"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu"
                />
                <Img
                  className="absolute h-[25px] right-[7%] top-[2%] w-[25px]"
                  src="images/img_videocamera_light_blue_a700.svg"
                  alt="videocamera"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoKYCFivePage;
