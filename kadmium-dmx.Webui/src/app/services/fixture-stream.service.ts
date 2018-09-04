import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { AppURL, SocketController } from 'app/app-url';

@Injectable({
	providedIn: 'root'
})
export class FixtureStreamService
{
	private socketUrl = AppURL.getSocketURL(SocketController.Fixture);
	private subject: WebSocketSubject<AttributeUpdateData[]>;

	constructor()
	{
	}

	public open(universeID: number, fixtureAddress: number): Observable<AttributeUpdateData[]>
	{
		this.subject = new WebSocketSubject<AttributeUpdateData[]>(`${this.socketUrl}/${universeID}/${fixtureAddress}`);
		return this.subject;
	}

	public set(universeID: number, fixtureAddress: number, attributeName: string, attributeValue: number): void
	{
		const message: AttributeUpdateMessage = {
			universeID: universeID,
			fixtureAddress: fixtureAddress,
			attributeName: attributeName,
			attributeValue: attributeValue
		};
		this.subject.next(message as any);
	}
}

export interface AttributeUpdateMessage
{
	universeID: number;
	fixtureAddress: number;
	attributeName: string;
	attributeValue: number;
}

export interface AttributeUpdateData
{
	name: string;
	value: number;
}