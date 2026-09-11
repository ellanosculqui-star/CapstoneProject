import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

type PantallaFirma = 'cargando' | 'error_carga' | 'formulario' | 'enviando' | 'exito' | 'error_registro';

@Component({
  selector: 'app-auto-firma-acta',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './auto-firma-acta.component.html',
  styleUrls: ['./auto-firma-acta.component.scss']
})
export class AutoFirmaActaComponent implements OnInit {
  @ViewChild('signatureCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  asambleaId: number | null = null;
  acta: any = null;
  dni: string = '';
  comuneroConfirmado: any = null;

  pantalla: PantallaFirma = 'cargando';
  mensajeError: string = '';

  isDrawing = false;
  hasSignature = false;
  private ctx: CanvasRenderingContext2D | null = null;

  private apiBase = environment.apiUrl;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['asambleaId'] || params['id'];
      if (!id || isNaN(+id)) {
        this.pantalla = 'error_carga';
        this.mensajeError = 'El enlace QR no es válido o no contiene una asamblea activa.';
        return;
      }
      this.asambleaId = +id;
      this.cargarActa();
    });
  }

  cargarActa(): void {
    this.pantalla = 'cargando';
    this.http.get<any>(`${this.apiBase}/publico/actas/asamblea/${this.asambleaId}`)
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.acta = res.data;
            this.pantalla = 'formulario';
            setTimeout(() => this.initCanvas(), 300);
          } else {
            this.pantalla = 'error_carga';
            this.mensajeError = 'No se encontró un acta disponible para firmar en esta asamblea.';
          }
        },
        error: (err) => {
          this.pantalla = 'error_carga';
          this.mensajeError = err?.error?.message || 'No se pudo cargar la información del acta comunal.';
        }
      });
  }

  initCanvas(): void {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;
    this.ctx.strokeStyle = '#0f172a';
    this.ctx.lineWidth = 2.5;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.limpiarFirma();
  }

  startDrawing(e: MouseEvent | TouchEvent): void {
    this.isDrawing = true;
    const pos = this.getPos(e);
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
    }
  }

  draw(e: MouseEvent | TouchEvent): void {
    if (!this.isDrawing || !this.ctx) return;
    e.preventDefault();
    const pos = this.getPos(e);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke();
    this.hasSignature = true;
  }

  stopDrawing(): void {
    this.isDrawing = false;
  }

  limpiarFirma(): void {
    if (!this.canvasRef || !this.ctx) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.hasSignature = false;
  }

  private getPos(e: MouseEvent | TouchEvent): { x: number; y: number } {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  firmarActa(): void {
    const dniLimpio = this.dni ? this.dni.trim() : '';
    if (!dniLimpio || dniLimpio.length !== 8) {
      alert('Por favor, ingresa un número de DNI válido de 8 dígitos.');
      return;
    }

    let trazo = '';
    if (this.hasSignature && this.canvasRef) {
      trazo = this.canvasRef.nativeElement.toDataURL('image/png');
    }

    const payload = {
      dni: dniLimpio,
      trazoFirma: trazo,
      deviceId: navigator.userAgent
    };

    this.pantalla = 'enviando';

    this.http.post<any>(`${this.apiBase}/publico/actas/${this.acta.id}/firmar`, payload)
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.comuneroConfirmado = res.data;
            this.pantalla = 'exito';
          }
        },
        error: (err) => {
          this.mensajeError = err?.error?.message || 'No se pudo registrar la firma. Verifique haber marcado PRESENTE en la asamblea.';
          this.pantalla = 'error_registro';
        }
      });
  }

  reintentar(): void {
    this.mensajeError = '';
    this.pantalla = 'formulario';
    setTimeout(() => this.initCanvas(), 300);
  }
}
