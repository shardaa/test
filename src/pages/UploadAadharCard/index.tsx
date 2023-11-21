import React from "react";

import { Button, Img, Line, Text } from "components";

const UploadAadharCardPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins gap-[35px] items-start mx-auto md:pr-10 sm:pr-5 pr-[66px] w-full">
        <div className="bg-blue-A700 flex flex-col items-center justify-start md:px-5 rounded-bl-[20px] rounded-tl-[20px] w-[44%] md:w-full">
          <div className="bg-blue-A700 flex flex-col items-center justify-start rounded-bl-[20px] rounded-tl-[20px] w-full">
            <div className="h-[936px] relative w-full">
              <Img
                className="h-[936px] m-auto object-cover w-full"
                src="images/img_pngtreebeautiful_2.png"
                alt="pngtreebeautifu"
              />
              <div className="absolute flex flex-col gap-[34px] justify-start left-[5%] top-[3%] w-[67%]">
                <div className="flex flex-col md:gap-10 gap-[74px] justify-start w-[81%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[55%] md:w-full">
                    <div className="h-[30px] relative w-[173px]">
                      <Img
                        className="absolute h-[30px] inset-y-[0] left-[0] my-auto w-[31px]"
                        src="images/img_group1171275830_2.svg"
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
                            src="images/img_group1171275830_3.svg"
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
                    className="h-56 md:h-auto md:ml-[0] ml-[31px] object-cover w-[91%]"
                    src="images/img_toppng1.png"
                    alt="toppngOne"
                  />
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[31px] w-[93%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsSemiBold32"
                  >
                    <>
                      You are on step 2,
                      <br />
                      Just 1 more step to go&quot;
                    </>
                  </Text>
                  <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-11 items-start justify-start w-[86%] md:w-full">
                        <Button
                          className="flex h-[30px] items-center justify-center mb-[3px] w-[30px]"
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
                          className="mt-[3px] text-white-A700 text-xl uppercase"
                          size="txtPoppinsMedium20"
                        >
                          Upload pan card
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-9 md:ml-[0] ml-[15px] mt-1 w-0.5" />
                      <div className="flex flex-row gap-11 items-start justify-start mt-[9px] w-full">
                        <Text
                          className="bg-white-A700 flex h-[30px] items-center justify-center mb-[3px] rounded-[50%] text-base text-blue-A700 text-center uppercase w-[30px]"
                          size="txtPoppinsMedium16"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-[3px] text-white-A700 text-xl uppercase"
                          size="txtPoppinsMedium20"
                        >
                          Upload addhar card
                        </Text>
                      </div>
                      <Line className="bg-blue-300 h-9 md:ml-[0] ml-[15px] mt-1 w-0.5" />
                      <div className="flex flex-row gap-11 items-start justify-start mt-2.5 w-[88%] md:w-full">
                        <Text
                          className="bg-white-A700_87 flex h-[30px] items-center justify-center mb-[3px] rounded-[50%] text-base text-blue-A700 text-center uppercase w-[30px]"
                          size="txtPoppinsMedium16"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-[3px] text-white-A700_87 text-xl uppercase"
                          size="txtPoppinsMedium20WhiteA70087"
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
        <div className="flex flex-col gap-6 items-start justify-start max-w-[740px] md:mt-0 mt-[60px] w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
              size="txtPoppinsSemiBold28"
            >
              Upload Aadhar Card
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-start justify-end max-w-[740px] w-full">
                <Text
                  className="flex-1 text-base text-blue_gray-700 w-auto"
                  size="txtPoppinsRegular16"
                >
                  Aadhar Card
                </Text>
                <Text
                  className="text-base text-light_blue-A700 text-right underline w-auto"
                  size="txtPoppinsRegular16LightblueA700"
                >
                  Download XML
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[740px] md:min-w-full rounded-lg"
                  leftIcon={
                    <Img
                      className="h-6 mr-2.5"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                  }
                  shape="round"
                  color="gray_100"
                  size="xl"
                  variant="fill"
                >
                  <div className="leading-[normal] text-base text-left">
                    Offline Aadhar XML
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <Button
            className="!text-white-A700 cursor-pointer font-medium h-[54px] leading-[normal] min-w-[231px] rounded-lg text-center text-lg"
            shape="round"
            color="light_blue_A700"
            size="lg"
            variant="fill"
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default UploadAadharCardPage;
