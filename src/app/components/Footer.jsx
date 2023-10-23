import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer z-10 border border-t-[#013757] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-between">
        <Image src="/images/logo.png" alt="logo" width={80} height={80}></Image>
        <p className="text-slate-600 pt-4">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
