import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  user: any;

  token: any;
  errorMsg: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(i => {
      this.users = i;
      console.log(this.users);
    });

    this.dataService.getUserById('5c42942cdf6e133e44c85a2c').subscribe( i => {
      this.user = i;
    });

  }

  submit(f: NgForm) {
    // clear previous values
    this.token = null;
    this.errorMsg = null;

    console.log(f.value);
    this.dataService.signIn(f.value).subscribe(data => {
      console.log('data', data);
      this.token = data;
      localStorage.setItem('x-auth-token', this.token);
    }, err => {
      console.log('err', err);
      this.errorMsg = err.error;
    });
  }

}
