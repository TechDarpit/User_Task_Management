import Link from "next/link";

import classes from "./main-header.module.css";
import Navigation from "./Navigation";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Admin Pannel</Link>
      </div>
      <Navigation />
    </header>
  );
}

export default MainHeader;
