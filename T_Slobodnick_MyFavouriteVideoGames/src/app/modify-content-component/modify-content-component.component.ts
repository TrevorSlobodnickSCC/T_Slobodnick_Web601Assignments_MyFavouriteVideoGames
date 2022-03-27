import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

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

  constructor() { 
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
    }
    else{
      this.errorMsg = "Not all required fields contain values"
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

}
