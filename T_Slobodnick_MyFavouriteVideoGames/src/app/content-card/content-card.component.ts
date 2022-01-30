import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  contentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: "The Elder Scrolls V: Skyrim",
      description: "The Elder Scrolls V: Skyrim is an open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.",
      creator: "Bethesda Game Studios",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png",
      type: "RPG",
      tags: []
    });
    this.contentList.add({
      id: 2,
      title: "Monster Hunter: World",
      description: "Monster Hunter: World is an action role-playing game developed and published by Capcom.",
      creator: "Capcom",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/1/1b/Monster_Hunter_World_cover_art.jpg",
      type: "RPG",
      tags: []
    });
    this.contentList.add({
      id: 3,
      title: "Dark Souls III",
      description: "Dark Souls III is a 2016 action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment.",
      creator: "Havoc",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg",
      type: "RPG",
      tags: []
    });
  }

  ngOnInit(): void {
  }

}
