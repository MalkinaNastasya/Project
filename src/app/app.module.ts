import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BeauticiansComponent } from './beauticians/beauticians.component';
import { ServicesComponent } from './services/services.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddComponent } from './add/add.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FilterServicePipe } from './shared/pipes/filter-service.pipe';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceCardViewComponent } from './service-card-view/service-card-view.component';

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
    ContactsComponent,
    CabinetComponent,
    MyAppointmentsComponent,
    CreateComponent,
    ProfileComponent,
    CatalogComponent,
    FilterServicePipe,
    ServiceCardComponent,
    ServiceCardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

  