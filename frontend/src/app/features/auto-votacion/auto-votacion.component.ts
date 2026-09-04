import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface VotacionPublica {
  id: number;
  asambleaId: number;
  asambleaTitulo?: string;
  titulo: string;
  descripcion?: string;
  propuesta?: string;
  candidatos?: string[];
  tipo: string;
  estado: string;
}

type PantallaEstado = 'cargando' | 'error_carga' | 'no_abierta' | 'formulario' | 'enviando' | 'exito' | 'error_registro';

@Component({
  selector: 'app-auto-votacion',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './auto-votacion.component.html',
  styleUrls: ['./auto-votacion.component.scss']
})
export class AutoVotacionComponent implements OnInit {

  votacionId: number | null = null;
  votacion: VotacionPublica | null = null;
  dni: string = '';
  candidatoSeleccionado: string = '';
  opcionGeneral: 'A_FAVOR' | 'EN_CONTRA' | 'ABSTENCION' = 'A_FAVOR';

  pantalla: PantallaEstado = 'cargando';
  mensajeError: string = '';

  private apiBase = environment.apiUrl;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['votacionId'];
      if (!id || isNaN(+id)) {
        this.pantalla = 'error_carga';
        this.mensajeError = 'El enlace QR no es válido o no contiene una votación activa.';
        return;
      }
      this.votacionId = +id;
      this.cargarVotacion();
    });
  }

  get esEleccion(): boolean {
    return this.votacion?.tipo === 'ELECCION_REPRESENTANTE' || (!!this.votacion?.candidatos && this.votacion.candidatos.length > 0);
  }

  cargarVotacion(): void {
    this.pantalla = 'cargando';
    this.http.get<any>(`${this.apiBase}/publico/votaciones/${this.votacionId}`)
      .subscribe({
        next: res => {
          this.votacion = res.data ?? res;
          if (this.votacion?.estado !== 'ABIERTA') {
            this.pantalla = 'no_abierta';
          } else {
            if (this.votacion.candidatos && this.votacion.candidatos.length > 0) {
              this.candidatoSeleccionado = this.votacion.candidatos[0];
            }
            this.pantalla = 'formulario';
          }
        },
        error: err => {
          this.pantalla = 'error_carga';
          this.mensajeError = err?.error?.message || 'No se pudo cargar la información de la votación.';
        }
      });
  }

  seleccionarCandidato(c: string): void {
    this.candidatoSeleccionado = c;
  }

  seleccionarOpcionGeneral(opc: 'A_FAVOR' | 'EN_CONTRA' | 'ABSTENCION'): void {
    this.opcionGeneral = opc;
  }

  emitirVoto(): void {
    if (!this.dni.trim() || this.dni.trim().length < 6) return;
    if (this.esEleccion && !this.candidatoSeleccionado) return;

    this.pantalla = 'enviando';

    const payload: any = {
      dni: this.dni.trim()
    };

    if (this.esEleccion) {
      payload.candidato = this.candidatoSeleccionado;
      payload.opcion = 'CANDIDATO';
    } else {
      payload.opcion = this.opcionGeneral;
    }

    this.http.post<any>(`${this.apiBase}/publico/votaciones/${this.votacionId}/votar`, payload)
      .subscribe({
        next: () => {
          this.pantalla = 'exito';
        },
        error: err => {
          this.mensajeError = err?.error?.message || 'No se pudo registrar su voto. Verifique que sea comunero habilitado y esté presente en la asamblea.';
          this.pantalla = 'error_registro';
        }
      });
  }

  reintentar(): void {
    this.mensajeError = '';
    this.pantalla = 'formulario';
  }
}
