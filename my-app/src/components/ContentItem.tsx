"use client";

// hook
import { useEffect } from "react";

// interface
import { ContentProps } from "./Content.types";

// animation library
import AOS from "aos";

// styles
import "aos/dist/aos.css";

export default function ContentItem(props: ContentProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos={props.dataName ? props.dataName : "fade-down"}
        data-aos-duration={props.dataDuration ? props.dataDuration : 1000}
        id={props.id}
        className={props.class}
      >
        {props.children}
      </div>
    </>
  );
}
