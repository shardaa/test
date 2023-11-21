import React from "react";

import { Button, FloatingInput, Img, Input, List, Text } from "components";
import VideoCallTwoCardlistname from "components/VideoCallTwoCardlistname";

const KYCPhotoClickPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-light_blue-A700 flex flex-col items-start justify-start outline outline-blue_gray-100_49 p-7 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] md:px-5 w-[13%] md:w-full">
            <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
              <Img
                className="h-[30px] w-[31px]"
                src="images/img_group1171275830_10.svg"
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
        <div className="md:h-[1034px] sm:h-[823px] h-[849px] md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-6 h-max inset-[0] justify-center m-auto w-full">
            <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] w-[69%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="sm:h-[694px] h-[695px] md:h-[905px] relative w-full">
                  <Img
                    className="absolute h-[694px] inset-[0] justify-center m-auto object-cover rounded-[15px] w-full"
                    src="images/img_womanwithheadsetvideocall_694x993.png"
                    alt="womanwithheadse"
                  />
                  <div className="absolute bg-blue_gray-100_99 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3 rounded-[16px] w-full">
                    <div className="flex flex-col gap-[30px] items-center justify-start mt-[3px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="md:h-10 h-11 relative w-[14%] md:w-full">
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
                        <div className="h-[405px] md:ml-[0] ml-[147px] md:mt-0 mt-1.5 relative w-[405px] sm:w-full">
                          <div className="flex flex-col sm:h-auto h-full items-center justify-start m-auto w-[381px]">
                            <Img
                              className="h-[381px] md:h-auto rounded-[50%] w-[381px]"
                              src="images/img_womanwithheadsetvideocall_1.png"
                              alt="womanwithheadse_One"
                            />
                          </div>
                          <div className="absolute h-[405px] inset-[0] justify-center m-auto outline outline-[7px] outline-green-A700 rounded-[202px] w-[405px]"></div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[51px] items-center justify-start md:ml-[0] ml-[225px] p-3.5 w-[51px]"
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
                      <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                        <div className="flex flex-col h-[50px] md:h-auto items-start justify-start md:mt-0 mt-[175px] w-[199px]">
                          <Button
                            className="cursor-pointer font-medium min-w-[199px] rounded-[24px] text-center text-xl"
                            color="black_900_4c_01"
                            size="sm"
                            variant="fill"
                          >
                            Adam Joseph
                          </Button>
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start mb-1 w-[44%] md:w-full">
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
                                    <div className="absolute bg-gradient  bottom-[0] flex flex-row inset-x-[0] items-end justify-between mx-auto p-2.5 w-full">
                                      <div className="flex flex-col items-start justify-start mt-[53px] w-auto">
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
                                        className="flex h-[39px] items-center justify-center mt-[47px] rounded-[19px] w-[39px]"
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
                </div>
              </div>
            </div>
            <div className="bg-light_blue-A700 flex flex-row items-center justify-start outline outline-[1px] outline-blue_gray-50 p-[23px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-1.5 w-[65%]">
                <div className="flex flex-col font-poppins items-start justify-start">
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
                  className="cursor-pointer font-inter font-semibold min-w-[128px] md:ml-[0] ml-[15px] md:mt-0 my-[5px] rounded-[22px] text-center text-lg"
                  color="red_600"
                  size="md"
                  variant="fill"
                >
                  End Call
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute font-inter md:h-[558px] sm:h-[680px] h-[743px] right-[0] top-[0] w-[28%] sm:w-full">
            <div className="absolute bg-gray-100_01 flex flex-col gap-[26px] h-full inset-[0] items-center justify-center m-auto rounded-br-[15px] w-full">
              <div className="flex flex-col relative w-full">
                <div className="bg-gray-100_01 flex flex-col items-center justify-start mx-auto p-[23px] sm:px-5 w-full">
                  <div className="flex flex-col items-center justify-start mb-[97px] mt-[68px] w-full">
                    <List
                      className="flex flex-col gap-[15px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white-A700_cc flex flex-1 flex-col items-center justify-start my-0 p-[5px] rounded-[31px] w-full">
                        <VideoCallTwoCardlistname
                          className="flex flex-row gap-[17px] items-center justify-start mb-0.5 px-0.5 w-[335px]"
                          usermicrophone="images/img_microphone_light_blue_a700.svg"
                          uservideocamera="images/img_videocamera.svg"
                        />
                      </div>
                      <div className="bg-white-A700_cc flex flex-1 flex-col items-center justify-start my-0 p-[5px] rounded-[31px] w-full">
                        <VideoCallTwoCardlistname
                          className="flex flex-row gap-[17px] items-center justify-start mb-0.5 px-0.5 w-[335px]"
                          username="Guy Hawkins"
                        />
                      </div>
                    </List>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mt-[-6.2px] mx-auto w-[90%] z-[1]">
                  <Img
                    className="h-[55px] md:h-auto object-cover rounded-[26px]"
                    src="images/img_rectangle68_55x53.png"
                    alt="rectangleSixtyEight"
                  />
                  <div className="flex flex-col items-center justify-start sm:w-full">
                    <FloatingInput
                      wrapClassName="placeholder:bg-white-A700 font-medium placeholder:left-[13px] p-0 sm:pr-5 text-[15.3px] text-blue_gray-900_02 placeholder:text-gray-400 text-left placeholder:top-[0] w-full"
                      className="font-medium p-0 sm:pr-5 text-[15.3px] text-blue_gray-900_02 text-left w-full"
                      name="language"
                      labelClasses="bg-white-A700 left-[13px] top-[0] text-gray-400"
                      focusedClasses="translate-y-[26px] scale-[1]"
                      wrapperClasses="w-full top-[0]"
                      labelText="Kathryn Murphy "
                      defaultText="Good afternoon, everyone."
                    ></FloatingInput>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-[11px] text-[10px] text-gray-500_01"
                    size="txtInterMedium10"
                  >
                    11:01 AM
                  </Text>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-[162px] items-center justify-start mb-4 w-[90%] md:w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Img
                    className="h-[55px] md:h-auto object-cover rounded-[26px]"
                    src="images/img_rectangle75.png"
                    alt="rectangleSeventyFive"
                  />
                  <FloatingInput
                    wrapClassName="placeholder:bg-white-A700 font-medium placeholder:left-[13px] p-0 text-[15.3px] text-blue_gray-900_02 placeholder:text-gray-400 text-left placeholder:top-[0] w-full"
                    className="font-medium p-0 text-[15.3px] text-blue_gray-900_02 text-left w-full"
                    name="yesletsstart"
                    labelClasses="bg-white-A700 left-[13px] top-[0] text-gray-400"
                    focusedClasses="translate-y-[27px] scale-[1]"
                    wrapperClasses="top-[0]"
                    labelText="Joshua Abraham"
                    defaultText="Yes, Let’s start this meeting"
                  ></FloatingInput>
                  <Text
                    className="leading-[22.00px] text-[10px] text-gray-500_01"
                    size="txtInterMedium10"
                  >
                    11:02 AM
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-end p-[5px] rounded-[30px] w-full">
                  <Img
                    className="h-[30px] w-[29px]"
                    src="images/img_group237548.svg"
                    alt="group237548"
                  />
                  <Text
                    className="ml-[21px] text-base text-blue_gray-400"
                    size="txtInterMedium16"
                  >
                    Type Something...
                  </Text>
                  <div className="flex flex-col items-center justify-start ml-[92px] w-[14%]">
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
              name="groupFortyNine"
              placeholder="Participants"
              className="!placeholder:text-blue_gray-900_03 !text-blue_gray-900_03 font-semibold p-0 text-left text-lg w-full"
              wrapClassName="absolute border-b border-gray-50_01 border-solid inset-x-[0] mx-auto top-[0] w-full"
              shape="square"
            ></Input>
            <Input
              name="groupFiftyTwo"
              placeholder="Chats"
              className="!placeholder:text-blue_gray-900_03 !text-blue_gray-900_03 font-semibold p-0 text-left text-lg w-full"
              wrapClassName="absolute border-b border-gray-200 border-solid inset-x-[0] mx-auto top-[36%] w-full"
              shape="square"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default KYCPhotoClickPage;
