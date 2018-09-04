import { StatusCode } from "./enums/status-code.enum";

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

	public static getCardClass(code: StatusCode): string
	{
		switch (code)
		{
			case StatusCode.Error:
				return "dashboard-card-error";
			case StatusCode.Success:
				return "dashboard-card-success";
			default:
			case StatusCode.Unknown:
				return "dashboard-card-unknown";
			case StatusCode.Warning:
				return "dashboard-card-warning";
		}
	}
}