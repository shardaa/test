import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";
import VideoKYCRowyear from "components/VideoKYCRowyear";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const VideoKYCPage: React.FC = () => {
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
          <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
            <Header className="flex flex-col items-center justify-center w-full" />
            <div className="md:h-[1484px] sm:h-[5128px] h-[826px] relative w-full">
              <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[1%] w-full" />
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
                <div className="md:h-[1484px] sm:h-[5128px] h-[826px] pl-[5px] pt-[5px] relative w-full">
                  <div className="bg-white-A700 h-[797px] m-auto rounded-[20px] shadow-bs1 w-full"></div>
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <Line className="bg-gray-100_03 h-0.5 w-full" />
                    <div className="md:h-[1482px] sm:h-[5126px] h-[721px] relative w-full">
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[2%] w-full">
                        <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start w-full">
                          <div className="flex flex-col gap-2.5 justify-start w-[94%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                01 Nov | Mon
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                02 Nov | Tue
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                03 Nov | Wed
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                04 Nov | Thur
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                05 Nov | Fri
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                06 Nov | Sat
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                07 Nov | Sun
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium min-w-[140px] md:ml-[0] ml-[135px] mr-[788px] outline outline-[1px] outline-light_blue-A700_02 rounded-[5px] text-center text-sm"
                              shape="round"
                              color="blue_50_02"
                              size="xs"
                              variant="fill"
                            >
                              Week Off
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-end pt-[21px] sm:px-5 px-[21px] w-full">
                            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-3 md:ml-[0] w-[98%] md:w-full">
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                08 Nov | Mon
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                09 Nov | Tue
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                10 Nov | Wed
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                11 Nov | Thur
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                12 Nov | Fri
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                13 Nov | Sat
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                14 Nov | Sun
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium min-w-[140px] md:ml-[0] ml-[474px] mt-[11px] outline outline-[1px] outline-red-600 rounded-[5px] text-center text-sm"
                              shape="round"
                              color="red_100"
                              size="xs"
                              variant="fill"
                            >
                              Leave
                            </Button>
                            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-3.5 md:ml-[0] mt-[82px] w-[98%] md:w-full">
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                15 Nov | Mon
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                16 Nov | Tue
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                17 Nov | Wed
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                18 Nov | Thur
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                19 Nov | Fri
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                20 Nov | Sat
                              </Text>
                              <Text
                                className="text-blue_gray-900 text-center text-sm"
                                size="txtPoppinsMedium14Bluegray900"
                              >
                                21 Nov | Sun
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[22px] items-center justify-start md:ml-[0] ml-[150px] mt-[15px] w-[28%] md:w-full">
                              <Button
                                className="cursor-pointer font-medium min-w-[140px] outline outline-[1px] outline-red-600 rounded-[5px] text-center text-sm"
                                shape="round"
                                color="red_100"
                                size="xs"
                                variant="fill"
                              >
                                Diwali
                              </Button>
                              <Button
                                className="cursor-pointer font-medium min-w-[140px] outline outline-[1px] outline-red-600 rounded-[5px] text-center text-sm"
                                shape="round"
                                color="red_100"
                                size="xs"
                                variant="fill"
                              >
                                Viskerma Day
                              </Button>
                            </div>
                            <List
                              className="flex flex-col gap-[62.5px] items-center ml-3 md:ml-[0] mt-[78px] w-[98%]"
                              orientation="vertical"
                            >
                              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                                <Text
                                  className="text-blue_gray-900 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray900"
                                >
                                  22 Nov | Mon
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray900"
                                >
                                  23 Nov | Tue
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray900"
                                >
                                  24 Nov | Wed
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray900"
                                >
                                  25 Nov | Thur
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray900"
                                >
                                  26 Nov | Fri
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray900"
                                >
                                  27 Nov | Sat
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray900"
                                >
                                  28 Nov | Sun
                                </Text>
                              </div>
                              <Line className="self-center h-0.5 bg-gray-100_03 w-full" />
                              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                                <Text
                                  className="text-blue_gray-900 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray900"
                                >
                                  29 Nov | Mon
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray900"
                                >
                                  30 Nov | Tue
                                </Text>
                                <Text
                                  className="text-blue_gray-900_87 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray90087"
                                >
                                  01 Dec | Wed
                                </Text>
                                <Text
                                  className="text-blue_gray-900_87 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray90087"
                                >
                                  02 Dec | Thru
                                </Text>
                                <Text
                                  className="text-blue_gray-900_87 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray90087"
                                >
                                  03 Dec | Fri
                                </Text>
                                <Text
                                  className="text-blue_gray-900_87 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray90087"
                                >
                                  04 Dec | Sat
                                </Text>
                                <Text
                                  className="text-blue_gray-900_87 text-center text-sm"
                                  size="txtPoppinsMedium14Bluegray90087"
                                >
                                  05 Dec | Sun
                                </Text>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                      <List
                        className="absolute sm:flex-col flex-row md:gap-10 gap-40 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 inset-[0] justify-center m-auto w-[72%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gray-100_03 h-[721px] w-0.5" />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gray-100_03 h-[721px] w-0.5" />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gray-100_03 h-[721px] w-0.5" />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gray-100_03 h-[721px] w-0.5" />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gray-100_03 h-[721px] w-0.5" />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gray-100_03 h-[721px] w-0.5" />
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto top-[4%] w-[93%]">
                    <div className="flex flex-row gap-9 items-center justify-center w-[24%] sm:w-full">
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
                        November 2023
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
                    <VideoKYCRowyear className="flex flex-row items-center justify-start shadow-bs2 w-auto" />
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

export default VideoKYCPage;
