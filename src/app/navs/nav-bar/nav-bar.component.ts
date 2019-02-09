import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  token: any;
  theme: String;
  themes: Array<String>;

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.themes = ['primary', 'secondary', 'success', 'warning', 'danger'];
    this.theme = 'danger';
    this.dataService.token.subscribe(i => {
      this.token = i;
    });
  }

  signout() {
    if (this.token) {
      this.token = null;
      this.dataService.setToken([]);
      localStorage.removeItem('x-auth-token');

    }
  }



}
