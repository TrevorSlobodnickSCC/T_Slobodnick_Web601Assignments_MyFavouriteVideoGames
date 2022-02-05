import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() content?: Content;

  constructor() {
   
  }

  onImgClick(){
    if(this.content){
      console.log(this.content.id)
      console.log(this.content.title)
    }
  }

  ngOnInit(): void {
  }

}
