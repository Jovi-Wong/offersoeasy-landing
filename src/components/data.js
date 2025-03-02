import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "免费免费，通通免费",
  desc: "不用充会员，也没有试用期，不限使用时长，也不限使用次数。",
  image: benefitOneImg,
  bullets: [
    {
      title: "免费的面试实时提示功能",
      desc: "不限制使用次数和时长，彻底摆脱死记硬背。",
      icon: <FaceSmileIcon />,
    },
    {
      title: "免费的笔试提示功能",
      desc: "只需截图，即可在手机上显示参考答案。",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "免费的简历润色功能",
      desc: "帮你修改简历，让简历更加出彩。",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "免费的网课助手功能",
      desc: "帮你总结网课内容，提高学习效率。",
      icon: <CursorArrowRaysIcon />,
    }
  ],
};

const benefitTwo = {
  title: "你问我支持不支持，我说支持",
  desc: "不管公司选择什么样的方式进行考察，面试龙都有应对方案。",
  image: benefitTwoImg,
  bullets: [
    {
      title: "支持所有主流操作系统",
      desc: "不管是Windows还是Mac，我们统统支持。",
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
      icon: <DevicePhoneMobileIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
