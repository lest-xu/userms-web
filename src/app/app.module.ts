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
import { TimeoffComponent } from './apps/timeoff/timeoff.component';
import { AdminInventoryComponent } from './admin/admin-inventory/admin-inventory.component';
import { AdminLogsComponent } from './admin/admin-logs/admin-logs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdComponentsModule } from './md-components/md-components.module';
import { SettingsComponent } from './admin/settings/settings.component';

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
    AdminInventoryComponent,
    ProfileComponent,
    TimeoffComponent,
    AdminLogsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MdComponentsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'account/login', component: SigninComponent },
      { path: 'account/signup', component: SignupComponent },
      { path: 'account/profile', component: ProfileComponent },
      { path: 'admin/users', component: UsersComponent },
      { path: 'admin/addresses', component: AdminAddressComponent },
      { path: 'admin/apps', component: AdminAppComponent },
      { path: 'admin/departments', component: AdminDepartmentComponent },
      { path: 'admin/hr', component: AdminHrComponent },
      { path: 'admin/roles', component: AdminRoleComponent },
      { path: 'admin/users', component: UsersComponent },
      { path: 'admin/inventories', component: AdminInventoryComponent },
      { path: 'admin/logs', component: AdminLogsComponent },
      { path: 'admin/settings', component: SettingsComponent },
      { path: 'apps/timeoff', component: TimeoffComponent },
    ]),
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
