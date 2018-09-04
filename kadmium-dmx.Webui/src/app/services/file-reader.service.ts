import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FileReaderService
{
	constructor() { }

	public read<T>(file: File): Promise<T>
	{
		return new Promise<T>((resolve, reject) =>
		{
			try
			{
				let reader = new FileReader();
				reader.addEventListener("load", (event) => 
				{
					let content = reader.result as string;
					let returnVal = JSON.parse(content) as T;
					resolve(returnVal);
				});
				reader.readAsText(file);
			}
			catch (error)
			{
				reject(error);
			}
		});

	}
}
