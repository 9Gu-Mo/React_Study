// component
import Nav from "./Nav";
import { HeaderProps } from "./Header.types";

// style
import style from '@/styles/components/layout/Header.module.scss';

export default function Header(props: HeaderProps) {
  return (
    <>
      <header className={style.header}>
        {props.title && <h1>{props.title}</h1>}
        <Nav />
      </header>
    </>
  )
}