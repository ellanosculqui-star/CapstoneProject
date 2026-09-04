import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'comuneros',
        loadComponent: () => import('./features/comuneros/comuneros.component').then(m => m.ComunerosComponent)
      },
      {
        path: 'asambleas',
        loadComponent: () => import('./features/asambleas/asambleas.component').then(m => m.AsambleasComponent)
      },
      {
        path: 'asistencia',
        loadComponent: () => import('./features/asistencia/asistencia.component').then(m => m.AsistenciaComponent)
      },
      {
        path: 'votaciones',
        loadComponent: () => import('./features/votaciones/votaciones.component').then(m => m.VotacionesComponent)
      },
      {
        path: 'multas',
        loadComponent: () => import('./features/multas/multas.component').then(m => m.MultasComponent)
      },
      {
        path: 'actas',
        loadComponent: () => import('./features/actas/actas.component').then(m => m.ActasComponent)
      },
      {
        path: 'reportes',
        loadComponent: () => import('./features/reportes/reportes.component').then(m => m.ReportesComponent)
      },
      {
        path: 'auditoria',
        loadComponent: () => import('./features/auditoria/auditoria.component').then(m => m.AuditoriaComponent)
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./features/usuarios/usuarios.component').then(m => m.UsuariosComponent)
      },
        {
       path: 'caserios',
       loadComponent: () => import('./features/caserios/caserios.component').then(m => m.CaseriosComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
