import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Injectable()
export class UnsavedChanges<T extends Component> implements CanDeactivate<T> {
	constructor() { }

	canDeactivate(
		component: T,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean
	{
		let form = (component as any).form as NgForm;
		if (form != null && form.dirty)
		{
			return window.confirm("Leaving this page will cause unsaved changes to be lost. Are you sure you want to continue?");
		}
		return true;
	}
}