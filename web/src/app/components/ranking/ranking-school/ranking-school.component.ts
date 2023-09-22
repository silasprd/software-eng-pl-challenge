import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ranking-school',
  templateUrl: './ranking-school.component.html',
  styleUrls: ['./ranking-school.component.scss']
})
export class RankingSchoolComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataList.paginator = this.paginator;
    this.columns.subscribe({
      next: (data) => {
        this.displayedColumns = data.map((c) => c.columnDef)
      }
    })
  }

  @Input()
  displayedColumns!: string[];

  @Input()
  tableContent:any[] = []

  @Input()
  dataList!: any;

  @Input()
  columns!: Observable<any[]>
}
