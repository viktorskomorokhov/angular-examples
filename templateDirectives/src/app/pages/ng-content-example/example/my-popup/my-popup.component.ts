import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
@Component({
  selector: 'app-my-popup',
  standalone: true,
  imports: [NgIf, TuiButton],
  template: `
    <div class="modal-overlay" *ngIf="isOpened">
      <div class="modal">
        <div class="modal-header">
          <ng-content select="[modal-header-title]"></ng-content>
          <button class="close-button" (click)="onClose.emit()">×</button>
        </div>
        <div class="modal-body fx-col">
          <ng-content select="[modal-body]"></ng-content>
        </div>
        <div class="modal-footer">
          <ng-content select="[modal-footer]">
            <button appearance="accent" tuiButton (click)="onClose.emit()">
              Закрыть
            </button>
          </ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .modal {
        background: white;
        padding: 20px;
        border-radius: 5px;
        width: 400px;
        position: relative;
      }
      .modal-header {
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .close-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
      }
      .modal-body {
        margin: 10px 0;
        align-items:center;

      }
      .modal-footer {
        text-align: right;
      }
    `,
  ],
})
export class MyPopupComponent {
  @Input() isOpened = false;
  @Output() onClose = new EventEmitter();
}
