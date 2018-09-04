export class AppURL
{
	static getSocketURL(socketName: SocketController): string
	{
		let root: string = "ws://" + window.location.hostname;
		if (parseInt(window.location.port, 10) === 4200)
		{
			root += ":" + 5000;
		}
		else
		{
			root += ":" + window.location.port;
		}
		const socketURL = root + "/socket/" + SocketController[socketName];

		return socketURL;
	}

	static getApiURL(): string
	{
		return "http://" + window.location.hostname + ":5000";
	}
}

export enum SocketController
{
	Universe,
	OSC,
	Status,
	Fixture
}