import React from "react";

import { Button, Img, Line, Text } from "components";

const UploadPanCardPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins gap-[35px] items-start mx-auto md:pr-10 sm:pr-5 pr-[67px] w-full">
        <div className="h-[936px] relative rounded-bl-[20px] rounded-tl-[20px] shadow-bs3 w-[44%] md:w-full">
          <div className="bg-blue-A700 flex flex-col h-full items-start justify-start m-auto p-[25px] sm:px-5 rounded-bl-[20px] rounded-tl-[20px] w-full">
            <div className="flex flex-col items-center justify-start mb-[855px] ml-0.5 md:ml-[0] w-[32%] md:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                <Img
                  className="h-[30px] w-[31px]"
                  src="images/img_group1171275830_30x31.svg"
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
          <div className="absolute bg-blue-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-bl-[20px] rounded-tl-[20px] w-full">
            <div className="h-[936px] relative w-full">
              <Img
                className="h-[936px] m-auto object-cover w-full"
                src="images/img_pngtreebeautiful_1.png"
                alt="pngtreebeautifu"
              />
              <div className="absolute flex flex-col gap-[31px] justify-start left-[5%] top-[3%] w-[58%]">
                <div className="flex flex-col md:gap-10 gap-[66px] justify-start mr-4 w-[96%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                      <Img
                        className="h-[30px] w-[31px]"
                        src="images/img_group1171275830_1.svg"
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
                  <div className="h-[234px] md:ml-[0] ml-[21px] relative w-[94%]">
                    <div className="absolute h-[234px] inset-[0] justify-center m-auto w-[99%]">
                      <Img
                        className="absolute h-[234px] inset-[0] justify-center m-auto object-cover w-[99%]"
                        src="images/img_pancard7579594960720.png"
                        alt="pancard75795949"
                      />
                      <Img
                        className="absolute bottom-[2%] h-[195px] left-[0] object-cover w-[93%]"
                        src="images/img_pancard7579594960720_195x279.png"
                        alt="pancard75795949_One"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[3%] h-[157px] left-[0] object-cover w-[85%]"
                      src="images/img_pancard7579594960720_157x259.png"
                      alt="pancard75795949_Two"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[31px] w-[91%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsSemiBold32"
                  >
                    <>
                      Video KYC is a<br />
                      three-step process
                    </>
                  </Text>
                  <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-11 items-start justify-start w-[86%] md:w-full">
                        <Text
                          className="bg-white-A700 flex h-[30px] items-center justify-center mb-[3px] rounded-[50%] text-base text-blue-A700 text-center uppercase w-[30px]"
                          size="txtPoppinsMedium16"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-[3px] text-white-A700 text-xl uppercase"
                          size="txtPoppinsMedium20"
                        >
                          Upload pan card
                        </Text>
                      </div>
                      <Line className="bg-blue-300 h-9 md:ml-[0] ml-[15px] mt-1 w-0.5" />
                      <div className="flex flex-row gap-11 items-start justify-start mt-[9px] w-full">
                        <Text
                          className="bg-white-A700_87 flex h-[30px] items-center justify-center mb-[3px] rounded-[50%] text-base text-blue-A700 text-center uppercase w-[30px]"
                          size="txtPoppinsMedium16"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-[3px] text-white-A700_87 text-xl uppercase"
                          size="txtPoppinsMedium20WhiteA70087"
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
              Upload Pan Card
            </Text>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtPoppinsRegular16"
                >
                  Pan Card – Photo/PDF
                </Text>
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
                      Upload Pan Card – Photo/PDF
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <Text
              className="bg-light_blue-A700 flex h-[50px] items-center justify-center rounded-[50%] text-[19px] text-center text-white-A700 w-[50px]"
              size="txtPoppinsSemiBold19"
            >
              OR
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtPoppinsRegular16"
                >
                  E -Pan Card
                </Text>
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
                      Upload E -Pan card
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <Text
              className="bg-light_blue-A700 flex h-[50px] items-center justify-center rounded-[50%] text-[19px] text-center text-white-A700 w-[50px]"
              size="txtPoppinsSemiBold19"
            >
              OR
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtPoppinsRegular16"
                >
                  Pan Card – Photo/PDF
                </Text>
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
                      Take a photo of Pan card
                    </div>
                  </Button>
                </div>
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

export default UploadPanCardPage;
