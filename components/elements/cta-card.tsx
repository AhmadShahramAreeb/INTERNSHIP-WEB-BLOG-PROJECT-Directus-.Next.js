/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

const CTACard = () => {
  return (
    <div className="rounded-md bg-slate-100 py-6 px-6 relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-br from-white/95 via-white/20 to-white/3" />
      {/* Image for background */}
      <Image
        className="object-center object-cover"
        layout="fill"
        alt="Sultan Ahmet Cami,İstanbul Türkiye"
        src="https://media.istockphoto.com/id/514325748/tr/foto%C4%9Fraf/bosphorus-bridge-during-the-sunset-istanbul.jpg?s=2048x2048&w=is&k=20&c=zicOXaUQsPUpCXKowR8G5eYZ75ny-T_XjyWwJ7YAfes="
        objectFit="cover"
        objectPosition="center 80%"
      />
      {/* Your component code here */}
      <div className="relative z-20">
        <div className="font-medium text-lg">#exploretheworld</div>
        <h3 className="text-4xl mt-3 font-semibold">
          Explore the world with me!
        </h3>
        <p className="mt-2 text-lg max-w-lg font-bold">
          Explore the world with me! I&apos;m travelling around the world.
          I&apos;ve visited most of the great cities of Turkey and currently
          I&apos;m travelling in Europe. Join me!
        </p>
        {/* Form */}
        <form className="w-full mt-6 flex items-center gap-2">
          <input
            placeholder=" Write your email."
            className="w-full md:w-auto placeholder:text-sm px-3 py-3 text-base rounded-md bg-white/80 outline-none focus:ring-2 ring-neutral-600"
          />
          <button className="bg-neutral-900 whitespace-nowrap rounded-md py-2 px-3 text-neutral-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
