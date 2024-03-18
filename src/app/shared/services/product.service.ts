import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsCollection: AngularFirestoreCollection<Product>;
  private basePath = '/productImages';

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.productsCollection = this.afs.collection<Product>('products');
  }

  getProducts(): Observable<Product[]> {
    return this.productsCollection.valueChanges();
  }

  getProductById(productId: string): Observable<Product> {
    return this.productsCollection.doc<Product>(productId).valueChanges();
  }

  addProduct(product: Product, imageFile: File): Promise<DocumentReference<Product>> {
    const filePath = `${this.basePath}/${new Date().getTime()}_${imageFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, imageFile);
  
    // Return a promise that resolves with the DocumentReference after image upload and product addition
    return new Promise<DocumentReference<Product>>((resolve, reject) => {
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(imageUrl => {
            product.image = imageUrl;
            // Add the product to Firestore
            this.productsCollection.add(product).then(ref => {
              resolve(ref); // Resolve with the document reference
            }).catch(error => {
              reject(error); // Reject if there's an error adding the product
            });
          });
        })
      ).subscribe(); // Subscribe to the observable
    });
  }
  updateProduct(productId: string, newData: any): Promise<void> {
    const productRef = this.productsCollection.doc(productId);
    return productRef.update(newData);
  }

  deleteProduct(productId: string): Promise<void> {
    const productRef = this.productsCollection.doc(productId);
    return productRef.delete();
  }
}
