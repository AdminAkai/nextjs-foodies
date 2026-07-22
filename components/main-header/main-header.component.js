import Link from "next/link";
import Image from "next/image";

import NavHeader from "@/components/nav-header";
import MainHeaderBackground from "@/components/main-header-background"
import logoImg from '@/assets/logo.png'

import styles from "./main-header.module.css"

const MainHeader = () => (
  <>
    <MainHeaderBackground />
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <NavHeader />
    </header>
  </>
)

export default MainHeader