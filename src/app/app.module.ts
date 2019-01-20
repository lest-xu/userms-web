import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navs/nav-bar/nav-bar.component';
import { FooterComponent } from './navs/footer/footer.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/signup/signup.component';
import { SigninComponent } from './account/signin/signin.component';
import { AdminRoleComponent } from './admin/admin-role/admin-role.component';
import { AdminDepartmentComponent } from './admin/admin-department/admin-department.component';
import { AdminAddressComponent } from './admin/admin-address/admin-address.component';
import { AdminHrComponent } from './admin/admin-hr/admin-hr.component';
import { AdminAppComponent } from './admin/admin-app/admin-app.component';
import { ProfileComponent } from './account/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    UsersComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    AdminRoleComponent,
    AdminDepartmentComponent,
    AdminAddressComponent,
    AdminHrComponent,
    AdminAppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin/users', component: UsersComponent },
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
