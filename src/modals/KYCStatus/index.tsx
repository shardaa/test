import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Text } from "components";

const KYCStatusModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[45%]"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-light_blue-A700 border-solid flex flex-col items-center justify-start mt-[7px] md:px-5 rounded-[16px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-light_blue-A700 flex flex-col items-center justify-end p-[7px] rounded-tl-[16px] rounded-tr-[16px] w-full">
              <Text
                className="mt-2 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsSemiBold24WhiteA700"
              >
                KYC Status - Successful
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-2.5 w-[93%] md:w-full">
              <Text
                className="mt-0.5 text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                DOB
              </Text>
              <Text
                className="text-base text-green-A700 text-right"
                size="txtPoppinsMedium16GreenA700"
              >
                Match
              </Text>
            </div>
            <div className="bg-light_blue-A700_6c flex flex-row sm:gap-10 items-center justify-between mt-2.5 p-2.5 w-full">
              <Text
                className="ml-3.5 text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Mother’s Name
              </Text>
              <Text
                className="mr-3 text-base text-green-A700 text-right"
                size="txtPoppinsMedium16GreenA700"
              >
                Match
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[9px] w-[93%] md:w-full">
              <Text
                className="mt-0.5 text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Place of Birth
              </Text>
              <Text
                className="text-base text-red-600 text-right"
                size="txtPoppinsMedium16Red600"
              >
                Mismatch
              </Text>
            </div>
            <div className="bg-light_blue-A700_6c flex flex-row sm:gap-10 items-center justify-between mt-[11px] p-[9px] w-full">
              <Text
                className="ml-[15px] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Detail Verification Question 4
              </Text>
              <Text
                className="mr-[13px] text-base text-red-600 text-right"
                size="txtPoppinsMedium16Red600"
              >
                Mismatch
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-2 w-[93%] md:w-full">
              <Text
                className="mt-[3px] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Detail Verification Question 5
              </Text>
              <Text
                className="text-base text-red-600 text-right"
                size="txtPoppinsMedium16Red600"
              >
                Mismatch
              </Text>
            </div>
            <div className="bg-light_blue-A700_6c flex flex-row sm:gap-10 items-center justify-between mt-[11px] p-2.5 w-full">
              <Text
                className="ml-[15px] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Number on PAN photo with PAN Number
              </Text>
              <Text
                className="mr-[13px] text-base text-green-A700 text-right"
                size="txtPoppinsMedium16GreenA700"
              >
                Match
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-2.5 w-[93%] md:w-full">
              <Text
                className="mt-[3px] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Number on PAN photo with Aadhaar Number
              </Text>
              <Text
                className="text-base text-green-A700 text-right"
                size="txtPoppinsMedium16GreenA700"
              >
                Match
              </Text>
            </div>
            <div className="bg-light_blue-A700_6c flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 p-[9px] w-full">
              <Text
                className="ml-4 sm:ml-[0] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Aadhaar Name with either PAN display name or NSDL API Name
              </Text>
              <Text
                className="mr-3.5 text-base text-green-A700 text-right"
                size="txtPoppinsMedium16GreenA700"
              >
                Match
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-2.5 w-[93%] md:w-full">
              <Text
                className="mt-[3px] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Date of Birth with that on PAN photo
              </Text>
              <Text
                className="text-base text-green-A700 text-right"
                size="txtPoppinsMedium16GreenA700"
              >
                Match
              </Text>
            </div>
            <div className="bg-light_blue-A700_6c flex flex-row sm:gap-10 items-center justify-between mt-2.5 p-2.5 w-full">
              <Text
                className="ml-[15px] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Father’s name with that on PAN photo
              </Text>
              <Text
                className="mr-[13px] text-base text-green-A700 text-right"
                size="txtPoppinsMedium16GreenA700"
              >
                Match
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-2.5 w-[93%] md:w-full">
              <Text
                className="mt-[3px] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Aadhaar photo- face Comparison
              </Text>
              <Text
                className="text-base text-red-600 text-right"
                size="txtPoppinsMedium16Red600"
              >
                0%
              </Text>
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-start mt-2.5 w-full">
              <div className="bg-light_blue-A700_6c flex flex-row sm:gap-10 items-center justify-between p-2.5 w-full">
                <Text
                  className="ml-[15px] text-black-900 text-sm"
                  size="txtPoppinsRegular14Black900"
                >
                  Pan Card-Face Comparison
                </Text>
                <Text
                  className="mr-[13px] text-base text-green-A700 text-right"
                  size="txtPoppinsMedium16GreenA700"
                >
                  90%
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between w-[93%] md:w-full">
                <Text
                  className="mt-[3px] text-black-900 text-sm"
                  size="txtPoppinsRegular14Black900"
                >
                  Signature
                </Text>
                <Text
                  className="text-base text-green-A700 text-right"
                  size="txtPoppinsMedium16GreenA700"
                >
                  Taken
                </Text>
              </div>
            </div>
            <div className="bg-blue_gray-50_01 flex flex-col items-center justify-start mt-[17px] p-[22px] sm:px-5 rounded-bl-[16px] rounded-br-[16px] w-full">
              <div className="flex flex-col items-center justify-start w-[71%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between w-full">
                  <div className="flex flex-col h-[50px] md:h-auto items-center justify-start w-[153px]">
                    <Button
                      className="cursor-pointer font-semibold h-[50px] leading-[normal] rounded-lg text-center text-lg w-[153px]"
                      shape="round"
                      color="light_blue_A700"
                      size="md"
                      variant="outline"
                    >
                      Cancel
                    </Button>
                  </div>
                  <div className="flex flex-col h-[50px] md:h-auto items-center justify-start w-[246px]">
                    <Button
                      className="!text-white-A700 cursor-pointer font-semibold h-[50px] leading-[normal] rounded-lg text-center text-lg w-[245px]"
                      shape="round"
                      color="light_blue_A700"
                      size="md"
                      variant="fill"
                    >
                      Make KYC Successful
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default KYCStatusModal;
