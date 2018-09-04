import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FileSaverService
{
	constructor() { }

	public save<T>(filename: string, contents: T): void
	{
		let anchor = document.createElement("a");
		anchor.download = filename;
		let stringContents = JSON.stringify(contents);
		let blob = new Blob([stringContents], { type: "application/json" });
		anchor.href = URL.createObjectURL(blob);
		anchor.click();
	}
}
