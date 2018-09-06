import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FileSaverService
{
	constructor() { }

	public save<T>(filename: string, contents: T): void
	{
		const anchor = document.createElement("a");
		anchor.download = filename;
		const stringContents = JSON.stringify(contents);
		const blob = new Blob([stringContents], { type: "application/json" });
		anchor.href = URL.createObjectURL(blob);
		anchor.click();
	}
}
