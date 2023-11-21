import React from "react";

import { Button, Img, Line, Text } from "components";

const GetonVideocallPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins gap-[35px] items-start mx-auto md:pr-10 sm:pr-5 pr-[67px] w-full">
        <div className="bg-blue-A700 flex flex-col items-center justify-start md:px-5 rounded-bl-[20px] rounded-tl-[20px] w-[44%] md:w-full">
          <div className="bg-blue-A700 flex flex-col items-center justify-start rounded-bl-[20px] rounded-tl-[20px] w-full">
            <div className="h-[936px] relative w-full">
              <Img
                className="h-[936px] m-auto object-cover w-full"
                src="images/img_pngtreebeautiful_2.png"
                alt="pngtreebeautifu"
              />
              <div className="absolute flex flex-col gap-[23px] justify-start left-[5%] top-[3%] w-[63%]">
                <div className="flex flex-col md:gap-10 gap-[76px] justify-start w-[70%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
                    <div className="h-[30px] relative w-[173px]">
                      <Img
                        className="absolute h-[30px] inset-y-[0] left-[0] my-auto w-[31px]"
                        src="images/img_group1171275830_4.svg"
                        alt="group1171275830"
                      />
                      <Text
                        className="ml-auto my-auto text-white-A700 text-xl w-[104px]"
                        size="txtPoppinsSemiBold20"
                      >
                        Video KYC
                      </Text>
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                          <Img
                            className="h-[30px] w-[31px]"
                            src="images/img_group1171275830_5.svg"
                            alt="group1171275830_One"
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
                  </div>
                  <Img
                    className="h-[233px] md:h-auto ml-4 md:ml-[0] object-cover w-[94%]"
                    src="images/img_63864dab94faa26.png"
                    alt="63864dab94faaTwentySix"
                  />
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[31px] w-[92%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsSemiBold32"
                  >
                    <>
                      You are on final step,
                      <br />
                      Few moment left
                    </>
                  </Text>
                  <div className="flex flex-col items-center justify-start w-[76%] md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row gap-11 items-center justify-start w-[87%] md:w-full">
                        <Button
                          className="flex h-[30px] items-center justify-center w-[30px]"
                          shape="circle"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[22px]"
                            src="images/img_bicheck.svg"
                            alt="bicheck"
                          />
                        </Button>
                        <Text
                          className="text-base text-white-A700 uppercase"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Upload pan card
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-9 md:ml-[0] ml-[15px] w-0.5" />
                      <div className="flex flex-row gap-11 items-center justify-start w-full">
                        <Button
                          className="flex h-[30px] items-center justify-center w-[30px]"
                          shape="circle"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            src="images/img_checkmark_blue_a700.svg"
                            alt="checkmark"
                          />
                        </Button>
                        <Text
                          className="text-base text-white-A700 uppercase"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Upload addhar card
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-9 md:ml-[0] ml-[15px] w-0.5" />
                      <div className="flex flex-row gap-11 items-center justify-start w-[88%] md:w-full">
                        <Text
                          className="bg-white-A700 flex h-[30px] items-center justify-center rounded-[50%] text-base text-blue-A700 text-center uppercase w-[30px]"
                          size="txtPoppinsMedium16"
                        >
                          3
                        </Text>
                        <Text
                          className="text-base text-white-A700 uppercase"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Get on Video call{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 h-[642px] md:h-auto items-start justify-start max-w-[740px] md:mt-0 mt-[59px] w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
              size="txtPoppinsSemiBold28"
            >
              Get on Video Call
            </Text>
          </div>
          <div className="flex flex-col h-[276px] md:h-auto items-start justify-start rounded-[10px] shadow-bs5 w-full">
            <div className="flex flex-col h-[276px] md:h-auto items-start justify-start rounded-[10px] w-full">
              <div className="flex flex-col h-[276px] md:h-auto items-start justify-start rounded-[10px] w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-7 py-9 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-[34px] items-start justify-start w-auto">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtPoppinsSemiBold20Bluegray900"
                      >
                        Complete you Video KYC through Video call now
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900_a2 w-auto"
                        size="txtPoppinsRegular16Bluegray900a2"
                      >
                        The Video KYC desk operates between 10am to 6pm on all
                        working days
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                      <Button
                        className="!text-white-A700 cursor-pointer font-semibold h-[65px] leading-[normal] max-w-[691px] rounded-lg text-2xl md:text-[22px] text-center sm:text-xl w-full"
                        shape="round"
                        color="light_blue_A700"
                        size="lg"
                        variant="fill"
                      >
                        Start Video Call
                      </Button>
                      <Text
                        className="text-center text-light_blue-A700 text-xl underline w-auto"
                        size="txtPoppinsSemiBold20LightblueA700"
                      >
                        Do a Test Call
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[276px] relative w-full">
            <div className="h-[275px] m-auto rounded-[10px] shadow-bs5 w-full"></div>
            <div className="absolute flex flex-1 flex-col md:h-auto h-full inset-[0] items-center justify-start m-auto w-full">
              <div className="flex flex-col h-[276px] md:h-auto items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-7 py-8 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtPoppinsSemiBold20Bluegray900"
                      >
                        Please ensure before you connect for Video KYC :
                      </Text>
                      <Text
                        className="leading-[29.00px] text-blue_gray-900_a2 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        <>
                          Keep you pan card or electronic pan card ready
                          <br />
                          Have a black or blue pen and a blank sheet of white
                          paper ready for signature verification
                          <br />
                          Your mobile/laptop should support video calling
                          <br />
                          You need to be present in India during the process
                          <br />
                          You need a good internet connection and should not be
                          using proxy or VPN.
                          <br />
                          Please ensure there is enough lighting in your room
                        </>
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

export default GetonVideocallPage;
