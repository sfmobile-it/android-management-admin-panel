import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
// import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />

            <div>{children}</div>

            <Footer />
        </div>
    );
};

export default Layout;
