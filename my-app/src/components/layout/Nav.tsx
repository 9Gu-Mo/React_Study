"use client";

// hook
import { useEffect, useState } from "react";

// component
import Link from "next/link";
import IconMenu from "../Icon/IconMenu";

// interface
import { HeaderProps } from "@/types/common.types";

// style
import style from "@/styles/components/layout/Nav.module.scss";
import IconClose from "../Icon/IconClose";

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
  const [isVisible, setIsVisible] = useState(false);

  // handle scroll lock
  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;

    if (isOpen) {
      html.classList.add("no-scroll");
    } else {
      html.classList.remove("no-scroll");
    }
  }, [isOpen]);

  // toggle navigation menu
  const handleMenuClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 10);
  };

  // handle link click
  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const handleListClick = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  return (
    <>
      <nav className={style.navBtn}>
        <button type="button" onClick={handleMenuClick}>
          <IconMenu color={props.isActive ? "#000000" : "#ffffff"} />
        </button>
      </nav>
      {isVisible && (
        <div
          className={`${style.navList} ${isOpen && style.active}`}
          onClick={handleListClick}
        >
          <ul>
            {navList.map((item, index) => (
              <li key={index}>
                <Link onClick={handleLinkClick} href={"#content" + index}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className={style.navCloseBtn} type="button">
            <IconClose color={props.isActive ? "#000000" : "#ffffff"} />
          </button>
        </div>
      )}
    </>
  );
}
