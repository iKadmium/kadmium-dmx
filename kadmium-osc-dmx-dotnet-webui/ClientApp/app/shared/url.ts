export class URLs
{
    static getSocketURL(socketName: string): string
    {
        let originalURL: string = document.URL;
        let urlParts: string[] = document.URL.split("/");
        let protocol: string = urlParts[0];
        let host: string = urlParts[2];

        let root: string = "ws://" + host;

        let socketURL = root + "/socket/" + socketName;

        return socketURL;
    }

    static getAPIUrl(apiName: string): string
    {
        let originalURL: string = document.URL;
        let urlParts: string[] = document.URL.split("/");
        let protocol: string = urlParts[0];
        let host: string = urlParts[2];

        let root: string = protocol + "//" + host;

        let apiURL = root + "/api/" + apiName;

        return apiURL;
    }
}