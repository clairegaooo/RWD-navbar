import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showIntelligence: boolean;
  showConnections: boolean;

  constructor() { }

  ngOnInit() {
  }

  intelligenceToggle() {
    this.showIntelligence = ! this.showIntelligence;

  }

  connectionToggle() {
    this.showConnections = ! this.showConnections
  }
}
