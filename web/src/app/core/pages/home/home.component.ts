import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { SchoolService } from 'src/app/services/school/school.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {

  schoolList: any[] = []
  studentList: any[] = []
  studentBySchoolList: any[] = []
  selectSchoolForm!: FormGroup

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  customPaginatorText = 'Itens por página personalizado';


  constructor(
    private formBuilder: FormBuilder,
    public paginatorUnderline: MatPaginatorIntl,
    private schoolService: SchoolService,
    private studentService: StudentService
  ) {
    // this.selectSchoolForm = this.formBuilder.group({
    //   schoolTypeControl: new FormControl('')
    // })
  }

  selectedSchoolId: number = 2

  ngAfterViewInit(): void {
    this.paginatorUnderline.itemsPerPageLabel = 'Exibir p/ página'
    this.findAllSchools()
    this.findAllStudents()
    this.findStudentsBySchool(this.selectedSchoolId)
  }
  
  displayedColumnsSchool: string[] = ['id', 'ra', 'name', 'points'];
  displayedColumnsAll: string[] = ['cod', 'ra', 'school', 'name', 'points'];

  studentColumns = of([
    {
      columnDef: 'name',
      header: 'Nome',
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: 'ra',
      header: 'RA',
      cell: (element: any) => `${element.ra}`
    }
  ]
)


  findAllSchools() {
    this.schoolService.findAllSchools().subscribe({
      next: (response) => {
        this.schoolList = response
      }
    })
  }

  findAllStudents() {
    this.studentService.findAllStudents().subscribe({
      next: (response) => {
        this.studentList = response
      }
    })
  }

  findStudentsBySchool(idSchool: number) {
    this.studentService.findStudentsBySchool(idSchool).subscribe({
      next: (response) => {
        this.studentBySchoolList = response
        console.log(response)
      }
    })
  }



  tableSchoolContent: any[] = [
    {
      cod: '1',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod: '2',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod: '3',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod: '4',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod: '5',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod: '6',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod: '7',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod: '8',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod: '9',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
    {
      cod: '10',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      points: '1230'
    },
  ]

  tableContentAll: any = [
    {
      cod: '1',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod: '2',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Tecnologia',
      points: '1230'
    },
    {
      cod: '3',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod: '4',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod: '5',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Prudutos',
      points: '1230'
    },
    {
      cod: '6',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Produtos',
      points: '1230'
    },
    {
      cod: '7',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Prudutos',
      points: '1230'
    },
    {
      cod: '8',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod: '9',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod: '10',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
  ]

  tableContentTop3: any = [
    {
      cod: '1',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod: '2',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Tecnologia',
      points: '1230'
    },
    {
      cod: '3',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    }
  ]

  tableContent: any = [
    {
      cod: '1',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod: '2',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Tecnologia',
      points: '1230'
    },
    {
      cod: '3',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod: '4',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Dados',
      points: '1230'
    },
    {
      cod: '5',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Prudutos',
      points: '1230'
    },
    {
      cod: '6',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Produtos',
      points: '1230'
    },
    {
      cod: '7',
      ra: '1460282213015',
      name: 'Lucas Henrique',
      school: 'Escola de Prudutos',
      points: '1230'
    },
  ]

  dataSource = new MatTableDataSource<any>(this.studentList);
  dataSourceAll = new MatTableDataSource<any>(this.tableContentAll);
  dataSourceTop3 = new MatTableDataSource<any>(this.tableContentTop3);
  dataSourceGeneral = new MatTableDataSource<any>(this.tableContent);

}
