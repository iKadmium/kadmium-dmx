export class Settings
{
    webPort: number;
    oscPort: number;
    sacnTransmitter: SACNTransmitterSettings;
    enttecProTransmitter: EnttecProTransmitterSettings;

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
        settings.enttecProTransmitter = EnttecProTransmitterSettings.deserialize(data.enttecProTransmitter);
        return settings;
    }

    public serialize(): SettingsData
    {
        let data: SettingsData = {
            webPort: this.webPort,
            oscPort: this.oscPort,
            sacnTransmitter: this.sacnTransmitter.serialize(),
            enttecProTransmitter: this.enttecProTransmitter.serialize()
        };
        return data;
    }
}

export class EnttecProTransmitterSettings
{
    delay: number;
    port: string;

    constructor()
    {
        this.delay = 0;
        this.port = "";
    }

    public static deserialize(data: EnttecProTransmitterSettingsData): EnttecProTransmitterSettings
    {
        let transmitter = new EnttecProTransmitterSettings();
        transmitter.delay = data.delay;
        transmitter.port = data.port;
        return transmitter;
    }

    public serialize(): EnttecProTransmitterSettingsData
    {
        let data: EnttecProTransmitterSettingsData = {
            delay: this.delay,
            port: this.port
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
    enttecProTransmitter: EnttecProTransmitterSettingsData;
}

export interface SACNTransmitterSettingsData
{
    delay: number;
    multicast: boolean;
    unicast: string[];
}

export interface EnttecProTransmitterSettingsData
{
    delay: number;
    port: string;
}