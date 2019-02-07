import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navToken: any;

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.token.subscribe(i => {
      this.navToken = i;

      console.log('navToken init', i);
    });
  }

  signout() {
    console.log('navToken', this.navToken);
    if (this.navToken) {
      this.navToken = null;
      this.dataService.setToken([]);
      localStorage.removeItem('x-auth-token');
      this.redirectLogin();
    }
  }

  private redirectLogin() {
    this.router.navigateByUrl('/account/login');
  }

}
