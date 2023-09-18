import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ranking-top-all',
  templateUrl: './ranking-top-all.component.html',
  styleUrls: ['./ranking-top-all.component.scss']
})
export class RankingTopAllComponent implements AfterViewInit{
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

  @Input()
  hidePaginator = false

}
