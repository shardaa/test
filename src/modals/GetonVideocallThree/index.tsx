import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const GetonVideocallThreeModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-1/2"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col h-[414px] md:h-auto items-center justify-center max-w-[717px] md:px-5 rounded-[16px] w-full">
          <div className="flex flex-col gap-10 items-center justify-end w-auto md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
              <div className="bg-deep_orange-50 flex flex-col h-20 items-center justify-start outline outline-[4px] outline-red-50 p-[17px] rounded-[50%] w-20">
                <Img
                  className="h-11 w-11"
                  src="images/img_warning.svg"
                  alt="warning"
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Cannot start video KYC right now.
                </Text>
                <Text
                  className="text-blue_gray-900_a2 text-center text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    Video KYC is available between 10am and 6pm on working days.
                    <br />
                    Please complete your video KYC during working hours using
                    the link that
                    <br />
                    will be shared on your registered mobile/email ID shortly.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-semibold h-[54px] leading-[normal] rounded-lg text-2xl md:text-[22px] text-center sm:text-xl w-[231px]"
                shape="round"
                color="light_blue_A700"
                size="sm"
                variant="fill"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default GetonVideocallThreeModal;
