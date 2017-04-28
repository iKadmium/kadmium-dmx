import { StatusCode } from "./status-code.enum";

export class Status 
{
    constructor(public statusCode: StatusCode, public body: string, public details?: any)
    {
    }

    public get alertStyle(): string
    {
        switch (this.statusCode)
        {
            case StatusCode.Error:
                return "alert-danger";
            case StatusCode.Info:
                return "alert-info";
            case StatusCode.Success:
                return "alert-success";
            default:
            case StatusCode.Unknown:
                return "alert-info";
            case StatusCode.Warning:
                return "alert-warning";
        }
    }

    public get glyphIcon(): string
    {
        switch (this.statusCode)
        {
            case StatusCode.Error:
                return "glyphicon glyphicon-remove-sign";
            case StatusCode.Info:
                return "glyphicon glyphicon-info-sign";
            case StatusCode.Success:
                return "glyphicon glyphicon-ok-sign";
            default:
            case StatusCode.Unknown:
                return "glyphicon glyphicon-question-sign";
            case StatusCode.Warning:
                return "glyphicon glyphicon-info-sign";
        }
    }
}
