import Link from "next/link";
import { ReactElement } from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css"

export const Navbar = () => {

  interface Props {
    text: string;
    href: string;
  }

  const menuItems = [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "About",
      href: "/about"
    },
    {
      text: "Contact",
      href: "/contact"
    },
    {
      text: "Pricing",
      href: "/pricing"
    }
  ]

  return (
      <nav className={styles.menuContainer}>
        {
          menuItems.map(({text, href}) => {
            return (
              <ActiveLink
                key={text} 
                text={text} 
                href={href}
              />
            );
          })
        }
      </nav>
  );
};

{/* <ActiveLink text="Home" href="/"/>
<ActiveLink text="About" href="/about"/>
<ActiveLink text="Contact" href="/contact"/> */}