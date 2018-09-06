import { Injectable } from '@angular/core';
import { AppURL, SocketController } from "../app-url";
import { Observable, Subject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';


@Injectable({
	providedIn: 'root'
})
export class OSCListenerLiveService
{
	private socketUrl = AppURL.getSocketURL(SocketController.OSC);
	private subject: WebSocketSubject<OSCListenerData>;

	constructor()
	{ }

	public open(): Observable<OSCListenerData>
	{
		this.subject = new WebSocketSubject<OSCListenerData>(this.socketUrl);
		return this.subject.asObservable();
	}
}

export interface OSCListenerData
{
	address: string;
	recognised: boolean;
	time: Date;
	value: number;
}