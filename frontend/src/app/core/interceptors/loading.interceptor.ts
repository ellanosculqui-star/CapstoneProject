import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  // Si la petición lleva la cabecera 'X-Silent: true', no activa el spinner global de pantalla completa
  if (req.headers.has('X-Silent')) {
    const cleanedReq = req.clone({ headers: req.headers.delete('X-Silent') });
    return next(cleanedReq);
  }

  loadingService.show();

  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
};
