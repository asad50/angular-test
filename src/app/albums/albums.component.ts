import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  
  route_name;

  constructor(private _Router: Router) { }

  ngOnInit() {}

  route(){
    console.log(this.route_name);
    this._Router.navigate(['/users', this.route_name]);
  }

}
