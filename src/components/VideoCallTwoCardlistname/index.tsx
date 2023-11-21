import React from "react";

import { Img, Text } from "components";

type VideoCallTwoCardlistnameProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "usermicrophone" | "uservideocamera"
> &
  Partial<{
    username: string;
    usermicrophone: string;
    uservideocamera: string;
  }>;

const VideoCallTwoCardlistname: React.FC<VideoCallTwoCardlistnameProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[55px] md:h-auto rounded-[50%] w-[55px]"
          src="images/img_rectangle68.png"
          alt="rectangleSixtyEight"
        />
        <Text
          className="text-base text-blue_gray-900_02 w-auto"
          size="txtInterMedium16Bluegray90002"
        >
          {props?.username}
        </Text>
        {!!props?.usermicrophone ? (
          <Img
            className="h-6 w-6"
            alt="microphone"
            src={props?.usermicrophone}
          />
        ) : null}
        {!!props?.uservideocamera ? (
          <Img
            className="h-6 w-6"
            alt="videocamera"
            src={props?.uservideocamera}
          />
        ) : null}
      </div>
    </>
  );
};

VideoCallTwoCardlistname.defaultProps = { username: "Dianne Russell" };

export default VideoCallTwoCardlistname;
