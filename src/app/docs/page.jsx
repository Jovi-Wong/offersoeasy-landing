import Image from "next/image";
import "@/components/tailwind.css";
import Tip from "@/components/Tip";

import step1 from "@/components/assets/blackhole/step-1.png";
import step2 from "@/components/assets/blackhole/step-2.png";
import step3 from "@/components/assets/blackhole/step-3.png";
import step4 from "@/components/assets/blackhole/step-4.png";
import step5 from "@/components/assets/blackhole/step-5.png";
import step6 from "@/components/assets/blackhole/step-6.png";
import step7 from "@/components/assets/blackhole/step-7.png";
import step8 from "@/components/assets/blackhole/step-8.png";
import step9 from "@/components/assets/blackhole/step-9.png";
import step10 from "@/components/assets/blackhole/step-10.png";

export const runtime = "edge";

export default function Doc() {
  return (
    <div className="w-full h-full flex space-x-4">
      <div className="w-full lg:w-2/3 flex flex-col">
        <h1 className="text-4xl font-bold mb-8">面试龙安装教程</h1>
        <h2 className="text-2xl font-bold mb-10 pt-20 -mt-20" id="macos">
          MacOs系统安装
        </h2>
        <div className="flex flex-col space-y-4 mb-10">
          <div id="step1" className="pt-16 -mt-16">
            <h3 className="text-xl mb-2 space-x-4">
              <span className="font-semibold font-serif">第一步</span>
              <span className="text-lg font-serif">下载虚拟音频设备安装包</span>
            </h3>
            <span>
              点击此
              <a
                className="text-blue-400"
                href="https://asr-dep.s3.cn-north-1.amazonaws.com.cn/BlackHole2ch-0.6.1.pkg"
              >
                链接
              </a>
              下载到本地，双击安装。
              <div className="mt-4">
                <Tip message="安装该软件是因为Mac系统存在权限问题，任何app都无法直接获取系统音频数据，所以需要安装虚拟设备转发。只有安装了才能保证面试模式正常运行。" />
              </div>
            </span>
          </div>
          <div >
            <h3 className="text-xl mb-2 space-x-4 -mt-20 pt-20" id="step2">
              <span className="font-semibold">第二步</span>
              <span className="text-lg">按步骤安装完成并重启系统</span>
            </h3>
            <Image
              src={step1}
              width="400"
              height="400"
              alt="Avatar"
              placeholder="blur"
            />
            <Image
              src={step2}
              width="400"
              height="400"
              alt="Avatar"
              placeholder="blur"
            />
            <Image
              src={step3}
              width="400"
              height="400"
              alt="Avatar"
              placeholder="blur"
            />
            <Image
              src={step4}
              width="400"
              height="400"
              alt="Avatar"
              placeholder="blur"
            />
            <Image
              src={step5}
              width="400"
              height="400"
              alt="Avatar"
              placeholder="blur"
            />
          </div>
          <div>
            <h3 className="text-xl mb-2 space-x-4 -mt-16 pt-16" id="step3">
              <span className="font-semibold font-serif">第三步</span>
              <span className="text-lg font-serif">配置音频设备</span>
            </h3>
            <div className="mb-2">
              <span>在系统中搜索midi，并单击打开</span>
              <Image
                src={step6}
                width="400"
                height="400"
                alt="Avatar"
                placeholder="blur"
              />
            </div>
            <div className="mb-2">
              <span>点左下角的 + 号，添加聚合设备</span>
              <Image
                src={step7}
                width="400"
                height="400"
                alt="Avatar"
                placeholder="blur"
              />
            </div>
            <div className="mb-2">
              <span>
                连接上你面试用的耳机，比如下图里的G431 Gaming
                Headset1；频率优先选16.0KHz，如果没有该选项，尽量选16.0KHz的倍数。
              </span>
              <Image
                src={step8}
                width="400"
                height="400"
                alt="Avatar"
                placeholder="blur"
              />
            </div>

            <div className="mb-2">
              <span>再点左下角的 + 号，添加多输出设备</span>
              <Image
                src={step9}
                width="400"
                height="400"
                alt="Avatar"
                placeholder="blur"
              />
            </div>
            <div>
              <span>
                跟之前一样，选中面试用的耳机，频率选择16.0KHz或者是其倍数
              </span>
              <Image
                src={step10}
                width="400"
                height="400"
                alt="Avatar"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col space-y-8 pt-20 -mt-20" id="windows">
          <h2 className="text-2xl font-bold">Windows系统</h2>
          <div>不需要安装虚拟设备，直接下载安装包，双击安装即可。</div>
        </div> */}
      </div>

      <div className="hidden lg:block w-1/3">
        <div className="fixed w-1/3 max-w-48 list-none space-y-2">
          <h2 className="text-xl font-bold mb-4">在本页面上</h2>
          <ul className="list-none space-y-8">
            <li className="mb-2">
              <a href="#macos" className="text-blue-500">
                MacOs系统安装
              </a>
              <ul className="mt-4 pl-4 list-none space-y-2">
                <li>
                  <a href="#step1" className="text-blue-500">
                    下载安装包
                  </a>
                </li>
                <li>
                  <a href="#step2" className="text-blue-500">
                    完成安装
                  </a>
                </li>
                <li>
                  <a href="#step3" className="text-blue-500">
                    配置音频设备
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
