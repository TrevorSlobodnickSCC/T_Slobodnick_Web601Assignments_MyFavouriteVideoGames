import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newGameEvent = new EventEmitter<Content>();
 
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

  onFormSubmit(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string){}

  // onFormSubmit(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string){
  //   let promise = new Promise<Content>((resolve, reject) => {
  //     if(id && title && description && creator){
  //       let nContent = {
  //         id: parseInt(id),
  //         title: title,
  //         description: description,
  //         creator: creator,
  //         imgURL: imgURL,
  //         type: type,
  //         tags: tags.split(",")
  //       };
  //       this.errorMsg = "";
  //       resolve(nContent);
  //       this.resetForm()
  //     }
  //     else{
  //       this.errorMsg = "Not all required fields contain values"
  //       reject(this.errorMsg)
  //     }
  //   })
  //   this.newContent = promise;
  //   this.newGameEvent.emit(this.newContent); //causing odd behavior if not emitted
  // }

  resetForm(){
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

}
