import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UnsavedChanges<T extends Saveable> implements CanDeactivate<T> {
	constructor() { }

	canDeactivate(
		component: Saveable,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean
	{
		if (component != null && component.hasUnsavedChanges())
		{
			return window.confirm("Leaving this page will cause unsaved changes to be lost. Are you sure you want to continue?");
		}
		return true;
	}
}

export interface Saveable
{
	hasUnsavedChanges(): boolean;
}