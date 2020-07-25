import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent implements OnInit {

  params: Params;
  name:string;

  constructor(private route: Router ){}
  
  ngOnInit() {
  }

  listofsuburl = [
    {"id":1,"name":"Basic","pageurl":"/Basic"},
    {"id":2,"name":"Entrances" , "pageurl":"/Entrances"},
    {"id":3,"name":"Text" , "pageurl":"/Text"},
    {"id":4,"name":"Exits" , "pageurl":"/Exits"},
    {"id":5,"name":"Attention" , "pageurl":"/Attention"},
    {"id":6,"name":"Background" , "pageurl":"/Background"}

   ];

}
