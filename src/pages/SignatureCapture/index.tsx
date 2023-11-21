import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const SignatureCapturePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-light_blue-A700 flex flex-col items-start justify-start outline outline-blue_gray-100_49 p-7 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] md:px-5 w-[13%] md:w-full">
            <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
              <Img
                className="h-[30px] w-[31px]"
                src="images/img_group1171275830_20.svg"
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
        </div>
        <div className="md:h-[824px] h-[913px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col gap-[18px] inset-x-[0] justify-start mx-auto w-full">
            <div className="h-[701px] ml-6 md:ml-[0] relative w-[69%] md:w-full">
              <div className="h-[701px] m-auto w-full">
                <Img
                  className="h-[701px] m-auto object-cover w-full"
                  src="images/img_maskgroup.png"
                  alt="maskgroup"
                />
                <div className="absolute flex flex-col gap-[46px] inset-x-[0] items-center justify-start mx-auto top-[2%] w-[97%]">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="md:h-10 h-11 relative w-[14%]">
                      <div className="bg-black-900_4c flex flex-col h-full items-start justify-start m-auto p-[7px] rounded-bl-[22px] rounded-br-[23px] rounded-tl-[22px] rounded-tr-[22px] w-full">
                        <div className="bg-white-A700_a0 flex flex-col h-[26px] items-center justify-start p-2 rounded-[50%] w-[26px]">
                          <div className="bg-red-400 h-2.5 rounded-[50%] w-2.5"></div>
                        </div>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
                        size="txtPoppinsMedium20"
                      >
                        02:01
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[51px] items-center justify-start p-3.5 w-[51px]"
                      style={{
                        backgroundImage: "url('images/img_group41.svg')",
                      }}
                    >
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_microphone.svg"
                        alt="microphone"
                      />
                    </div>
                  </div>
                  <div className="border-[7px] border-green-A700 border-solid h-[318px] relative w-[59%] sm:w-full">
                    <div className="bg-white-A700 border-[7px] border-green-A700 border-solid h-[318px] m-auto w-full"></div>
                    <Img
                      className="absolute h-[205px] inset-[0] justify-center m-auto object-cover w-[96%]"
                      src="images/img_image17.png"
                      alt="imageSeventeen"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[2%] flex flex-col gap-[18px] inset-x-[0] justify-start mx-auto w-[97%]">
                <div className="flex flex-row items-start justify-between md:ml-[0] ml-[502px] w-[36%] md:w-full">
                  <Line className="bg-light_blue-A700 h-[239px] mt-[93px] w-px" />
                  <Img
                    className="h-[174px] w-[50px]"
                    src="images/img_frame1171275895.svg"
                    alt="frame1171275895"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <div className="flex flex-col h-[50px] md:h-auto items-start justify-start md:mt-0 mt-[173px] w-[199px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[199px] rounded-[24px] text-center text-xl"
                      color="black_900_4c_01"
                      size="sm"
                      variant="fill"
                    >
                      Adam Joseph
                    </Button>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start mb-0.5 w-[44%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[221px] relative w-full">
                            <Img
                              className="absolute h-[221px] inset-[0] justify-center m-auto object-cover rounded-[11px] w-full"
                              src="images/img_closeupyoung.png"
                              alt="closeupyoung"
                            />
                            <Img
                              className="absolute h-[221px] inset-y-[0] left-[0] my-auto object-cover rounded-[11px] w-[87%]"
                              src="images/img_istockphoto131.png"
                              alt="istockphoto131"
                            />
                            <div className="absolute h-[221px] inset-[0] justify-center m-auto w-full">
                              <Img
                                className="h-[221px] m-auto object-cover rounded-[11px] w-full"
                                src="images/img_image15.png"
                                alt="imageFifteen"
                              />
                              <div className="absolute bg-gradient  bottom-[0] flex flex-row inset-x-[0] items-start justify-between mx-auto p-3 w-full">
                                <div className="flex flex-col items-start justify-start mt-[50px] w-auto">
                                  <Button
                                    className="cursor-pointer font-medium min-w-[164px] rounded-[17px] text-base text-center"
                                    color="black_900_4c_01"
                                    size="xs"
                                    variant="fill"
                                  >
                                    Christian Wong
                                  </Button>
                                </div>
                                <Button
                                  className="flex h-[39px] items-center justify-center mt-[46px] rounded-[19px] w-[39px]"
                                  color="light_blue_A700"
                                  size="sm"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-[23px]"
                                    src="images/img_alarm.svg"
                                    alt="alarm"
                                  />
                                </Button>
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
            <div className="bg-light_blue-A700 flex flex-row items-center justify-start outline outline-[1px] outline-blue_gray-50 p-[23px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-1.5 w-[65%]">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtPoppinsSemiBold22"
                  >
                    Video KYC Process
                  </Text>
                  <Text
                    className="mt-0.5 text-sm text-white-A700"
                    size="txtPoppinsMedium14"
                  >
                    Nov 12th, 2023 | 11:00 AM{" "}
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-center md:ml-[0] ml-[188px] w-[41%] md:w-full">
                  <Button
                    className="flex items-center justify-center rounded-bl-[23px] rounded-br-[22px] rounded-tl-[23px] rounded-tr-[22px] w-[46px]"
                    color="blue_300_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[21px]"
                      src="images/img_microphone.svg"
                      alt="microphone_One"
                    />
                  </Button>
                  <Img
                    className="h-[45px] ml-[15px] w-[46px]"
                    src="images/img_floatingicon.svg"
                    alt="floatingicon"
                  />
                  <Button
                    className="flex items-center justify-center ml-[15px] rounded-[22px] w-[46px]"
                    color="blue_300_02"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[21px]"
                      src="images/img_upload_white_a700.svg"
                      alt="upload"
                    />
                  </Button>
                  <Img
                    className="h-[45px] ml-[19px] w-[46px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                  <Img
                    className="h-[45px] ml-[19px] w-[46px]"
                    src="images/img_close_blue_300_02.svg"
                    alt="close_One"
                  />
                  <Button
                    className="flex items-center justify-center ml-[15px] rounded-[22px] w-[46px]"
                    color="blue_300_02"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[21px]"
                      src="images/img_bxdotshorizontalrounded.svg"
                      alt="bxdotshorizonta"
                    />
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[128px] md:ml-[0] ml-[15px] md:mt-0 my-[5px] rounded-[22px] text-center text-lg"
                  color="red_600"
                  size="sm"
                  variant="fill"
                >
                  End Call
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute md:h-[776px] sm:h-[799px] h-[808px] right-[0] top-[0] w-[28%] sm:w-full">
            <div className="absolute bg-gray-100_01 flex flex-col md:gap-10 gap-[63px] h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="bg-gray-100_01 flex flex-col items-start justify-start p-[11px] w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-blue_gray-900_02 text-lg"
                  size="txtPoppinsSemiBold18"
                >
                  Customer Information
                </Text>
                <Text
                  className="ml-2.5 md:ml-[0] mt-[17px] text-[15px] text-blue_gray-900_02"
                  size="txtPoppinsMedium15"
                >
                  Tracking ID : Xxxx
                </Text>
                <Text
                  className="leading-[21.00px] ml-0.5 md:ml-[0] mt-[18px] text-[15px] text-blue_gray-900_02 w-[91%] sm:w-full"
                  size="txtPoppinsMedium15"
                >
                  Permanent Address : xx, floor 5, business park, Kolkata
                </Text>
                <Text
                  className="leading-[21.00px] ml-0.5 md:ml-[0] mt-4 text-[15px] text-blue_gray-900_02 w-[91%] sm:w-full"
                  size="txtPoppinsMedium15"
                >
                  Communication Address : xx, floor 5, business park, Kolkata
                </Text>
                <Text
                  className="ml-2.5 md:ml-[0] mt-4 text-[15px] text-blue_gray-900_02"
                  size="txtPoppinsMedium15"
                >
                  System : Aadhar Photo
                </Text>
                <div className="flex flex-col h-[75px] items-center justify-start mb-[35px] ml-6 md:ml-[0] mt-[5px] w-[75px]">
                  <Img
                    className="h-[75px] md:h-auto rounded-[50%] w-[75px]"
                    src="images/img_womanwithheadsetvideocall_75x75.png"
                    alt="womanwithheadse"
                  />
                </div>
              </div>
              <div className="flex flex-col h-[357px] items-center justify-start mb-[18px] w-[357px]">
                <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                  <Img
                    className="h-[55px] md:h-auto object-cover rounded-[26px]"
                    src="images/img_rectangle68_55x53.png"
                    alt="rectangleSixtyEight"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="bg-white-A700 flex flex-col gap-[-9px] items-start justify-start pb-[9px] px-[13.5px] rounded-[10px] w-auto">
                      <Text
                        className="text-[10px] text-gray-400 w-auto"
                        size="txtPoppinsMedium10"
                      >
                        Kathryn Murphy{" "}
                      </Text>
                      <Text
                        className="text-[15.3px] text-blue_gray-900_02 w-auto"
                        size="txtPoppinsMedium153"
                      >
                        Good afternoon, everyone.
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-3.5 text-[10px] text-gray-500_01"
                    size="txtPoppinsMedium10Gray50001"
                  >
                    11:01 AM
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[25px] w-full">
                  <Img
                    className="h-[55px] md:h-auto object-cover rounded-[26px]"
                    src="images/img_rectangle75.png"
                    alt="rectangleSeventyFive"
                  />
                  <div className="bg-white-A700 flex flex-col gap-1 items-start justify-start px-[13.5px] py-[9px] rounded-[10px] w-auto">
                    <Text
                      className="text-[10px] text-gray-400 w-auto"
                      size="txtPoppinsMedium10"
                    >
                      Joshua Abraham
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[208px] md:max-w-full text-[15.3px] text-blue_gray-900_02"
                      size="txtPoppinsMedium153"
                    >
                      Yes, Let’s start this meeting
                    </Text>
                  </div>
                  <Text
                    className="mt-5 text-[10px] text-gray-500_01"
                    size="txtPoppinsMedium10Gray50001"
                  >
                    11:02 AM
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-end mt-[132px] p-[5px] rounded-[30px] w-full">
                  <Img
                    className="h-[30px] w-[29px]"
                    src="images/img_group237548.svg"
                    alt="group237548"
                  />
                  <Text
                    className="ml-[21px] text-base text-blue_gray-400"
                    size="txtPoppinsMedium16Bluegray400"
                  >
                    Type Something...
                  </Text>
                  <div className="flex flex-col items-center justify-start ml-[88px] w-[14%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-start p-[9px] w-full"
                      style={{
                        backgroundImage: "url('images/img_iconmic.svg')",
                      }}
                    >
                      <Img
                        className="h-[30px] w-[29px]"
                        src="images/img_send2.svg"
                        alt="sendTwo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Input
              name="groupFiftyTwo"
              placeholder="Chats"
              className="!placeholder:text-blue_gray-900_03 !text-blue_gray-900_03 font-semibold p-0 text-left text-lg w-full"
              wrapClassName="absolute border-b border-gray-200 border-solid inset-x-[0] mx-auto top-[42%] w-full"
              shape="square"
            ></Input>
          </div>
          <div className="absolute flex md:flex-col flex-row gap-[43px] items-center justify-between left-[3%] top-[2%] w-auto">
            <div className="md:h-[27px] h-[49px] relative w-[58%] md:w-full">
              <Text
                className="absolute bottom-[0] left-[0] text-center text-light_blue-A700 text-sm"
                size="txtPoppinsMedium14LightblueA700"
              >
                Verify Details
              </Text>
              <div className="absolute h-[49px] inset-y-[0] my-auto right-[0] w-[92%] sm:w-full">
                <Text
                  className="mb-[undefinedpx] ml-auto mt-auto text-center text-light_blue-A700 text-sm z-[1]"
                  size="txtPoppinsMedium14LightblueA700"
                >
                  Signature
                </Text>
                <Button
                  className="flex items-center justify-center mb-[-0.64px] ml-auto mr-[186px] rounded-[14px] w-7 z-[1]"
                  color="light_blue_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    src="images/img_checkmark_white_a700.svg"
                    alt="checkmark"
                  />
                </Button>
                <Text
                  className="bg-light_blue-A700 h-[27px] justify-center mb-[undefinedpx] ml-auto mr-6 px-2 rounded-[14px] text-base text-white-A700 uppercase w-7 z-[1]"
                  size="txtPoppinsMedium16WhiteA700"
                >
                  4
                </Text>
                <Button
                  className="flex items-center justify-center mb-[-0.64px] ml-[136px] rounded-[14px] w-7 z-[1]"
                  color="light_blue_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    src="images/img_checkmark_white_a700.svg"
                    alt="checkmark_One"
                  />
                </Button>
                <Line className="bg-light_blue-A700 h-0.5 mb-[undefinedpx] mt-[13px] w-[26%] z-[1]" />
                <Line className="bg-light_blue-A700 h-0.5 mb-[undefinedpx] ml-[170px] mt-[13px] w-1/4 z-[1]" />
                <Line className="bg-light_blue-A700 h-0.5 mb-[undefinedpx] ml-auto mr-[57px] mt-[13px] w-1/4 z-[1]" />
                <div className="flex flex-col items-center justify-start ml-[117px] mt-auto w-[48%]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-center text-light_blue-A700 text-sm"
                      size="txtPoppinsMedium14LightblueA700"
                    >
                      Pan Card
                    </Text>
                    <Text
                      className="text-center text-light_blue-A700 text-sm"
                      size="txtPoppinsMedium14LightblueA700"
                    >
                      Face Match{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="absolute flex items-center justify-center left-[3%] rounded-[14px] top-[0] w-7"
                color="light_blue_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  src="images/img_checkmark_white_a700.svg"
                  alt="checkmark_Two"
                />
              </Button>
            </div>
            <div className="flex flex-row gap-[9px] items-center justify-between w-[37%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-[9px] grid grid-cols-2 w-[66%]"
                orientation="horizontal"
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[39px] items-start justify-end sm:ml-[0] p-2 rounded-lg w-full"
                  style={{
                    backgroundImage: "url('images/img_group1171275876.svg')",
                  }}
                >
                  <Text
                    className="md:ml-[0] ml-[13px] text-[15px] text-white-A700_01"
                    size="txtPoppinsMedium15WhiteA70001"
                  >
                    Success
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-start sm:ml-[0] p-[7px] rounded-lg w-full"
                  style={{
                    backgroundImage: "url('images/img_group1171275878.svg')",
                  }}
                >
                  <Text
                    className="text-[15px] text-white-A700_01"
                    size="txtPoppinsMedium15WhiteA70001"
                  >
                    Review
                  </Text>
                </div>
              </List>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-end p-[5px] rounded-lg"
                style={{
                  backgroundImage: "url('images/img_group1171275879.svg')",
                }}
              >
                <Text
                  className="mt-1 text-base text-white-A700_01"
                  size="txtPoppinsMedium16WhiteA70001"
                >
                  Reject
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignatureCapturePage;
