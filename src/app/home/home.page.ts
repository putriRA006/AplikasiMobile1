import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  userRole:string="";
  constructor() {}
  ngOnInit(): void {
    console.log(history.state)
    this.userRole = history.state.userRole
  }
}
