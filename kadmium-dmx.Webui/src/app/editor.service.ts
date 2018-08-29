import { Observable, Subscriber } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class EditorService<T>
{
	public onSave: Observable<void>;
	private subscriber: Subscriber<void>;
	private activeItem: T;
	private dirty: boolean = false;

	constructor()
	{
		this.onSave = new Observable<void>(subscribe =>
		{
			this.subscriber = subscribe;
		});
	}

	public setActive(fixtureDefinition: T): void
	{
		this.dirty = false;
		this.activeItem = fixtureDefinition;
	}

	public getActive(): T
	{
		return this.activeItem;
	}

	public save(): void
	{
		this.subscriber.next();
	}

	public get isDirty(): boolean
	{
		return this.dirty;
	}

	public set isDirty(value: boolean)
	{
		this.dirty = value;
	}
}
