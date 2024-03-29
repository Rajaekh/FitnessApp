import { Component } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products: Product[] = [
    {
      id: 1,
      Name: 'Product 1',
      image: 'https://www.gifi.fr/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/4/f/4f0d26b16d9fd51e253c0a83445c769c-none_d095d478aad86d877d83ae6f6f64865d_d095d47.JPEG',
      price: 10,
      description: 'Description du produit 1',
      date: new Date('2022-03-18')
    },
    {
      id: 2,
      Name: 'Product 2',
      image: 'assets/assets/img/th.jpg',
      price: 20,
      description: 'Description du produit 2',
      date: new Date('2022-03-19')
    },
    {
      id: 3,
      Name: 'Product 3',
      image: 'assets/assets/img/th1.jpg',
      price: 20,
      description: 'Description du produit 3',
      date: new Date('2022-03-20')
    },
    {
      id: 4,
      Name: 'Product 4',
      image: 'assets/assets/img/th.jpg',
      price: 20,
      description: 'Description du produit 4',
      date: new Date('2022-03-21')
    }
  ];

}
