import { Component, Input } from '@angular/core';
import { Dot } from '../dot-response';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatPaginator],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() dots: Dot[] = [];
  displayedColumns: string[] = ['X', 'Y', 'R', 'result', 'date'];
  resultToString(result: boolean): string {
    return result ? 'Success' : 'Failure';
  }

  dateToString(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    };
    return new Date(date).toLocaleDateString('ru-RU', options);
  }
}
