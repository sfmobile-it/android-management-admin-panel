import Layout from "../layouts/layout";
import Toolbar from "../components/toolbar";

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
