// dh-price.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dhPrice'
})
export class DhPricePipe implements PipeTransform {

  transform(value: number): string {
    // Formater le prix en dirhams (DH)
    return value.toFixed(2) + ' DH'; // Suppose que la valeur est en dirhams
  }}
