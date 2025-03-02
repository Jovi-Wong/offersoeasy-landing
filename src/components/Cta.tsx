"use client";
import { useState, useEffect } from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  const [os, setOs] = useState(null);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Win") !== -1) setOs("Windows");
    else if (userAgent.indexOf("Mac") !== -1) setOs("Mac");
    else if (userAgent.indexOf("Linux") !== -1) setOs("Linux");
    else setOs("Other");
  }, []);

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            准备好让面试龙带你起飞了吗
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            用 DeepSeek 为你的面试保驾护航
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          {os === "Mac" && (
            <a
              href="https://asr-dep.s3.cn-north-1.amazonaws.com.cn/offersoeasy-mac-arm64.dmg"
              className="inline-block py-3 mx-auto text-lg font-bold select-none text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
            >
              立即免费下载
            </a>
          )}
          {os === "Windows" && (
            <a
              href="https://asr-dep.s3.cn-north-1.amazonaws.com.cn/offersoeasy-win-x64.exe"
              className="inline-block py-3 mx-auto text-lg font-bold select-none text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
            >
              立即免费下载
            </a>
          )}
        </div>
      </div>
    </Container>
  );
};
