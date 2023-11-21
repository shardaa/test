import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const GetonVideocallTwoModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-1/2"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col h-full items-center justify-center md:px-5 rounded-[16px] w-full">
          <div className="flex flex-col items-center justify-end w-auto md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
              <div className="bg-light_blue-A700_4c flex flex-col h-20 items-center justify-end outline outline-[5px] outline-light_blue-A700_19 p-4 rounded-[50%] w-20">
                <Img
                  className="h-[46px] md:h-auto object-cover w-[46px]"
                  src="images/img_customerservice.png"
                  alt="customerservice"
                />
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-blue_gray-900 text-center text-xl"
                  size="txtPoppinsMedium20Bluegray900"
                >
                  <>
                    All our agents are busy right now.
                    <br />
                    Your approximate wait time is
                  </>
                </Text>
                <Text
                  className="sm:text-[33px] md:text-[35px] text-[37px] text-center text-light_blue-A700 w-auto"
                  size="txtPoppinsSemiBold37"
                >
                  04 Mins : 55 Seconds
                </Text>
                <Text
                  className="text-blue_gray-900_a2 text-center text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    Please DO NOT press the back button or move away from this
                    browser.
                    <br />
                    Your session might get disconnected or restarted.
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default GetonVideocallTwoModal;
