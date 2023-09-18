import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  customPaginatorText = 'Itens por página personalizado';

  constructor(
    public paginatorUnderline: MatPaginatorIntl
  ){}

  ngAfterViewInit(): void {
    this.paginatorUnderline.itemsPerPageLabel = 'Exibir p/ página'
    console.log(this.dataSource)
  }

  schoolNameControl = new FormControl('')
  schoolTypeControl = new FormControl('')
  listOptions = [
    'Escola de Dados',
    'Escola de Produtos',
    'Escola de Tecnologia'
  ]

  displayedColumnsSchool: string[] = ['cod', 'ra', 'name', 'points'];
  displayedColumnsAll: string[] = ['cod', 'ra', 'school', 'name', 'points'];

  tableSchoolContent:any[] = [
    {
      cod:'1',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod:'2',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod:'3',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod:'4',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod:'5',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod:'6',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod:'7',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod:'8',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod:'9',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod:'10',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
  ]

  tableContentAll: any = [
    {
      cod:'1',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod:'2',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Tecnologia',
      points: '1230'
    },
    {
      cod:'3',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod:'4',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod:'5',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Prudutos',
      points: '1230'
    },
    {
      cod:'6',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Produtos',
      points: '1230'
    },
    {
      cod:'7',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Prudutos',
      points: '1230'
    },
    {
      cod:'8',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod:'9',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod:'10',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
  ]

  tableContentTop3: any = [
    {
      cod:'1',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod:'2',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Tecnologia',
      points: '1230'
    },
    {
      cod:'3',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    }
  ]

  tableContent: any = [
    {
      cod:'1',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod:'2',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Tecnologia',
      points: '1230'
    },
    {
      cod:'3',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod:'4',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod:'5',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Prudutos',
      points: '1230'
    },
    {
      cod:'6',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Produtos',
      points: '1230'
    },
    {
      cod:'7',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Prudutos',
      points: '1230'
    },
  ]

  dataSource = new MatTableDataSource<any>(this.tableSchoolContent);
  dataSourceAll = new MatTableDataSource<any>(this.tableContentAll);
  dataSourceTop3 = new MatTableDataSource<any>(this.tableContentTop3);
  dataSourceGeneral = new MatTableDataSource<any>(this.tableContent);

}
