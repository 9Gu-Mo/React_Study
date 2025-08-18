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
        <p className={style.el}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur nobis unde voluptate quidem, eius libero! Quia soluta voluptates in nemo similique cupiditate amet maiores, ipsam quibusdam, quis pariatur provident.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur nobis unde voluptate quidem, eius libero! Quia soluta voluptates in nemo similique cupiditate amet maiores, ipsam quibusdam, quis pariatur provident.</p>
      </header>
    </>
  )
}