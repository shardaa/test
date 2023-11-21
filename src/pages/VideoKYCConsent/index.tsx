import React from "react";

import { Button, Img, Text } from "components";

const VideoKYCConsentPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins gap-[13px] items-start mx-auto w-full">
        <div className="h-[937px] md:px-5 relative w-[44%] md:w-full">
          <div className="absolute h-[937px] inset-[0] justify-center m-auto shadow-bs3 w-[97%] md:w-full">
            <div className="absolute bg-blue-A700 h-[936px] inset-[0] justify-center m-auto rounded-bl-[20px] rounded-tl-[20px] w-full"></div>
            <div className="absolute h-[937px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[937px] m-auto object-cover w-full"
                src="images/img_pngtreebeautiful_937x597.png"
                alt="pngtreebeautifu"
              />
              <div className="absolute flex flex-col md:gap-10 gap-44 justify-start left-[5%] top-[3%] w-3/4">
                <div className="flex flex-col items-center justify-start w-2/5 md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                    <Img
                      className="h-[30px] w-[31px]"
                      src="images/img_group1171275830_white_a700_30x31.svg"
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
                <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[7px]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsSemiBold32"
                  >
                    <>
                      Read the consent carefully
                      <br />
                      and Give your consent
                    </>
                  </Text>
                  <Text
                    className="text-blue-100 text-lg"
                    size="txtPoppinsMedium18"
                  >
                    You are few steps away on KYC
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="absolute bottom-[4%] h-[464px] right-[0]"
            src="images/img_getstarted1.svg"
            alt="getstartedTwo"
          />
        </div>
        <div className="flex flex-col gap-6 items-start justify-start max-w-[807px] md:mt-0 mt-[59px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
              size="txtPoppinsSemiBold28"
            >
              Video KYC Consent
            </Text>
          </div>
          <div className="flex flex-col gap-7 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start max-w-[740px] w-full">
                  <Text
                    className="leading-[26.00px] text-base text-blue_gray-700"
                    size="txtPoppinsRegular16"
                  >
                    <>
                      Please ensure that you have :<br />
                      Proper network and lighting in your room.
                      <br />
                      Keep your original pan handy
                      <br />
                      Keep blank white sheet paper and black/blue pen for
                      <br /> signature capture
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-light_blue-A700 border border-gray-300 border-solid flex flex-col h-[175px] md:h-auto items-center justify-center sm:px-5 px-7 py-[15px] rounded-lg shadow-bs w-[388px] sm:w-full">
              <Img
                className="h-16 w-16"
                src="images/img_search.svg"
                alt="search"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <div className="flex md:flex-col flex-row gap-[13px] items-center justify-start w-auto md:w-full">
                      <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded w-4"></div>
                      <Text
                        className="leading-[26.00px] text-base text-blue_gray-700"
                        size="txtPoppinsRegular16"
                      >
                        <>
                          I hearby give my consent to complete my KYC through
                          VCIP(Video Customer
                          <br />
                          Identification Process), a process defined by RBI and
                          processing of personal data
                          <br />
                          (Name, DOB, Pan, Photograph ,Longitude and Latitude
                          and Signature). I agree
                          <br />
                          to abide by the terms and conditions laid down by the
                          Bank.
                        </>
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-auto md:w-full">
                      <div className="bg-blue-50 border border-light_blue-A700 border-solid flex flex-col h-4 items-center justify-start p-0.5 rounded w-4">
                        <Img
                          className="h-3 w-3"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                      <Text
                        className="leading-[26.00px] text-base text-blue_gray-700"
                        size="txtPoppinsRegular16"
                      >
                        <>
                          I heareby authorize the bank to open account using OTP
                          based e-KYC, in non face
                          <br />
                          to face mode. In case my Video KYC process is
                          unsuccessful due to any reason, it
                          <br />
                          would be subject to restrictions/processes prescribed
                          by RBI.
                        </>
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                      <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded w-4"></div>
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        I confirm that I am present in India while doing the
                        video KYC
                      </Text>
                    </div>
                  </div>
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

export default VideoKYCConsentPage;
