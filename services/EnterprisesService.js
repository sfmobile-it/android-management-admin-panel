import { Constants } from "../utils/constants";
import BaseService from "./BaseService";

class EnterprisesService extends BaseService {
    async list() {
        const url = Constants.urls.enterprises.list("luxurydigitalconcierge");
        const data = await this.GET(url);
        return data;
    }
}

export default new EnterprisesService();
