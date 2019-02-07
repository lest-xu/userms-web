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

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {
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
