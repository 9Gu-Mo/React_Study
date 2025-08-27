"use client";

// hook
import { useEffect, useState } from "react";

// component
import Link from "next/link";
import IconClose from "../Icon/IconClose";
import IconMenu from "../Icon/IconMenu";

// interface type
import { HeaderProps } from "@/types/common.types";

// library
import AOS from "aos";

// style
// import style from "@/styles/components/layout/Nav.module.scss";
import "aos/dist/aos.css";
import style from "../../styles/components/layout/Nav.module.scss";

// dummy data
interface NavList {
  name: string;
  dataName?: string;
  dataDuration?: number;
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

  // page refresh scroll top
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  // scroll bar hidden class toggle
  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;

    if (isOpen) {
      html.classList.add("no-scroll");
    } else {
      html.classList.remove("no-scroll");
    }

    // AOS library start
    AOS.init();
  }, [isOpen]);

  // toggle navigation menu open & close
  const handleMenuClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 10);
  };

  // anchor link click event
  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  // toggle navigation menu close
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
              <li
                key={index}
                data-aos={item.dataName ? item.dataName : "fade-right"}
                data-aos-duration={200 * (index + 1)}
              >
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
