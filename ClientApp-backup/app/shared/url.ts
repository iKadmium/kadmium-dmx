export class URLs
{
    static getSocketURL(socketName: SocketController): string
    {
        let originalURL: string = document.URL;
        let urlParts: string[] = document.URL.split("/");
        let protocol: string = urlParts[0];
        let host: string = urlParts[2];

        let root: string = "ws://" + host;

        let socketURL = root + "/socket/" + SocketController[socketName];

        return socketURL;
    }

    static getAPIUrl(apiName: Controller): string
    {
        let originalURL: string = document.URL;
        let urlParts: string[] = document.URL.split("/");
        let protocol: string = urlParts[0];
        let host: string = urlParts[2];

        let root: string = protocol + "//" + host;

        let apiURL = root + "/api/" + Controller[apiName];

        return apiURL;
    }
}

export enum Controller
{
    EnttecProTransmitter,
    FixtureDefinition,
    Group,
    Look,
    OSCListener,
    Preview,
    Settings,
    SACNTransmitter,
    SolversLive,
    Venue,
    VenuePreset
}

export enum SocketController
{
    SACN,
    OSC,
    Dashboard
}