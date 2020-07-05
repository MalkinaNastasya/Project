import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BeauticiansComponent } from './beauticians/beauticians.component';
import { ServicesComponent } from './services/services.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddComponent } from './add/add.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesMenuComponent } from './services-menu/services-menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorizationComponent,
    MainComponent,
    AdminComponent,
    AppointmentsComponent,
    BeauticiansComponent,
    ServicesComponent,
    RegistrationComponent,
    AddComponent,
    AboutUsComponent,
    ServicesMenuComponent,
    ContactsComponent,
    CabinetComponent,
    MyAppointmentsComponent,
    CreateComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

  