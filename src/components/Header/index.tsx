import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.list}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? `${styles["active"]} ${styles["list-item"]}`
              : styles["list-item"]
          }
        >
          Films
        </NavLink>

        <NavLink
          to={"/note"}
          className={({ isActive }) =>
            isActive
              ? `${styles["active"]} ${styles["list-item"]}`
              : styles["list-item"]
          }
        >
          Notes
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
