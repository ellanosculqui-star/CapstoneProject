import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoBadge',
  standalone: true
})
export class EstadoBadgePipe implements PipeTransform {
  transform(estado: string | undefined): { label: string; cssClass: string } {
    if (!estado) return { label: 'N/A', cssClass: 'badge-secondary' };

    switch (estado) {
      // General & Comunero
      case 'ACTIVO':
      case 'HABILITADO':
      case 'PRESENTE':
      case 'PAGADA':
      case 'APROBADA':
      case 'CUMPLIDO':
        return { label: estado, cssClass: 'badge-success' };

      case 'INACTIVO':
      case 'INHABILITADO':
      case 'AUSENTE':
      case 'PENDIENTE':
      case 'CANCELADA':
      case 'RECHAZADA':
        return { label: estado, cssClass: 'badge-danger' };

      case 'JUSTIFICADO':
      case 'PROGRAMADA':
      case 'BORRADOR':
      case 'EN_PROCESO':
        return { label: estado, cssClass: 'badge-warning' };

      case 'EN_CURSO':
      case 'ABIERTA':
      case 'FINALIZADA':
      case 'CERRADA':
        return { label: estado, cssClass: 'badge-info' };

      default:
        return { label: estado, cssClass: 'badge-secondary' };
    }
  }
}
