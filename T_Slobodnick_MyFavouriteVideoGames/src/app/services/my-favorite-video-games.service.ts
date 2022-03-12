import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MyFavoriteVideoGamesService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[] {
    return CONTENT;
  }

  getContentObs(): Observable<Content[]> { //async
    this.messageService.add('Content array loaded!');
    return of(CONTENT);
  }

  getContentOb(id: number): Observable<Content> { //async
    for (let i = 0; i < CONTENT.length; i++) {
      if(CONTENT[i].id == id){
        this.messageService.add('Content Item at id: ' + id);
        return of(CONTENT[i]);
      }
    }
    throw new Error("Content with id = " + id + " not found in content array.");
  }

  addMessage(message: string){
    this.messageService.add(message);
  }
}
