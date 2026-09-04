import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {}

  success(message: string): void {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: message,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  }

  error(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      confirmButtonColor: '#d33'
    });
  }

  info(message: string): void {
    Swal.fire({
      icon: 'info',
      title: 'Información',
      text: message,
      timer: 4000,
      showConfirmButton: false
    });
  }

  warning(message: string): void {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: message,
      confirmButtonColor: '#f39c12'
    });
  }
}
