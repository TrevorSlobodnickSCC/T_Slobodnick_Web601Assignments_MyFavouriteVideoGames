import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newGameEvent = new EventEmitter<Content>();
  newContent?: Content;
  constructor() { }

  onFormSubmit(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string){
    this.newContent = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    };
    this.newGameEvent.emit(this.newContent);
  }

  ngOnInit(): void {
  }

}
