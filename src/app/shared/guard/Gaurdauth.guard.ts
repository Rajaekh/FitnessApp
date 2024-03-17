import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Gaurdauth implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      // Si l'utilisateur est connecté, redirigez-le vers une autre page (par exemple, dashboard)
      this.router.navigate(['/dashboard']);
      return false; // Empêchez l'accès à la page actuelle
    } else {
      // Si l'utilisateur n'est pas connecté, laissez-le accéder à la page
      return true;
    }
  }
}
