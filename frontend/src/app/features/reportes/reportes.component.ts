import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../environments/environment';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { SolesPipe } from '../../shared/pipes/soles.pipe';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    PageHeaderComponent,
    SolesPipe
  ],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  padronData: any[] = [];
  multasData: any[] = [];
  pagosData: any[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarReportePadron();
  }

  cargarReportePadron(): void {
    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/reportes/padron`).subscribe({
      next: (res) => {
        if (res.success && res.data) this.padronData = res.data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  cargarReporteMultas(): void {
    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/reportes/multas`).subscribe({
      next: (res) => {
        if (res.success && res.data) this.multasData = res.data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  cargarReportePagos(): void {
    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/reportes/pagos`).subscribe({
      next: (res) => {
        if (res.success && res.data) this.pagosData = res.data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  imprimir(): void {
    window.print();
  }

  exportarCSV(tipo: 'padron' | 'multas' | 'pagos'): void {
    let data: any[] = [];
    let filename = '';
    let headers: string[] = [];

    switch (tipo) {
      case 'padron':
        data = this.padronData;
        filename = 'reporte-padron-comuneros.csv';
        headers = ['DNI', 'Nombres', 'Apellidos', 'Condición', 'Estado', 'Sector', 'Fecha Incorporación'];
        break;
      case 'multas':
        data = this.multasData;
        filename = 'reporte-multas.csv';
        headers = ['DNI', 'Comunero', 'Asamblea', 'Monto', 'Saldo Pendiente', 'Estado', 'Fecha Emisión'];
        break;
      case 'pagos':
        data = this.pagosData;
        filename = 'reporte-pagos.csv';
        headers = ['Fecha Pago', 'Comunero', 'Monto Pagado', 'Método Pago', 'Referencia'];
        break;
    }

    if (!data.length) {
      alert('No hay datos para exportar. Cargue primero el reporte correspondiente.');
      return;
    }

    const csvRows: string[] = [];
    // BOM para UTF-8 en Excel
    csvRows.push('\uFEFF' + headers.join(';'));

    for (const row of data) {
      const values = Object.values(row).map(v =>
        `"${String(v ?? '').replace(/"/g, '""')}"`
      );
      csvRows.push(values.join(';'));
    }

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
