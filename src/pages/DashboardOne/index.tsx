import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const DashboardOnePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_grid_blue_a700.svg"
          alt="grid"
        />
      ),
      label: "KYC",
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
          <Text className="w-auto">Option 2</Text>
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
          <Text className="w-auto">Option 4</Text>
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
          <Text className="w-auto">Option 6</Text>
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
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto sm:pr-5 pr-[30px] w-full">
        <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[231px] flex h-screen md:hidden justify-start overflow-auto shadow-bs3 top-[0]"
          >
            <div className="flex flex-row gap-2.5 items-center justify-center mb-[1793px] mt-[27px] mx-auto w-auto">
              <Img
                className="h-[30px] w-[31px]"
                src="images/img_group1171275830_26.svg"
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
                  fontSize: "16px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  [`&:hover, &.ps-active`]: {
                    color: "#005efe",
                    position: "relative",
                  },
                },
              }}
              className="md:h-[1844px] h-[415px] mb-[1322px] mt-[113px] sm:pr-5 pr-[37px] relative w-[84%]"
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
              <div className="md:h-[1806px] h-[195px] mb-[1094px] ml-[25px] mr-[38px] mt-[562px] relative w-[73%]">
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
                  <div className="bg-blue-A700 flex flex-col items-center justify-end mt-auto mx-auto p-[5px] rounded-[10px]">
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
                className="flex h-[30px] items-center justify-center mb-[1794px] ml-[201px] mt-[27px] shadow-bs4 w-[30px]"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img className="h-3.5" src="images/img_icons.svg" alt="icons" />
              </Button>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-5 w-full">
            <header className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl tracking-[0.12px] w-auto"
                    size="txtPoppinsRegular24"
                  >
                    KYC
                  </Text>
                  <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-center justify-center w-full">
                    <div className="bg-gray-100_02 border border-gray-300_01 border-solid flex flex-1 flex-col h-12 md:h-auto items-start justify-center p-[13px] rounded-[24px] w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <Img
                          className="h-[22px] w-[22px]"
                          src="images/img_contrast.svg"
                          alt="contrast"
                        />
                        <Text
                          className="flex-1 text-gray-900_87 text-sm w-auto"
                          size="txtPoppinsRegular14Gray90087"
                        >
                          Search
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-12 rounded-[50%] w-12"
                      src="images/img_frame1171275847.svg"
                      alt="frame1171275847"
                    />
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-start pl-[5px] pr-5 py-[5px] rounded-[24px] w-auto">
                      <Img
                        className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                        src="images/img_ellipse3226.png"
                        alt="ellipse3226"
                      />
                      <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="text-blue_gray-900_03 text-sm w-auto"
                            size="txtPoppinsMedium14Bluegray90003"
                          >
                            Alex meian
                          </Text>
                        </div>
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_icons_blue_gray_900_03.svg"
                          alt="icons_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <Line className="bg-black-900_19 h-px mt-[21px] w-full" />
            <div className="h-[1496px] md:h-[1656px] sm:h-[1756px] mt-[30px] relative w-[92%] md:w-full">
              <div className="absolute flex flex-col gap-[26px] h-full inset-[0] items-start justify-start m-auto max-w-[1062px] w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
                    size="txtPoppinsSemiBold28"
                  >
                    Let’s get started
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      Full Name*
                    </Text>
                    <Input
                      name="frame1171275968"
                      placeholder="Enter full name"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                      wrapClassName="border border-gray-300 border-solid w-full"
                      type="text"
                      size="sm"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-end justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[440px] sm:w-full">
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Mobile Number*
                      </Text>
                      <Input
                        name="frame1171275968_One"
                        placeholder="Enter mobile number"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        type="number"
                        size="sm"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer leading-[normal] text-base text-center w-[118px]"
                        shape="round"
                        color="blue_A700"
                        size="lg"
                        variant="fill"
                      >
                        Get OTP
                      </Button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-end justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[270px]">
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Enter OTP*{" "}
                      </Text>
                      <Input
                        name="frame1171275968_Two"
                        placeholder="Enter otp"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        size="md"
                      ></Input>
                    </div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      <span className="text-blue_gray-700 font-poppins text-left font-normal">
                        Not received OTP{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue-A700 font-poppins text-left font-normal underline"
                      >
                        Resend
                      </a>
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-end justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[440px] sm:w-full">
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Email Address*
                      </Text>
                      <Input
                        name="frame1171275968_Three"
                        placeholder="Enter email address"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        type="email"
                        size="sm"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer leading-[normal] text-base text-center w-[118px]"
                        shape="round"
                        color="blue_A700"
                        size="lg"
                        variant="fill"
                      >
                        Get OTP
                      </Button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-end justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[270px]">
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Enter OTP*{" "}
                      </Text>
                      <Input
                        name="frame1171275968_Four"
                        placeholder="Enter otp"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        size="md"
                      ></Input>
                    </div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      <span className="text-blue_gray-700 font-poppins text-left font-normal">
                        Not received OTP{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue-A700 font-poppins text-left font-normal underline"
                      >
                        Resend
                      </a>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Aadhaar Card Number*
                      </Text>
                      <Input
                        name="frame1171275968_Five"
                        placeholder="Enter aadhaar card number"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        type="number"
                        size="md"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[440px] sm:w-full">
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Upload Aadhaar Card/E-Aadhaar card*
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Input
                          name="frame1171275968_Six"
                          placeholder="Upload"
                          className="leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-6 mr-2.5"
                              src="images/img_upload.svg"
                              alt="upload"
                            />
                          }
                          color="gray_100"
                          size="md"
                        ></Input>
                        <Text
                          className="text-blue_gray-700 text-xs w-auto"
                          size="txtPoppinsRegular12Bluegray700"
                        >
                          Format – pdf, jpg, png etc.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Pan Card Number*
                      </Text>
                      <Input
                        name="frame1171275968_Seven"
                        placeholder="Enter aadhaar card number"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        type="number"
                        size="md"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[440px] sm:w-full">
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Upload Pan card/E-Pan Card*
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Input
                          name="frame1171275968_Eight"
                          placeholder="Upload"
                          className="leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-6 mr-2.5"
                              src="images/img_upload.svg"
                              alt="upload"
                            />
                          }
                          color="gray_100"
                          size="md"
                        ></Input>
                        <Text
                          className="text-blue_gray-700 text-xs w-auto"
                          size="txtPoppinsRegular12Bluegray700"
                        >
                          Format – pdf, jpg, png etc.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[218px] items-start justify-between w-full">
                        <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="text-base text-blue_gray-700 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            Video KYC Consent
                          </Text>
                          <Text
                            className="leading-[23.00px] text-blue_gray-700 text-sm"
                            size="txtPoppinsRegular14Bluegray700"
                          >
                            <>
                              Please ensure that you have :<br />
                              Proper network and lighting in your room.
                              <br />
                              Keep your original pan handy
                              <br />
                              Keep blank white sheet paper and black/blue pen
                              for signature capture
                            </>
                          </Text>
                        </div>
                        <div className="bg-blue-A700 border border-gray-300 border-solid flex flex-1 flex-col h-[124px] md:h-auto items-center justify-center sm:px-5 px-7 py-[15px] rounded-lg shadow-bs w-full">
                          <Img
                            className="h-16 w-16"
                            src="images/img_search.svg"
                            alt="search_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                          <CheckBox
                            className="leading-[23.00px] text-left text-sm"
                            inputClassName="border border-blue_gray-100_01 border-solid h-4 mr-[5px] w-4"
                            name="ihearbygivemy"
                            id="ihearbygivemy"
                            label="I hearby give my consent to complete my KYC through VCIP(Video Customer Identification Process), a process defined by RBI and processing
of personal data (Name,DOB, Pan #,Photograph,Longitutde and Latitude and Signature). I agree to abide by the terms and conditions &lt;LINK&gt;
laid down by the Bank."
                          ></CheckBox>
                          <CheckBox
                            className="leading-[23.00px] text-left text-sm"
                            inputClassName="border border-blue-A700 border-solid h-4 mr-[5px] w-4"
                            name="ihearebyauthori_One"
                            id="ihearebyauthori_One"
                            label="I heareby authorize the bank to open account using OTP based e-KYC, in non face to face mode. In case my Video KYC process is unsuccessful
due to any reason, it would be subject to restrictions/processes prescribed by RBI."
                            color="blue_50"
                          ></CheckBox>
                          <CheckBox
                            className="text-left text-sm"
                            inputClassName="border border-blue_gray-100_01 border-solid h-4 mr-[5px] w-4"
                            name="iconfirmthati"
                            id="iconfirmthati"
                            label="I confirm that I am present in India while doing the video KYC"
                            size="xs"
                          ></CheckBox>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium h-[54px] leading-[normal] min-w-[252px] rounded-lg text-center text-lg"
                  shape="round"
                  color="blue_A700"
                  size="lg"
                  variant="fill"
                >
                  SAVE & COUNTINUE
                </Button>
              </div>
              <Img
                className="absolute h-[456px] right-[0] top-[11%]"
                src="images/img_getstarted1_blue_gray_900.svg"
                alt="getstartedOne"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOnePage;
