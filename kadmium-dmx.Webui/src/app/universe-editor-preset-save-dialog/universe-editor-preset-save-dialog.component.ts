import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FixtureData } from 'api/models';
import { MatListOption } from '@angular/material';

@Component({
    selector: 'app-universe-editor-preset-save-dialog',
    templateUrl: './universe-editor-preset-save-dialog.component.html',
    styleUrls: ['./universe-editor-preset-save-dialog.component.css']
})
export class UniverseEditorPresetSaveDialogComponent implements OnInit
{
    constructor(public dialogRef: MatDialogRef<UniverseEditorPresetSaveDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: UniverseEditorPresetSaveDialogComponentData) { }

    ngOnInit()
    {
    }

    public save(filename: string, fixtures: MatListOption[])
    {
        this.dialogRef.close({ filename: filename, fixtures: fixtures.map(x => x.value) });
    }

    public cancel(): void
    {
        this.dialogRef.close();
    }
}

export interface UniverseEditorPresetSaveDialogComponentData
{
    fixtures: FixtureData[]
}