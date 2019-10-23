import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  public activePage;
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activePage = this._route.snapshot.routeConfig.path;
  }

}
