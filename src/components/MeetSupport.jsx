import {
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import React from "react";

import MeetingApp from "./MeetingApp";

const data = {
  title: "你问我支持不支持，我说支持",
  desc: "不管公司选择什么样的方式进行考察，面试龙总有应对之策",
  bullets: [
    {
      title: "支持所有主流操作系统",
      desc: "不管是Windows、Mac还是Linux，我们统统支持。",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "支持所有主流在线会议软件",
      desc: "不管是Zoom、腾讯会议还是钉钉，我们统统支持。",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "支持笔试、面试两种模式",
      desc: "面试支持根据面试官提问自动提示，笔试支持截图获取参考答案",
      icon: <SunIcon />,
    },
    {
      title: "支持副屏，甚至多屏即时显示答案",
      desc: "支持手机实时展示答案, 无惧屏幕共享。",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

function Benefit(props) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-indigo-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default function MeetSupport() {
  return (
    <div className="w-full flex items-center mt-8 space-x-3">
      <div className="w-1/2">
        <div className="flex flex-col w-full mt-4">
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            {data.title}
          </h3>

          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {data.desc}
          </p>
        </div>

        <div className="w-full mt-5">
          {data.bullets.map((item, index) => (
            <Benefit key={index} title={item.title} icon={item.icon}>
              {item.desc}
            </Benefit>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <MeetingApp />
      </div>
    </div>
  );
}
