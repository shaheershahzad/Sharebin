import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarSelection: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  select(val) {
    this.router.navigateByUrl(val);
  }
}
