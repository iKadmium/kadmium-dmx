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
}

export enum SocketController
{
    Universe,
    OSC,
    Status,
    Fixture
}