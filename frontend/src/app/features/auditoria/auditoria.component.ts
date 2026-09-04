import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuditoriaService, AuditoriaDto } from '../../core/services/auditoria.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';

@Component({
  selector: 'app-auditoria',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    PageHeaderComponent
  ],
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.scss']
})
export class AuditoriaComponent implements OnInit {
  displayedColumns: string[] = ['fechaHora', 'username', 'accion', 'entidad', 'entidadId', 'ipOrigen'];
  logs: AuditoriaDto[] = [];
  totalElements = 0;
  pageSize = 20;
  pageIndex = 0;
  loading = false;

  // Filtros
  filtroUsername = '';
  filtroAccion = '';
  filtroFechaInicio = '';
  filtroFechaFin = '';

  acciones = [
    'CREAR', 'ACTUALIZAR', 'ELIMINAR', 'CONSULTAR',
    'LOGIN', 'LOGOUT', 'APROBAR', 'RECHAZAR',
    'PAGAR', 'ABRIR', 'CERRAR', 'REGISTRAR'
  ];

  constructor(private auditoriaService: AuditoriaService) {}

  ngOnInit(): void {
    this.cargarLogs();
  }

  cargarLogs(): void {
    this.loading = true;
    this.auditoriaService.listar(
      this.pageIndex,
      this.pageSize,
      this.filtroUsername || undefined,
      this.filtroAccion   || undefined,
      this.filtroFechaInicio || undefined,
      this.filtroFechaFin    || undefined
    ).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.logs = res.data.content;
          this.totalElements = res.data.totalElements;
        } else {
          this.logs = [];
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  onFiltrar(): void {
    this.pageIndex = 0;
    this.cargarLogs();
  }

  limpiarFiltros(): void {
    this.filtroUsername = '';
    this.filtroAccion = '';
    this.filtroFechaInicio = '';
    this.filtroFechaFin = '';
    this.pageIndex = 0;
    this.cargarLogs();
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize  = event.pageSize;
    this.cargarLogs();
  }
}
