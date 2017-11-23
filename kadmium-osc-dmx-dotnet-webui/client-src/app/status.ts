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

    public get alertStyle(): string
    {
        return Status.getAlertStyle(this.statusCode);
    }

    public get glyphIcon(): string
    {
        return Status.getGlyphIcon(this.statusCode);
    }

    public static getAlertStyle(code: StatusCode): string
    {
        switch (code)
        {
            case StatusCode.Error:
                return "warn";
            case StatusCode.Info:
                return "alert-info";
            case StatusCode.Success:
                return "primary";
            default:
            case StatusCode.Unknown:
                return "";
            case StatusCode.Warning:
                return "accent";
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