import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']  // Fixed 'styleUrl' to 'styleUrls'
})
export class DefaultComponent implements OnInit {
  isSidebarVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  sideBarToggler() {
    console.log('sideBarToggler called');
    this.isSidebarVisible = !this.isSidebarVisible;
    console.log('Sidebar state:', this.isSidebarVisible);
  }
}
