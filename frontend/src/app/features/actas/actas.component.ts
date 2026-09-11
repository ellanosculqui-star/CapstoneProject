import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../environments/environment';
import { NotificationService } from '../../core/services/notification.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { EstadoBadgePipe } from '../../shared/pipes/estado-badge.pipe';

@Component({
  selector: 'app-actas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    PageHeaderComponent,
    EstadoBadgePipe
  ],
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.scss']
})
export class ActasComponent implements OnInit {
  @ViewChild('actaFormDialog') actaFormDialog!: TemplateRef<any>;
  @ViewChild('detalleDialog') detalleDialog!: TemplateRef<any>;

  displayedColumns: string[] = ['numeroActa', 'asambleaTitulo', 'fecha', 'lugar', 'estado', 'acciones'];
  actas: any[] = [];
  asambleasActivas: any[] = [];
  loading = false;
  estadoFiltro = '';

  actaForm!: FormGroup;
  selectedActa: any = null;
  dialogRef?: MatDialogRef<any>;

  constructor(
    private http: HttpClient,
    private notify: NotificationService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.cargarActas();
    this.cargarAsambleasActivas();
  }

  initForm(): void {
    this.actaForm = this.fb.group({
      asambleaId: ['', [Validators.required]],
      numeroActa: ['ACT-2026-001', [Validators.required]],
      fecha: [new Date().toISOString().substring(0, 10), [Validators.required]],
      lugar: ['Local Comunal Central', [Validators.required]],
      agenda: ['', [Validators.required]],
      resumen: [''],
      observaciones: ['']
    });
  }

  cargarActas(): void {
    this.loading = true;
    let url = `${environment.apiUrl}/actas`;
    if (this.estadoFiltro) {
      url += `?estado=${this.estadoFiltro}`;
    }

    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.actas = res.data.content || res.data;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  // Carga únicamente las asambleas activas (EN_CURSO o PROGRAMADA) para vincular a nuevas actas
  cargarAsambleasActivas(): void {
    this.http.get<any>(`${environment.apiUrl}/asambleas?estado=EN_CURSO&size=50`).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.asambleasActivas = res.data.content || res.data;
          // Si no hay en curso, cargar también programadas
          if (this.asambleasActivas.length === 0) {
            this.http.get<any>(`${environment.apiUrl}/asambleas?estado=PROGRAMADA&size=50`).subscribe({
              next: (resProg) => {
                if (resProg.success && resProg.data) {
                  this.asambleasActivas = resProg.data.content || resProg.data;
                }
              }
            });
          }
        }
      }
    });
  }

  onAsambleaSeleccionada(asambleaId: number): void {
    if (!asambleaId) return;
    // Generar borrador automático de datos desde la asamblea activa seleccionada
    this.http.get<any>(`${environment.apiUrl}/actas/asamblea/${asambleaId}/borrador-automatico`).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          const b = res.data;
          this.actaForm.patchValue({
            numeroActa: b.numeroActa || 'ACT-2026-00' + (this.actas.length + 1),
            lugar: b.lugar || 'Local Comunal Central',
            agenda: b.agenda || '',
            resumen: b.resumen || ''
          });
          this.notify.info('Se han precargado los datos y quórum de la asamblea seleccionada');
        }
      }
    });
  }

  abrirCrearModal(): void {
    this.cargarAsambleasActivas();
    this.actaForm.reset({
      numeroActa: 'ACT-2026-00' + (this.actas.length + 1),
      fecha: new Date().toISOString().substring(0, 10),
      lugar: 'Local Comunal Central'
    });
    this.dialogRef = this.dialog.open(this.actaFormDialog, { width: '600px' });
  }

  verDetalle(acta: any): void {
    this.selectedActa = acta;
    this.dialog.open(this.detalleDialog, { width: '650px' });
  }

  guardarActa(): void {
    if (this.actaForm.invalid) {
      this.actaForm.markAllAsTouched();
      return;
    }

    const req = this.actaForm.value;
    this.http.post<any>(`${environment.apiUrl}/actas`, req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Acta borrador registrada exitosamente');
          this.dialogRef?.close();
          this.cargarActas();
        }
      }
    });
  }

  firmarYAprobarActa(acta: any): void {
    this.http.patch<any>(`${environment.apiUrl}/actas/${acta.id}/aprobar`, {}).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success(`Acta N° ${acta.numeroActa} aprobada y firmada digitalmente`);
          this.cargarActas();
          if (this.selectedActa && this.selectedActa.id === acta.id) {
            this.selectedActa.estado = 'APROBADA';
          }
        }
      }
    });
  }

  imprimirActa(acta: any): void {
    const a = acta;

    const firmasHtml = (a.firmas && a.firmas.length > 0)
      ? `<div class="firmas-grid">${a.firmas.map((f: any) => `
          <div class="firma-item">
            <div class="firma-head">
              <strong>${f.comuneroNombreCompleto || ''}</strong>
              <span>DNI: ${f.comuneroDni || ''}</span>
            </div>
            ${f.trazoFirma
              ? `<div class="firma-trazo"><img src="${f.trazoFirma}" alt="Firma"></div>`
              : `<div class="firma-digital-badge">&#10003; Conformidad Digital Registrada</div>`}
            <span class="firma-hora">${f.fechaHoraFirma || ''}</span>
          </div>`).join('')}
        </div>`
      : '<p>Ningún comunero ha firmado aún mediante el código QR de la asamblea.</p>';

    const acuerdosHtml = (a.acuerdos && a.acuerdos.length > 0)
      ? `<div class="acta-section"><h3>3. Acuerdos Tomados en Asamblea</h3>
          <div class="acuerdos-detalle-list">${a.acuerdos.map((ac: any) => `
            <div class="acuerdo-row">
              <span class="num">Acuerdo #${ac.numero}:</span>
              <span class="desc">${ac.descripcion || ''}</span>
            </div>`).join('')}
          </div></div>`
      : '';

    const votacionesHtml = a.resultadosVotaciones
      ? `<div class="acta-section"><h3>5. Escrutinio y Elección de Representantes / Votaciones</h3>
           <div class="votaciones-box"><pre class="votaciones-content">${a.resultadosVotaciones}</pre></div>
         </div>`
      : '';

    const resumenHtml = a.resumen
      ? `<div class="acta-section"><h3>4. Deliberación y Desarrollo</h3><p>${a.resumen}</p></div>`
      : '';

    const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Acta N° ${a.numeroActa}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1e293b; padding: 15mm 18mm; background: #fff; }
    h1.titulo { text-align:center; font-size:13pt; color:#1e40af; margin-bottom:4px; }
    h2.subtitulo { text-align:center; font-size:12pt; border-bottom:2px solid #3b82f6; padding-bottom:6px; margin-bottom:16px; }
    .acta-header-info { background:#f8fafc; padding:10px 14px; border-radius:6px; border-left:4px solid #3b82f6; margin-bottom:14px; }
    .acta-header-info p { margin:3px 0; font-size:10pt; color:#334155; }
    .acta-section { margin-bottom:14px; page-break-inside:avoid; }
    .acta-section h3 { font-size:11pt; border-bottom:1px solid #e2e8f0; padding-bottom:3px; margin-bottom:7px; color:#1e293b; }
    .acta-section p { font-size:10pt; color:#475569; line-height:1.5; }
    .acuerdos-detalle-list { display:flex; flex-direction:column; gap:5px; }
    .acuerdo-row { background:#f8fafc; padding:5px 10px; border-left:3px solid #2563eb; border-radius:3px; font-size:10pt; }
    .acuerdo-row .num { font-weight:700; color:#2563eb; margin-right:5px; }
    .acuerdo-row .desc { color:#1e293b; }
    .votaciones-box { background:#f8fafc; border:1px solid #e2e8f0; border-radius:5px; padding:8px; }
    .votaciones-content { font-family:inherit; font-size:10pt; white-space:pre-wrap; word-break:break-word; }
    .firmas-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-top:6px; }
    .firma-item { border:1px solid #e2e8f0; border-radius:5px; padding:7px; text-align:center; page-break-inside:avoid; }
    .firma-head strong { display:block; font-size:9pt; color:#1e293b; }
    .firma-head span { font-size:8pt; color:#64748b; }
    .firma-trazo img { max-width:100%; height:40px; object-fit:contain; margin:3px 0; }
    .firma-digital-badge { background:#ecfdf5; color:#047857; font-size:8pt; font-weight:600; padding:3px; border-radius:3px; margin:3px 0; }
    .firma-hora { font-size:7.5pt; color:#94a3b8; display:block; }
    @media print { @page { size:A4; margin:15mm; } body { padding:0; } }
  </style>
</head>
<body>
  <h1 class="titulo">Sistema de Gestión de Asambleas Comunales</h1>
  <h2 class="subtitulo">Acta N° ${a.numeroActa}</h2>
  <div class="acta-header-info">
    <p><strong>Asamblea:</strong> ${a.asambleaTitulo || ''}</p>
    <p><strong>Fecha y Lugar:</strong> ${a.fecha || ''} — ${a.lugar || ''}</p>
    <p><strong>Responsable / Secretario:</strong> ${a.responsableNombre || ''}</p>
    <p><strong>Estado:</strong> ${a.estado || ''}</p>
  </div>
  <div class="acta-section">
    <h3>1. Asistencia y Quórum Computado</h3>
    <p>Habilitados: <strong>${a.totalHabilitados || 0}</strong> | Asistentes: <strong>${a.totalAsistentes || 0}</strong> | Ausentes: <strong>${a.totalAusentes || 0}</strong></p>
    <p>Porcentaje Asistencia: <strong>${a.porcentajeAsistencia || 0}%</strong> (Quórum ${a.quorumAlcanzado ? 'Alcanzado' : 'No Alcanzado'})</p>
  </div>
  <div class="acta-section">
    <h3>2. Agenda Tratada</h3>
    <p>${a.agenda || ''}</p>
  </div>
  ${acuerdosHtml}
  ${resumenHtml}
  ${votacionesHtml}
  <div class="acta-section">
    <h3>6. Padrón de Comuneros Firmantes (${(a.firmas || []).length} de ${a.totalAsistentes || 0} presentes)</h3>
    ${firmasHtml}
  </div>
  <script>window.onload = function(){ window.print(); }<\/script>
</body>
</html>`;

    const popup = window.open('', '_blank', 'width=900,height=700');
    if (!popup) { alert('Por favor permite las ventanas emergentes para imprimir.'); return; }
    popup.document.open();
    popup.document.write(html);
    popup.document.close();
  }
}
