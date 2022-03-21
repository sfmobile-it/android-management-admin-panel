import Layout from "../layouts/Layout";
import Toolbar from "../components/Toolbar";

const Index = () => {

    return (
        <Layout>
            <div className="mx-auto">
                <div className="mx-10 flex flex-col">
                    <Toolbar />
                </div>
            </div>
        </Layout>
    );
};

export default Index;
