import Image from "next/image"
import React from "react";
import { Container } from "@/components/Container"

import userOneImg from "@/components/assets/user1.png"
import userTwoImg from "@/components/assets/user2.png"
import userThreeImg from "@/components/assets/user3.png"
import BytedanceLogo from "@/components/assets/brand/BytedanceLogo"

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              面试官只要敢问<Mark>八股</Mark>，直接开秒；敢出<Mark>算法题</Mark>，直接截屏出答案。现在没面试龙，我根本面不了试。
            </p>
            <Avatar
              image={userOneImg}
              name="某211转码选手"
              title="勇夺字节开发岗Offer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              没想到面试龙在<Mark>投研</Mark>面试中也这么好用，只要是<Mark>DeepSeek</Mark>能回答的问题面试龙都能秒答。
            </p>

            <Avatar
              image={userTwoImg}
              name="某双9商科同学"
              title="轻松入职头部投行"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              面试龙简直了，面试官问我就好像在问DeepSeek一样，唯一要注意的是不要完全照着念，否则就<Mark>完美</Mark>到令人怀疑。
            </p>

            <Avatar
              image={userThreeImg}
              name="某Top院校文科学生"
              title="成功拿下大厂产品实习"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 flex items-center justify-center">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-2 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
