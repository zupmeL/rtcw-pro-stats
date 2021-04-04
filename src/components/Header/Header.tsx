import logoUrl from "../../assets/images/logo.png";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <img src={logoUrl} alt="RTCWPro Logo" />
  </header>
);
