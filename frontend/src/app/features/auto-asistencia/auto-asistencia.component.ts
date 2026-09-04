import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface AsambleaPublica {
  id: number;
  titulo: string;
  lugar: string;
  fecha: string;
  horaInicio: string;
  estado: string;
}

type PantallaEstado = 'cargando' | 'error_carga' | 'no_en_curso' | 'formulario' | 'enviando' | 'exito' | 'error_registro';

@Component({
  selector: 'app-auto-asistencia',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './auto-asistencia.component.html',
  styleUrls: ['./auto-asistencia.component.scss']
})
export class AutoAsistenciaComponent implements OnInit {

  asambleaId: number | null = null;
  asamblea: AsambleaPublica | null = null;
  dni: string = '';
  pantalla: PantallaEstado = 'cargando';
  mensajeError: string = '';
  nombreComunero: string = '';

  private apiBase = environment.apiUrl;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['asambleaId'];
      if (!id || isNaN(+id)) {
        this.pantalla = 'error_carga';
        this.mensajeError = 'El enlace QR no es valido o no contiene un identificador de asamblea.';
        return;
      }
      this.asambleaId = +id;
      this.cargarAsamblea();
    });
  }

  cargarAsamblea(): void {
    this.pantalla = 'cargando';
    this.http.get<any>(`${this.apiBase}/publico/asambleas/${this.asambleaId}`)
      .subscribe({
        next: res => {
          this.asamblea = res.data ?? res;
          if (this.asamblea?.estado !== 'EN_CURSO') {
            this.pantalla = 'no_en_curso';
          } else {
            this.pantalla = 'formulario';
          }
        },
        error: err => {
          this.pantalla = 'error_carga';
          this.mensajeError = err?.error?.message || 'No se pudo cargar la informacion de la asamblea.';
        }
      });
  }

  registrarAsistencia(): void {
    if (!this.dni.trim() || this.dni.trim().length < 6) {
      return;
    }
    this.pantalla = 'enviando';
    this.http.post<any>(`${this.apiBase}/publico/asambleas/${this.asambleaId}/asistencia`, { dni: this.dni.trim() })
      .subscribe({
        next: res => {
          const data = res.data ?? res;
          this.nombreComunero = data?.comuneroNombreCompleto || '';
          this.pantalla = 'exito';
        },
        error: err => {
          this.mensajeError = err?.error?.message || 'No se pudo registrar la asistencia. Verifique su DNI.';
          this.pantalla = 'error_registro';
        }
      });
  }

  reintentar(): void {
    this.dni = '';
    this.mensajeError = '';
    this.pantalla = 'formulario';
  }

  formatearFecha(fecha: string): string {
    if (!fecha) return '';
    const [anio, mes, dia] = fecha.split('-');
    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    return `${dia} de ${meses[parseInt(mes) - 1]} del ${anio}`;
  }

  formatearHora(hora: string): string {
    if (!hora) return '';
    const partes = hora.split(':');
    const h = parseInt(partes[0]);
    const m = partes[1];
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hora12 = h % 12 || 12;
    return `${hora12}:${m} ${ampm}`;
  }
}
