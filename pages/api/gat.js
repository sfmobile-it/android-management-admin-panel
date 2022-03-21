const { google } = require("googleapis");

async function getToken() {
    const authInfo = new google.auth.JWT({
        keyFile: "config/google-service-account.json",
        scopes: ["https://www.googleapis.com/auth/androidmanagement"],
    });

    const auth = await authInfo.authorize();
    return auth;
}

export default async function handler(req, res) {
    const token = await getToken();

    res.status(200).json(token);
}
