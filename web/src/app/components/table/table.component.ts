import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataList.paginator = this.paginator;
    this.columns.subscribe({
      next: (data) => {
        this.displayedColumns = ['ranking', ...data.map((c) => c.columnDef)]
      }
    })
  }

  @Input()
  displayedColumns!: string[];

  @Input()
  tableContent:any[] = []

  @Input()
  dataList: any;

  @Input()
  columns!: Observable<any[]>

}
