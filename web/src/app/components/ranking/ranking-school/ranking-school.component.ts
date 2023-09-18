import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ranking-school',
  templateUrl: './ranking-school.component.html',
  styleUrls: ['./ranking-school.component.scss']
})
export class RankingSchoolComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  @Input()
  displayedColumns: string[] = [];

  @Input()
  tableContent:any[] = []

  @Input()
  dataSource!: MatTableDataSource<any>;
}
