"use client";

import { useState, useEffect } from "react";

export function BrowserMockup() {
  const [chat, setChat] = useState<
    Array<{ role: "ask" | "answer"; content: string }>
  >([]);
  const [animatedText, setAnimatedText] = useState("");
  const fullText =
    "Redisson通过看门狗机制自动续期锁的有效期，以防止锁提前释放。默认情况下，每10秒续期一次，续期时间为30秒，可以通过Config.lockWatchdogTimeout来设置。";

  useEffect(() => {
    function animateText() {
        setAnimatedText((prev) =>
          prev.length < fullText.length ? prev + fullText[prev.length] : prev
        );
    }
    let interval = setInterval(animateText, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-full max-w-2xl mx-auto my-10">
      <div className="w-full h-11 relative rounded-t-lg bg-indigo-600 flex overflow-hidden justify-start items-center space-x-1.5 px-2">
        <span className="relative w-3 h-3 border-2 rounded-full border-red-400 bg-red-400"></span>
        <span className="relative w-3 h-3 border-2 rounded-full border-yellow-400 bg-yellow-400"></span>
        <span className="relative w-3 h-3 border-2 rounded-full border-green-400 bg-green-400"></span>
      </div>
      <div className="relative bg-gray-200 w-full h-96 rounded-b-lg">
        <div className="absolute w-full h-full inset-0 rounded-b-lg flex flex-col overflow-y-scroll scrollbar-hide px-1">
          <div className="chat chat-start">
            <div className="chat-bubble bg-green-500 text-black">
              请简述Redission中用于实现分布式锁的看门狗机制？
            </div>
          </div>
          <div className="w-full chat chat-end">
            <div className="w-full chat-bubble bg-white text-black">
              {animatedText}
            </div>
          </div>
          {chat.map((item, index) => {
            return item.role === "ask" ? (
              <div key={index} className="chat chat-start">
                <div className="chat-bubble bg-green-500 text-black">
                  {item.content}
                </div>
              </div>
            ) : (
              <div key={index} className="chat chat-end">
                <div className="chat-bubble bg-white text-black">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-0 mb-2 w-full flex justify-center items-center rounded-2xl z-10">
          <button className="btn btn-primary rounded-2xl ">我来问一个</button>
        </div>
      </div>
    </div>
  );
}
