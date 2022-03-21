import Footer from "../components/footer";
import Header from "../components/header";

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
