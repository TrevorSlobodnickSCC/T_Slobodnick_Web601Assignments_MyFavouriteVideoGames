import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-add-game-dialog',
  templateUrl: './add-game-dialog.component.html',
  styleUrls: ['./add-game-dialog.component.scss']
})
export class AddGameDialogComponent implements OnInit {

  @Input() idInp: string = "";
  @Input() titleInp: string = "";
  @Input() descriptionInp: string = "";
  @Input() creatorInp: string = "";
  @Input() imgURLInp: string = "";
  @Input() typeInp: string = "";
  @Input() tagsInp: string = "";

  newContent?: Content;
  errorMsg = "";

  constructor(
    public dialogRef: MatDialogRef<AddGameDialogComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getFormValues(): Object {
    const formValues = {
      id: this.idInp,
      title: this.titleInp,
      description: this.descriptionInp,
      creator: this.creatorInp,
      imgURL: this.imgURLInp,
      type: this.typeInp,
      tags: this.tagsInp
    };
    return formValues;
  }

  ngOnInit(): void {
  }

  resetForm(){
    this.idInp = ""
    this.titleInp = ""
    this.descriptionInp = ""
    this.creatorInp = ""
    this.imgURLInp = ""
    this.typeInp = ""
    this.tagsInp = ""
  }

}
