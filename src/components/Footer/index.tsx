import React from "react";
import Image from "next/image";
import { LogoTradex } from "~/public";

export default function Footer() {
  return (
    <section className="w-full text-white pb-8 overflow-hidden px-[46px]">
      <h1 className="text-[clamp(13.75rem,-2.77rem+25.813vw,20.461rem)] text-center gradients-4-br bg-clip-text text-transparent opacity-20 leading-none pb-10 font-medium">TRADEX</h1>
      <div className="layout flex flex-col gap-11 items-center justify-center">
        <Image src={LogoTradex} alt="" width={166} height={38} />
        <div className="flex font-extralight w-full pb-6 border-b border-white/20 justify-center gap-[60px] text-clamp-xl">
          <a href="">About</a>
          <a href="">Project</a>
          <a href="">Service</a>
          <a href="">Team</a>
          <a href="">Pages</a>
        </div>
        <div className="w-full flex justify-between">
          <p className="text-white/80 text-clamp-xl">© Copyright 2024, All Rights Reserved</p>
          <div className="flex gap-6 font-extralight text-clamp-lg">
            <a href="">Dribble</a>
            <a href="">Behance</a>
            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}
