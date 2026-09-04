import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="page-header flex-row-between mb-24">
      <div class="header-titles">
        <div class="title-with-icon">
          <mat-icon *ngIf="icon" class="header-icon">{{ icon }}</mat-icon>
          <h1 class="page-title">{{ title }}</h1>
        </div>
        <p class="page-subtitle" *ngIf="subtitle">{{ subtitle }}</p>
      </div>
      <div class="header-actions">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 16px;

      .title-with-icon {
        display: flex;
        align-items: center;
        gap: 10px;

        .header-icon {
          color: #3b82f6;
          font-size: 32px;
          width: 32px;
          height: 32px;
        }

        .page-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }
      }

      .page-subtitle {
        font-size: 0.9rem;
        color: #64748b;
        margin: 4px 0 0 0;
      }
    }
  `]
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() icon = '';
}
