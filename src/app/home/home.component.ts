import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public data;

  constructor(private _HomeService : HomeService) { }

  ngOnInit() {
    this._HomeService.getData().subscribe( (response:any) =>{
      this.data = response
    });
  }

}
