import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { DashboardService, DashboardStats } from '../../core/services/dashboard.service';
import { StatCardComponent } from '../../shared/components/stat-card.component';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { SolesPipe } from '../../shared/pipes/soles.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    StatCardComponent,
    PageHeaderComponent,
    SolesPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats: DashboardStats | null = null;
  loading = true;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.cargarStats();
  }

  cargarStats(): void {
    this.loading = true;
    this.dashboardService.getStats().subscribe({
      next: (res) => {
        if (res.success) {
          this.stats = res.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  get porcentajeHabilitados(): number {
    if (!this.stats || this.stats.totalComuneros === 0) return 0;
    return Math.round((this.stats.comunerosHabilitados / this.stats.totalComuneros) * 100);
  }

  get asistenciaPromedio(): number {
    if (!this.stats || !this.stats.historialAsistencias || this.stats.historialAsistencias.length === 0) return 0;
    const sum = this.stats.historialAsistencias.reduce((acc, curr) => acc + curr.porcentajeAsistencia, 0);
    return Math.round(sum / this.stats.historialAsistencias.length);
  }
}
