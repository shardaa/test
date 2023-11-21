import React from "react";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-auto md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[0.12px] w-auto"
              size="txtPoppinsRegular24Bluegray900"
            >
              Video KYC
            </Text>
            <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center max-w-[633px] w-full">
              <div className="bg-gray-100_02 border border-gray-300_01 border-solid flex flex-1 flex-col h-12 md:h-auto items-start justify-center p-[13px] rounded-[24px] w-full">
                <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                  <Text
                    className="flex-1 text-gray-900_87 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90087"
                  >
                    Search
                  </Text>
                </div>
              </div>
              <Img
                className="h-12 rounded-[50%] w-12"
                src="images/img_frame1171275847.svg"
                alt="frame1171275847"
              />
              <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-start pl-[5px] pr-5 py-[5px] rounded-[24px] w-auto">
                <div className="h-[38px] relative w-[38px]">
                  <Img
                    className="h-[38px] m-auto rounded-[50%] w-[38px]"
                    src="images/img_ellipse3226.png"
                    alt="ellipse3226"
                  />
                  <div className="absolute bg-green-A700 bottom-[0] h-2 right-[8%] rounded-[50%] w-2"></div>
                </div>
                <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                  <div className="flex flex-col gap-[-3px] items-start justify-center w-auto">
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-blue_gray-900_03 text-sm w-auto"
                        size="txtPoppinsMedium14Bluegray90003"
                      >
                        Alex meian
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-[10px] text-green-A700 w-auto"
                        size="txtPoppinsMedium10GreenA700"
                      >
                        Online
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_icons_blue_gray_900_03.svg"
                    alt="icons_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
