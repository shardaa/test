import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";

const LetsStartedPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins gap-[13px] items-center mx-auto md:pr-10 sm:pr-5 pr-[67px] w-full">
        <div className="h-[936px] relative w-[46%] md:w-full">
          <div className="absolute bg-blue-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-bl-[20px] rounded-tl-[20px] w-[97%]">
            <div className="h-[936px] relative w-full">
              <Img
                className="h-[936px] m-auto object-cover w-full"
                src="images/img_pngtreebeautiful.png"
                alt="pngtreebeautifu"
              />
              <Sidebar className="!sticky !w-[311px] flex h-screen md:hidden justify-start left-[5%] overflow-auto top-[0]">
                <div className="flex flex-col items-center justify-start mr-[138px] w-[56%]">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                    <Img
                      className="h-[30px] w-[31px]"
                      src="images/img_group1171275830.svg"
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
                <div className="flex flex-col items-center justify-start ml-4 md:ml-[0] mt-[171px] shadow-bs3 w-[95%]">
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtPoppinsSemiBold32"
                    >
                      <>
                        Few click away on
                        <br />
                        KYC.
                      </>
                    </Text>
                    <Text
                      className="text-blue-100 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      <>
                        Start your KYC in minutes. <br />
                        save time and money
                      </>
                    </Text>
                  </div>
                </div>
              </Sidebar>
            </div>
          </div>
          <Img
            className="absolute bottom-[4%] h-[464px] right-[0]"
            src="images/img_getstarted1.svg"
            alt="getstartedOne"
          />
        </div>
        <div className="flex flex-col gap-[26px] items-start justify-start max-w-[740px] w-full">
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
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtPoppinsRegular16"
                >
                  Aadhaar/Pan Card Number*
                </Text>
                <Input
                  name="frame1171275968_One"
                  placeholder="Enter aadhaar card number"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  type="number"
                  size="sm"
                ></Input>
              </div>
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
                  name="frame1171275968_Two"
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
                  name="frame1171275968_Three"
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
                  name="frame1171275968_Four"
                  placeholder="Enter email address"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  type="email"
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
                  name="frame1171275968_Five"
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
          </div>
          <Button
            className="!text-white-A700 cursor-pointer font-medium h-[54px] leading-[normal] rounded-lg text-center text-lg w-[196px]"
            shape="round"
            color="light_blue_A700"
            size="lg"
            variant="fill"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default LetsStartedPage;
