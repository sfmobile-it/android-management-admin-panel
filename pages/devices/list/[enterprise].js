import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DevicesService from "../../../services/DevicesService";
import { useRouter } from "next/router";
import Layout from "../../../layouts/Layout";
import Toolbar from "../../../components/Toolbar";

const Devices = () => {
    const router = useRouter();

    const [devices, setDevices] = useState([]);

    const loadData = async (enterprise) => {
        const data = await DevicesService.list(enterprise);
        setDevices(data.devices ?? []);
    };

    useEffect(() => {
        const { enterprise } = router.query;

        if (enterprise) {
            loadData(enterprise);
        }
    }, [router.query]);

    const deleteDevice = async (device) => {
        if(window.confirm('Sure to delete the device?'))
        {
            await DevicesService.delete(device.name);

            loadData();
        }
    };

    const columns = [
        {
            label: "name",
            value: (record) => {
                return record.name;
            },
        },
        {
            label: "custom data",
            value: (record) => {
                return record.enrollmentTokenData;
            },
        },
        {
            label: "policy v.",
            value: (record) => {
                return record.appliedPolicyVersion;
            },
        },
        {
            label: "hw",
            value: (record) => {
                return JSON.stringify(record.hardwareInfo);
            },
        },
    ];

    return (
        <Layout>
            <div className="mx-auto">
                <div className="mx-10 flex flex-col">

                    <Toolbar />

                    <h1>Devices</h1>
                    <div className="mt-4 overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            {columns.map((c) => (
                                                <th key={c.label} scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    {c.label}
                                                </th>
                                            ))}

                                            <th scope="col" className="p-4">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {devices.map((d) => (
                                            <tr key={d.name} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                {columns.map((c) => (
                                                    <td key={`${d.name}_${c.label}`} className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {c.value(d)}
                                                    </td>
                                                ))}
                                                <td className="py-4 px-6 text-sm font-medium text-center whitespace-nowrap">
                                                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deleteDevice(d)}>
                                                        Delete
                                                    </a>
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
