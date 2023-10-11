import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toats',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToatsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public toastButton =[
{
  text:"Dismiss",
  role:"cancel",
  habdler:()=>{
    console.log("dismiss click")
  }
}
]
}
