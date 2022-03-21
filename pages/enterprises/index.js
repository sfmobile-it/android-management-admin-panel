import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../layouts/layout";
import EnterprisesService from "../../services/enterprises-service";
// import styles from "../../styles/Home.module.css";

const Enterprises = () => {
    const [enterprises, setEnterprises] = useState([]);

    const loadData = async () => {
        const data = await EnterprisesService.list();
        setEnterprises(data.enterprises);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Layout>
            <div className="mx-auto">
                <div className="mx-10 flex flex-col">
                    <h1>Enterprises</h1>
                    <div className="mt-4 overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Display Name
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Name
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {enterprises.map((e) => (
                                            <tr key={e.name}>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {e.enterpriseDisplayName}
                                                    <div className="mt-6">
                                                        <Link
                                                            href={{
                                                                pathname: "/devices/list/[e]",
                                                                query: { e: e.name },
                                                            }}
                                                        >
                                                            <a className="text-blue-600 dark:text-blue-500 hover:underline">Devices</a>
                                                        </Link>
                                                        <span className="mx-4">|</span>
                                                        <Link
                                                            href={{
                                                                pathname: "/policies/list/[e]",
                                                                query: { e: e.name },
                                                            }}
                                                        >
                                                            <a className="text-blue-600 dark:text-blue-500 hover:underline">Policies</a>
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Enterprises;
