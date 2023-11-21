import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

import "react-circular-progressbar/dist/styles.css";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const VideoKYCOnePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_grid_light_blue_a700.svg"
          alt="grid"
        />
      ),
      label: "KYC History",
    },
    {
      label: (
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_group_white_a700.svg"
            alt="group"
          />
          <Text className="w-auto">Rejection List </Text>
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
          <Text className="w-auto">Members</Text>
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
          <Text className="w-auto">Add Members</Text>
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
          <Text className="w-auto">Leave Records</Text>
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
        <div className="flex md:flex-col flex-row gap-[11px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[255px] flex h-screen md:hidden justify-start overflow-auto shadow-bs3 top-[0]"
          >
            <div className="flex flex-row gap-2.5 items-center justify-center mb-[887px] ml-7 mr-[53px] mt-[27px] w-auto">
              <Img
                className="h-[30px] w-[31px]"
                src="images/img_group1171275830_25.svg"
                alt="group1171275830"
              />
              <Text
                className="text-white-A700 text-xl w-[104px]"
                size="txtPoppinsSemiBold20"
              >
                Video KYC
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  flexDirection: "column",
                  gap: "14px",
                  color: "#ffffff87",
                  fontWeight: 500,
                  fontSize: "14px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  [`&:hover, &.ps-active`]: {
                    color: "#007afe",
                    position: "relative",
                  },
                },
              }}
              className="h-[414px] md:h-[933px] mb-[406px] mt-[125px] sm:pr-5 pr-7 relative w-[90%]"
            >
              <div className="absolute bg-white-A700 h-12 inset-x-[0] mx-auto rounded-[12px] top-[0] w-full"></div>
              <div className="absolute bottom-[0] flex flex-col gap-[30px] inset-x-[0] items-center justify-start mx-auto w-auto">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </Menu>
            {!collapsed && (
              <div className="h-[195px] md:h-[900px] mb-44 ml-[25px] mr-[62px] mt-[574px] relative w-[66%]">
                <Img
                  className="h-[150px] mx-auto object-cover w-[150px]"
                  src="images/img_object.png"
                  alt="object"
                />
                <div className="absolute bg-light_blue-200_75 h-[195px] inset-[0] justify-center m-auto p-[15px] rounded-[20px] w-full">
                  <Img
                    className="h-[43px] mb-[-8px] mt-auto mx-auto object-cover z-[1]"
                    src="images/img_vector8.png"
                    alt="vectorEight"
                  />
                  <div className="bg-light_blue-A700 flex flex-col items-center justify-end mt-auto mx-auto p-[5px] rounded-[10px]">
                    <Text
                      className="mt-[3px] text-white-A700 text-xs"
                      size="txtPoppinsSemiBold12"
                    >
                      Upgrade Now
                    </Text>
                  </div>
                </div>
              </div>
            )}
            {!collapsed && (
              <Button
                className="flex h-[30px] items-center justify-center mb-[888px] ml-[225px] mt-[27px] shadow-bs4 w-[30px]"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img className="h-3.5" src="images/img_icons.svg" alt="icons" />
              </Button>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <Header className="flex flex-col items-center justify-center w-full" />
            <Line className="bg-black-900_19 h-px mt-[21px] w-full" />
            <div className="flex flex-col items-center justify-start mt-6 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[116px] justify-start max-w-[1149px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-light_blue-A700_6c flex flex-1 flex-col gap-2 h-full items-start justify-start rounded-[10px] w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Button
                        className="flex h-11 items-center justify-center rounded-[50%] w-11"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_airport.svg"
                          alt="airport"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsRegular14Black90099"
                        >
                          Total KYC done today
                        </Text>
                        <Text
                          className="text-[22px] text-black-900_99_01 sm:text-lg md:text-xl w-auto"
                          size="txtPoppinsBold22"
                        >
                          1224+
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-start justify-start w-[195px]">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsRegular14Black90099"
                        >
                          Last month
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsSemiBold14"
                        >
                          1550+
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="text-green-A700_99 text-sm w-auto"
                          size="txtPoppinsSemiBold14GreenA70099"
                        >
                          15%
                        </Text>
                        <div className="flex flex-col items-center justify-center w-4">
                          <Img
                            className="h-4 w-4"
                            src="images/img_cursor.svg"
                            alt="cursor"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light_blue-400_75 flex flex-col gap-2 h-[116px] md:h-auto items-start justify-start rounded-[10px] w-auto">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Button
                        className="flex h-11 items-center justify-center rounded-[50%] w-11"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_airport_gray_900.svg"
                          alt="airport"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsRegular14Black90099"
                        >
                          Successfully Completed
                        </Text>
                        <Text
                          className="text-[22px] text-black-900_99_01 sm:text-lg md:text-xl w-auto"
                          size="txtPoppinsBold22"
                        >
                          1758+
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsRegular14Black90099"
                        >
                          Last month
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsSemiBold14"
                        >
                          1550+
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-between w-[50px]">
                        <Text
                          className="text-red-600_99 text-sm w-auto"
                          size="txtPoppinsSemiBold14Red60099"
                        >
                          10%
                        </Text>
                        <div className="flex flex-col items-center justify-center rounded-[50%] w-4">
                          <Img
                            className="h-4 rounded-[50%] w-4"
                            src="images/img_airplane.svg"
                            alt="airplane"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light_blue-A200_90 flex flex-1 flex-col gap-2 h-full items-start justify-start rounded-[10px] w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Button
                        className="flex h-11 items-center justify-center rounded-[50%] w-11"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_departure1.svg"
                          alt="departureOne"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsRegular14Black90099"
                        >
                          In Process
                        </Text>
                        <Text
                          className="text-[22px] text-black-900_99_01 sm:text-lg md:text-xl w-auto"
                          size="txtPoppinsBold22"
                        >
                          87+
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsRegular14Black90099"
                        >
                          Last month
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsSemiBold14"
                        >
                          110+
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="text-green-A700_99 text-sm w-auto"
                          size="txtPoppinsSemiBold14GreenA70099"
                        >
                          18%
                        </Text>
                        <div className="flex flex-col items-center justify-center rounded-[50%] w-4">
                          <Img
                            className="h-4 rounded-[50%] w-4"
                            src="images/img_cursor.svg"
                            alt="cursor"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-200_a2 flex flex-1 flex-col gap-2 h-full items-start justify-start rounded-[10px] w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Button
                        className="flex h-11 items-center justify-center rounded-[50%] w-11"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_hotel.svg"
                          alt="hotel"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsRegular14Black90099"
                        >
                          Rejected
                        </Text>
                        <Text
                          className="text-[22px] text-black-900_99_01 sm:text-lg md:text-xl w-auto"
                          size="txtPoppinsBold22"
                        >
                          110+
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsRegular14Black90099"
                        >
                          Last week
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtPoppinsSemiBold14"
                        >
                          150+
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="text-green-A700_99 text-sm w-auto"
                          size="txtPoppinsSemiBold14GreenA70099"
                        >
                          15%
                        </Text>
                        <div className="flex flex-col items-center justify-center rounded-[50%] w-4">
                          <Img
                            className="h-4 rounded-[50%] w-4"
                            src="images/img_cursor_green_a700.svg"
                            alt="cursor"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                  <div className="bg-white-A700 border border-black-900_33 border-solid flex md:flex-1 flex-col items-center justify-start p-[21px] sm:px-5 rounded-[10px] w-[61%] md:w-full">
                    <div className="flex flex-col items-end justify-start mb-1 w-full">
                      <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                        <div className="flex flex-row sm:gap-10 gap-48 items-center justify-start max-w-[651px] w-full">
                          <Text
                            className="flex-1 text-gray-900 text-lg w-auto"
                            size="txtPoppinsBold18"
                          >
                            Reports
                          </Text>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer flex h-[34px] items-center justify-center rounded-[17px] w-[106px]"
                            rightIcon={
                              <Img
                                className="h-3.5 mt-0.5 mb-[3px] ml-2.5"
                                src="images/img_icons_gray_900.svg"
                                alt="icons"
                              />
                            }
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <div className="!text-gray-900 leading-[normal] text-left text-sm tracking-[0.14px]">
                              Yearly
                            </div>
                          </Button>
                        </div>
                        <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between w-[99%] md:w-full">
                          <div className="flex flex-col gap-[33px] items-start justify-start">
                            <Text
                              className="text-black-900_99 text-right text-xs"
                              size="txtPoppinsRegular12"
                            >
                              100
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[3px] text-black-900_99 text-right text-xs"
                              size="txtPoppinsRegular12"
                            >
                              80
                            </Text>
                            <Text
                              className="ml-1 md:ml-[0] text-black-900_99 text-right text-xs"
                              size="txtPoppinsRegular12"
                            >
                              60
                            </Text>
                            <Text
                              className="ml-1 md:ml-[0] text-black-900_99 text-right text-xs"
                              size="txtPoppinsRegular12"
                            >
                              40
                            </Text>
                            <Text
                              className="ml-1 md:ml-[0] text-black-900_99 text-right text-xs"
                              size="txtPoppinsRegular12"
                            >
                              20
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[11px] text-black-900_99 text-right text-xs"
                              size="txtPoppinsRegular12"
                            >
                              0
                            </Text>
                          </div>
                          <div className="md:h-[255px] h-[266px] relative w-[95%] md:w-full">
                            <div className="md:h-[255px] h-[266px] m-auto w-full">
                              <div className="absolute md:h-[255px] h-[266px] inset-[0] justify-center m-auto w-full">
                                <Img
                                  className="absolute h-[255px] inset-x-[0] mx-auto top-[0]"
                                  src="images/img_line.svg"
                                  alt="line"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[181px] inset-x-[0] items-center justify-start mx-auto pb-1 px-1 w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group149.png')",
                                  }}
                                >
                                  <Img
                                    className="h-[137px] mb-[39px]"
                                    src="images/img_vector.svg"
                                    alt="vector"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[15%] h-[150px] inset-x-[0] mx-auto"
                                src="images/img_elipes.svg"
                                alt="elipes"
                              />
                            </div>
                            <div className="absolute bottom-[5%] flex flex-col gap-[26px] items-center justify-start right-[38%] w-[15%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-16 items-center justify-start p-[7px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_tooltip.svg')",
                                }}
                              >
                                <div className="flex flex-col h-[43px] items-center justify-start mb-[5px] w-[43px]">
                                  <Text
                                    className="text-white-A700_a2 text-xs"
                                    size="txtPoppinsRegular12WhiteA700a2"
                                  >
                                    KYC
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtPoppinsSemiBold16"
                                  >
                                    2,678
                                  </Text>
                                </div>
                              </div>
                              <Line className="bg-light_blue-A700 h-[108px] w-px" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[3px] w-[95%] md:w-full">
                        <div className="flex md:flex-col flex-row gap-[31px] items-start justify-start w-[613px] md:w-full">
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Jan
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Feb
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Mar
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Apr
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            May
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Jun
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            Jul
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Aug
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Sep
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Oct
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Nov
                          </Text>
                          <Text
                            className="text-black-900_99 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Dec
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900_33 border-solid md:h-[299px] h-[406px] md:mt-0 mt-0.5 p-[25px] sm:px-5 relative rounded-[10px] w-[38%] md:w-full">
                    <div className="absolute h-[321px] inset-[0] justify-center m-auto w-[85%]">
                      <div className="md:h-[299px] h-[301px] mb-[-2.19px] mx-auto w-[85%] z-[1]">
                        <div className="h-[301px] m-auto w-full">
                          <div className="absolute bg-blue-100_02 h-[291px] inset-[0] justify-center m-auto rotate-[-118deg] rounded-[147px] w-[97%]"></div>
                          <div className="absolute bg-blue-300_01 h-[301px] inset-[0] justify-center m-auto rotate-[-36deg] rounded-[152px] w-full"></div>
                          <div className="!w-[72%] absolute h-[216px] inset-[0] justify-center m-auto overflow-visible rounded-[50%] shadow-bs8">
                            <CircularProgressbar
                              className="!w-[72%] absolute h-[216px] inset-[0] justify-center m-auto overflow-visible rounded-[50%] shadow-bs8"
                              value={63}
                              strokeWidth={17}
                              styles={{
                                trail: { strokeWidth: 50, stroke: "" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(78deg)",
                                  stroke: "#007afe",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                        </div>
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[15%] w-[96%]">
                          <div className="flex flex-col md:gap-10 gap-[90px] justify-start">
                            <Button
                              className="!text-black-900_99 cursor-pointer leading-[normal] min-w-[49px] ml-7 md:ml-[0] rounded-[18px] shadow-bs9 text-center text-sm"
                              color="white_A700"
                              size="sm"
                              variant="fill"
                            >
                              20
                            </Button>
                            <Button
                              className="!text-black-900_99 cursor-pointer leading-[normal] min-w-[50px] mr-[27px] rounded-[18px] shadow-bs9 text-center text-sm"
                              color="white_A700"
                              size="sm"
                              variant="fill"
                            >
                              40
                            </Button>
                          </div>
                          <Button
                            className="!text-black-900_99 cursor-pointer leading-[normal] mb-10 min-w-[55px] mt-[87px] rounded-[18px] shadow-bs9 text-center text-sm"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            140
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[15px] h-[21px] md:h-auto items-start justify-start mt-auto mx-auto w-[361px]">
                        <div className="flex flex-col items-center justify-start w-[33%]">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <div className="bg-light_blue-A700 h-[15px] rounded-[5px] w-[15px]"></div>
                            <Text
                              className="text-black-900_99 text-sm w-auto"
                              size="txtPoppinsSemiBold14"
                            >
                              Available 140
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[22%]">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <div className="bg-blue-300_02 h-[15px] rounded-[5px] w-[15px]"></div>
                            <Text
                              className="text-black-900_99 text-sm w-auto"
                              size="txtPoppinsSemiBold14"
                            >
                              Busy 40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[31%]">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <div className="bg-blue-100_01 h-[15px] rounded-[5px] w-[15px]"></div>
                            <Text
                              className="text-black-900_99 text-sm w-auto"
                              size="txtPoppinsSemiBold14"
                            >
                              On Leave 20
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="absolute left-[6%] text-gray-900 text-lg top-[6%]"
                      size="txtPoppinsBold18"
                    >
                      Agent Availability
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="bg-white-A700 border border-black-900_33 border-solid flex md:flex-1 flex-col gap-[11px] items-center justify-end p-[5px] rounded-[10px] w-[67%] md:w-full">
                    <div className="flex flex-row sm:gap-10 gap-48 items-center justify-start max-w-[701px] mt-3.5 w-full">
                      <Text
                        className="flex-1 text-gray-900 text-lg w-auto"
                        size="txtPoppinsBold18"
                      >
                        Recent KYC
                      </Text>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[85px] rounded-[17px]"
                          leftIcon={
                            <Img
                              className="h-[15px] mt-[3px] mb-0.5 mr-2"
                              src="images/img_filterfilledtoolsymbol.svg"
                              alt="filter-filled-tool-symbol"
                            />
                          }
                          color="gray_900_a2"
                          size="sm"
                          variant="outline"
                        >
                          <div className="leading-[normal] text-left text-sm tracking-[0.14px]">
                            Filter
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="h-[173px] md:h-[386px] relative w-[96%] md:w-full">
                      <List
                        className="absolute sm:flex-col flex-row md:gap-10 gap-[115px] grid md:grid-cols-1 grid-cols-2 h-[173px] inset-[0] justify-start m-auto max-w-[701px] w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-row gap-20 items-start justify-start w-[342px]">
                          <div className="flex flex-col gap-5 items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Text
                                className="text-black-900_01 text-xs w-auto"
                                size="txtPoppinsSemiBold12Black90001"
                              >
                                Unique ID
                              </Text>
                              <Img
                                className="h-3.5 w-1.5"
                                src="images/img_sort.svg"
                                alt="sort"
                              />
                            </div>
                            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                #8763644253
                              </Text>
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                #87637643212
                              </Text>
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                #8763874442
                              </Text>
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                #8763874442
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-5 items-start justify-start w-[169px]">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Text
                                className="text-black-900_01 text-xs w-auto"
                                size="txtPoppinsSemiBold12Black90001"
                              >
                                Customer Name
                              </Text>
                              <Img
                                className="h-3.5 w-1.5"
                                src="images/img_sort.svg"
                                alt="sort_One"
                              />
                            </div>
                            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                Mr. Anshuman Mishra
                              </Text>
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                Mr. Vineet Kumar Rai
                              </Text>
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                Mrs. kalpaha Sharma Dutt
                              </Text>
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                Mrs. Meena Kumari Negi
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[125px] items-start justify-between w-full">
                          <div className="flex flex-col gap-5 items-start justify-start w-[118px]">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Text
                                className="text-black-900_01 text-xs w-auto"
                                size="txtPoppinsSemiBold12Black90001"
                              >
                                Agent Name
                              </Text>
                              <Img
                                className="h-3.5 w-1.5"
                                src="images/img_sort.svg"
                                alt="sort"
                              />
                            </div>
                            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                Mr Rajesh Sharma
                              </Text>
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                Mr Rajesh Sharma
                              </Text>
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                Mr Rajesh Sharma
                              </Text>
                              <Text
                                className="text-[13px] text-black-900_01 w-auto"
                                size="txtPoppinsRegular13Black90001"
                              >
                                Mr Rajesh Sharma
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-black-900_01 text-xs w-auto"
                                size="txtPoppinsSemiBold12Black90001"
                              >
                                Status
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                              <Text
                                className="text-[13px] text-light_green-A700 w-auto"
                                size="txtPoppinsSemiBold13"
                              >
                                Sucess
                              </Text>
                              <Text
                                className="text-[13px] text-light_green-A700 w-auto"
                                size="txtPoppinsSemiBold13"
                              >
                                Success
                              </Text>
                              <Text
                                className="text-[13px] text-orange-600 w-auto"
                                size="txtPoppinsSemiBold13Orange600"
                              >
                                Pending
                              </Text>
                              <Text
                                className="text-[13px] text-orange-600 w-auto"
                                size="txtPoppinsSemiBold13Orange600"
                              >
                                Pending
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="absolute flex flex-col gap-[35px] h-max inset-[0] items-center justify-center m-auto w-full">
                        <Line className="bg-black-900_5e h-px w-full" />
                        <Line className="bg-black-900_5e h-px w-full" />
                        <Line className="bg-black-900_5e h-px w-full" />
                        <Line className="bg-black-900_5e h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-[245px] md:h-auto items-center justify-center w-[366px]">
                    <div className="flex flex-col h-[244px] md:h-auto items-start justify-start w-full">
                      <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start mb-[15px] mt-[3px] w-full">
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-gray-900 text-lg w-auto"
                              size="txtPoppinsBold18"
                            >
                              Average Video Call Time
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[34px] items-center justify-between mt-[26px] w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-auto">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtPoppinsRegular14Black90099"
                              >
                                Total Video Call Time
                              </Text>
                              <Text
                                className="text-lg text-light_blue-A700 w-auto"
                                size="txtPoppinsSemiBold18LightblueA700"
                              >
                                150 Hours
                              </Text>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-start w-auto">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtPoppinsRegular14Black90099"
                              >
                                Successful KYC Time{" "}
                              </Text>
                              <Text
                                className="text-lg text-light_blue-A700 w-auto"
                                size="txtPoppinsSemiBold18LightblueA700"
                              >
                                110 Hours
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-12 items-center justify-start mt-7 w-[94%] md:w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-auto">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtPoppinsRegular14Black90099"
                              >
                                Rejection Call Time
                              </Text>
                              <Text
                                className="text-lg text-red-600 w-auto"
                                size="txtPoppinsSemiBold18Red600"
                              >
                                1 Hours
                              </Text>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-start w-auto">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtPoppinsRegular14Black90099"
                              >
                                Waiting Call Time
                              </Text>
                              <Text
                                className="text-lg text-orange-600_01 w-auto"
                                size="txtPoppinsSemiBold18Orange60001"
                              >
                                3 Hours
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default VideoKYCOnePage;
