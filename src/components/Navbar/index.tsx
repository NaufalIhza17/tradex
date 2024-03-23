"use client";

import React from "react";
import Image from "next/image";
import {
  LogoTradex,
} from "~/public";

export default function Navbar() {
  return (
    <section className="w-full text-white border-b border-white/40 py-5">
      <div className="layout flex justify-around items-center">
        <Image src={LogoTradex} alt="" width={166} height={38} />
        <div className="flex gap-7 items-center justify-center text-clamp-bs">
          <a href="">HOME</a>
          <div className="w-1 h-1 gradients-4-br rounded-full"></div>
          <a href="">PRODUCT</a>
          <div className="w-1 h-1 gradients-4-br rounded-full"></div>
          <a href="">PRICING</a>
          <div className="w-1 h-1 gradients-4-br rounded-full"></div>
          <a href="">RESOURCES</a>
        </div>
        <div className="flex gap-3 text-clamp-bs">
          <button className="border border-white rounded-[52px] px-5 py-[14px]">
            Sign In
          </button>
          <button className="gradients-4-br via rounded-[52px] px-5 py-[14px]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
