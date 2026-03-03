import Link from "next/link";
import Logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header- background";

export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={Logo} alt="A plate with food on it" priority/>
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
