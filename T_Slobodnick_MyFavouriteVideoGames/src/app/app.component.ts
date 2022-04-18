import { ApplicationRef, Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { LogUpdatesService } from './log-updates.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'T_Slobodnick_MyFavouriteVideoGames';
  theme = 'Favourite Video Games';
  author = 'Trevor Slobodnick';

  constructor(private log: LogUpdatesService, private appRef: ApplicationRef, private updates: SwUpdate) { }

  ngOnInit(): void {
    this.log.init();
    // Allow the app to stabilize first
    // then poll for updates with interval()
    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe( () => this.updates.checkForUpdate());
  }
}
