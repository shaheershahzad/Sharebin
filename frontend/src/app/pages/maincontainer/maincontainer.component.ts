import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {
  public navbarSelection = 'home';

  constructor() { }

  ngOnInit() {
  }

  public setSelection(val: string) {
    this.navbarSelection = val;
  }
}
