import intro2 from "@/components/assets/docs/intro2.png";
import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

export default function SceneAdaption() {
  return (
    <div className="flex flex-col items-center flex-wrap justify-center">
      <SectionTitle
        preTitle="我们提供的服务"
        title="能适配您的各种设备和使用场景"
      >
        我们的产品以电脑桌面端app为核心，此外还提供手机、电脑、Pad等设备的浏览器上可访问的网站，支持多屏协同工作，满足各种使用场景。
      </SectionTitle>
      <Image src={intro2} alt="intro1" className="max-w-full xl:max-w-4xl" />
    </div>
  );
}
