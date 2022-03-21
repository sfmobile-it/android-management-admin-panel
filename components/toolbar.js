import Link from "next/link";

const Toolbar = () => {
    return (
        <div className="my-4">
            <Link href={"/enterprises"}>
                <button className="btn btn-blue">Enterprises</button>
            </Link>
        </div>
    );
};

export default Toolbar;
