import { Injectable } from '@angular/core';
import { SocketController, AppURL } from "../app-url";
import { Observable } from 'rxjs';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

@Injectable({
	providedIn: 'root'
})
export class UniverseStreamService
{
	private socketUrl = AppURL.getSocketURL(SocketController.Universe);
	private subject: WebSocketSubject<Uint8Array>;

	constructor()
	{
	}

	public set(universeID: number, channel: number, value: number): void
	{
		const data = {
			universeID: parseInt(universeID + "", 10),
			channel: parseInt(channel + "", 10),
			value: parseInt(value + "", 10)
		};
		this.subject.next(data as any);
	}

	public open(universeID: number): Observable<Uint8Array>
	{
		const config: WebSocketSubjectConfig<Uint8Array> = {
			binaryType: "arraybuffer",
			url: `${this.socketUrl}/${universeID}`,
			deserializer: (e: MessageEvent) => new Uint8Array(e.data)
		};
		this.subject = new WebSocketSubject<Uint8Array>(config);
		return this.subject.asObservable();
	}
}