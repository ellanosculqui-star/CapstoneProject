import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UsuarioService, UsuarioDto, RegisterUserRequest } from '../../core/services/usuario.service';
import { NotificationService } from '../../core/services/notification.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { EstadoBadgePipe } from '../../shared/pipes/estado-badge.pipe';

@Component({
  selector: 'app-usuarios',
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
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    PageHeaderComponent,
    EstadoBadgePipe
  ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  @ViewChild('usuarioFormDialog') usuarioFormDialog!: TemplateRef<any>;
  @ViewChild('passwordDialog') passwordDialog!: TemplateRef<any>;

  displayedColumns: string[] = ['username', 'nombreCompleto', 'email', 'rol', 'activo', 'acciones'];
  usuarios: UsuarioDto[] = [];
  totalElements = 0;
  pageSize = 20;
  pageIndex = 0;
  loading = false;

  usuarioForm!: FormGroup;
  passwordForm!: FormGroup;
  selectedUsuario: UsuarioDto | null = null;
  dialogRef?: MatDialogRef<any>;

  roles = [
    { value: 'ROLE_ADMINISTRADOR', label: 'Administrador' },
    { value: 'ROLE_PRESIDENTE',    label: 'Presidente'    },
    { value: 'ROLE_SECRETARIO',    label: 'Secretario'    },
    { value: 'ROLE_TESORERO',      label: 'Tesorero'      },
    { value: 'ROLE_COMUNERO',      label: 'Comunero'      }
  ];

  constructor(
    private usuarioService: UsuarioService,
    private notify: NotificationService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.cargarUsuarios();
  }

  initForms(): void {
    this.usuarioForm = this.fb.group({
      username:  ['', [Validators.required, Validators.minLength(4)]],
      password:  ['', [Validators.required, Validators.minLength(6)]],
      nombres:   ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email:     ['', [Validators.email]],
      rol:       ['ROLE_COMUNERO', [Validators.required]]
    });

    this.passwordForm = this.fb.group({
      newPassword:     ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(group: FormGroup) {
    const pw  = group.get('newPassword')?.value;
    const cpw = group.get('confirmPassword')?.value;
    return pw === cpw ? null : { mismatch: true };
  }

  cargarUsuarios(): void {
    this.loading = true;
    this.usuarioService.listar(this.pageIndex, this.pageSize).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.usuarios = res.data.content;
          this.totalElements = res.data.totalElements;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  abrirCrearModal(): void {
    this.usuarioForm.reset({ rol: 'ROLE_COMUNERO' });
    this.dialogRef = this.dialog.open(this.usuarioFormDialog, { width: '560px' });
  }

  guardarUsuario(): void {
    if (this.usuarioForm.invalid) {
      this.usuarioForm.markAllAsTouched();
      return;
    }
    const req: RegisterUserRequest = this.usuarioForm.value;
    this.usuarioService.crear(req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Usuario creado exitosamente');
          this.dialogRef?.close();
          this.cargarUsuarios();
        }
      }
    });
  }

  cambiarRol(usuario: UsuarioDto, rol: string): void {
    this.usuarioService.cambiarRol(usuario.id, rol).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success(`Rol de ${usuario.username} actualizado a ${rol}`);
          this.cargarUsuarios();
        }
      }
    });
  }

  toggleEstado(usuario: UsuarioDto): void {
    const accion$ = usuario.activo
      ? this.usuarioService.desactivar(usuario.id)
      : this.usuarioService.activar(usuario.id);

    accion$.subscribe({
      next: (res) => {
        if (res.success) {
          const msg = usuario.activo ? 'Usuario desactivado' : 'Usuario activado';
          this.notify.success(msg);
          this.cargarUsuarios();
        }
      }
    });
  }

  abrirCambiarPassword(usuario: UsuarioDto): void {
    this.selectedUsuario = usuario;
    this.passwordForm.reset();
    this.dialogRef = this.dialog.open(this.passwordDialog, { width: '420px' });
  }

  guardarPassword(): void {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    const { newPassword } = this.passwordForm.value;
    this.usuarioService.cambiarPassword(this.selectedUsuario!.id, { newPassword }).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Contraseña actualizada exitosamente');
          this.dialogRef?.close();
        }
      }
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize  = event.pageSize;
    this.cargarUsuarios();
  }

  rolLabel(rol: string): string {
    return this.roles.find(r => r.value === rol)?.label ?? rol;
  }
}
