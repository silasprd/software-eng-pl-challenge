import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  implements AfterViewInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  customPaginatorText = 'Itens por página personalizado';

  constructor(
    public paginatorUnderline: MatPaginatorIntl
  ){}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
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

  displayedColumns: string[] = ['cod', 'ra', 'name', 'school', 'points'];

  tableContent:any[] = [
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

  dataSource = new MatTableDataSource<any>(this.tableContent);

}
