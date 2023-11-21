import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const VideoKYCThreePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: <Img className="h-6 w-6" src="images/img_grid.svg" alt="grid" />,
      label: "Video KYC",
      href: "/videokycconsent",
      active: window.location.pathname === "/videokycconsent",
    },
    {
      label: (
        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
          <Img className="h-6 w-6" src="images/img_group.svg" alt="group" />
          <Text className="text-light_blue-A700 w-auto">
            Appointment History
          </Text>
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
          <Text className="w-auto">Rejection List</Text>
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
          <Text className="w-auto">Leave</Text>
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
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[255px] flex h-screen md:hidden justify-start overflow-auto shadow-bs3 top-[0]"
          >
            <div className="flex flex-row gap-2.5 items-center justify-center mb-[878px] ml-7 mr-[53px] mt-[27px] w-auto">
              <Img
                className="h-[30px] w-[31px]"
                src="images/img_group1171275830_12.svg"
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
                    color: "#ffffff",
                    position: "relative",
                  },
                },
              }}
              className="h-[402px] md:h-[936px] mb-[409px] mt-[125px] sm:pr-5 pr-7 pt-[41px] relative w-[90%]"
            >
              <div className="absolute bg-white-A700 h-12 inset-x-[0] mx-auto rounded-[12px] top-[10%] w-full"></div>
              <div className="absolute bottom-[0] flex flex-col gap-[30px] inset-x-[0] items-center justify-start mx-auto w-auto">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </Menu>
            {!collapsed && (
              <div className="h-[195px] md:h-[891px] mb-[179px] ml-[25px] mr-[62px] mt-[562px] relative w-[66%]">
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
                className="flex h-[30px] items-center justify-center mb-[879px] ml-[225px] mt-[27px] shadow-bs4 w-[30px]"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img className="h-3.5" src="images/img_icons.svg" alt="icons" />
              </Button>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-6 justify-start md:mt-0 mt-5 w-full">
            <div className="flex flex-col gap-[21px] items-center justify-start w-full">
              <Header className="flex flex-col items-center justify-center w-full" />
              <Line className="bg-black-900_19 h-px w-full" />
            </div>
            <div className="bg-white-A700 flex flex-col gap-[17px] items-center justify-end ml-2.5 md:ml-[0] mr-[606px] p-4 rounded-lg shadow-bs6 w-[48%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-center justify-start mt-[3px] w-[471px] sm:w-full">
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
                  className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-lg text-[15px] text-center"
                  shape="round"
                  color="light_blue_A700"
                  size="sm"
                  variant="fill"
                >
                  View History
                </Button>
              </div>
              <List
                className="flex flex-col gap-4 items-center pt-2.5 px-2.5 w-[96%]"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-center justify-start w-[471px] sm:w-full">
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-lg text-[15px] text-center"
                    shape="round"
                    color="light_blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    View History
                  </Button>
                </div>
                <Line className="self-center h-px bg-gray-500_a8 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-center justify-start w-[471px] sm:w-full">
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-lg text-[15px] text-center"
                    shape="round"
                    color="light_blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    View History
                  </Button>
                </div>
                <Line className="self-center h-px bg-gray-500_a8 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-center justify-start w-[471px] sm:w-full">
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-lg text-[15px] text-center"
                    shape="round"
                    color="light_blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    View History
                  </Button>
                </div>
                <Line className="self-center h-px bg-gray-500_a8 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-center justify-start w-[471px] sm:w-full">
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-lg text-[15px] text-center"
                    shape="round"
                    color="light_blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    View History
                  </Button>
                </div>
                <Line className="self-center h-px bg-gray-500_a8 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-center justify-start w-[471px] sm:w-full">
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-lg text-[15px] text-center"
                    shape="round"
                    color="light_blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    View History
                  </Button>
                </div>
                <Line className="self-center h-px bg-gray-500_a8 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-center justify-start w-[471px] sm:w-full">
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-lg text-[15px] text-center"
                    shape="round"
                    color="light_blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    View History
                  </Button>
                </div>
                <Line className="self-center h-px bg-gray-500_a8 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-center justify-start w-[471px] sm:w-full">
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-lg text-[15px] text-center"
                    shape="round"
                    color="light_blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    View History
                  </Button>
                </div>
                <Line className="self-center h-px bg-gray-500_a8 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-center justify-start w-[471px] sm:w-full">
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-lg text-[15px] text-center"
                    shape="round"
                    color="light_blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    View History
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoKYCThreePage;
