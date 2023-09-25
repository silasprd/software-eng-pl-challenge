import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CreateActivity } from 'src/app/model/CreateActivity';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { SchoolService } from 'src/app/services/school/school.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  schoolList: any[] = []
  activityCreated!: CreateActivity
  selectSchoolForm!: FormGroup
  selectedSchoolId: number = 1

  constructor(
    private studentService: StudentService,
    private activityService: ActivityService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm()
    this.findAllSchools()
  }
  studentControl: FormControl = new FormControl("")
  scoreControl: FormControl = new FormControl("")
  typeControl: FormControl = new FormControl("")
  describeControl: FormControl = new FormControl("")


  private buildForm(): void {
    this.selectSchoolForm = this.formBuilder.group({
      raControl: this.studentControl,
      scoreControl: this.scoreControl,
      typeControl: this.typeControl,
      describeControl: this.describeControl,
    })
  }

  createActivity(): void {

    const createActivity: CreateActivity = {
      describe: this.describeControl.value,
      points: parseInt(this.scoreControl.value),
      type: this.typeControl.value,
      student: {
        ra: this.studentControl.value
      },
    };

    this.activityService.createActivity(createActivity).subscribe({
      next: (response) => {
        window.alert("Atividade cadastrada com sucesso!")
      },
      error: (error) => {
        window.alert("Erro ao cadastrar atividade, revise as informações!")
        console.log(error)
      },
      complete: () =>{
        location.reload()
      }
    })
  }

  onSchoolSelectionChange(selectedValue: any) {
    this.selectedSchoolId = selectedValue;
    console.log(this.selectedSchoolId)
  }

  findAllSchools() {
    this.studentService.findAllStudents().subscribe({
      next: (response) => {
        this.schoolList = response
      }
    })
  }

  listOptionsEnum = [
    "Desafio",
    "Tarefa",
    "Projeto"
  ]
}
