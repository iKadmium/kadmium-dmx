import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { Look, LookSkeleton } from "./look";
import { LookService } from "./look.service";

import { MessageBarService } from "../status/message-bar/message-bar.service";
import { AsyncFileReader } from "../../shared/async-file-reader";

@Component({
    selector: 'looks',
    template: require('./looks.component.html'),
    providers: [LookService]
})
export class LooksComponent implements OnInit
{
    skeletons: LookSkeleton[];

    constructor(private lookService: LookService, overlay: Overlay, vcRef: ViewContainerRef,
        private messageBarService: MessageBarService, private modal: Modal, title: Title)
    {
        title.setTitle("Looks");
        overlay.defaultViewContainer = vcRef;
    }

    ngOnInit(): void
    {
        this.lookService.getSkeletons()
            .then(skeletons => this.skeletons = skeletons)
            .catch(reason => this.messageBarService.addError(reason));

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
        let promise = await this.modal
            .confirm()
            .title("Are you sure?")
            .body("Are you sure you want to delete the definition for " + lookSkeleton.name + "?")
            .isBlocking(true)
            .okBtnClass("btn btn-danger")
            .okBtn("Delete")
            .open();

        try
        {
            let result = await promise.result;
            if (result)
            {
                try
                {
                    await this.lookService.delete(lookSkeleton);

                    this.messageBarService.add("Success", lookSkeleton.name + " was deleted");
                    let index = this.skeletons.indexOf(lookSkeleton);
                    this.skeletons.splice(index, 1);
                }
                catch (reason)
                {
                    this.messageBarService.add("Error", "Could not delete " + lookSkeleton.name + ". " + reason);
                }
            }
        }
        catch (error)
        {
            //errors are generated when the message box is cancelled
        }
    }

    private upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    private async filesSelected(files: File[]): Promise<void>
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
            this.messageBarService.add("Success", "Successfully added " + definition.name);
        }
        catch (reason)
        {
            this.messageBarService.add("Error", reason);
        }
    }
}