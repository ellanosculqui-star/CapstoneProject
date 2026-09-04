import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const notify = inject(NotificationService);

  const expectedRoles = route.data['roles'] as string[];

  if (authService.isAuthenticated() && authService.hasRole(expectedRoles)) {
    return true;
  }

  notify.error('Acceso denegado: No cuenta con el rol requerido para ingresar a esta sección');
  router.navigate(['/dashboard']);
  return false;
};
