import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MyFavoriteVideoGamesService } from '../services/my-favorite-video-games.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  additionalContent: Content[]
  content: Content[]
  titleSearch: string
  titleFound: boolean
  searchMsg: string
  addContentErrorMsg: string

  constructor(public contentService: MyFavoriteVideoGamesService) {
    this.titleSearch = ""
    this.titleFound = false
    this.searchMsg = ""
    this.content = []
    this.additionalContent = []
    this.addContentErrorMsg = ""
  }

  getContentFromServer(): void{
    this.contentService.getContent().subscribe(c => this.content = c);
  }

  ngOnInit(): void {
    this.getContentFromServer();
    // this.contentService.getContentObs().subscribe(c => this.content = c);
  }
    

  onAddContent(id: string): void{
    const ids = this.getContentIds();
    let idNum = parseInt(id);
    if(id == ""){
      this.contentService.addMessage("No ID provided");
      this.addContentErrorMsg = "No ID provided";
    }
    else if(id.includes(".")){
      this.contentService.addMessage("ID values must not contain decimals");
      this.addContentErrorMsg = "ID must not contain a decimal";
    }
    else if(ids.includes(idNum)){
      //this.contentService.getContentOb(idNum).subscribe(c => this.additionalContent.push(c));
      this.contentService.getContentById(idNum).subscribe(c => this.additionalContent.push(c))
      this.addContentErrorMsg = "";
    }
    else{
      this.contentService.addMessage("Invalid ID (" + id + ") provided. Accepted values are: " + ids.join(", "));
      this.addContentErrorMsg = "Invalid Id";
    }
  }

  private getContentIds(){
    return this.content.map(c => c.id)
  }

  onTitleSearch(): void{
    for (let i = 0; i < this.content.length; i++) {
      const c = this.content[i];
      if(c.title == this.titleSearch){
        this.titleFound = true;
        this.searchMsg = "Found title - \"" + this.titleSearch + "\"";
        return; //exit loop and function once a match is found
      }
    }
    //there was no match found...
    this.titleFound = false;
    this.searchMsg = "Could not find title - \"" + this.titleSearch + "\"";
  }

  // addContentToList(newContent: Promise<Content>) {
  //   newContent.then(value => {
  //     this.content.push(value)
  //     this.content = [...this.content];
  //     console.log("New content added successfully - " + value.title);
  //   })
  //   .catch(v => console.log(v))
  // }

  addContentToList(newContentItem: Content): void {
    this.contentService.addContent(newContentItem).subscribe(newContentFromServer => {
      this.content.push(newContentFromServer)
      this.content = [...this.content];
    });
  }

  updateContentInList(contentItem: Content): void {
    this.contentService.updateContent(contentItem).subscribe(() => {
      this.getContentFromServer();
    });
  }
    

}
