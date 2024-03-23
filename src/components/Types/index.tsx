import React from "react";
import Image from "next/image";
import { Plus } from "~/public";
import { TypeServiceDatas } from "@/data/staticData";

export default function Types() {
  return (
    <section className="text-white py-16 overflow-hidden">
      <div className="layout flex gap-6 justify-center">
        {TypeServiceDatas.map((data, index) => (
          <div key={index} className="w-[clamp(21.3rem,8.192rem+20.481vw,26.625rem)] flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl relative">
              <Image src={data.imagePath} alt="" width={426} height={342} />
              <div className="absolute p-3 flex items-center justify-center bg-white/20 backdrop-blur-sm bottom-6 left-6 rounded-2xl">
                <Image src={Plus} alt="" width={48} height={48} className="w-[clamp(2.4rem,0.923rem+2.308vw,3rem)]" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-clamp-2xl font-medium leading-none">
                {data.title}
              </h2>
              <p className="font-light text-white/80 leading-none text-clamp-lg">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
