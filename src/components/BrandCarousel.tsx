"use client";
import React, { useState } from "react";

import MeituanLogo from "@/components/assets/brand/MeituanLogo";
import TaobaoLogo from "@/components/assets/brand/TaobaoLogo";
import BytedanceLogo from "@/components/assets/brand/BytedanceLogo";
import NeteaseLogo from "@/components/assets/brand/NeteaseLogo";
import PddLogo from "@/components/assets/brand/PddLogo";
import RedLogo from "@/components/assets/brand/RedLogo";
import BilibiliLogo from "@/components/assets/brand/BilibiliLogo";
import JingdongLogo from "@/components/assets/brand/JingdongLogo";
import AmazonLogo from "@/components/assets/brand/AmazonLogo";
import DidiLogo from "@/components/assets/brand/DidiLogo";
import MicrosoftLogo from "@/components/assets/brand/MicrosoftLogo";
import KuaishouLogo from "@/components/assets/brand/KuaishouLogo";

export default function BrandCarousel() {
  const brands = [
    <MeituanLogo key="meituan" />,
    <RedLogo key="red" />,
    <PddLogo key="pdd" />,
    <NeteaseLogo key="netease" />,
    <TaobaoLogo key="taobao" />,
    <BytedanceLogo key="bytedance" />,
    <JingdongLogo key="jingdong" />,
    <BilibiliLogo key="bilibili" />,
    <AmazonLogo key="amazon" />,
    <MicrosoftLogo key="microsoft" />,
    <DidiLogo key="didi" />,
    <KuaishouLogo key="kuaishou" />,
  ];

  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)]"
    >
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {brands.map((brand, index) => (
          <li key={index}>{brand}</li>
        ))}
        {brands.map((brand, index) => (
          <li key={index}>{brand}</li>
        ))}
      </ul>
    </div>
  );
}
