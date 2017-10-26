import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";
import { AsyncFileReader } from "../async-file-reader";
import { LookService } from "api/services";
import { Look } from "api/models";

@Component({
    selector: 'app-looks',
    templateUrl: './looks.component.html',
    styleUrls: ['./looks.component.css'],
    providers: [LookService]
})
export class LooksComponent implements OnInit
{
    skeletons: Look[];

    constructor(private lookService: LookService, vcRef: ViewContainerRef,
        private notificationsService: NotificationsService, title: Title)
    {
        title.setTitle("Looks");
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            this.skeletons = (await this.lookService.getLooks()).data;
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason)
        }
    }

    private getEditUrl(look: Look): string
    {
        return "looks" + "/" + look.id;
    }

    private getDownloadUrl(look: Look): string
    {
        return "/api/Look" + "/" + look.id;
    }

    private async deleteConfirm(lookSkeleton: Look): Promise<void>
    {
        if (window.confirm("Are you sure you want to delete the definition for " + lookSkeleton.name + "?"))
        {
            try
            {
                await this.lookService.deleteLook(lookSkeleton.id);

                this.notificationsService.add(StatusCode.Success, lookSkeleton.name + " was deleted");
                let index = this.skeletons.indexOf(lookSkeleton);
                this.skeletons.splice(index, 1);
            }
            catch (reason)
            {
                this.notificationsService.add(StatusCode.Error, reason);
            }
        }

    }

    public upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    public async filesSelected(files: File[]): Promise<void>
    {
        for (let file of files)
        {
            await this.uploadFile(file);
        }
    }

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let definition = await AsyncFileReader.read<Look>(file);
            definition.id = (await this.lookService.postLook(definition)).data;
            this.skeletons.push(definition);
            this.notificationsService.add(StatusCode.Success, "Successfully added " + definition.name);
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

}
