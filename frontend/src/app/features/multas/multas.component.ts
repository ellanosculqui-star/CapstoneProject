import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MultaService, MultaResponse } from '../../core/services/multa.service';
import { NotificationService } from '../../core/services/notification.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { EstadoBadgePipe } from '../../shared/pipes/estado-badge.pipe';
import { SolesPipe } from '../../shared/pipes/soles.pipe';

@Component({
  selector: 'app-multas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    PageHeaderComponent,
    EstadoBadgePipe,
    SolesPipe
  ],
  templateUrl: './multas.component.html',
  styleUrls: ['./multas.component.scss']
})
export class MultasComponent implements OnInit {
  displayedColumns: string[] = ['comuneroDni', 'comuneroNombreCompleto', 'asambleaTitulo', 'montoOriginal', 'saldoPendiente', 'estado', 'fechaEmision'];
  multas: MultaResponse[] = [];
  totalElements = 0;
  pageSize = 10;
  pageIndex = 0;
  loading = false;
  estadoFiltro = '';
  resumenFinanciero: any = null;

  constructor(
    private multaService: MultaService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.cargarMultas();
    this.cargarResumen();
  }

  cargarMultas(): void {
    this.loading = true;
    this.multaService.listar(this.pageIndex, this.pageSize, undefined, this.estadoFiltro).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.multas = res.data.content;
          this.totalElements = res.data.totalElements;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  cargarResumen(): void {
    this.multaService.resumenFinanciero().subscribe({
      next: (res) => {
        if (res.success) {
          this.resumenFinanciero = res.data;
        }
      }
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.cargarMultas();
  }

  onFiltrar(): void {
    this.pageIndex = 0;
    this.cargarMultas();
  }
}
