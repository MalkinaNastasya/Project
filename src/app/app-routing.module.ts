import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthorizationComponent } from './authorization/authorization.component';
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
import { ServiceCardViewComponent } from './service-card-view/service-card-view.component';
import { ServicesManagerComponent } from './services-manager/services-manager.component';
import { AddBeauticianComponent } from './add-beautician/add-beautician.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'add', component: AddComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'beauticians', component: BeauticiansComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'cabinet', component: CabinetComponent},
  {path: 'my-appointments', component:MyAppointmentsComponent},
  {path: 'create', component: CreateComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'catalog', component: CatalogComponent},
  { path: "services/:id_service", component: ServiceCardViewComponent },
  { path: "services-manager", component: ServicesManagerComponent },
  { path: "add-beautician", component: AddBeauticianComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
