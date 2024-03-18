import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { Gaurdauth } from './shared/guard/Gaurdauth.guard';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { EditUserComponent } from './components/edituser/edituser.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  
  { path: '',component:HomeComponent ,pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent},
 
  // { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard],
   children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' }, // Default child route
    { path: 'users', component: UserComponent }, // Child route for overview component
    // Add more child routes here as needed
    { path: 'edituser/:id', component:EditUserComponent},
    { path: 'product', component:ProductComponent},
  ]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
