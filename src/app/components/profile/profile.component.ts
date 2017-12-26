import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DraftService } from '../../services/draft.service';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

profile;
rendered = false;

  constructor(private _DraftService: DraftService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._DraftService.getPlayer(id).subscribe(profile => {
        this.profile = profile.json().resultSets[0].rowSet;

        this.rendered = true;
      });
    });

  }

}
