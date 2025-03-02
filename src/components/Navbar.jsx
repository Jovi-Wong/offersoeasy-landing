"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "使用文档", route: "/docs" },
    { name: "求职资源", route: "/community" },
  ];
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
    <nav className="w-screen h-16 fixed top-0 z-30 bg-white flex items-center justify-between py-2 shadow-md">
      <Link
        className="min-w-24 w-1/6 flex items-center justify-center"
        href="/"
      >
        <span className="flex-1 flex justify-center items-center space-x-2 text-lg lg:text-2xl font-medium text-indigo-600 dark:text-gray-100">
          <Image
            src="/img/icon.png"
            width="32"
            alt="N"
            height="32"
            className="w-8"
          />
          <span className="font-semibold">面试龙</span>
        </span>
      </Link>

      <ul className="grow flex text-center items-center justify-center list-none">
        {navigation.map((menu, index) => (
          <li className="mr-3 flex items-center" key={index}>
            <Link
              href={menu.route}
              className="inline-block text-md lg:text-lg px-4 py-2\font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-600"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-1/6 hidden font-bold text-white sm:flex items-center justify-center">
        {os === "Mac" && (
          <a
            href="https://asr-dep.s3.cn-north-1.amazonaws.com.cn/offersoeasy-mac-arm64.dmg"
            className="bg-indigo-600 rounded-md px-4 py-2"
          >
            免费下载
          </a>
        )}
        {os === "Windows" && (
          <a
            href="https://asr-dep.s3.cn-north-1.amazonaws.com.cn/offersoeasy-win-x64.exe"
            className="bg-indigo-600 rounded-md  px-4 py-2"
          >
            免费下载
          </a>
        )}
      </div>

      {/* <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton
              aria-label="Toggle Menu"
              className="absolute px-2 py-1 text-gray-500 rounded-md hover:text-indigo-600"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {open && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!open && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </DisclosureButton>

            <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
              <>
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.route}
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-600"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/"
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                >
                  免费下载
                </Link>
              </>
            </DisclosurePanel>
          </>
        )}
      </Disclosure> */}
    </nav>
  );
};
