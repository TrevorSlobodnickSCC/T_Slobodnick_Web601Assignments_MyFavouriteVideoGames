import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  content: Content[]
  titleSearch: string
  titleFound: boolean
  searchMsg: string

  constructor() {
    this.titleSearch = ""
    this.titleFound = false
    this.searchMsg = ""
    this.content = [
      {
        id: 1,
        title: "The Elder Scrolls V: Skyrim",
        description: "The Elder Scrolls V: Skyrim is an open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.",
        creator: "Bethesda Game Studios",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png",
        type: "RPG",
        tags: ["The Elder Scrolls"]
      },
      {
        id: 2,
        title: "Monster Hunter: World",
        description: "Monster Hunter: World is an action role-playing game developed and published by Capcom.",
        creator: "Capcom",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/1/1b/Monster_Hunter_World_cover_art.jpg",
        type: "RPG",
        tags: ["Monster Hunter"]
      },
      {
        id: 3,
        title: "Dark Souls III",
        description: "Dark Souls III is a 2016 action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment.",
        creator: "Havoc",
        imgURL: "",
        type: "RPG",
        tags: ["Dark Souls"]
      },
      {
        id: 4,
        title: "Grand Theft Auto V",
        description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
        creator: "Rockstar Games",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        type: "Action-Adventure",
        tags: ["GTA", "Online"]
      },
      {
        id: 5,
        title: "Animal Crossing: New Horizons",
        description: "Animal Crossing: New Horizons is a 2020 social simulation game developed and published by Nintendo for the Nintendo Switch.",
        creator: "Nintendo",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg",
        type: "Social Simulation",
        tags: ["Animal Crossing"]
      },
      {
        id: 6,
        title: "Pokemon Brilliant Diamond/Shining Pearl",
        description: "Pokémon Brilliant Diamond/Shining Pearl are 2021 remakes of the 2006 Nintendo DS role-playing video games Pokémon Diamond/Pearl.",
        creator: "Nintendo",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/3/3e/Pokemon_Brilliant_Diamond_Shining_Pearl.png",
        type: "Adventure",
        tags: ["Pokemon"]
      },
      {
        id: 7,
        title: "Wii Play",
        description: "Wii Play is a party video game developed and published by Nintendo for the Wii console.",
        creator: "ILCA",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/9/9f/Wii_Play_Europe.jpg",
        type: "",
        tags: []
      }
    ]
  }

  ngOnInit(): void {
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

  addContentToList(newContent: Promise<Content>) {
    newContent.then(value => {
      this.content.push(value)
      this.content = [...this.content];
      console.log("New content added successfully - " + value.title);
    })
    .catch(v => console.log(v))
  }

}
