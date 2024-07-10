import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h2 className={styles.navbar__brand}>Covid App</h2>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__link} to="/covid/global">
                Global
              </Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__link} to="/covid/indonesia">
                Indonesia
              </Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__link} to="/covid/provinsi">
                Provinsi
              </Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__link} to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
