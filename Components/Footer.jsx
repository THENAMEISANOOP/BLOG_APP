

import Image from "next/image";
import { assets } from "@/Assets/assets";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-start px-6 py-6 bg-black text-white">
      {/* Logo + text */}
      <div className="flex flex-col gap-2">
        <Image
          src={assets.logo_light}
          alt="Logo"
          width={130}
          height={50}
          className="w-[120px]"
        />
        <p className="text-sm opacity-80">
          Fresh insights, smart ideas, and practical stories every week.
        </p>
      </div>

      {/* Follow Section */}
      <div>
        <p className="font-semibold mb-2">Follow Us</p>
        <div className="flex gap-4">
          <Image
            src={assets.facebook_icon}
            alt="facebook"
            width={24}
            height={24}
          />
          <Image
            src={assets.twitter_icon}
            alt="twitter"
            width={24}
            height={24}
          />
          <Image
            src={assets.googleplus_icon}
            alt="googleplus"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
