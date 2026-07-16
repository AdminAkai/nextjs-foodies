import Link from "next/link";
import Image from "next/image";

import NavHeader from "@/components/nav-header";
import logoImg from '@/assets/logo.png'

import styles from "./main-header.module.css"

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" />
        NextLevel Food
      </Link>
      <NavHeader />
    </header>
  )
}