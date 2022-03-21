import { Constants } from "../utils/constants";
import BaseService from "./base-service";

class DevicesService extends BaseService {
    async list(enterprise) {
        const url = Constants.urls.devices.list(enterprise);
        const data = await this.GET(url);
        return data;
    }
    async delete(deviceName) {
        const url = Constants.urls.devices.delete(deviceName);
        const data = await this.DELETE(url);
        return data;
    }
}

export default new DevicesService();
