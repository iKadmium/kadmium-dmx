import { MessagesSubscription_listenerMessages } from 'generated/MessagesSubscription';

export interface IChartData
{
    x: number;
    y: number;
}

export class OscMessage
{
    public group: string;
    public attribute: string;
    public value: number;
    public time: Date;

    constructor(message: MessagesSubscription_listenerMessages)
    {
        const parts = message.address.split('/');
        this.group = parts[2];
        this.attribute = parts[3];
        this.time = new Date(message.time);
        this.value = parseFloat(message.value);
    }

    public getData(): IChartData
    {
        const data: IChartData = {
            x: this.time.getTime(),
            y: this.value
        };
        return data;
    }
}