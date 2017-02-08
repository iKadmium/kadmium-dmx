export class Settings
{
    webPort: number;
    oscPort: number;
    sacnTransmitter: sacnTransmitter;

    constructor()
    {
        this.webPort = 80;
        this.oscPort = 9000;
        this.sacnTransmitter = new sacnTransmitter();
    }
}

export class sacnTransmitter
{
    delay: number;
    multicast: boolean;
    unicast: string[];

    constructor()
    {
        this.delay = 0;
        this.multicast = true;
        this.unicast = [];
    }
}