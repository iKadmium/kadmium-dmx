export class URLs
{
    static getSocketURL(socketName: SocketController): string
    {
        let root: string = "ws://" + window.location.hostname;
        if (parseInt(window.location.port) == 4200)
        {
            root += ":" + 5000;
        }
        else
        {
            root += ":" + window.location.port;
        }
        let socketURL = root + "/socket/" + SocketController[socketName];

        return socketURL;
    }

    static getAPIUrl(apiName: Controller): string
    {
        let root: string = window.location.protocol + "//" + window.location.hostname;
        if (parseInt(window.location.port) == 4200)
        {
            root += ":" + 5000;
        }
        else
        {
            root += ":" + window.location.port;
        }

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