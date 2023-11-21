import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="flex flex-row gap-2.5 items-center justify-center mb-[878px] ml-7 mr-[53px] mt-[27px] w-auto">
          <Img
            className="h-[30px] w-[31px]"
            src="images/img_group1171275830_22.svg"
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
              fontFamily: "Poppins",
              paddingLeft: "28px",
              paddingRight: "28px",
              [`&:hover, &.ps-active`]: {
                color: "#007afe",
                position: "relative",
              },
            },
          }}
          className="h-[414px] md:h-[924px] mb-[409px] mt-[113px] sm:pr-5 pr-7 relative w-[90%]"
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
            <Img
              className="h-3.5"
              src="images/img_icons_blue_gray_900.svg"
              alt="icons"
            />
          </Button>
        )}
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
