export class Settings
{
    webPort: number;
    oscPort: number;
    sacnTransmitter: SACNTransmitterSettings;

    constructor()
    {
        this.webPort = 80;
        this.oscPort = 9000;
        this.sacnTransmitter = new SACNTransmitterSettings();
    }

    public static deserialize(data: SettingsData): Settings
    {
        let settings = new Settings();
        settings.webPort = data.webPort;
        settings.oscPort = data.oscPort;
        settings.sacnTransmitter = SACNTransmitterSettings.deserialize(data.sacnTransmitter);
        return settings;
    }

    public serialize(): SettingsData
    {
        let data: SettingsData = {
            webPort: this.webPort,
            oscPort: this.oscPort,
            sacnTransmitter: this.sacnTransmitter.serialize()
        };
        return data;
    }
}

export class SACNTransmitterSettings
{
    delay: number;
    multicast: boolean;
    unicast: UnicastTarget[];

    constructor()
    {
        this.delay = 0;
        this.multicast = true;
        this.unicast = [];
    }

    public static deserialize(data: SACNTransmitterSettingsData): SACNTransmitterSettings
    {
        let transmitter = new SACNTransmitterSettings();
        transmitter.delay = data.delay;
        transmitter.multicast = data.multicast;
        transmitter.unicast = data.unicast.map((value: string) => new UnicastTarget(value));
        return transmitter;
    }

    public serialize(): SACNTransmitterSettingsData
    {
        let data: SACNTransmitterSettingsData = {
            delay: this.delay,
            multicast: this.multicast,
            unicast: this.unicast.map((value: UnicastTarget) => value.target)
        };
        return data;
    }
}

export class UnicastTarget
{
    target: string;
    constructor(target: string)
    {
        this.target = target;
    }
}

export interface SettingsData
{
    webPort: number;
    oscPort: number;
    sacnTransmitter: SACNTransmitterSettingsData;
}

export interface SACNTransmitterSettingsData
{
    delay: number;
    multicast: boolean;
    unicast: string[];
}