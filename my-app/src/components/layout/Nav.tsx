"use client";

// hook
import { useEffect, useState } from "react";

// component
import IconCloseCircle from "@/components/icon/IconCloseCircle";
import IconMenu from "@/components/icon/IconMenu";
import Link from "next/link";

// interface type
import { HeaderProps } from "@/types/common.types";

// library
import AOS from "aos";

// zustand
import { usePostStore } from "@/stores/usePostStore";

// style
import style from "@/styles/components/layout/Nav.module.scss";
import "aos/dist/aos.css";

export default function Nav(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // const posts = useContentPost();
  const { posts, fetchPosts } = usePostStore();

  // api 호출
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // page refresh scroll top
  useEffect(() => {
    if ((history.scrollRestoration = "manual")) {
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
            {posts.map((item, index) => (
              <li
                key={index}
                data-aos={item.aosDataName ? item.aosDataName : "fade-right"}
                data-aos-duration={200 * (index + 1)}
              >
                <Link onClick={handleLinkClick} href={`#${item.id}`}>
                  {item.type}
                </Link>
              </li>
            ))}
          </ul>

          <button className={style.navCloseBtn} type="button">
            <IconCloseCircle color={props.isActive ? "#000000" : "#ffffff"} />
          </button>
        </div>
      )}
    </>
  );
}
