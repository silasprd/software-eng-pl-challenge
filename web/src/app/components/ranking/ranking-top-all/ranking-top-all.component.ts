import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-ranking-top-all',
  templateUrl: './ranking-top-all.component.html',
  styleUrls: ['./ranking-top-all.component.scss']
})
export class RankingTopAllComponent implements OnInit{

  studentList: any[] = []

  constructor(
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.findAllStudents()
  }

  findAllStudents() {
    this.studentService.findAllStudents().subscribe({
      next: (response) => {
        this.studentList = response.sort((a, b) => b.totalScore - a.totalScore).slice(0, 3)
      }
    })
  }

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
    },
    {
      columnDef: 'school',
      header: 'Escola',
      cell: (element: any) => `${element.school.type}`
    },
    {
      columnDef: 'totalScore',
      header: 'Pontos',
      cell: (element: any) => `${element.totalScore}`
    }
  ])


}
