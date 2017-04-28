import { NotificationsService } from "./notifications.service";
import { StatusCode } from "./status-code.enum";

export class TogglableService<ServiceType extends Togglable>
{
    public enabled: boolean | null;

    constructor(private service: ServiceType, private notificationsService: NotificationsService)
    {
        this.enabled = null;
    }

    init(): void
    {
        this.service
            .getEnabled()
            .then(value => this.enabled = value)
            .catch(error => this.notificationsService.add(StatusCode.Error, error));
    }

    public async toggle(): Promise<void>
    {
        let targetValue = !this.enabled;
        this.enabled = null;
        try
        {
            await this.service.setEnabled(targetValue);
            this.enabled = targetValue;
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
            this.enabled = !targetValue;
        }
        this.enabled = targetValue;
    }

    public get buttonClass(): any
    {
        return { 'btn-success': this.enabled, 'btn-danger': this.enabled == false, 'btn-warning': this.enabled == null };
    }

    public get statusText(): string
    {
        switch (this.enabled)
        {
            case true:
                return "Enabled";
            case false:
                return "Disabled";
            case null:
                return "Unknown";
        }
    }
}

export interface Togglable
{
    setEnabled(value: boolean): Promise<void>,
    getEnabled(): Promise<boolean>
}