import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AddGameDialogComponent } from '../add-game-dialog/add-game-dialog.component';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() newGameEvent = new EventEmitter<Content>();
  @Output() updateGameEvent = new EventEmitter<Content>();
 
  @Input() idInp: string;
  @Input() titleInp: string;
  @Input() descriptionInp: string;
  @Input() creatorInp: string;
  @Input() imgURLInp: string;
  @Input() typeInp: string;
  @Input() tagsInp: string;

  newContent?: Content;
  errorMsg = "";

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { 
    this.idInp = ""
    this.titleInp = ""
    this.descriptionInp = ""
    this.creatorInp = ""
    this.imgURLInp = ""
    this.typeInp = ""
    this.tagsInp = ""
  }

  ngOnInit(): void {
  }

  addContent(title: string, description: string, creator: string, imgURL: string, type: string, tags: string){
    if(title && description && creator){
      let nContent = {
        title: title,
        description: description,
        creator: creator,
        imgURL: imgURL,
        type: type,
        tags: tags.split(",")
      };
      this.errorMsg = "";
      this.resetForm();
      this.newContent = nContent;
      this.newGameEvent.emit(this.newContent); //causing odd behavior if not emitted
      return true;
    }
    else{
      this.errorMsg = "Not all required fields contain values";
      return false;
    }
  }

  updateContent(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string){
    if(id && title && description && creator){
      let updatedContent = {
        id: parseInt(id),
        title: title,
        description: description,
        creator: creator,
        imgURL: imgURL,
        type: type,
        tags: tags.split(",")
      };
      this.errorMsg = "";
      this.resetForm();
      this.newContent = updatedContent;
      this.updateGameEvent.emit(this.newContent); //causing odd behavior if not emitted
    }
    else{
      this.errorMsg = "Not all required fields contain values"
    }
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

  openModal(): void{
    const ref = this.dialog.open(AddGameDialogComponent)

    ref.afterClosed().subscribe(c => {
      console.log('The dialog was submitted');
      if(c != null){
        //only add new content if submit button was clicked
        const result = this.addContent(c.title, c.description, c.creator, c.imgURL, c.type, c.tags);
        if(result){
          this.openSnackBar("Successfully added new content with title: \"" + c.title + "\"", "success")
        }
        else{
          this.openSnackBar("Failed to add new content, Not all required fields contain values", "failure")
        }
      }
    });
  }

  openSnackBar(message: string, className: string){
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = className;
    this.snackBar.open(message, "X", config);
  }

}
