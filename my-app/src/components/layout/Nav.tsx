"use client";

// hook
import { useState } from "react";

// component
import Link from "next/link";
import IconMenu from "../Icon/IconMenu";

// interface
import { HeaderProps } from "@/types/common.types";

// style
import style from "@/styles/components/layout/Nav.module.scss";

// dummy data
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

export default function Nav(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={style.navBtn}>
        <button type="button" onClick={handleClick}>
          {props.isActive ? <IconMenu color="#000000" /> : <IconMenu />}
        </button>
      </nav>
      {isOpen && (
        <ul className={`${style.navList} ${isOpen && style.active}`}>
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
