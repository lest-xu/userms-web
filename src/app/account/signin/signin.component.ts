import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { NavBarComponent } from 'src/app/navs/nav-bar/nav-bar.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  token: [];
  errorMsg: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    // get x-auth-token
    this.dataService.token.subscribe(i => this.token = i);
    console.log(this.token.length > 0);
    if (this.token.length > 0) {
      // redirect to home page
      this.redirectHome();
    }

  }

  login(f: NgForm) {
    // clear previous values
    this.token = null;
    this.errorMsg = null;

    // console.log(f.value);
    this.dataService.login(f.value).subscribe(data => {
      this.dataService.setToken(data);
      this.dataService.token.subscribe(i => this.token = i);
      localStorage.setItem('x-auth-token', data);

      console.log(this.token);
      // redirect to home page
      this.redirectHome();
    }, err => {
      // console.log('err', err);
      this.errorMsg = err.error;
    });
  }

  private redirectHome() {
    this.router.navigate(['/']);
  }

}
