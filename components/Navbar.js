import Link from "next/link";
import rondtarinLogo from "../public/static/images/rondtarinLogo.svg";
import Image from "next/image";
import Button from "./ui/button/Button";
import Modal from "./ui/modal/Modal";
import React from "react";

const Navbar = () => {
  const [showModal, setShowModal] = React.useState(false);

  const links = [
    { title: "حراج‌های جاری", href: "/" },
    { title: "سوالات متداول", href: "/" },
    { title: "قوانین", href: "/" },
    { title: "راهنمای سایت", href: "/" },
    { title: "تماس با ما", href: "/" },
  ];

  return (
    <nav className="h-22 bg-white shadow-sm flex items-center justify-center font-bold bg-white">
      <div className="container flex justify-between items-center w-full">
        <div className="flex gap-x-10 items-center">
          <div>
            <Image
              src={rondtarinLogo}
              height={36}
              width={96}
              alt="لوگوی رندترین"
            />
          </div>
          <div>
            <ul className="flex gap-x-10 text-purple-purple-07">
              {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-x-1">
          {showModal && <Modal setShowModal={setShowModal} />}
          <Button title="ورود" link className="text-purple-purple-05" />
          <Button
            title="ثبت نام"
            className="text-purple-purple-05 border-purple-purple-05"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
