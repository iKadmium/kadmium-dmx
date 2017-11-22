import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-universe-editor-preset-save-dialog',
  templateUrl: './universe-editor-preset-save-dialog.component.html',
  styleUrls: ['./universe-editor-preset-save-dialog.component.css']
})
export class UniverseEditorPresetSaveDialogComponent implements OnInit
{
  constructor(public dialogRef: MatDialogRef<UniverseEditorPresetSaveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit()
  {
  }
}
