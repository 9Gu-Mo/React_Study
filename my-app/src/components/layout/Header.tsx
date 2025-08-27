"use client";

// component
import Nav from "./Nav";

// interface type
import { HeaderProps } from "@/types/common.types";

// style
import style from "@/styles/components/layout/Header.module.scss";

export default function Header(props: HeaderProps) {
  return (
    <>
      <header ref={props.ref} className={style.header}>
        <Nav isActive={props.isActive} />
        {props.title && <h1>{props.title}</h1>}
      </header>
    </>
  );
}
