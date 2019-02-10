import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private readonly apiUrlUsers = 'users/';
  users: any = [];
  user: any;

  token: any;
  errorMsg: string;

  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit() {
    this.dataService.token.subscribe(i => this.token = i);

    this.dataService.getDataItems(this.apiUrlUsers).subscribe(i => {
      this.users = i;
      console.log(this.users);
    }, error => {
      const err: HttpErrorResponse = error;
      console.log(err.error);
    });

    this.dataService.getDataItemById('5c5bc9caf5a3cc3b5c59970d', this.apiUrlUsers).subscribe( i => {
      this.user = i;
    }, error => {
      const err: HttpErrorResponse = error;
      console.log(err.error);
    });

  }

  submit(f: NgForm) {
    // clear previous values
    this.token = null;
    this.errorMsg = null;

    console.log(f.value);
    // this.dataService.login(f.value).subscribe(data => {
    //   console.log('data', data);
    //   this.token = data;
    //   localStorage.setItem('x-auth-token', this.token);
    // }, err => {
    //   console.log('err', err);
    //   this.errorMsg = err.error;
    // });
  }

}
