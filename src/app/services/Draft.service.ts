import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DraftService {
id;
  constructor(private http: Http) {
    console.log('NBA service connected...');
  }

  getDraft() {
    return this.http.get('http://stats.nba.com/stats/drafthistory?LeagueID=00');
  }

  getPlayer(id) {
    return this.http.get('http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=' + id);
  }

}
