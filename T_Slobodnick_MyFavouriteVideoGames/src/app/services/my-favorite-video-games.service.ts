import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyFavoriteVideoGamesService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getContent(): Observable<Content[]>{
    this.messageService.add('Sending get request...');
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content>{
    this.messageService.add('Sending post request...');
    return this.http.post<Content>("api/content",
    newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    this.messageService.add('Sending put request...');
    return this.http.put("api/content", contentItem,
    this.httpOptions);
  }  

  getContentById(id: number): Observable<Content> { //async
    this.messageService.add('Sending get request with id=' + id + "...");
    return this.http.get<Content>("api/content/" + id);
  }

  // getContent(): Content[] {
  //   return CONTENT;
  // }

  // getContentObs(): Observable<Content[]> { //async
  //   this.messageService.add('Content array loaded!');
  //   return of(CONTENT);
  // }

  // getContentOb(id: number): Observable<Content> { //async
  //   for (let i = 0; i < CONTENT.length; i++) {
  //     if(CONTENT[i].id == id){
  //       this.messageService.add('Content Item at id: ' + id);
  //       return of(CONTENT[i]);
  //     }
  //   }
  //   throw new Error("Content with id = " + id + " not found in content array.");
  // }

  addMessage(message: string){
    this.messageService.add(message);
  }
}
