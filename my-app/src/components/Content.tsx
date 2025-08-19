"use client";

// hook
import { useLayoutEffect, useRef, useState } from "react";

// component
import ContentList from "./ContentList";
import Header from "./layout/Header";
import TopContent from "./TopContent";

export default function Content() {
  // header reference
  const headerRef = useRef<HTMLDivElement>(null);

  // content reference
  const contentRef = useRef<HTMLDivElement>(null);

  // header state
  const [isActive, setIsActive] = useState(false);

  // scroll event handler
  const handleScroll = () => {
    const lastScrollTop = window.scrollY;
    const contentTop = contentRef.current?.offsetTop;

    if (contentTop) {
      if (lastScrollTop > contentTop - 20) {
        setIsActive(!isActive);
      } else {
        setIsActive(isActive);
      }
    }
  };

  // add scroll event listener
  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header ref={headerRef} isActive={isActive} />
      <TopContent />
      <div className="wrap" ref={contentRef}>
        <ContentList />
      </div>
    </>
  );
}
