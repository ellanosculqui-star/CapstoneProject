import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="stat-card" [ngClass]="themeClass">
      <div class="stat-content">
        <span class="stat-title">{{ title }}</span>
        <div class="stat-value">{{ value }}</div>
        <span class="stat-subtitle" *ngIf="subtitle">{{ subtitle }}</span>
      </div>
      <div class="stat-icon-wrapper">
        <mat-icon class="stat-icon">{{ icon }}</mat-icon>
      </div>
    </div>
  `,
  styles: [`
    .stat-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      border-radius: 12px;
      background: white;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
      border: 1px solid #f1f5f9;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
      }

      .stat-title {
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #64748b;
        margin-bottom: 6px;
        display: block;
      }

      .stat-value {
        font-size: 1.85rem;
        font-weight: 700;
        color: #0f172a;
        line-height: 1.2;
      }

      .stat-subtitle {
        font-size: 0.8rem;
        color: #94a3b8;
        margin-top: 4px;
        display: block;
      }

      .stat-icon-wrapper {
        width: 52px;
        height: 52px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;

        .stat-icon {
          font-size: 28px;
          width: 28px;
          height: 28px;
        }
      }

      &.primary {
        .stat-icon-wrapper { background: #e0f2fe; color: #0284c7; }
      }
      &.success {
        .stat-icon-wrapper { background: #dcfce7; color: #16a34a; }
      }
      &.warning {
        .stat-icon-wrapper { background: #fef3c7; color: #d97706; }
      }
      &.danger {
        .stat-icon-wrapper { background: #fee2e2; color: #dc2626; }
      }
      &.indigo {
        .stat-icon-wrapper { background: #e0e7ff; color: #4f46e5; }
      }
    }
  `]
})
export class StatCardComponent {
  @Input() title = '';
  @Input() value: string | number = '';
  @Input() subtitle = '';
  @Input() icon = 'analytics';
  @Input() color: 'primary' | 'success' | 'warning' | 'danger' | 'indigo' = 'primary';

  get themeClass(): string {
    return this.color;
  }
}
