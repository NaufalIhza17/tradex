"use client";

import React from "react";
import Image from "next/image";
import {
  HeroCircleOne,
  HeroCircleTwo,
  HeroOval,
  SmallBlur,
  BigBlur,
} from "~/public";

export default function Hero() {
  return (
    <section className="pt-[72px] pb-[82px] text-white overflow-hidden">
      <div className="layout flex flex-col items-center justify-center w-full relative">
        <Image
          src={SmallBlur}
          alt=""
          width={306}
          height={324}
          className="absolute -right-12 -rotate-[30deg] -bottom-5 blur-3xl"
        />
        <Image
          src={BigBlur}
          alt=""
          width={392}
          height={424}
          className="absolute -left-28 rotate-12 -bottom-14 blur-3xl"
        />
        <div className="max-w-full rounded-full gradients-4-br p-[1px]">
          <div className="flex items-center justify-center bg-primary py-2 px-4 rounded-[90px] text-clamp-bs">
            Introducing the Tradex Investor Portal
          </div>
        </div>
        <div className="pt-3 font-bold text-clamp-82 max-w-[1075px] -space-y-7 tracking-tight">
          <div className="flex items-center gap-4 translate-x-10">
            <h1>Scalable</h1>{" "}
            <div className="overflow-hidden w-16 h-16 rounded-full">
              <Image src={HeroCircleOne} alt="" />
            </div>{" "}
            <h1>Infrastructure</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-40 h-16 rounded-[36px]">
              <Image src={HeroOval} alt="" />
            </div>
            <h1>
              For Private{" "}
              <span className="bg-clip-text text-transparent gradients-3-br">
                Funds
              </span>
            </h1>
            <div className="w-16 h-16 rounded-[36px]">
              <Image src={HeroCircleTwo} alt="" />
            </div>
          </div>
        </div>
        <p className="max-w-[700px] text-white/70 text-center pb-12 text-clamp-xl">
          Tradex provides investors and innovators with the essential tools and
          resources necessary to cultivate growth and achieve their objectives.
        </p>
        <button className="gradients-4-br rounded-full px-40 py-4 font-extralight text-clamp-bs">
          Contact Sales
        </button>
      </div>
    </section>
  );
}
