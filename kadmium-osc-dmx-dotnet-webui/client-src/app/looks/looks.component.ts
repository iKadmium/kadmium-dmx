import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LookService } from "../look.service";
import { Title } from "@angular/platform-browser";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";
import { LookSkeleton, Look } from "../look";
import { AsyncFileReader } from "../async-file-reader";

@Component({
    selector: 'app-looks',
    templateUrl: './looks.component.html',
    styleUrls: ['./looks.component.css'],
    providers: [LookService]
})
export class LooksComponent implements OnInit
{
    skeletons: LookSkeleton[];

    constructor(private lookService: LookService, vcRef: ViewContainerRef,
        private notificationsService: NotificationsService, title: Title)
    {
        title.setTitle("Looks");
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            this.skeletons = await this.lookService.getSkeletons();
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason)
        }
    }

    private getEditUrl(look: LookSkeleton): string
    {
        return "looks" + "/" + look.id;
    }

    private getDownloadUrl(look: LookSkeleton): string
    {
        return "/api/Look" + "/" + look.id;
    }

    private async deleteConfirm(lookSkeleton: LookSkeleton): Promise<void>
    {
        if (window.confirm("Are you sure you want to delete the definition for " + lookSkeleton.name + "?"))
        {
            try
            {
                await this.lookService.delete(lookSkeleton);

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
            definition.id = await this.lookService.post(definition);
            this.skeletons.push(definition);
            this.notificationsService.add(StatusCode.Success, "Successfully added " + definition.name);
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

}
