import React from "react";
import { Github, Globe, Instagram, Linkedin, Mail, QrCode, BadgeCheck } from "lucide-react";

export default function IPhoneMockup() {
  return (
    <div
      data-testid="iphone-mockup"
      className="relative w-[290px] sm:w-[330px] h-[620px] sm:h-[680px] rounded-[48px] bg-black p-[5px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]"
    >
      <div className="relative w-full h-full rounded-[44px] bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 dynamic-island" />

        <div className="absolute top-1.5 left-0 right-0 px-7 flex items-center justify-between text-[10px] text-white/60 font-medium z-20">
          <span>9:41</span>
        </div>


<img src="https://res.cloudinary.com/dzwto9zbu/image/upload/v1780832249/WhatsApp_Image_2026-06-06_at_12.31.28_PM_chat1f.jpg" alt="" />
      </div>
    </div>
  );
}
