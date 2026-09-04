import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const notify = inject(NotificationService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = 'Ha ocurrido un error inesperado en el servidor';

      if (error.error && error.error.message) {
        errorMsg = error.error.message;
        if (error.error.errors && error.error.errors.length > 0) {
          errorMsg += ': ' + error.error.errors.join(', ');
        }
      } else if (error.status === 401) {
        errorMsg = 'Sesión expirada o credenciales incorrectas. Por favor inicie sesión.';
        authService.logout();
      } else if (error.status === 403) {
        errorMsg = 'No tiene permisos suficientes para realizar esta acción.';
      } else if (error.status === 404) {
        errorMsg = 'El recurso solicitado no fue encontrado.';
      } else if (error.status === 0) {
        errorMsg = 'No se pudo conectar con el servidor backend (Spring Boot). Verifique que esté iniciado.';
      }

      notify.error(errorMsg);
      return throwError(() => error);
    })
  );
};
