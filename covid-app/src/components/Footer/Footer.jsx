import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h2 className={styles.footer_title}>
            Covid App
            <span>
              by
              <a
                href="https://www.linkedin.com/in/hasnasya"
                target="_blank"
                rel="noopener noreferrer"
              >
                 hasnasya
              </a>
            </span>
          </h2>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__author}>STT Terpadu Nurul Fikri</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
