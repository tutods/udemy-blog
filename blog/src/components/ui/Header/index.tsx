import styles from "@components/ui/Header/styles.module.scss";
import Link from "next/link";
import { Icon } from "@components/ui/Icon";

export const Header = () => {
  return (
    <header className={styles["container"]}>
      <div className={styles["limiter"]}>
        <div className={styles["logo"]}>
          <Link href={"/"} passHref>
            Daniel Sousa @TutoDS
          </Link>
        </div>

        <div className={styles["right-section"]}>
          <nav className={styles["navigation"]}>
            <ul>
              <li>
                <Link href={"/blog"} passHref>
                  Blog
                </Link>
              </li>
              <li>
                <Link href={"/contacts"} passHref>
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles["locale-switcher"]}>
            <ul>
              <li>
                <Icon name={"flag-pt"} size={"xl"} />
              </li>
              <li>
                <Icon name={"flag-en"} size={"xl"} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};