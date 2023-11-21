import React from "react";

import { Img, Text } from "components";

const GetonVideocallOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="bg-blue-A700 flex flex-col items-center justify-start md:px-5 rounded-bl-[20px] rounded-tl-[20px] w-[42%] md:w-full">
          <div className="bg-blue-A700 flex flex-col items-center justify-start rounded-bl-[20px] rounded-tl-[20px] w-full">
            <div className="h-[936px] relative w-full">
              <div className="h-[936px] m-auto w-full">
                <Img
                  className="h-[936px] m-auto object-cover w-full"
                  src="images/img_pngtreebeautiful_2.png"
                  alt="pngtreebeautifu"
                />
                <div className="absolute flex flex-col md:gap-10 gap-[150px] justify-start left-[5%] top-[3%] w-[44%]">
                  <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
                    <div className="h-[30px] relative w-[173px]">
                      <Img
                        className="absolute h-[30px] inset-y-[0] left-[0] my-auto w-[31px]"
                        src="images/img_group1171275830_6.svg"
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
                            src="images/img_group1171275830_7.svg"
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
                  <div className="border border-solid border-white-A700 flex flex-col h-[235px] items-center justify-start md:ml-[0] ml-[23px] p-2 rounded-[117px] w-[235px]">
                    <Img
                      className="h-[219px] md:h-auto rounded-[50%] w-[219px]"
                      src="images/img_ellipse22.png"
                      alt="ellipseTwentyTwo"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col justify-start right-[10%] top-[26%] w-3/4">
                <Img
                  className="h-[159px] md:ml-[0] ml-[183px]"
                  src="images/img_vector2.svg"
                  alt="vectorTwo"
                />
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly mt-[3px] w-full">
                  <Img
                    className="h-[165px] sm:mt-0 mt-[27px]"
                    src="images/img_vector3.svg"
                    alt="vectorThree"
                  />
                  <div className="border border-solid border-white-A700 flex flex-col h-[235px] items-center justify-start p-2 rounded-[117px] w-[235px]">
                    <Img
                      className="h-[219px] md:h-auto rounded-[50%] w-[219px]"
                      src="images/img_ellipse25.png"
                      alt="ellipseTwentyFive"
                    />
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

export default GetonVideocallOnePage;
