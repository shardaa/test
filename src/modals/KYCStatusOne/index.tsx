import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";

const KYCStatusOneModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[45%]"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-light_blue-A700 border-solid flex flex-col items-center justify-start mt-[9px] pb-7 md:px-5 rounded-[16px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-light_blue-A700 flex flex-col items-center justify-end p-1.5 rounded-tl-[16px] rounded-tr-[16px] w-full">
              <Text
                className="mt-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsSemiBold24WhiteA700"
              >
                KYC Status - Unable
              </Text>
            </div>
            <Text
              className="mt-3.5 text-[13px] text-black-900"
              size="txtPoppinsRegular13"
            >
              Please send one more reason, Why you are not able to complete KYC
              Process
            </Text>
            <div className="bg-light_blue-A700_6c flex flex-row sm:gap-10 items-center justify-between mt-2.5 p-[11px] w-full">
              <Text
                className="ml-[13px] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                No Pan Card
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-5 mr-[9px] rounded w-5"></div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[13px] w-[93%] md:w-full">
              <Text
                className="text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                No Signature
              </Text>
              <Button
                className="border border-blue-700 border-solid flex h-5 items-center justify-center mb-0.5 rounded w-5"
                shape="round"
                color="blue_50"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[15px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </Button>
            </div>
            <div className="bg-light_blue-A700_6c flex flex-row sm:gap-10 items-center justify-between mt-[9px] p-[11px] w-full">
              <Text
                className="ml-[13px] text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Low Bandwidth
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-5 mr-[9px] rounded w-5"></div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[11px] w-[93%] md:w-full">
              <Text
                className="text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Unable to understand
              </Text>
              <Button
                className="border border-blue-700 border-solid flex h-5 items-center justify-center rounded w-5"
                shape="round"
                color="blue_50"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[15px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark_One"
                />
              </Button>
            </div>
            <Input
              name="group172"
              placeholder="Incorrect Surrounding"
              className="leading-[normal] p-0 placeholder:text-black-900 text-left text-sm w-full"
              wrapClassName="flex mt-3 w-full"
              suffix={
                <Img
                  className="mt-px mb-1 h-[15px] ml-[35px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              }
              shape="square"
              color="light_blue_A700_6c"
              size="xs"
            ></Input>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[13px] w-[93%] md:w-full">
              <Text
                className="text-black-900 text-sm"
                size="txtPoppinsRegular14Black900"
              >
                Connect Drop
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-5 mb-0.5 rounded w-5"></div>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-center mt-[39px] w-[54%] md:w-full">
              <div className="flex flex-col h-[50px] md:h-auto items-center justify-start w-[156px]">
                <Button
                  className="cursor-pointer font-semibold h-[50px] leading-[normal] rounded-lg text-center text-lg w-[155px]"
                  shape="round"
                  color="light_blue_A700"
                  size="md"
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
              <div className="flex flex-col h-[50px] md:h-auto items-center justify-start w-[168px]">
                <Button
                  className="!text-white-A700 cursor-pointer font-semibold h-[50px] leading-[normal] rounded-lg text-center text-lg w-[168px]"
                  shape="round"
                  color="light_blue_A700"
                  size="md"
                  variant="fill"
                >
                  Mark Unble
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default KYCStatusOneModal;
