import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const WelcomeBackPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins gap-[13px] items-start mx-auto md:pr-10 sm:pr-5 pr-[67px] w-full">
        <div className="h-[936px] relative w-[46%] md:w-full">
          <div className="absolute bg-blue-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-bl-[20px] rounded-tl-[20px] w-[97%]">
            <div className="h-[936px] relative w-full">
              <Img
                className="h-[936px] m-auto object-cover w-full"
                src="images/img_pngtreebeautiful_936x597.png"
                alt="pngtreebeautifu"
              />
              <Sidebar className="!sticky !w-[331px] flex h-screen md:hidden justify-start left-[5%] overflow-auto top-[0]">
                <div className="flex flex-col items-center justify-start mr-[157px] w-[53%]">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                    <Img
                      className="h-[30px] w-[31px]"
                      src="images/img_group1171275830_white_a700.svg"
                      alt="group1171275830"
                    />
                    <Text
                      className="text-white-A700 text-xl w-[104px]"
                      size="txtPoppinsSemiBold20"
                    >
                      Video KYC
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[7px] mt-[177px]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsSemiBold32"
                  >
                    <>
                      Please confirm your
                      <br />
                      validation.
                    </>
                  </Text>
                  <Text
                    className="text-blue-100 text-lg"
                    size="txtPoppinsMedium18"
                  >
                    You are few steps away on KYC
                  </Text>
                </div>
              </Sidebar>
            </div>
          </div>
          <Img
            className="absolute bottom-[4%] h-[464px] right-[0]"
            src="images/img_getstarted1.svg"
            alt="getstartedTwo"
          />
        </div>
        <div className="flex flex-col gap-[26px] items-start justify-start max-w-[740px] md:mt-0 mt-[59px] w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
              size="txtPoppinsSemiBold28"
            >
              Welcome Back!
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-5 items-end justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-[440px] sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtPoppinsRegular16"
                >
                  Mobile Number*
                </Text>
                <Input
                  name="frame1171275968"
                  placeholder="Enter mobile number"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  type="number"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="!text-white-A700 cursor-pointer leading-[normal] text-base text-center w-[118px]"
                  shape="round"
                  color="light_blue_A700"
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
                  name="frame1171275968_One"
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
                  className="text-light_blue-A700 font-poppins text-left font-normal underline"
                >
                  Resend
                </a>
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-[537px] sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-[537px] sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtPoppinsRegular16"
                >
                  Type the code shown (Case Sensitive)
                </Text>
                <div className="flex flex-col gap-3 items-end justify-start w-auto sm:w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Button
                      className="cursor-pointer leading-[normal] rounded-lg text-base text-center w-[229px]"
                      shape="round"
                      color="gray_500"
                      size="lg"
                      variant="fill"
                    >
                      CAPTCHA
                    </Button>
                    <Img
                      className="h-[31px] w-[25px]"
                      src="images/img_refresh.svg"
                      alt="refresh"
                    />
                  </div>
                  <Line className="bg-gray-300 h-px w-[49%]" />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[13px] items-center justify-start w-auto md:w-full">
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded w-4"></div>
              <Text
                className="leading-[26.00px] text-base text-blue_gray-700"
                size="txtPoppinsRegular16"
              >
                <>
                  I authorize xxx Bank and its representative to call , SMS or
                  communicate vis WhatsApp
                  <br />
                  regarding my application. This consent overrides any
                  registration for DNC/NDNC.
                  <br />I confirm I am in India. I am a major and a resident of
                  India and I have read and I accept
                  <br />
                  xxx Banks’s Privacy Policy.
                </>
              </Text>
            </div>
          </div>
          <Button
            className="!text-white-A700 cursor-pointer font-medium h-[54px] leading-[normal] min-w-[199px] rounded-lg text-center text-lg"
            shape="round"
            color="light_blue_A700"
            size="lg"
            variant="fill"
          >
            Let’s Proceed
          </Button>
        </div>
      </div>
    </>
  );
};

export default WelcomeBackPage;
