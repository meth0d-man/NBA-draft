import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DraftService } from '../../services/draft.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  allPlayers;
  rendered = false;

  constructor(private _DraftService: DraftService, private router: Router) { }


  ngOnInit() {
    this._DraftService.getDraft().subscribe((allPlayers) => {
      this.allPlayers = allPlayers.json().resultSets[0].rowSet;

      this.rendered = true;
    });
  }

navigateProfile(event) {
  const id = event.path[1].childNodes[2].innerHTML;
  this.router.navigate(['/profile/', id]);
}

}




