export class URL
{

    static getSocketURL(controller: string): string
    {
        let actionURL = URL.getActionURL(controller, "Socket");
        let socketURL = actionURL.replace("http", "ws");
        return socketURL;
    }

    static getActionURL(...parts: string[]): string
    {
        let originalURL: string = document.URL;
        let urlParts: string[] = document.URL.split("/");
        let protocol: string = urlParts[0];
        let host: string = urlParts[2];

        let root: string = protocol + "//" + host;

        let partsJoined = parts.join("/");

        return root + "/" + partsJoined;
    }
}