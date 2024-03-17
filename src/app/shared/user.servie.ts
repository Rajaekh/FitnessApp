import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  getUsers(): Observable<any[]> {
    return this.afs.collection<any>('users').valueChanges();
  }
  // edit 
  updateUser(userId: string, newData: any): Promise<void> {
    const userRef = this.afs.collection('users').doc(userId);
    return userRef.update(newData);
  }
  getUserById(userId: string): Observable<User> {
    return this.afs.collection('users').doc<User>(userId).valueChanges();
  }
}
