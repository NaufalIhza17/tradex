"use client";

import React from "react";
import Image from "next/image";
import { FourPines, BellTower, CornerStone, Standish, Stover } from "~/public";

export default function Partner() {
  return (
    <section className="w-full border-y border-white/30 overflow-hidden">
      <div className="layout flex justify-around">
        <Image src={FourPines} alt="" width={162.44} height={81} />
        <Image src={BellTower} alt="" width={162.44} height={81} />
        <Image src={CornerStone} alt="" width={162.44} height={81} />
        <Image src={Standish} alt="" width={162.44} height={81} />
        <Image src={Stover} alt="" width={162.44} height={81} />
      </div>
    </section>
  );
}
