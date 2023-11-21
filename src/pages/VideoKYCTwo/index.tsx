import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";
import VideoKYCTwoColumnarrowleft from "components/VideoKYCTwoColumnarrowleft";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const VideoKYCTwoPage: React.FC = () => {
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
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto pr-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[255px] flex h-screen md:hidden justify-start overflow-auto shadow-bs3 top-[0]" />
          <div className="flex flex-1 flex-col gap-3 items-center justify-start md:mt-0 mt-5 w-full">
            <Header className="flex flex-col items-center justify-center w-full" />
            <div className="h-[1015px] md:h-[2399px] sm:h-[859px] relative w-full">
              <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[1%] w-full" />
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[98%]">
                <div className="h-[1015px] md:h-[2399px] sm:h-[859px] pl-[5px] py-[5px] relative w-full">
                  <div className="absolute sm:h-[790px] h-[828px] md:h-[980px] inset-x-[0] mx-auto top-[3%] w-full">
                    <VideoKYCTwoColumnarrowleft className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[29px] sm:px-5 px-[29px] rounded-[20px] shadow-bs1 top-[0] w-full" />
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pb-[76px] w-full">
                      <Line className="bg-gray-100_03 h-0.5 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[89px] mt-[25px] w-[90%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-center text-xs"
                          size="txtPoppinsBold12"
                        >
                          20 Nov | Monday
                        </Text>
                        <Text
                          className="ml-12 md:ml-[0] text-blue_gray-900 text-center text-xs"
                          size="txtPoppinsBold12"
                        >
                          21 Nov | Tuesday
                        </Text>
                        <Text
                          className="ml-10 md:ml-[0] text-blue_gray-900 text-center text-xs"
                          size="txtPoppinsBold12"
                        >
                          23 Nov | Wednesday
                        </Text>
                        <Text
                          className="ml-8 md:ml-[0] text-blue_gray-900 text-center text-xs"
                          size="txtPoppinsBold12"
                        >
                          24 Nov | Thrusday
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[49px] text-blue_gray-900 text-center text-xs"
                          size="txtPoppinsBold12"
                        >
                          24 Nov | Friday
                        </Text>
                        <Text
                          className="ml-12 md:ml-[0] text-blue_gray-900 text-center text-xs"
                          size="txtPoppinsBold12"
                        >
                          24 Nov | Saturday
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[47px] text-blue_gray-900 text-center text-xs"
                          size="txtPoppinsBold12"
                        >
                          24 Nov | Sunday
                        </Text>
                      </div>
                      <Line className="bg-gray-100_03 h-0.5 mt-6 w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[42px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[42px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                      <Line className="bg-gray-100_03 h-0.5 mt-[45px] w-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-[2%] flex flex-col items-start justify-start left-[2%] pb-[211px] w-[4%]">
                    <Img
                      className="h-[30px] ml-1 md:ml-[0] w-[30px]"
                      src="images/img_clock_blue_gray_900.svg"
                      alt="clock"
                    />
                    <Text
                      className="mt-[45px] text-blue_gray-900 text-center text-xs"
                      size="txtPoppinsBold12"
                    >
                      08 AM
                    </Text>
                    <Text
                      className="mt-[51px] text-blue_gray-900 text-center text-xs"
                      size="txtPoppinsBold12"
                    >
                      09 AM
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[51px] text-blue_gray-900 text-center text-xs"
                      size="txtPoppinsBold12"
                    >
                      10 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[52px] text-blue_gray-900 text-center text-xs"
                      size="txtPoppinsBold12"
                    >
                      11 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[51px] text-blue_gray-900 text-center text-xs"
                      size="txtPoppinsBold12"
                    >
                      12 PM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[52px] text-blue_gray-900 text-center text-xs"
                      size="txtPoppinsBold12"
                    >
                      01 PM
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[51px] text-blue_gray-900 text-center text-xs"
                      size="txtPoppinsBold12"
                    >
                      02 PM
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[52px] text-blue_gray-900 text-center text-xs"
                      size="txtPoppinsBold12"
                    >
                      03 PM
                    </Text>
                    <Text
                      className="mt-[51px] text-blue_gray-900 text-center text-xs"
                      size="txtPoppinsBold12"
                    >
                      04 PM
                    </Text>
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[0] top-[10%] w-[94%]">
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[147px] grid sm:grid-cols-1 grid-cols-4 w-[43%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                        <Line className="bg-gray-100_03 h-[676px] w-0.5" />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                        <Line className="bg-gray-100_03 h-[676px] w-0.5" />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                        <Line className="bg-gray-100_03 h-[676px] w-0.5" />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                        <Line className="bg-gray-100_03 h-[676px] w-0.5" />
                      </div>
                    </List>
                    <div className="bg-blue-50_02 flex flex-col md:gap-10 gap-[266px] items-center justify-start md:mt-0 mt-[69px] outline outline-[1px] outline-light_blue-A700_01 p-2.5 rounded-[5px] w-[15%] md:w-full">
                      <div className="bg-blue-50_02 h-5 rounded-[5px] w-5"></div>
                      <Text
                        className="mb-[279px] text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsMedium14Bluegray900"
                      >
                        Week Off
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[148px] grid grid-cols-3 w-[29%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                        <Line className="bg-gray-100_03 h-[676px] w-0.5" />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                        <Line className="bg-gray-100_03 h-[676px] w-0.5" />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                        <Line className="bg-gray-100_03 h-[676px] w-0.5" />
                      </div>
                    </List>
                    <div className="bg-red-100 flex flex-col items-center justify-end md:mt-0 mt-[69px] outline outline-[1px] outline-red-600 p-[17px] rounded-[5px]">
                      <Text
                        className="leading-[20.00px] mb-[233px] mt-[280px] text-blue_gray-900 text-center text-sm w-full"
                        size="txtPoppinsMedium14Bluegray900"
                      >
                        On Leave due to high fever and staomach pain
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoKYCTwoPage;
