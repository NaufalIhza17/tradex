import React from "react";
import Image from "next/image";

interface TestimonialCardComponent {
  avatar: string;
  name: string;
  position: string;
  comment: string;
}

export default function TestimonialCard(props: TestimonialCardComponent) {
  const { avatar, name, position, comment } = props;
  return (
    <div className="max-w-fit rounded-xl gradients-4-br to-yellow-500 p-[1px] text-white">
      <div className="flex flex-col items-start justify-center bg-[#35354B] py-8 px-6 rounded-xl text-xs font-light gap-4">
        <div className="flex gap-4">
          <Image src={avatar} alt="" width={64} height={64} />
          <div className="flex flex-col gap-2">
            <p className="text-xl">{name}</p>
            <p className="font-light text-sm">{position}</p>
          </div>
        </div>
        <p className="text-sm">{comment}</p>
      </div>
    </div>
  );
}
