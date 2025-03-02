"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "除了面试和笔试的辅助功能，面试龙还能提供哪些服务?",
    answer: "在App中还集成了最新最全的面试经验分享，个人简历智能修改，网课内容总结等功能，它们均可以免费使用。",
  },
  {
    question: "能支持我想要面试或者笔试的岗位吗？",
    answer: "只要您的岗位的面试和笔试是在线进行的，那么就可以使用面试龙，常见的岗位包括数据分析师、软件工程师、产品经理、商业分析师、法务、会计、人力资源等。"
  },
  {
    question: "屏幕截图和监听系统声音有可能会被发现吗?",
    answer: "绝对不会，目前还没有办法能够发现面试龙，如果要求共享屏幕则可以通过手机作为副屏规避检查。"
  }
];
