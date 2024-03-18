import { Component } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
  product: Product = {
    id: null,
    Name: '',
    price: null,
    description: '',
    image: '',
    date: undefined
  };
  onSubmit(){
    
  }
}
