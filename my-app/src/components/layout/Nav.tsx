"use client";

// hook
import { useState } from "react";

// component
import IconMenu from "../Icon/IconMenu";
import Link from "next/link";

interface NavList {
  name: string;
}

const navList: NavList[] = [
  {
    name: "content1",
  },
  {
    name: "content2",
  },
  {
    name: "content3",
  },
  {
    name: "content4",
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <button type="button" onClick={handleClick}>
          <IconMenu />
        </button>
      </nav>
      {isOpen && (
        <ul className={`navList ${isOpen && "active"}`}>
          {navList.map((item, index) => (
            <li key={index}>
              <Link href={"#content" + index}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
