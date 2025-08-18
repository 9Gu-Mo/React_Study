// component
import Nav from "./Nav";

// interface
import { HeaderProps } from "@/types/common.types";

// style
import "@/styles/components/layout/header.scss";

export default function Header(props: HeaderProps) {
  return (
    <>
      <header className="header">
        <Nav />
        {props.title && <h1>{props.title}</h1>}
      </header>
    </>
  );
}
