import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthService } from '../core/services/auth.service';
import { HasRoleDirective } from '../shared/directives/has-role.directive';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner.component';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    HasRoleDirective,
    LoadingSpinnerComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    public authService: AuthService,
    private dialog: MatDialog
  ) {}

  get userRoleLabel(): string {
    const rol = this.authService.currentUserValue?.rol;
    switch (rol) {
      case 'ROLE_ADMINISTRADOR': return 'Administrador';
      case 'ROLE_PRESIDENTE': return 'Presidente';
      case 'ROLE_SECRETARIO': return 'Secretario';
      case 'ROLE_TESORERO': return 'Tesorero';
      case 'ROLE_COMUNERO': return 'Comunero';
      default: return rol || '';
    }
  }

  logout(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Cerrar Sesión',
        message: '¿Está seguro de que desea salir del sistema de gestión comunal?',
        confirmText: 'Cerrar Sesión',
        color: 'warn',
        icon: 'logout'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
      }
    });
  }
}
