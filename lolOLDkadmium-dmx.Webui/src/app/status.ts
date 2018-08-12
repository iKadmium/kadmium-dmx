import { StatusCode } from "./status-code.enum";

export class Status 
{
    constructor(public statusCode?: StatusCode, public body?: string, public details?: any)
    {
        if (statusCode == null)
        {
            this.statusCode = StatusCode.Unknown;
            this.body = "Unknown";
        }
    }

    public get cardClass(): string
    {
        return Status.getCardClass(this.statusCode);
    }

    public get glyphIcon(): string
    {
        return Status.getGlyphIcon(this.statusCode);
    }

    public static getCardClass(code: StatusCode): string
    {
        switch (code)
        {
            case StatusCode.Error:
                return "dashboard-card-error";
            case StatusCode.Info:
                return "dashboard-card-info";
            case StatusCode.Success:
                return "dashboard-card-success";
            default:
            case StatusCode.Unknown:
                return "dashboard-card-unknown";
            case StatusCode.Warning:
                return "dashboard-card-warning";
        }
    }

    public static getGlyphIcon(code: StatusCode): string
    {
        switch (code)
        {
            case StatusCode.Error:
                return "error";
            case StatusCode.Info:
                return "info";
            case StatusCode.Success:
                return "done";
            default:
            case StatusCode.Unknown:
                return "update";
            case StatusCode.Warning:
                return "warning";
        }
    }
}