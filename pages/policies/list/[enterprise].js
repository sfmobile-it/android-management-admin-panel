import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../layouts/Layout";
import PoliciesService from "../../../services/PoliciesService";
import Toolbar from "../../../components/Toolbar";
import EnronllmentTokensService from "../../../services/EnronllmentTokensService";

const Devices = () => {
    const router = useRouter();

    const [policies, setPolicies] = useState([]);

    const loadData = async (enterprise) => {
        const data = await PoliciesService.list(enterprise);
        setPolicies(data.policies ?? []);
    };

    const enrollmentToken = async (policy) => {
        const { enterprise } = router.query;

        const additionalData = window.prompt("Insert additional data");

        if (additionalData != null) {
            const data = await EnronllmentTokensService.create(enterprise, policy.name, additionalData);
            const image = {
                cht: "qr",
                chs: "500x500",
                chl: data.qrCode,
            };
            const queryParams = new URLSearchParams(image);

            const qrcodeUrl = `https://chart.googleapis.com/chart?${queryParams.toString()}`;
            window.open(qrcodeUrl);
        }
    };

    useEffect(() => {
        const enterprise = router.query.enterprise;

        if (enterprise) {
            loadData(enterprise);
        }
    }, [router.query]);

    return (
        <Layout>
            <div className="mx-auto">
                <div className="mx-10 flex flex-col">
                    <Toolbar />

                    <h1>Policies</h1>
                    <div className="mt-4 overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Name
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Version
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Applications
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Kiosk Customization
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Other configs
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {policies.map((p) => (
                                            <tr key={p.name}>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {p.name}
                                                    <div className="mt-6">
                                                        <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline" onClick={() => enrollmentToken(p)}>
                                                            Enrollment Token
                                                        </a>
                                                        <span className="mx-4">|</span>
                                                        <Link
                                                            href={{
                                                                pathname: "/policies/patch/[policy]",
                                                                query: { policy: p.name },
                                                            }}
                                                        >
                                                            <a className="text-blue-600 dark:text-blue-500 hover:underline">Update</a>
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.version}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(p.applications, null, 4) }} />
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(p.kioskCustomization, null, 4) }} />
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <pre dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...p, ...{ applications: undefined, kioskCustomization: undefined, name: undefined, version: undefined } }, null, 4) }} />
                                                </td>
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

export default Devices;
