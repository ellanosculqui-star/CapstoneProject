import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soles',
  standalone: true
})
export class SolesPipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    if (value === null || value === undefined) return 'S/ 0.00';
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return 'S/ 0.00';
    return `S/ ${num.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}
