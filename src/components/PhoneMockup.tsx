"use client";
import { useState, useEffect } from "react";

import {
  WifiIcon,
  Battery50Icon,
  SignalIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/20/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function PhoneMockup() {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    function showAnimateText() {
      const fullText = 
  `最坏情况下的时间复杂度是 O(n^2)。这种情况通常发生在每次分区时，一个分区只有一个元素，而另一个分区包含所有其他元素，导致每次递归调用都只减少一个元素，从而使递归深度达到 n。\n\n最坏情况下的空间复杂度是 O(n)。这是因为在最坏情况下，快速排序的递归深度可以达到 n，即每次递归调用都会增加一层栈空间。因此，在最坏情况下，递归栈的最大深度是 n，导致空间复杂度为 O(n)。`;
      setAnimatedText((prev) =>
        prev.length < fullText.length ? prev + fullText[prev.length] : prev
      );
    }
    let interval = setInterval(showAnimateText, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="border-gray-800 dark:border-gray-800 bg-gray-800 border-[7px] rounded-[2.5rem] h-[400px] w-[200px]">
      <div className="h-[16px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[8px] top-[36px] rounded-s-lg"></div>
      <div className="h-[23px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[8px] top-[62px] rounded-s-lg"></div>
      <div className="h-[23px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[8px] top-[89px] rounded-s-lg"></div>
      {/* <div className="h-[32px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute top-[71px] rounded-e-lg"></div> */}
      <div className="flex flex-col rounded-[2rem] overflow-hidden w-[187px] h-[386px] bg-white dark:bg-gray-800">
        <div className="w-full h-6 flex justify-between items-center px-4">
          <div className="text-black text-xs font-medium ml-2">
            15:00
          </div>
          <div className="flex items-center space-x-1">
            <SignalIcon className="w-4 h-4 font-bold text-black" />
            <WifiIcon className="w-4 h-4 text-black font-bold" />
            <Battery50Icon className="w-4 h-5 font-bold text-black" />
          </div>
        </div>
        <div className="w-full h-7 text-sm px-4 flex justify-center">
          <span className="flex items-center text-xs text-gray-400 h-5 bg-gray-200 rounded-full px-2">
            copilot.offersoeasy.cn
          </span>
        </div>
        <div className="w-full h-full text-sm bg-gray-100 ">
          <div className="bg-white mx-1 mt-1 rounded-md text-xs font-sans p-2 whitespace-pre-wrap "><span className="">{animatedText}</span></div>
        </div>
        <div className="w-full h-10 bg-white flex justify-around items-center px-4">
          <ArrowLeftIcon className="w-4 h-4 text-black font-bold" />
          <ArrowRightIcon className="w-4 h-4 text-black font-bold" />
          <PlusCircleIcon className="w-4 h-4 text-black rounded-full font-bold" />
          <div className="w-3 h-3 font-semibold border-2 border-black rounded-sm text-[0.5rem] flex justify-center items-center">
            2
          </div>
          <EllipsisHorizontalIcon className="w-4 h-4 text-black font-bold" />
        </div>
      </div>
    </div>
  );
}
