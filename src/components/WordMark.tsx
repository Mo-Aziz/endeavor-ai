// src/components/WordMark.tsx

import Image from "next/image";
import logo from "@/assets/logo.png"

export default function WordMark() {
    return (
<div className="flex flex-row gap-1 items-center justify-start">
<Image src={logo}  height={50} width={100} alt="endeovr logo"/> 
<p className="font-extrabold text-white font-sans text-3xl">Endeavor AI</p>
</div>
    );
  }
  