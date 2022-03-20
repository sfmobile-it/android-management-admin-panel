class BaseService {
    async getAccessToken() {

        const host = window.location.protocol + "//" + window.location.host;

        const res = await fetch(`${host}/api/gat`);
        const resJson = await res.json();
        return resJson.access_token;
    }

    async GET(url) {
        const accessToken = await this.getAccessToken();
        const res = await fetch(url, {
            headers: new Headers({
                Authorization: `Bearer ${accessToken}`,
            }),
        });
        const resJson = res.json();
        return resJson;
    }

    async POST(url, body) {
        const accessToken = await this.getAccessToken();
        const res = await fetch(url, {
            method: "POST",
            headers: new Headers({
                Authorization: `Bearer ${accessToken}`,
            }),
            body: JSON.stringify(body),
        });
        const resJson = res.json();
        return resJson;
    }

    async PATCH(url, body) {
        const accessToken = await this.getAccessToken();
        const res = await fetch(url, {
            method: "PATCH",
            headers: new Headers({
                Authorization: `Bearer ${accessToken}`,
            }),
            body: JSON.stringify(body),
        });
        const resJson = res.json();
        return resJson;
    }    

    async DELETE(url) {
        const accessToken = await this.getAccessToken();
        const res = await fetch(url, {
            method: "DELETE",
            headers: new Headers({
                Authorization: `Bearer ${accessToken}`,
            }),
        });
        const resJson = res.json();
        return resJson;
    }
}

export default BaseService;
