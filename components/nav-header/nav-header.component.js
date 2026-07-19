'use client'

import { useMemo } from "react"

import styles from "./nav-header.module.css"
import NavLink from "../nav-link/nav-link.component"

const navHeaderItems = [
  {
    href: '/meals',
    linkText: 'Browse Meals'
  },
  {
    href: '/community',
    linkText: 'Foodies Community'
  }
]

export default function NavHeader() {

  const navLinks = useMemo(() => 
    navHeaderItems.map(
      ({ href, linkText }, i) => 
        <NavLink href={href} key={`${i}-nav-link`}>
          {linkText}
        </NavLink>
    ), [])

  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks}
      </ul>
    </nav>
  )
}