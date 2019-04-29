import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  menuOn = false;

  constructor() { }

  ngOnInit() {
  }

  toggleList() {
    this.menuOn = !this.menuOn;
  }
}
