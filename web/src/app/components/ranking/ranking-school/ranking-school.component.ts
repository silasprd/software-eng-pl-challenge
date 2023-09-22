import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, of } from 'rxjs';
import { SchoolService } from 'src/app/services/school/school.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-ranking-school',
  templateUrl: './ranking-school.component.html',
  styleUrls: ['./ranking-school.component.scss']
})
export class RankingSchoolComponent implements OnInit{

  studentList: any[] = []
  schoolList: any[] = []
  studentBySchoolList: any[] = []
  selectSchoolForm!: FormGroup
  selectedSchoolId: number = 1

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private studentService: StudentService,
    private schoolService: SchoolService,
    private formBuilder: FormBuilder
  ){}

  schoolTypeControl: FormControl = new FormControl("")

  ngOnInit(): void {
    // this.dataList.paginator = this.paginator;
    this.findAllSchools()
    // this.findStudentsBySchool(this.selectedSchoolId)
    this.buildForm()
  }

  private buildForm(): void {
    this.selectSchoolForm = this.formBuilder.group({
      schoolTypeControl: this.schoolTypeControl
    })
  }

  onSchoolSelectionChange(selectedValue: any) {
    this.selectedSchoolId = selectedValue;
    console.log(this.selectedSchoolId)
  }

  selectSchool(){
    this.selectedSchoolId = this.schoolTypeControl.value
    this.findStudentsBySchool(this.selectedSchoolId)
    console.log(this.selectedSchoolId)
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
        this.studentBySchoolList = response.sort((a, b) => b.totalScore - a.totalScore).slice(0, 10)
      }
    })
  }

  findAllSchools(){
    this.schoolService.findAllSchools().subscribe({
      next: (response) => {
        this.schoolList = response
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
      columnDef: 'totalScore',
      header: 'Pontos',
      cell: (element: any) => `${element.totalScore}`
    }
  ])
}
