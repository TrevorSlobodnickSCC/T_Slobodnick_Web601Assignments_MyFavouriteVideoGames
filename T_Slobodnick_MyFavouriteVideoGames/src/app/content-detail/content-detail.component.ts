import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { MyFavoriteVideoGamesService } from '../services/my-favorite-video-games.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  game?: Content;
  constructor(private messageService: MessageService, private mService: MyFavoriteVideoGamesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);
      this.mService.getContentById(this.id).subscribe(game => {
        this.game = game;
        this.messageService.add(`Content at id ${game.id} was retrieved, with a title of ${game.title}`)
      });
    });
  }

}
