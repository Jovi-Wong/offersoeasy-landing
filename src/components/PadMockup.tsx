"use client";

import { useState, useEffect } from "react";
import {
  WifiIcon,
  Battery50Icon,
  SignalIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from "@heroicons/react/20/solid";

import {
  Square2StackIcon
} from "@heroicons/react/24/outline"

export default function PadMockup() {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    function showAnimateText() {
      const fullText = `最坏情况下的时间复杂度是 O(n^2)。这种情况通常发生在每次分区时，一个分区只有一个元素，而另一个分区包含所有其他元素，导致每次递归调用都只减少一个元素，从而使递归深度达到 n。\n\n最坏情况下的空间复杂度是 O(n)。这是因为在最坏情况下，快速排序的递归深度可以达到 n，即每次递归调用都会增加一层栈空间。因此，在最坏情况下，递归栈的最大深度是 n，导致空间复杂度为 O(n)。`;
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
    <div className="w-[450px] h-[682px] flex flex-col border-gray-800  bg-gray-800 border-[8px] rounded-[2rem] md:max-w-[512px]">
      <div className="w-full h-6 flex justify-between items-center px-4 bg-white rounded-t-[5rem]">
        <div className="text-black text-xs font-normal ml-2">15:00 Mon Aug 8</div>
        <div className="flex items-center space-x-1">
          <SignalIcon className="w-4 h-4 font-bold text-black" />
          <WifiIcon className="w-4 h-4 text-black font-bold" />
          <Battery50Icon className="w-4 h-5 font-bold text-black" />
        </div>
      </div>
      <div className="w-full h-7 flex justify-between text-sm py-1 bg-white">
        <div className="shrink bg-white flex justify-start items-center rounded-b-[2rem] px-4 space-x-2">
          <ArrowLeftIcon className="w-4 h-4 text-black font-bold" />
          <ArrowRightIcon className="w-4 h-4 text-black font-bold" />
        </div>
        <div className="grow flex justify-center items-center text-xs text-gray-400 h-5 bg-gray-200 rounded-sm px-2">
          copilot.offersoeasy.cn
        </div>
        <div className="shrink bg-white flex justify-end items-center px-4 rounded-b-[2rem]">
          <Square2StackIcon className="w-4 h-4 text-black font-bold" />
        </div>
      </div>
      <div className="overflow-hidden h-full bg-gray-100 rounded-b-[1.5rem]">
        <div className="text-md mx-2 mt-2 p-2 bg-white rounded-t-md text-xs font-sans whitespace-pre-wrap">
          <span className="text-md font-bold">快速排序在最坏的情况下时间复杂度和空间复杂度是多少？</span>
        </div>
        <div className="text-md mx-2 bg-white rounded-b-md text-xs font-sans p-2 whitespace-pre-wrap">
          <span className="text-md">{animatedText}</span>
        </div>
      </div>
    </div>
  );
}
