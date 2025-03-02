"use client";
import React, { useState, useEffect } from "react";

import { Container } from "@/components/Container";
import { BrowserMockup } from "@/components/BrowserMockup";

import AppleStoreLogo from "@/components/assets/store/AppleStoreLogo";
import MicrosoftStoreLogo from "@/components/assets/store/MicrosoftStoreLogo";
import BrandCarousel from "@/components/BrandCarousel";
import Image from "next/image";
import intro1 from "@/components/assets/docs/intro1.png";
import intro2 from "@/components/assets/docs/intro2.png";

export const Hero = () => {
  const [os, setOs] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Win") !== -1) setOs("Windows");
    else if (userAgent.indexOf("Mac") !== -1) setOs("Mac");
    else if (userAgent.indexOf("Linux") !== -1) setOs("Linux");
    else setOs("Other");
  }, []);

  return (
    <>
      <div className="flex flex-col items-center flex-wrap justify-center space-y-4 lg:space-y-8">
        <div className="flex justify-center items-end w-full font-bold leading-snug tracking-tight text-gray-800 text-2xl lg:text-4xl lg:leading-tight xl:leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-indigo-800 ">
            面试龙
          </span>
          用
          <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
            DeepSeek
          </span>
          助你
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-300 to-yellow-600 ">
            上岸
          </span>
        </div>
        <div className="text-md text-center text-gray-500 lg:text-xl">
          回答准确、响应快速、深藏不露，笔试面试都能用
        </div>
        <Image src={intro1} alt="intro1" className="max-w-full xl:max-w-4xl" />
      </div>
      
      <Container>
        <div className="flex flex-col justify-center space-y-4 lg:space-y-10">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            用户累计获得国内 <span className="text-indigo-600">100+</span>{" "}
            大型科技企业Offer
          </div>
          <BrandCarousel />
        </div>
      </Container>
    </>
  );
};
