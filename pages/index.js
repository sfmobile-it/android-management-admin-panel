import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../layouts/Layout";
// import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <Layout>
            <Link href={"enterprises"}>Enterprises</Link>
        </Layout>
    );
}
