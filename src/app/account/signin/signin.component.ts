import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  token: any;
  errorMsg: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    //get x-auth-token
    this.token = localStorage.getItem('x-auth-token');
    if (this.token) {
      //redirect to home page
      this.redirectHome();
    }

  }

  login(f: NgForm) {
    // clear previous values
    this.token = null;
    this.errorMsg = null;

    // console.log(f.value);
    this.dataService.login(f.value).subscribe(data => {
      
      this.token = data;
      localStorage.setItem('x-auth-token', this.token);

      //redirect to home page
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
