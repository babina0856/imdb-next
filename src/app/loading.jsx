"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image className="h-52" src="/loading.svg" width={43} height={43} alt="loading..." />
    </div>
  );
}
