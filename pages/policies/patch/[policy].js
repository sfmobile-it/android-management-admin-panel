import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../layouts/Layout";
import PoliciesService from "../../../services/PoliciesService";
import Toolbar from "../../../components/Toolbar";
import EnronllmentTokensService from "../../../services/EnronllmentTokensService";

const PolicyPatch = () => {
    const router = useRouter();

    const [policy, setPolicy] = useState(null);

    const [form, setForm] = useState({
        name: "",
        version: "",
        applications: "",
        kioskCustomization: "",
    });

    const loadData = async (policyName) => {
        const data = await PoliciesService.get(policyName);
        setPolicy(data);
    };

    const update = async () => {
        const newPolicy = { ...policy, ...form };
        newPolicy.applications = JSON.parse(form.applications);
        newPolicy.kioskCustomization = JSON.parse(form.kioskCustomization);

        const data = await PoliciesService.patch(newPolicy);
        
        router.push('/enterprises')
    };

    const updateForm = async (newForm) => {
        setForm({ ...form, ...newForm });
    };

    useEffect(() => {
        setForm({
            name: policy?.name ?? "",
            version: policy?.version ?? "",
            applications: policy ? JSON.stringify(policy.applications) : "",
            kioskCustomization: policy ? JSON.stringify(policy.kioskCustomization) : "",

        });
    }, [policy]);

    useEffect(() => {
        const { policy: policyName } = router.query;

        if (policyName) {
            loadData(policyName);
        }
    }, [router.query]);

    return (
        <Layout>
            <div className="mx-auto">
                <div className="mx-10 flex flex-col">
                    <Toolbar />

                    <h1>Policy</h1>
                    <div className="mt-4">
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" disabled id="username" type="text" placeholder="Name" value={form?.name} />
                                <label className="block text-gray-700 text-sm font-bold mb-2 mt-8" htmlFor="username">
                                    Version
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" disabled id="username" type="text" placeholder="Name" value={form?.version} />
                                <label className="block text-gray-700 text-sm font-bold mb-2 mt-8" htmlFor="username">
                                    Applications
                                </label>
                                <textarea
                                    rows={10}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Name"
                                    value={form?.applications}
                                    onChange={(ev) => {
                                        updateForm({ applications: ev.target.value });
                                    }}
                                />
                                <label className="block text-gray-700 text-sm font-bold mb-2 mt-8" htmlFor="username">
                                    Kiosk Customization
                                </label>
                                <textarea
                                    rows={10}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Name"
                                    value={form?.kioskCustomization}
                                    onChange={(ev) => {
                                        updateForm({ kioskCustomization: ev.target.value });
                                    }}
                                />
                                <button className="btn btn-blue mt-6" onClick={() => update()}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PolicyPatch;
