import { Constants } from "../utils/constants";
import BaseService from "./BaseService";

class EnronllmentTokensService extends BaseService {
    async create(enterprise, policyName, additionalData, oneTimeOnly=true) {
        const url = Constants.urls.enrollmentTokens.create(enterprise, policyName, additionalData, oneTimeOnly);

        const body = {
            policyName,
            additionalData,
            oneTimeOnly
        };

        const data = await this.POST(url, body);
        return data;
    }
}

export default new EnronllmentTokensService();
