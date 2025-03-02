import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import PhoneMockup from "@/components/PhoneMockup";
import { benefitOne, benefitTwo } from "@/components/data";
import LaptopMockup from "@/components/LaptopMockup";
import PadMockup from "@/components/PadMockup";
import MeetSupport from "@/components/MeetSupport";
import SceneAdaption from "@/components/SceneAdaption";

import type { Metadata } from "next";
import "@/components/tailwind.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "面试龙 - 用DeepSeek助你上岸",
  description: "面试龙用DeepSeek助你上岸",
};

export const runtime = "edge";

export default function Home() {
  return (
    <Container className="w-full h-full pt-24">
      <Hero />
      <SceneAdaption />

      {/* <Benefits data={benefitOne} /> */}
      <MeetSupport />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle preTitle="用户评价" title="上线以来收到用户如潮好评">
        面试龙在不同岗位的面试中，辅助用户在高压环境下依然游刃有余
      </SectionTitle>
      <Testimonials />

      <SectionTitle preTitle="常见问题" title="关于面试龙，或许你还想问....">
        作为目前最强大同时免费的面试神器，我们经常收到各种用户的提问，在这里罗列一些最多被问到的问题和对应回答，希望对您有帮助
      </SectionTitle>
      <Faq />
      <Cta />
    </Container>
  );
}
