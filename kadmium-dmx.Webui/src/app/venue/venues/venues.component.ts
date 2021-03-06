import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { IVenueData } from 'api';
import { APIClient } from "api/api-client.service";
import { AnimationLibrary } from "../../animation-library";
import { DeleteConfirmService } from '../../services/delete-confirm.service';
import { FileReaderService } from '../../services/file-reader.service';
import { MessageService } from '../../services/message.service';

@Component({
	selector: 'app-venues',
	templateUrl: './venues.component.html',
	styleUrls: ['./venues.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class VenuesComponent implements OnInit
{
	venues: string[];

	private filter = "";

	public loading: boolean;

	constructor(
		private apiClient: APIClient,
		private messageService: MessageService,
		title: Title,
		private fileReader: FileReaderService,
		private deleteConfirmService: DeleteConfirmService)
	{
		title.setTitle("Venues");
		this.venues = [];
		this.loading = true;
	}

	ngOnInit(): void
	{
		try
		{
			this.apiClient.getVenues()
				.toPromise()
				.then(response =>
				{
					this.venues = response;
					this.venues.sort();
					this.loading = false;
				});
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

	public async deleteConfirm(index: number): Promise<void>
	{
		const venueName = this.venues[index];
		const result = await this.deleteConfirmService.confirm(venueName);
		if (result)
		{
			try
			{
				await this.apiClient.deleteVenue({ name: venueName }).toPromise();
				this.venues.splice(index, 1);
				this.messageService.info(venueName + " successfully removed");
			}
			catch (error)
			{
				this.messageService.error(error);
			}
		}
	}

	public applyFilter(filterValue: string): void
	{
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.filter = filterValue;
	}

	public get filteredData(): string[]
	{
		const filtered = this.venues.filter((value: string) =>
		{
			if (this.filter !== "")
			{
				return value.toLowerCase().indexOf(this.filter) !== -1;
			}
			else { return true; }
		});
		return filtered;
	}

	public upload(fileInput: any): void
	{
		(fileInput as HTMLInputElement).click();
	}

	public async uploadFiles(files: File[]): Promise<void>
	{
		for (const file of files)
		{
			await this.uploadFile(file);
		}
	}

	private async uploadFile(file: File): Promise<void>
	{
		try
		{
			const venue = await this.fileReader.read<IVenueData>(file);
			await this.apiClient.postVenue({ value: venue }).toPromise();
			this.venues.push(venue.name);
			this.messageService.info("Successfully added " + venue.name);
		}
		catch (reason)
		{
			this.messageService.error(reason.message);
		}
	}

}
