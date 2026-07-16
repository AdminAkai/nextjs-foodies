import { useMemo } from "react"
import Link from "next/link"

import styles from "./nav-header.module.css"

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
      ({ href, linkText, i }) => 
        <Link href={href} key={`${i}-nav`}>
          {linkText}
        </Link>
    ), [])

  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks}
      </ul>
    </nav>
  )
}