import { Component, OnInit } from '@angular/core';
import { NavbarSelectorService } from 'src/app/services/navbar-selector.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarSelection: string;

  constructor(private navbarSelectorService: NavbarSelectorService) { }

  ngOnInit() {
  }

  select(val) {
    this.navbarSelectorService.setNavbarSelector(val);
  }


  getSelection(): string {
    return this.navbarSelection;
  }
}
