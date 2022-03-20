import { Constants } from "../utils/constants";
import BaseService from "./BaseService";

class PoliciesService extends BaseService {
    async list(enterprise) {
        const url = Constants.urls.policies.list(enterprise);
        const data = await this.GET(url);
        return data;
    }
    async get(name) {
        const url = Constants.urls.policies.get(name);
        const data = await this.GET(url);
        return data;
    }
    async patch(policy) {
        const url = Constants.urls.policies.patch(policy.name);
        const data = await this.PATCH(url, policy);
        return data;
    }
}

export default new PoliciesService();
