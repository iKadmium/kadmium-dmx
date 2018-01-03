import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EditorComponent } from "app/editor-component/editor-component";

@Injectable()
export class UnsavedChanges<T extends EditorComponent> implements CanDeactivate<T> {
	constructor() { }

	canDeactivate(
		component: T,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean
	{
		if (component != null && component.form != null && component.form.dirty && !component.saved)
		{
			return window.confirm("Leaving this page will cause unsaved changes to be lost. Are you sure you want to continue?");
		}
		return true;
	}
}