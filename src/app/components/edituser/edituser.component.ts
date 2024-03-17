import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdTokenResult, User } from 'firebase/auth';
import { UserService } from '../../shared/user.servie';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EditUserComponent implements OnInit {
  userId: string;
  user: User = {
    emailVerified: false,
    isAnonymous: false,
    metadata: undefined,
    providerData: [],
    refreshToken: '',
    tenantId: '',
    delete: function (): Promise<void> {
      throw new Error('Function not implemented.');
    },
    getIdToken: function (forceRefresh?: boolean): Promise<string> {
      throw new Error('Function not implemented.');
    },
    getIdTokenResult: function (forceRefresh?: boolean): Promise<IdTokenResult> {
      throw new Error('Function not implemented.');
    },
    reload: function (): Promise<void> {
      throw new Error('Function not implemented.');
    },
    toJSON: function (): object {
      throw new Error('Function not implemented.');
    },
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    providerId: '',
    uid: ''
  };

  constructor(private route: ActivatedRoute, private userService: UserService,private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.loadUserData();
    });
  }

  loadUserData(): void {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });
  }

  onSubmit(): void {
    this.userService.updateUser(this.userId, this.user)
      .then(() => {
        console.log('User updated successfully!');
        // Rediriger ou effectuer une autre action après la mise à jour
        this.router.navigate(['/dashboard/users']);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  }
}
