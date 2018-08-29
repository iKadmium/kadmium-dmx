import { IDMXChannelData } from "api";

export class DMXChannelTestHelpers
{
    public static getDefaultDMXChannel(name: string, address: number): IDMXChannelData
    {
        let channel: IDMXChannelData = {
            address: address,
            name: name,
            min: 0,
            max: 255
        };
        return channel;
    }
}