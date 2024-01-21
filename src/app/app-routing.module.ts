import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AuthguardService } from '../assets/Services/authguard.service';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ContactComponent } from './contact/contact.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductsModule } from './products/products.module';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path : "" , component: LoginComponent , pathMatch: 'full'  } ,
  { path : "register" , component: RegisterComponent },
  { path : "forgotPassword" , component: ForgotPasswordComponent },
  { path : "resetPassword" , component: NewPasswordComponent },
  { path : "onboarding" , component: OnboardingComponent , children: [
    { path: "" , pathMatch: 'full' , redirectTo: "dashboard" },
    { path: "dashboard" , component: DashboardComponent , canActivate: [AuthguardService] },
    { path: "contact" , component: ContactComponent , canActivate: [AuthguardService] },
    { path: "userDetails" , component: UserDetailsComponent , canActivate: [AuthguardService] },
    { path: "product" , loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
  ] },
  { path: "**" , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
