const AndroidManagementApiUrlBase = "https://androidmanagement.googleapis.com/v1/";

const Urls = {
    enterprises: {
        list: (projectId) => `${AndroidManagementApiUrlBase}enterprises?projectId=${projectId}`,
    },
    devices: {
        list: (enterprise) => `${AndroidManagementApiUrlBase}${enterprise}/devices?pageSize=9999`,
        delete: (deviceName) => `${AndroidManagementApiUrlBase}${deviceName}`,
    },
    policies: {
        list: (enterprise) => `${AndroidManagementApiUrlBase}${enterprise}/policies`,
        get: (policyName) => `${AndroidManagementApiUrlBase}${policyName}`,
        patch: (policyName) => `${AndroidManagementApiUrlBase}${policyName}`,
    },
    enrollmentTokens: {
        create: (enterprise) => `${AndroidManagementApiUrlBase}${enterprise}/enrollmentTokens`,
    },
};

export const Constants = {
    urls: Urls,
};
