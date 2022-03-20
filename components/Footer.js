import styles from "./css/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://www.sfmobile.it" target="_blank" rel="noopener noreferrer">
                Made by SFmobile
            </a>
        </footer>
    );
};

export default Footer;
