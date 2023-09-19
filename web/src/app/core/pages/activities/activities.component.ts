import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  listOptions = [
    "Escola de Dados",
    "Escola de Produtos",
    "Escola de Tecnlogia",
  ]
}
