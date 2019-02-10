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

    // set default theme
    this.dataService.setTheme('primary');
    this.dataService.theme.subscribe(i => this.theme = i);
    this.themes = ['primary', 'info', 'success', 'warning', 'danger'];

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

  changeTheme(theme) {
    this.dataService.setTheme(theme);
    this.theme = theme;
  }



}
