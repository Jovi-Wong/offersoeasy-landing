import Tip from "@/components/Tip";
import Image from "next/image";
import "@/components/tailwind.css";

import intro1 from "@/components/assets/docs/intro1.png";

export const runtime = "edge";

export default function Interview() {
  return (
    <div className="w-full h-full flex space-x-4">
      <div className="w-full lg:w-2/3 flex flex-col space-y-4">
        <h1 className="text-4xl font-bold">面试模式使用教程</h1>
        <div className="flex flex-col space-y-8">
          <div>
            <Image
              src={intro1}
              width="800"
              height="400"
              alt="Avatar"
              placeholder="blur"
            />
            <Tip message="在面试模式中你依然可以使用笔试模式的功能，比如截屏提问，并且快捷键也是一样的。与笔试模式不同的地方在于，第一次使用面试模式时，需要下载必要的文件 ; 并且每次启动时需要等待10秒左右。" />
          </div>
          <div>
            <h3 className="text-xl mb-2 space-x-4">
              <span className="font-semibold font-serif">截屏查询</span>
              <span className="text-lg font-serif">以图片形式提问</span>
            </h3>
            <div className="font-semibold">Mac系统</div>
            <div className="space-x-1">
              <span className="text-sm">Cmd</span>
              <span>+</span>
              <span className="text-sm">Option</span>
              <span>+</span>
              <span className="text-sm">C</span>
              <span className="pl-4 select-none text-sm">
                截取特定区域
              </span>
            </div>
            <div className="space-x-1 mb-4">
              <span className="select-none text-sm">Cmd</span>
              <span>+</span>
              <span className="select-none text-sm">Option</span>
              <span>+</span>
              <span className="select-none text-sm">P</span>
              <span className="pl-4 select-none text-sm">
                截取整个屏幕
              </span>
            </div>
            <div className="font-semibold">Windows系统</div>
            <div className="space-x-1">
              <span className="text-sm">Crtl</span>
              <span>+</span>
              <span className="text-sm">Alt</span>
              <span>+</span>
              <span className="text-sm">C</span>
              <span className="pl-4 select-none text-sm">
                截取特定区域
              </span>
            </div>
            <div className="space-x-1">
              <span className="select-none text-sm">Ctrl</span>
              <span>+</span>
              <span className="select-none text-sm">Alt</span>
              <span>+</span>
              <span className="select-none text-sm">P</span>
              <span className="pl-4 select-none text-sm">
                截取整个屏幕
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-2 space-x-4">
              <span className="font-semibold font-serif">语音触发</span>
              <span className="text-lg font-serif">以语音形式提问</span>
            </h3>
            <div>
              <h2 className="text-xl mb-2 font-semibold"></h2>
            </div>
            <div>
              <h2 className="text-xl mb-2 font-semibold">快捷键触发</h2>
            </div>
            <div>
              <h2 className="text-xl mb-2 space-x-4 font-semibold">使用技巧</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-1/3">
        <div className="fixed w-1/3 max-w-48 list-none space-y-2">
          <h2 className="text-xl font-bold mb-4">在本页面上</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#getting-started" className="text-blue-500">
                Getting Started
              </a>
            </li>
            <li className="mb-2">
              <a href="#features" className="text-blue-500">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="text-blue-500">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
