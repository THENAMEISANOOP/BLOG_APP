import Image from "next/image";
import { assets } from "@/Assets/assets";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8">

        {/* Logo + Text */}
        <div className="flex-1">
          <Image
            src={assets.logo_light}
            alt="Logo"
            width={140}
            height={50}
            className="w-[120px]"
          />
          <p className="text-sm opacity-80 mt-3 leading-relaxed">
            Fresh insights, smart ideas, and practical stories every week.
          </p>
        </div>

        {/* Follow Section */}
        <div className="flex flex-col">
          <p className="font-semibold mb-3">Follow Us</p>

          <div className="flex gap-4">
            <Image src={assets.facebook_icon} alt="facebook" width={24} height={24} />
            <Image src={assets.twitter_icon} alt="twitter" width={24} height={24} />
            <Image src={assets.googleplus_icon} alt="googleplus" width={24} height={24} />
          </div>
        </div>

      </div>

      {/* Bottom small text */}
      <p className="text-center text-xs opacity-60 mt-8">
        © {new Date().getFullYear()} YourBlog. All rights reserved.
      </p>
    </footer>
  );
}
